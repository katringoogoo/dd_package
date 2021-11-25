/*
 * This file is part of the JKQ DD Package which is released under the MIT license.
 * See file README.md or go to http://iic.jku.at/eda/research/quantum_dd/ for more information.
 */

#ifndef DD_PACKAGE_EDGE_HPP
#define DD_PACKAGE_EDGE_HPP

#include "Complex.hpp"
#include "ComplexValue.hpp"
#include "LimTable.hpp"

#include <cstddef>
#include <utility>

namespace dd {
    template<class Node>
    struct Edge {
        Node*   p;
        Complex w;
        LimTable<>::Entry* l; // might be nullptr for all identity

        /// Comparing two DD edges with another involves comparing the respective pointers
        /// and checking whether the corresponding weights are "close enough" according to a given tolerance
        /// this notion of equivalence is chosen to counter floating point inaccuracies
        constexpr bool operator==(const Edge& other) const {
            // TODO lim check only works for looked up pauli strings
            return p == other.p && l == other.l && w.approximatelyEquals(other.w);
        }
        constexpr bool operator!=(const Edge& other) const {
            return !operator==(other);
        }

        [[nodiscard]] constexpr bool isTerminal() const { return Node::isTerminal(p); }

        // edges pointing to zero and one terminals
        static inline Edge one{Node::terminal, Complex::one, nullptr};
        static inline Edge zero{Node::terminal, Complex::zero, nullptr};

        [[nodiscard]] static constexpr Edge terminal(const Complex& w) { return {Node::terminal, w, nullptr}; }
        [[nodiscard]] constexpr bool        isZeroTerminal() const { return Node::isTerminal(p) && w == Complex::zero; }
        [[nodiscard]] constexpr bool        isOneTerminal() const { return Node::isTerminal(p) && w == Complex::one; }
    };

    template<typename Node>
    struct CachedEdge {
        Node*        p{};
        ComplexValue w{};
        LimTable<>::Entry* l{}; // might be nullptr for all identity

        CachedEdge() = default;
        CachedEdge(Node* p, const ComplexValue& w, LimEntry<>* l):
            p(p), w(w), l(l) {}
        CachedEdge(Node* p, const Complex& c):
            p(p), l(l) {
            w.r = CTEntry::val(c.r);
            w.i = CTEntry::val(c.i);
        }

        /// Comparing two DD edges with another involves comparing the respective pointers
        /// and checking whether the corresponding weights are "close enough" according to a given tolerance
        /// this notion of equivalence is chosen to counter floating point inaccuracies
        bool operator==(const CachedEdge& other) const {
            return p == other.p && l == other.l && w.approximatelyEquals(other.w);
        }
        bool operator!=(const CachedEdge& other) const {
            return !operator==(other);
        }
    };
} // namespace dd

namespace std {
    template<class Node>
    struct hash<dd::Edge<Node>> {
        std::size_t operator()(dd::Edge<Node> const& e) const noexcept {
            auto h1 = dd::murmur64(reinterpret_cast<std::size_t>(e.p));
            auto h2 = std::hash<dd::Complex>{}(e.w);
            auto h3 = dd::murmur64(reinterpret_cast<std::size_t>(e.l));
            return dd::combineHash(h1, dd::combineHash(h2, h3));
        }
    };

    template<class Node>
    struct hash<dd::CachedEdge<Node>> {
        std::size_t operator()(dd::CachedEdge<Node> const& e) const noexcept {
            auto h1 = dd::murmur64(reinterpret_cast<std::size_t>(e.p));
            auto h2 = std::hash<dd::ComplexValue>{}(e.w);
            auto h3 = dd::murmur64(reinterpret_cast<std::size_t>(e.l));
            return dd::combineHash(h1, dd::combineHash(h2, h3));
        }
    };
} // namespace std

#endif //DD_PACKAGE_EDGE_HPP
