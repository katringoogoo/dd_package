/*
 * This file is part of the JKQ DD Package which is released under the MIT license.
 * See file README.md or go to http://iic.jku.at/eda/research/quantum_dd/ for more information.
 */

#include "dd/Export.hpp"
#include "dd/GateMatrixDefinitions.hpp"
#include "dd/Package.hpp"

#include "gtest/gtest.h"
#include <iomanip>
#include <memory>
#include <random>
#include <sstream>

using namespace dd::literals;

TEST(DDPackageTest, RequestInvalidPackageSize) {
    EXPECT_THROW(auto dd = std::make_unique<dd::Package>(std::numeric_limits<dd::Qubit>::max() + 2), std::invalid_argument);
}

TEST(DDPackageTest, OperationLookupTest) {
    auto dd = std::make_unique<dd::Package>(1);

    // ATrue is not the operation that is being stored, but for the test it doesn't matter
    auto tmp_op = dd->noiseOperationTable.lookup(1, dd::NoiseOperationKind::ATrue, 0);
    EXPECT_TRUE(tmp_op.p == nullptr);

    auto x_gate = dd->makeGateDD(dd::Xmat, 1, 0);
    dd->noiseOperationTable.insert(dd::NoiseOperationKind::ATrue, 0, x_gate);
    tmp_op = dd->noiseOperationTable.lookup(1, dd::NoiseOperationKind::ATrue, 0);
    EXPECT_TRUE(tmp_op.p == x_gate.p);

    tmp_op = dd->multiply(tmp_op, x_gate);

    // I only check this, so that the above test is evaluated when compiled using release mode
    EXPECT_TRUE(tmp_op.p != nullptr);

    dd->garbageCollect(true);
    tmp_op = dd->noiseOperationTable.lookup(1, dd::NoiseOperationKind::ATrue, 0);
    EXPECT_TRUE(tmp_op.p == nullptr);
}

TEST(DDPackageTest, TrivialTest) {
    auto dd = std::make_unique<dd::Package>(2);
    EXPECT_EQ(dd->qubits(), 2);

    auto x_gate = dd->makeGateDD(dd::Xmat, 1, 0);
    auto h_gate = dd->makeGateDD(dd::Hmat, 1, 0);

    ASSERT_EQ(dd->getValueByPath(h_gate, "0"), (dd::ComplexValue{dd::SQRT2_2, 0}));

    auto zero_state = dd->makeZeroState(1);
    auto h_state    = dd->multiply(h_gate, zero_state);
    auto one_state  = dd->multiply(x_gate, zero_state);

    ASSERT_EQ(dd->fidelity(zero_state, one_state), 0.0);
    // repeat the same calculation - triggering compute table hit
    ASSERT_EQ(dd->fidelity(zero_state, one_state), 0.0);
    ASSERT_NEAR(dd->fidelity(zero_state, h_state), 0.5, dd::ComplexTable<>::tolerance());
    ASSERT_NEAR(dd->fidelity(one_state, h_state), 0.5, dd::ComplexTable<>::tolerance());
}

TEST(DDPackageTest, BellState) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);
    auto zero_state = dd->makeZeroState(2);

    auto bell_state = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);
    dd->printVector(bell_state);

    // repeated calculation is practically for free
    auto bell_state2 = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);
    EXPECT_EQ(bell_state, bell_state2);

    ASSERT_EQ(dd->getValueByPath(bell_state, "00"), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_state, "01"), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_state, "10"), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_state, "11"), (dd::ComplexValue{dd::SQRT2_2, 0}));

    ASSERT_EQ(dd->getValueByPath(bell_state, 0), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_state, 1), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_state, 2), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_state, 3), (dd::ComplexValue{dd::SQRT2_2, 0}));

    auto goal_state = dd::CVec{{dd::SQRT2_2, 0.}, {0., 0.}, {0., 0.}, {dd::SQRT2_2, 0.}};
    ASSERT_EQ(dd->getVector(bell_state), goal_state);

    ASSERT_DOUBLE_EQ(dd->fidelity(zero_state, bell_state), 0.5);

    export2Dot(bell_state, "bell_state_colored_labels.dot", true, true, false, false, false);
    export2Dot(bell_state, "bell_state_colored_labels_classic.dot", true, true, true, false, false);
    export2Dot(bell_state, "bell_state_mono_labels.dot", false, true, false, false, false);
    export2Dot(bell_state, "bell_state_mono_labels_classic.dot", false, true, true, false, false);
    export2Dot(bell_state, "bell_state_colored.dot", true, false, false, false, false);
    export2Dot(bell_state, "bell_state_colored_classic.dot", true, false, true, false, false);
    export2Dot(bell_state, "bell_state_mono.dot", false, false, false, false, false);
    export2Dot(bell_state, "bell_state_mono_classic.dot", false, false, true, false, false);
    export2Dot(bell_state, "bell_state_memory.dot", false, true, true, true, false);
    dd::exportEdgeWeights(bell_state, std::cout);

    dd->statistics();
}

TEST(DDPackageTest, QFTState) {
    auto dd = std::make_unique<dd::Package>(3);

    auto h0_gate   = dd->makeGateDD(dd::Hmat, 3, 0);
    auto s0_gate   = dd->makeGateDD(dd::Smat, 3, 1_pc, 0);
    auto t0_gate   = dd->makeGateDD(dd::Tmat, 3, 2_pc, 0);
    auto h1_gate   = dd->makeGateDD(dd::Hmat, 3, 1);
    auto s1_gate   = dd->makeGateDD(dd::Smat, 3, 2_pc, 1);
    auto h2_gate   = dd->makeGateDD(dd::Hmat, 3, 2);
    auto swap_gate = dd->makeSWAPDD(3, {}, 0, 2);

    auto qft_op = dd->multiply(s0_gate, h0_gate);
    qft_op      = dd->multiply(t0_gate, qft_op);
    qft_op      = dd->multiply(h1_gate, qft_op);
    qft_op      = dd->multiply(s1_gate, qft_op);
    qft_op      = dd->multiply(h2_gate, qft_op);

    qft_op         = dd->multiply(swap_gate, qft_op);
    auto qft_state = dd->multiply(qft_op, dd->makeZeroState(3));

    dd->printVector(qft_state);

    for (dd::Qubit qubit = 0; qubit < 7; ++qubit) {
        ASSERT_NEAR(dd->getValueByPath(qft_state, qubit).r, static_cast<dd::fp>(0.5) * dd::SQRT2_2, dd->cn.complexTable.tolerance());
        ASSERT_EQ(dd->getValueByPath(qft_state, qubit).i, 0);
    }

    export2Dot(qft_state, "qft_state_colored_labels.dot", true, true, false, false, false);
    export2Dot(qft_state, "qft_state_colored_labels_classic.dot", true, true, true, false, false);
    export2Dot(qft_state, "qft_state_mono_labels.dot", false, true, false, false, false);
    export2Dot(qft_state, "qft_state_mono_labels_classic.dot", false, true, true, false, false);
    export2Dot(qft_state, "qft_state_colored.dot", true, false, false, false, false);
    export2Dot(qft_state, "qft_state_colored_classic.dot", true, false, true, false, false);
    export2Dot(qft_state, "qft_state_mono.dot", false, false, false, false, false);
    export2Dot(qft_state, "qft_state_mono_classic.dot", false, false, true, false, false);
    export2Dot(qft_state, "qft_state_memory.dot", false, true, true, true, false);
    dd::exportEdgeWeights(qft_state, std::cout);

    export2Dot(qft_op, "qft_op_polar_colored_labels.dot", true, true, false, false, false, true);
    export2Dot(qft_op, "qft_op_polar_colored_labels_classic.dot", true, true, true, false, false, true);
    export2Dot(qft_op, "qft_op_polar_mono_labels.dot", false, true, false, false, false, true);
    export2Dot(qft_op, "qft_op_polar_mono_labels_classic.dot", false, true, true, false, false, true);
    export2Dot(qft_op, "qft_op_polar_colored.dot", true, false, false, false, false, true);
    export2Dot(qft_op, "qft_op_polar_colored_classic.dot", true, false, true, false, false, true);
    export2Dot(qft_op, "qft_op_polar_mono.dot", false, false, false, false, false, true);
    export2Dot(qft_op, "qft_op_polar_mono_classic.dot", false, false, true, false, false, true);
    export2Dot(qft_op, "qft_op_polar_memory.dot", false, true, true, true, false, true);

    export2Dot(qft_op, "qft_op_rectangular_colored_labels.dot", true, true, false, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_colored_labels_classic.dot", true, true, true, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_mono_labels.dot", false, true, false, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_mono_labels_classic.dot", false, true, true, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_colored.dot", true, false, false, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_colored_classic.dot", true, false, true, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_mono.dot", false, false, false, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_mono_classic.dot", false, false, true, false, false, false);
    export2Dot(qft_op, "qft_op_rectangular_memory.dot", false, true, true, true, false, false);

    dd->statistics();
}

TEST(DDPackageTest, CorruptedBellState) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);
    auto zero_state = dd->makeZeroState(2);

    auto bell_state = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);

    bell_state.w = dd->cn.getTemporary(0.5, 0);
    // prints a warning
    std::mt19937_64 mt;
    std::cout << dd->measureAll(bell_state, false, mt) << "\n";

    bell_state.w = dd::Complex::zero;

    ASSERT_THROW(dd->measureAll(bell_state, false, mt), std::runtime_error);

    ASSERT_THROW(dd->measureOneCollapsing(bell_state, 0, true, mt), std::runtime_error);
}

TEST(DDPackageTest, NegativeControl) {
    auto dd = std::make_unique<dd::Package>(2);

    auto x_gate     = dd->makeGateDD(dd::Xmat, 2, 1_nc, 0);
    auto zero_state = dd->makeZeroState(2);
    auto state01    = dd->multiply(x_gate, zero_state);
    EXPECT_EQ(dd->getValueByPath(state01, 0b01).r, 1.);
}

TEST(DDPackageTest, IdentityTrace) {
    auto dd        = std::make_unique<dd::Package>(4);
    auto fullTrace = dd->trace(dd->makeIdent(4));

    ASSERT_EQ(fullTrace, (dd::ComplexValue{16, 0}));
}

TEST(DDPackageTest, PartialIdentityTrace) {
    auto dd  = std::make_unique<dd::Package>(2);
    auto tr  = dd->partialTrace(dd->makeIdent(2), {false, true});
    auto mul = dd->multiply(tr, tr);
    EXPECT_EQ(dd::CTEntry::val(mul.w.r), 4.0);
}

TEST(DDPackageTest, StateGenerationManipulation) {
    unsigned short nqubits = 6;
    auto           dd      = std::make_unique<dd::Package>(nqubits);
    auto           b       = std::vector<bool>(nqubits, false);
    b[0] = b[1] = true;
    auto e      = dd->makeBasisState(nqubits, b);
    auto f      = dd->makeBasisState(nqubits, {dd::BasisStates::zero,
                                          dd::BasisStates::one,
                                          dd::BasisStates::plus,
                                          dd::BasisStates::minus,
                                          dd::BasisStates::left,
                                          dd::BasisStates::right});
    dd->incRef(e);
    dd->incRef(f);
    dd->vUniqueTable.printActive();
    dd->vUniqueTable.print();
    dd->printInformation();
    dd->decRef(e);
    dd->decRef(f);
}

TEST(DDPackageTest, VectorSerializationTest) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);
    auto zero_state = dd->makeZeroState(2);

    auto bell_state = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);

    serialize(bell_state, "bell_state.dd", false);
    auto deserialized_bell_state = dd->deserialize<dd::Package::vNode>("bell_state.dd", false);
    EXPECT_EQ(bell_state, deserialized_bell_state);

    serialize(bell_state, "bell_state_binary.dd", true);
    deserialized_bell_state = dd->deserialize<dd::Package::vNode>("bell_state_binary.dd", true);
    EXPECT_EQ(bell_state, deserialized_bell_state);
}

TEST(DDPackageTest, BellMatrix) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate  = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);

    auto bell_matrix = dd->multiply(cx_gate, h_gate);

    ASSERT_EQ(dd->getValueByPath(bell_matrix, "00"), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, "02"), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, "20"), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, "22"), (dd::ComplexValue{dd::SQRT2_2, 0}));

    ASSERT_EQ(dd->getValueByPath(bell_matrix, 0, 0), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 1, 0), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 2, 0), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 3, 0), (dd::ComplexValue{dd::SQRT2_2, 0}));

    ASSERT_EQ(dd->getValueByPath(bell_matrix, 0, 1), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 1, 1), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 2, 1), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 3, 1), (dd::ComplexValue{0, 0}));

    ASSERT_EQ(dd->getValueByPath(bell_matrix, 0, 2), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 1, 2), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 2, 2), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 3, 2), (dd::ComplexValue{-dd::SQRT2_2, 0}));

    ASSERT_EQ(dd->getValueByPath(bell_matrix, 0, 3), (dd::ComplexValue{0, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 1, 3), (dd::ComplexValue{dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 2, 3), (dd::ComplexValue{-dd::SQRT2_2, 0}));
    ASSERT_EQ(dd->getValueByPath(bell_matrix, 3, 3), (dd::ComplexValue{0, 0}));

    auto goal_row_0  = dd::CVec{{dd::SQRT2_2, 0.}, {0., 0.}, {dd::SQRT2_2, 0.}, {0., 0.}};
    auto goal_row_1  = dd::CVec{{0., 0.}, {dd::SQRT2_2, 0.}, {0., 0.}, {dd::SQRT2_2, 0.}};
    auto goal_row_2  = dd::CVec{{0., 0.}, {dd::SQRT2_2, 0.}, {0., 0.}, {-dd::SQRT2_2, 0.}};
    auto goal_row_3  = dd::CVec{{dd::SQRT2_2, 0.}, {0., 0.}, {-dd::SQRT2_2, 0.}, {0., 0.}};
    auto goal_matrix = dd::CMat{goal_row_0, goal_row_1, goal_row_2, goal_row_3};
    ASSERT_EQ(dd->getMatrix(bell_matrix), goal_matrix);

    export2Dot(bell_matrix, "bell_matrix_colored_labels.dot", true, true, false, false, false);
    export2Dot(bell_matrix, "bell_matrix_colored_labels_classic.dot", true, true, true, false, false);
    export2Dot(bell_matrix, "bell_matrix_mono_labels.dot", false, true, false, false, false);
    export2Dot(bell_matrix, "bell_matrix_mono_labels_classic.dot", false, true, true, false, false);
    export2Dot(bell_matrix, "bell_matrix_colored.dot", true, false, false, false, false);
    export2Dot(bell_matrix, "bell_matrix_colored_classic.dot", true, false, true, false, false);
    export2Dot(bell_matrix, "bell_matrix_mono.dot", false, false, false, false, false);
    export2Dot(bell_matrix, "bell_matrix_mono_classic.dot", false, false, true, false, false);
    export2Dot(bell_matrix, "bell_matrix_memory.dot", false, true, true, true, false);

    dd->statistics();
}

TEST(DDPackageTest, MatrixSerializationTest) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate  = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);

    auto bell_matrix = dd->multiply(cx_gate, h_gate);

    serialize(bell_matrix, "bell_matrix.dd", false);
    auto deserialized_bell_matrix = dd->deserialize<dd::Package::mNode>("bell_matrix.dd", false);
    EXPECT_EQ(bell_matrix, deserialized_bell_matrix);

    serialize(bell_matrix, "bell_matrix_binary.dd", true);
    deserialized_bell_matrix = dd->deserialize<dd::Package::mNode>("bell_matrix_binary.dd", true);
    EXPECT_EQ(bell_matrix, deserialized_bell_matrix);
}

TEST(DDPackageTest, SerializationErrors) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);
    auto zero_state = dd->makeZeroState(2);
    auto bell_state = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);

    // test non-existing file
    EXPECT_THROW(serialize(bell_state, "./path/that/does/not/exist/filename.dd"), std::invalid_argument);
    EXPECT_THROW(dd->deserialize<dd::Package::vNode>("./path/that/does/not/exist/filename.dd", true), std::invalid_argument);

    // test wrong version number
    std::stringstream ss{};
    ss << 2 << std::endl;
    EXPECT_THROW(dd->deserialize<dd::Package::vNode>(ss, false), std::runtime_error);
    ss << 2 << std::endl;
    EXPECT_THROW(dd->deserialize<dd::Package::mNode>(ss, false), std::runtime_error);

    ss.str("");
    std::remove_const_t<decltype(dd::SERIALIZATION_VERSION)> version = 2;
    ss.write(reinterpret_cast<const char*>(&version), sizeof(decltype(dd::SERIALIZATION_VERSION)));
    EXPECT_THROW(dd->deserialize<dd::Package::vNode>(ss, true), std::runtime_error);
    ss.write(reinterpret_cast<const char*>(&version), sizeof(decltype(dd::SERIALIZATION_VERSION)));
    EXPECT_THROW(dd->deserialize<dd::Package::mNode>(ss, true), std::runtime_error);

    // test wrong format
    ss.str("");
    ss << "1" << std::endl;
    ss << "not_complex" << std::endl;
    EXPECT_THROW(dd->deserialize<dd::Package::vNode>(ss), std::runtime_error);
    ss << "1" << std::endl;
    ss << "not_complex" << std::endl;
    EXPECT_THROW(dd->deserialize<dd::Package::mNode>(ss), std::runtime_error);

    ss.str("");
    ss << "1" << std::endl;
    ss << "1.0" << std::endl;
    ss << "no_node_here" << std::endl;
    EXPECT_THROW(dd->deserialize<dd::Package::vNode>(ss), std::runtime_error);
    ss << "1" << std::endl;
    ss << "1.0" << std::endl;
    ss << "no_node_here" << std::endl;
    EXPECT_THROW(dd->deserialize<dd::Package::mNode>(ss), std::runtime_error);
}

TEST(DDPackageTest, TestConsistency) {
    auto dd = std::make_unique<dd::Package>(2);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);
    auto zero_state = dd->makeZeroState(2);

    auto bell_matrix = dd->multiply(cx_gate, h_gate);
    dd->incRef(bell_matrix);
    auto local = dd->isLocallyConsistent(bell_matrix);
    EXPECT_TRUE(local);
    auto global = dd->isGloballyConsistent(bell_matrix);
    EXPECT_TRUE(global);
    dd->debugnode(bell_matrix.p);

    auto bell_state = dd->multiply(bell_matrix, zero_state);
    dd->incRef(bell_state);
    local = dd->isLocallyConsistent(bell_state);
    EXPECT_TRUE(local);
    global = dd->isGloballyConsistent(bell_state);
    EXPECT_TRUE(global);
    dd->debugnode(bell_state.p);
}

TEST(DDPackageTest, ToffoliTable) {
    auto dd = std::make_unique<dd::Package>(4);

    // try to search for a toffoli in an empty table
    auto toffoli = dd->toffoliTable.lookup(3, {0_nc, 1_pc}, 2);
    EXPECT_EQ(toffoli.p, nullptr);
    if (toffoli.p == nullptr) {
        toffoli = dd->makeGateDD(dd::Xmat, 3, {0_nc, 1_pc}, 2);
        dd->toffoliTable.insert(3, {0_nc, 1_pc}, 2, toffoli);
    }

    // try again with same toffoli
    auto toffoliTableEntry = dd->toffoliTable.lookup(3, {0_nc, 1_pc}, 2);
    EXPECT_NE(toffoliTableEntry.p, nullptr);
    EXPECT_EQ(toffoli, toffoliTableEntry);

    // try again with different controlled toffoli
    toffoliTableEntry = dd->toffoliTable.lookup(3, {0_pc, 1_pc}, 2);
    EXPECT_EQ(toffoliTableEntry.p, nullptr);

    // try again with different qubit toffoli
    toffoliTableEntry = dd->toffoliTable.lookup(4, {0_pc, 1_pc, 2_pc}, 3);
    EXPECT_EQ(toffoliTableEntry.p, nullptr);

    // clear the table
    dd->toffoliTable.clear();
    toffoliTableEntry = dd->toffoliTable.lookup(3, {0_nc, 1_pc}, 2);
    EXPECT_EQ(toffoliTableEntry.p, nullptr);
}

TEST(DDPackageTest, Extend) {
    auto dd = std::make_unique<dd::Package>(4);

    auto id = dd->makeIdent(3);
    EXPECT_EQ(id.p->v, 2);
    EXPECT_EQ(id.p->e[0], id.p->e[3]);
    EXPECT_EQ(id.p->e[1], id.p->e[2]);
    EXPECT_TRUE(id.p->ident);

    auto ext = dd->extend(id, 0, 1);
    EXPECT_EQ(ext.p->v, 3);
    EXPECT_EQ(ext.p->e[0], ext.p->e[3]);
    EXPECT_EQ(ext.p->e[1], ext.p->e[2]);
    EXPECT_TRUE(ext.p->ident);
}

TEST(DDPackageTest, Identity) {
    auto dd = std::make_unique<dd::Package>(4);

    EXPECT_TRUE(dd->makeIdent(0).isOneTerminal());
    EXPECT_TRUE(dd->makeIdent(0, -1).isOneTerminal());

    auto id3 = dd->makeIdent(3);
    EXPECT_EQ(dd->makeIdent(0, 2), id3);
    auto& table = dd->getIdentityTable();
    EXPECT_NE(table[2].p, nullptr);

    auto id2 = dd->makeIdent(0, 1); // should be found in IdTable
    EXPECT_EQ(dd->makeIdent(2), id2);

    auto id4 = dd->makeIdent(0, 3); // should use id3 and extend it
    EXPECT_EQ(dd->makeIdent(0, 3), id4);
    EXPECT_NE(table[3].p, nullptr);

    auto idCached = dd->makeIdent(4);
    EXPECT_EQ(id4, idCached);
}

TEST(DDPackageTest, TestLocalInconsistency) {
    auto dd = std::make_unique<dd::Package>(3);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 0);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 0_pc, 1);
    auto zero_state = dd->makeZeroState(2);

    auto bell_state = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);
    auto local      = dd->isLocallyConsistent(bell_state);
    EXPECT_FALSE(local);
    bell_state.p->ref = 1;
    local             = dd->isLocallyConsistent(bell_state);
    EXPECT_FALSE(local);
    bell_state.p->ref = 0;
    dd->incRef(bell_state);

    bell_state.p->v = 2;
    local           = dd->isLocallyConsistent(bell_state);
    EXPECT_FALSE(local);
    bell_state.p->v = 1;

    bell_state.p->e[0].w.r->refCount = 0;
    local                            = dd->isLocallyConsistent(bell_state);
    EXPECT_FALSE(local);
    bell_state.p->e[0].w.r->refCount = 1;
}

TEST(DDPackageTest, Ancillaries) {
    auto dd          = std::make_unique<dd::Package>(4);
    auto h_gate      = dd->makeGateDD(dd::Hmat, 2, 0);
    auto cx_gate     = dd->makeGateDD(dd::Xmat, 2, 0_pc, 1);
    auto bell_matrix = dd->multiply(cx_gate, h_gate);

    dd->incRef(bell_matrix);
    auto reduced_bell_matrix = dd->reduceAncillae(bell_matrix, {false, false, false, false});
    EXPECT_EQ(bell_matrix, reduced_bell_matrix);
    dd->incRef(bell_matrix);
    reduced_bell_matrix = dd->reduceAncillae(bell_matrix, {false, false, true, true});
    EXPECT_EQ(bell_matrix, reduced_bell_matrix);

    auto extended_bell_matrix = dd->extend(bell_matrix, 2);
    dd->incRef(extended_bell_matrix);
    reduced_bell_matrix = dd->reduceAncillae(extended_bell_matrix, {false, false, true, true});
    EXPECT_TRUE(reduced_bell_matrix.p->e[1].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[2].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[3].isZeroTerminal());

    EXPECT_EQ(reduced_bell_matrix.p->e[0].p->e[0].p, bell_matrix.p);
    EXPECT_TRUE(reduced_bell_matrix.p->e[0].p->e[1].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[0].p->e[2].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[0].p->e[3].isZeroTerminal());

    dd->incRef(extended_bell_matrix);
    reduced_bell_matrix = dd->reduceAncillae(extended_bell_matrix, {false, false, true, true}, false);
    EXPECT_TRUE(reduced_bell_matrix.p->e[1].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[2].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[3].isZeroTerminal());

    EXPECT_EQ(reduced_bell_matrix.p->e[0].p->e[0].p, bell_matrix.p);
    EXPECT_TRUE(reduced_bell_matrix.p->e[0].p->e[1].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[0].p->e[2].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[0].p->e[3].isZeroTerminal());
}

TEST(DDPackageTest, GarbageVector) {
    auto dd         = std::make_unique<dd::Package>(4);
    auto h_gate     = dd->makeGateDD(dd::Hmat, 2, 0);
    auto cx_gate    = dd->makeGateDD(dd::Xmat, 2, 0_pc, 1);
    auto zero_state = dd->makeZeroState(2);
    auto bell_state = dd->multiply(dd->multiply(cx_gate, h_gate), zero_state);
    dd->printVector(bell_state);

    dd->incRef(bell_state);
    auto reduced_bell_state = dd->reduceGarbage(bell_state, {false, false, false, false});
    EXPECT_EQ(bell_state, reduced_bell_state);
    dd->incRef(bell_state);
    reduced_bell_state = dd->reduceGarbage(bell_state, {false, false, true, false});
    EXPECT_EQ(bell_state, reduced_bell_state);

    dd->incRef(bell_state);
    reduced_bell_state = dd->reduceGarbage(bell_state, {false, true, false, false});
    auto vec           = dd->getVector(reduced_bell_state);
    dd->printVector(reduced_bell_state);
    EXPECT_EQ(vec[2], static_cast<std::complex<dd::fp>>(dd::complex_zero));
    EXPECT_EQ(vec[3], static_cast<std::complex<dd::fp>>(dd::complex_zero));

    dd->incRef(bell_state);
    reduced_bell_state = dd->reduceGarbage(bell_state, {true, false, false, false});
    dd->printVector(reduced_bell_state);
    vec = dd->getVector(reduced_bell_state);
    EXPECT_EQ(vec[1], static_cast<std::complex<dd::fp>>(dd::complex_zero));
    EXPECT_EQ(vec[3], static_cast<std::complex<dd::fp>>(dd::complex_zero));
}

TEST(DDPackageTest, GarbageMatrix) {
    auto dd          = std::make_unique<dd::Package>(4);
    auto h_gate      = dd->makeGateDD(dd::Hmat, 2, 0);
    auto cx_gate     = dd->makeGateDD(dd::Xmat, 2, 0_pc, 1);
    auto bell_matrix = dd->multiply(cx_gate, h_gate);

    dd->incRef(bell_matrix);
    auto reduced_bell_matrix = dd->reduceGarbage(bell_matrix, {false, false, false, false});
    EXPECT_EQ(bell_matrix, reduced_bell_matrix);
    dd->incRef(bell_matrix);
    reduced_bell_matrix = dd->reduceGarbage(bell_matrix, {false, false, true, false});
    EXPECT_EQ(bell_matrix, reduced_bell_matrix);

    dd->incRef(bell_matrix);
    reduced_bell_matrix = dd->reduceGarbage(bell_matrix, {false, true, false, false});
    auto mat            = dd->getMatrix(reduced_bell_matrix);
    auto zero           = dd::CVec{{0., 0.}, {0., 0.}, {0., 0.}, {0., 0.}};
    EXPECT_EQ(mat[2], zero);
    EXPECT_EQ(mat[3], zero);

    dd->incRef(bell_matrix);
    reduced_bell_matrix = dd->reduceGarbage(bell_matrix, {true, false, false, false});
    mat                 = dd->getMatrix(reduced_bell_matrix);
    EXPECT_EQ(mat[1], zero);
    EXPECT_EQ(mat[3], zero);

    dd->incRef(bell_matrix);
    reduced_bell_matrix = dd->reduceGarbage(bell_matrix, {false, true, false, false}, false);
    EXPECT_TRUE(reduced_bell_matrix.p->e[1].isZeroTerminal());
    EXPECT_TRUE(reduced_bell_matrix.p->e[3].isZeroTerminal());
}

TEST(DDPackageTest, InvalidMakeBasisStateAndGate) {
    auto nqubits    = 2;
    auto dd         = std::make_unique<dd::Package>(nqubits);
    auto basisState = std::vector<dd::BasisStates>{dd::BasisStates::zero};
    EXPECT_THROW(dd->makeBasisState(nqubits, basisState), std::runtime_error);
    EXPECT_THROW(dd->makeZeroState(3), std::runtime_error);
    EXPECT_THROW(dd->makeBasisState(3, {true, true, true}), std::runtime_error);
    EXPECT_THROW(dd->makeBasisState(3, {dd::BasisStates::one, dd::BasisStates::one, dd::BasisStates::one}), std::runtime_error);
    EXPECT_THROW(dd->makeGateDD(dd::Xmat, 3, 0), std::runtime_error);
}

TEST(DDPackageTest, InvalidDecRef) {
    auto dd = std::make_unique<dd::Package>(2);
    auto e  = dd->makeIdent(2);
    EXPECT_THROW(dd->decRef(e), std::runtime_error);
}

TEST(DDPackageTest, PackageReset) {
    auto dd = std::make_unique<dd::Package>(1);

    // one node in unique table of variable 0
    auto        i_gate = dd->makeIdent(1);
    const auto& unique = dd->mUniqueTable.getTables();
    const auto& table  = unique[0];
    auto        ihash  = dd->mUniqueTable.hash(i_gate.p);
    const auto* node   = table[ihash];
    std::cout << ihash << ": " << reinterpret_cast<uintptr_t>(i_gate.p) << std::endl;
    // node should be the first in this unique table bucket
    EXPECT_EQ(node, i_gate.p);
    dd->reset();
    // after clearing the tables, they should be empty
    EXPECT_EQ(table[ihash], nullptr);
    i_gate            = dd->makeIdent(1);
    const auto* node2 = table[ihash];
    // after recreating the DD, it should receive the same node
    EXPECT_EQ(node2, node);
}

TEST(DDPackageTest, MaxRefCount) {
    auto dd = std::make_unique<dd::Package>(1);
    auto e  = dd->makeIdent(1);
    // ref count saturates at this value
    e.p->ref = std::numeric_limits<decltype(e.p->ref)>::max();
    dd->incRef(e);
    EXPECT_EQ(e.p->ref, std::numeric_limits<decltype(e.p->ref)>::max());
}

TEST(DDPackageTest, Inverse) {
    auto dd   = std::make_unique<dd::Package>(1);
    auto x    = dd->makeGateDD(dd::Xmat, 1, 0);
    auto xdag = dd->conjugateTranspose(x);
    EXPECT_EQ(x, xdag);
    dd->garbageCollect();
    // nothing should have been collected since the threshold is not reached
    EXPECT_EQ(dd->mUniqueTable.getNodeCount(), 1);
    dd->incRef(x);
    dd->garbageCollect(true);
    // nothing should have been collected since the lone node has a non-zero ref count
    EXPECT_EQ(dd->mUniqueTable.getNodeCount(), 1);
    dd->decRef(x);
    dd->garbageCollect(true);
    // now the node should have been collected
    EXPECT_EQ(dd->mUniqueTable.getNodeCount(), 0);
}

TEST(DDPackageTest, UniqueTableAllocation) {
    auto dd = std::make_unique<dd::Package>(1);

    auto allocs = dd->vUniqueTable.getAllocations();
    std::cout << allocs << std::endl;
    std::vector<dd::Package::vNode*> nodes{allocs};
    // get all the nodes that are pre-allocated
    for (auto i = 0U; i < allocs; ++i) {
        nodes[i] = dd->vUniqueTable.getNode();
    }

    // trigger new allocation
    [[maybe_unused]] auto node = dd->vUniqueTable.getNode();
    EXPECT_EQ(dd->vUniqueTable.getAllocations(), (1. + dd->vUniqueTable.getGrowthFactor()) * allocs);

    // clearing the unique table should reduce the allocated size to the original size
    dd->vUniqueTable.clear();
    EXPECT_EQ(dd->vUniqueTable.getAllocations(), allocs);
}

TEST(DDPackageTest, MatrixTranspose) {
    auto dd = std::make_unique<dd::Package>(2);
    auto cx = dd->makeGateDD(dd::Xmat, 2, 1_pc, 0);

    // transposing a symmetric matrix shall yield a symmetric matrix
    auto cxTransposed = dd->transpose(cx);
    EXPECT_EQ(cxTransposed, cx);

    // the Y gate is not symmetric
    auto y           = dd->makeGateDD(dd::Ymat, 2, 0);
    auto yTransposed = dd->transpose(y);
    EXPECT_NE(yTransposed, y);

    // transposing twice should yield the original matrix
    auto yTT = dd->transpose(yTransposed);
    EXPECT_EQ(yTT, y);

    // perform the same computation again -> trigger a compute table hit
    auto yAgain = dd->transpose(yTransposed);
    EXPECT_EQ(yAgain, y);
}

TEST(DDPackageTest, SpecialCaseTerminal) {
    auto dd  = std::make_unique<dd::Package>(2);
    auto one = dd::Package::vEdge::one;
    dd::export2Dot(one, "oneColored.dot", true);
    dd::export2Dot(one, "oneClassic.dot", false);
    dd::export2Dot(one, "oneMemory.dot", true, true, false, true);

    EXPECT_EQ(dd->vUniqueTable.lookup(one), one);

    auto zero = dd::Package::vEdge::zero;
    EXPECT_EQ(dd->kronecker(zero, one), zero);
    EXPECT_EQ(dd->kronecker(one, one), one);

    dd->debugnode(one.p);
    dd::ComplexValue cOne{1.0, 0.0};
    EXPECT_EQ(dd->getValueByPath(one, ""), cOne);
    EXPECT_EQ(dd->getValueByPath(one, 0), cOne);
    EXPECT_EQ(dd->getValueByPath(dd::Package::mEdge::one, 0, 0), cOne);

    dd::ComplexValue cZero{0.0, 0.0};
    EXPECT_EQ(dd->innerProduct(zero, zero), cZero);
}

//TEST(DDPackageTest, GarbageCollectSomeButNotAll) {
//    auto dd = std::make_unique<dd::Package>(1);
//
//    // one node in unique table of variable 0
//    const auto& unique = dd->mUniqueTable.getTables();
//    const auto& table  = unique[0];
//
//    auto I     = dd->makeIdent(1);
//    auto Ihash = dd->mUniqueTable.hash(I.p);
//
//    // two nodes in same unique table bucket of variable 0
//    auto Z     = dd->makeGateDD(dd::Zmat, 1, 0);
//    auto Zhash = dd->mUniqueTable.hash(Z.p);
//
//    // I and Z should be placed in the same bucket
//    EXPECT_EQ(Ihash, Zhash);
//
//    // increase the reference count of the Z gate, but not the I gate
//    dd->incRef(Z);
//
//    // garbage collection should only collect the I gate and leave the Z gate at the front of the bucket
//    dd->garbageCollect(true);
//
//    EXPECT_EQ(table[Zhash], Z.p);
//    EXPECT_EQ(table[Zhash]->next, nullptr);
//}

TEST(DDPackageTest, KroneckerProduct) {
    auto dd        = std::make_unique<dd::Package>(2);
    auto X         = dd->makeGateDD(dd::Xmat, 1, 0);
    auto kronecker = dd->kronecker(X, X);
    EXPECT_EQ(kronecker.p->v, 1);
    EXPECT_EQ(kronecker.p->e[0], dd::Package::mEdge::zero);
    EXPECT_EQ(kronecker.p->e[0], kronecker.p->e[3]);
    EXPECT_EQ(kronecker.p->e[1], kronecker.p->e[2]);
    EXPECT_EQ(kronecker.p->e[1].p->v, 0);
    EXPECT_EQ(kronecker.p->e[1].p->e[0], dd::Package::mEdge::zero);
    EXPECT_EQ(kronecker.p->e[1].p->e[0], kronecker.p->e[1].p->e[3]);
    EXPECT_EQ(kronecker.p->e[1].p->e[1], dd::Package::mEdge::one);
    EXPECT_EQ(kronecker.p->e[1].p->e[1], kronecker.p->e[1].p->e[2]);

    auto kronecker2 = dd->kronecker(X, X);
    EXPECT_EQ(kronecker, kronecker2);
}

TEST(DDPackageTest, NearZeroNormalize) {
    auto               dd       = std::make_unique<dd::Package>(2);
    dd::fp             nearZero = dd::ComplexTable<>::tolerance() / 10;
    dd::Package::vEdge ve{};
    ve.p    = dd->vUniqueTable.getNode();
    ve.p->v = 1;
    ve.w    = dd::Complex::one;
    for (auto& edge: ve.p->e) {
        edge.p    = dd->vUniqueTable.getNode();
        edge.p->v = 0;
        edge.w    = dd->cn.getCached(nearZero, 0.);
        edge.p->e = {dd::Package::vEdge::one, dd::Package::vEdge::one};
    }
    auto veNormalizedCached = dd->normalize(ve, true);
    EXPECT_EQ(veNormalizedCached, dd::Package::vEdge::zero);

    for (auto& edge: ve.p->e) {
        edge.p    = dd->vUniqueTable.getNode();
        edge.p->v = 0;
        edge.w    = dd->cn.lookup(nearZero, 0.);
        edge.p->e = {dd::Package::vEdge::one, dd::Package::vEdge::one};
    }
    auto veNormalized = dd->normalize(ve, false);
    EXPECT_EQ(veNormalized, dd::Package::vEdge::zero);

    dd::Package::mEdge me{};
    me.p    = dd->mUniqueTable.getNode();
    me.p->v = 1;
    me.w    = dd::Complex::one;
    for (auto& edge: me.p->e) {
        edge.p    = dd->mUniqueTable.getNode();
        edge.p->v = 0;
        edge.w    = dd->cn.getCached(nearZero, 0.);
        edge.p->e = {dd::Package::mEdge::one, dd::Package::mEdge::one, dd::Package::mEdge::one, dd::Package::mEdge::one};
    }
    auto meNormalizedCached = dd->normalize(me, true);
    EXPECT_EQ(meNormalizedCached, dd::Package::mEdge::zero);

    for (auto& edge: me.p->e) {
        edge.p    = dd->mUniqueTable.getNode();
        edge.p->v = 0;
        edge.w    = dd->cn.lookup(nearZero, 0.);
        edge.p->e = {dd::Package::mEdge::one, dd::Package::mEdge::one, dd::Package::mEdge::one, dd::Package::mEdge::one};
    }
    auto meNormalized = dd->normalize(me, false);
    EXPECT_EQ(meNormalized, dd::Package::mEdge::zero);
}

TEST(DDPackageTest, Controls) {
    dd::Control cpos{0};
    dd::Control cneg{0, dd::Control::Type::neg};

    EXPECT_NE(cpos, cneg);

    dd::Controls controls{};
    controls.insert(cpos);
    controls.insert(cneg);
    EXPECT_EQ(controls.begin()->type, dd::Control::Type::neg);
    EXPECT_EQ(controls.count(0), 2);
}

TEST(DDPackageTest, DestructiveMeasurementAll) {
    auto dd         = std::make_unique<dd::Package>(4);
    auto hGate0     = dd->makeGateDD(dd::Hmat, 2, 0);
    auto hGate1     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto plusMatrix = dd->multiply(hGate0, hGate1);
    auto zeroState  = dd->makeZeroState(2);
    auto plusState  = dd->multiply(plusMatrix, zeroState);
    dd->incRef(plusState);

    std::mt19937_64 mt{0};

    const dd::CVec vBefore = dd->getVector(plusState);

    ASSERT_EQ(vBefore[0], vBefore[1]);
    ASSERT_EQ(vBefore[0], vBefore[2]);
    ASSERT_EQ(vBefore[0], vBefore[3]);

    const std::string m = dd->measureAll(plusState, true, mt);

    const dd::CVec vAfter = dd->getVector(plusState);
    const int      i      = std::stoi(m, nullptr, 2);

    ASSERT_EQ(vAfter[i], static_cast<std::complex<dd::fp>>(dd::complex_one));
}

TEST(DDPackageTest, DestructiveMeasurementOne) {
    auto dd         = std::make_unique<dd::Package>(4);
    auto hGate0     = dd->makeGateDD(dd::Hmat, 2, 0);
    auto hGate1     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto plusMatrix = dd->multiply(hGate0, hGate1);
    auto zeroState  = dd->makeZeroState(2);
    auto plusState  = dd->multiply(plusMatrix, zeroState);
    dd->incRef(plusState);

    std::mt19937_64 mt{0};

    const char     m      = dd->measureOneCollapsing(plusState, 0, true, mt);
    const dd::CVec vAfter = dd->getVector(plusState);

    ASSERT_EQ(m, '0');
    ASSERT_EQ(vAfter[0], static_cast<std::complex<dd::fp>>(dd::complex_SQRT2_2));
    ASSERT_EQ(vAfter[2], static_cast<std::complex<dd::fp>>(dd::complex_SQRT2_2));
    ASSERT_EQ(vAfter[1], static_cast<std::complex<dd::fp>>(dd::complex_zero));
    ASSERT_EQ(vAfter[3], static_cast<std::complex<dd::fp>>(dd::complex_zero));
}

TEST(DDPackageTest, DestructiveMeasurementOneArbitraryNormalization) {
    auto dd         = std::make_unique<dd::Package>(4);
    auto hGate0     = dd->makeGateDD(dd::Hmat, 2, 0);
    auto hGate1     = dd->makeGateDD(dd::Hmat, 2, 1);
    auto plusMatrix = dd->multiply(hGate0, hGate1);
    auto zeroState  = dd->makeZeroState(2);
    auto plusState  = dd->multiply(plusMatrix, zeroState);
    dd->incRef(plusState);

    std::mt19937_64 mt{0};

    const char     m      = dd->measureOneCollapsing(plusState, 0, false, mt);
    const dd::CVec vAfter = dd->getVector(plusState);

    ASSERT_EQ(m, '0');
    ASSERT_EQ(vAfter[0], static_cast<std::complex<dd::fp>>(dd::complex_SQRT2_2));
    ASSERT_EQ(vAfter[2], static_cast<std::complex<dd::fp>>(dd::complex_SQRT2_2));
    ASSERT_EQ(vAfter[1], static_cast<std::complex<dd::fp>>(dd::complex_zero));
    ASSERT_EQ(vAfter[3], static_cast<std::complex<dd::fp>>(dd::complex_zero));
}

TEST(DDPackageTest, ExportPolarPhaseFormatted) {
    std::ostringstream phaseString;

    // zero case
    dd::printPhaseFormatted(phaseString, 0);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ 0)");
    phaseString.str("");

    // one cases
    dd::printPhaseFormatted(phaseString, 0.5 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ/2)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, -0.5 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(-iπ/2)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, -dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(-iπ)");
    phaseString.str("");

    // 1/sqrt(2) cases
    dd::printPhaseFormatted(phaseString, dd::SQRT2_2 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ/√2)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 2 * dd::SQRT2_2 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ 2/√2)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 0.5 * dd::SQRT2_2 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ/(2√2))");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 0.75 * dd::SQRT2_2 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ 3/(4√2))");
    phaseString.str("");

    // pi cases mhhh pie
    dd::printPhaseFormatted(phaseString, dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 2 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ 2)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 0.5 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ/2)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 0.75 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ 3/4)");
    phaseString.str("");

    dd::printPhaseFormatted(phaseString, 0.25 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ/4)");
    phaseString.str("");

    // general case
    dd::printPhaseFormatted(phaseString, 0.12345 * dd::PI);
    EXPECT_STREQ(phaseString.str().c_str(), "ℯ(iπ 0.12345)");
    phaseString.str("");
}

TEST(DDPackageTest, ExportConditionalFormat) {
    auto cn = std::make_unique<dd::ComplexNumbers>();

    EXPECT_STREQ(dd::conditionalFormat(cn->getCached(1, 0)).c_str(), "1");
    EXPECT_STREQ(dd::conditionalFormat(cn->getCached(0, 1)).c_str(), "i");
    EXPECT_STREQ(dd::conditionalFormat(cn->getCached(-1, 0)).c_str(), "-1");
    EXPECT_STREQ(dd::conditionalFormat(cn->getCached(0, -1)).c_str(), "-i");

    const auto num = cn->getCached(-dd::SQRT2_2, -dd::SQRT2_2);
    EXPECT_STREQ(dd::conditionalFormat(num).c_str(), "ℯ(-iπ 3/4)");
    EXPECT_STREQ(dd::conditionalFormat(num, false).c_str(), "-1/√2(1+i)");

    EXPECT_STREQ(dd::conditionalFormat(cn->getCached(-1, -1)).c_str(), "2/√2 ℯ(-iπ 3/4)");
    EXPECT_STREQ(dd::conditionalFormat(cn->getCached(-dd::SQRT2_2, 0)).c_str(), "-1/√2");
}

TEST(DDPackageTest, BasicNumericInstabilityTest) {
    using limits = std::numeric_limits<dd::fp>;

    std::cout << std::setprecision(limits::max_digits10);

    std::cout << "The 1/sqrt(2) constant used in this package is " << dd::SQRT2_2 << ", which is the closest floating point value to the actual value of 1/sqrt(2)." << std::endl;
    std::cout << "Computing std::sqrt(0.5) actually computes this value, i.e. " << std::sqrt(dd::fp(0.5)) << std::endl;
    EXPECT_EQ(dd::SQRT2_2, std::sqrt(dd::fp(0.5)));
    std::cout << "However, computing 1/std::sqrt(2.) leads to " << dd::fp(1.0) / std::sqrt(dd::fp(2.)) << ", which differs by 1 ULP from std::sqrt(0.5)" << std::endl;
    EXPECT_EQ(dd::fp(1.0) / std::sqrt(dd::fp(2.)), std::nextafter(std::sqrt(dd::fp(0.5)), 0.));
    std::cout << "In the same fashion, computing std::sqrt(2.) leads to " << std::sqrt(dd::fp(2.)) << ", while computing 1/std::sqrt(0.5) leads to " << dd::fp(1.) / std::sqrt(dd::fp(0.5)) << ", which differ by exactly 1 ULP" << std::endl;
    EXPECT_EQ(std::sqrt(dd::fp(2.)), std::nextafter(dd::fp(1.) / std::sqrt(dd::fp(0.5)), 2.));
    std::cout << "Another inaccuracy occurs when computing 1/sqrt(2) * 1/sqrt(2), which should equal to 0.5 but is off by 1 ULP: " << std::sqrt(dd::fp(0.5)) * std::sqrt(dd::fp(0.5)) << std::endl;
    EXPECT_EQ(std::sqrt(dd::fp(0.5)) * std::sqrt(dd::fp(0.5)), std::nextafter(0.5, 1.));
    std::cout << "This inaccuracy even persists when computing std::sqrt(0.5) * std::sqrt(0.5): " << std::sqrt(dd::fp(0.5)) * std::sqrt(dd::fp(0.5)) << std::endl;
    EXPECT_EQ(std::sqrt(dd::fp(0.5)) * std::sqrt(dd::fp(0.5)), std::nextafter(dd::fp(0.5), 1.));

    //    std::cout << "Interestingly, calculating powers of dd::SQRT2_2 can be conducted very precisely, i.e., with an error of only 1 ULP." << std::endl;
    //    dd::fp      accumulator = dd::SQRT2_2 * dd::SQRT2_2;
    //    std::size_t nq          = 64;
    //    for (std::size_t i = 1; i < nq; i += 2) {
    //        std::size_t power  = (i + 1) / 2;
    //        std::size_t denom  = 1UL << power;
    //        dd::fp      target = 1. / static_cast<double>(denom);
    //        dd::fp      diff   = std::abs(target - accumulator);
    //        const auto  ulps   = dd::ulpDistance(accumulator, target);
    //        std::cout << accumulator << ", numerical error: " << diff << ", ulps: " << ulps << std::endl;
    //        EXPECT_EQ(ulps, 1);
    //        accumulator *= dd::SQRT2_2;
    //        accumulator *= dd::SQRT2_2;
    //    }
}

TEST(DDPackageTest, BasicNumericStabilityTest) {
    using limits = std::numeric_limits<dd::fp>;

    auto dd  = std::make_unique<dd::Package>(1);
    auto tol = dd::ComplexTable<>::tolerance();
    dd::ComplexNumbers::setTolerance(limits::epsilon());
    auto state  = dd->makeZeroState(1);
    auto h      = dd->makeGateDD(dd::Hmat, 1, 0);
    auto state1 = dd->multiply(h, state);
    auto z      = dd->makeGateDD(dd::Zmat, 1, 0);
    auto result = dd->multiply(z, state1);

    const auto topWeight   = result.w.toString(false, limits::max_digits10);
    const auto leftWeight  = result.p->e[0].w.toString(false, limits::max_digits10);
    const auto rightWeight = result.p->e[1].w.toString(false, limits::max_digits10);
    std::cout << topWeight << " | " << leftWeight << " | " << rightWeight << std::endl;
    EXPECT_EQ(topWeight, "1");
    std::ostringstream oss{};
    oss << std::setprecision(limits::max_digits10) << dd::SQRT2_2;
    EXPECT_EQ(leftWeight, oss.str());
    oss.str("");
    oss << -dd::SQRT2_2;
    EXPECT_EQ(rightWeight, oss.str());
    // restore tolerance
    dd::ComplexNumbers::setTolerance(tol);
}

TEST(DDPackageTest, NormalizationNumericStabilityTest) {
    auto dd = std::make_unique<dd::Package>(1);
    for (std::size_t x = 23; x <= 50; ++x) {
        const auto lambda = dd::PI / static_cast<dd::fp>(1ULL << x);
        std::cout << std::setprecision(17) << "x: " << x << " | lambda: " << lambda << " | cos(lambda): " << std::cos(lambda) << " | sin(lambda): " << std::sin(lambda) << std::endl;
        auto p      = dd->makeGateDD(dd::Phasemat(lambda), 1, 0);
        auto pdag   = dd->makeGateDD(dd::Phasemat(-lambda), 1, 0);
        auto result = dd->multiply(p, pdag);
        EXPECT_TRUE(result.p->ident);
        dd->cn.complexTable.clear();
    }
}

TEST(DDPackageTest, FidelityOfMeasurementOutcomes) {
    auto dd = std::make_unique<dd::Package>(3);

    auto h_gate     = dd->makeGateDD(dd::Hmat, 3, 2);
    auto cx_gate1   = dd->makeGateDD(dd::Xmat, 3, 2_pc, 1);
    auto cx_gate2   = dd->makeGateDD(dd::Xmat, 3, 1_pc, 0);
    auto zero_state = dd->makeZeroState(3);

    auto ghz_state = dd->multiply(cx_gate2, dd->multiply(cx_gate1, dd->multiply(h_gate, zero_state)));

    dd::ProbabilityVector probs{};
    probs[0]      = 0.5;
    probs[7]      = 0.5;
    auto fidelity = dd->fidelityOfMeasurementOutcomes(ghz_state, probs);
    EXPECT_NEAR(fidelity, 1.0, dd::ComplexTable<>::tolerance());
}

TEST(DDPackageTest, CloseToIdentity) {
    auto dd = std::make_unique<dd::Package>(3);
    auto id = dd->makeIdent(1);
    EXPECT_TRUE(dd->isCloseToIdentity(id));
    dd::Package::mEdge close{};
    close.p  = id.p;
    close.w  = dd->cn.lookup(1e-11, 0);
    auto id2 = dd->makeDDNode(1, std::array{id, dd::Package::mEdge::zero, dd::Package::mEdge::zero, close});
    EXPECT_TRUE(dd->isCloseToIdentity(id2));

    auto noId = dd->makeDDNode(1, std::array{dd::Package::mEdge::zero, id, dd::Package::mEdge::zero, close});
    EXPECT_FALSE(dd->isCloseToIdentity(noId));

    dd::Package::mEdge notClose{};
    notClose.p = id.p;
    notClose.w = dd->cn.lookup(1e-9, 0);
    auto noId2 = dd->makeDDNode(1, std::array{notClose, dd::Package::mEdge::zero, dd::Package::mEdge::zero, close});
    EXPECT_FALSE(dd->isCloseToIdentity(noId2));

    auto noId3 = dd->makeDDNode(1, std::array{close, dd::Package::mEdge::zero, dd::Package::mEdge::zero, notClose});
    EXPECT_FALSE(dd->isCloseToIdentity(noId3));

    auto notClose2 = dd->makeDDNode(0, std::array{dd::Package::mEdge::zero, dd::Package::mEdge::one, dd::Package::mEdge::one, dd::Package::mEdge::zero});
    auto notClose3 = dd->makeDDNode(1, std::array{notClose2, dd::Package::mEdge::zero, dd::Package::mEdge::zero, notClose2});
    EXPECT_FALSE(dd->isCloseToIdentity(notClose3));
}
