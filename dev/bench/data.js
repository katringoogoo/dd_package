window.BENCHMARK_DATA = {
  "lastUpdate": 1617871567326,
  "repoUrl": "https://github.com/iic-jku/dd_package",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "4c498bf1a68645a25a2c55bf7081d34670ee94b9",
          "message": "[WIP] Google Benchmark for JKQ Tools",
          "timestamp": "2021-03-24T12:48:45Z",
          "url": "https://github.com/iic-jku/dd_package/pull/6/commits/4c498bf1a68645a25a2c55bf7081d34670ee94b9"
        },
        "date": 1616774869641,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.928836516607497,
            "unit": "ns/iter",
            "extra": "iterations: 68285401\ncpu: 9.873666627512375 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.942417619444997,
            "unit": "ns/iter",
            "extra": "iterations: 70835557\ncpu: 9.941584690298969 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 27.24759676089116,
            "unit": "us/iter",
            "extra": "iterations: 26674\ncpu: 27.24566233035916 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 12.696540280701715,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.690064842105263 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 12.008730372881338,
            "unit": "ms/iter",
            "extra": "iterations: 59\ncpu: 11.890837152542375 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 11.816498311475709,
            "unit": "ms/iter",
            "extra": "iterations: 61\ncpu: 11.805975344262292 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 11.705241789473432,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 11.699148807017549 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 12.62423735714283,
            "unit": "ms/iter",
            "extra": "iterations: 56\ncpu: 12.611410589285722 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 13.10021964285722,
            "unit": "ms/iter",
            "extra": "iterations: 56\ncpu: 13.095650017857142 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 12.968134454545385,
            "unit": "ms/iter",
            "extra": "iterations: 55\ncpu: 12.960487163636374 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.585769921754784,
            "unit": "ns/iter",
            "extra": "iterations: 90561287\ncpu: 7.585203454540127 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.59803806211972,
            "unit": "ns/iter",
            "extra": "iterations: 85786814\ncpu: 7.597603263363996 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.7785621412262165,
            "unit": "ns/iter",
            "extra": "iterations: 90683301\ncpu: 7.7713877111729746 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.796456355219376,
            "unit": "ns/iter",
            "extra": "iterations: 93180615\ncpu: 7.795884337101646 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.675466736017291,
            "unit": "ns/iter",
            "extra": "iterations: 92076888\ncpu: 7.675073586327114 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.58767217382289,
            "unit": "ns/iter",
            "extra": "iterations: 93075923\ncpu: 7.587531439253086 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.792896328996361,
            "unit": "ns/iter",
            "extra": "iterations: 91429741\ncpu: 7.792338523632038 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.19880853902904036,
            "unit": "us/iter",
            "extra": "iterations: 3526771\ncpu: 0.19879892712058714 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3773528449230448,
            "unit": "us/iter",
            "extra": "iterations: 1863952\ncpu: 0.3772921684678571 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7282783559362969,
            "unit": "us/iter",
            "extra": "iterations: 958503\ncpu: 0.7282702192898745 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.332794162545348,
            "unit": "us/iter",
            "extra": "iterations: 524715\ncpu: 1.3327135454484809 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.7229856916603046,
            "unit": "us/iter",
            "extra": "iterations: 257612\ncpu: 2.7228816553576727 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.3688954006838525,
            "unit": "us/iter",
            "extra": "iterations: 123127\ncpu: 5.368586784377114 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 11.270934593749491,
            "unit": "us/iter",
            "extra": "iterations: 62043\ncpu: 11.270812114178874 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3623126973497986,
            "unit": "us/iter",
            "extra": "iterations: 1920448\ncpu: 0.3622957221439999 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8747294010920715,
            "unit": "us/iter",
            "extra": "iterations: 802494\ncpu: 0.8746958818383695 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.9502342029098474,
            "unit": "us/iter",
            "extra": "iterations: 358642\ncpu: 1.950071645261843 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.8053346154725185,
            "unit": "us/iter",
            "extra": "iterations: 174968\ncpu: 3.8050488489323615 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.795423377025419,
            "unit": "us/iter",
            "extra": "iterations: 90482\ncpu: 7.794592272496171 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.760790538402096,
            "unit": "us/iter",
            "extra": "iterations: 44242\ncpu: 15.757153745309864 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 32.50349102337958,
            "unit": "us/iter",
            "extra": "iterations: 22113\ncpu: 32.49999081987976 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3619534528602596,
            "unit": "us/iter",
            "extra": "iterations: 1840199\ncpu: 0.3619263367711861 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.7256166721197352,
            "unit": "us/iter",
            "extra": "iterations: 898578\ncpu: 0.7255347649285872 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.477733014557031,
            "unit": "us/iter",
            "extra": "iterations: 485607\ncpu: 1.4775983398097625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.6949518948128497,
            "unit": "us/iter",
            "extra": "iterations: 258891\ncpu: 2.694680348100164 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.377442029424779,
            "unit": "us/iter",
            "extra": "iterations: 131998\ncpu: 5.377374611736518 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.451213794263444,
            "unit": "us/iter",
            "extra": "iterations: 65404\ncpu: 10.450681716714643 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 22.31814995670501,
            "unit": "us/iter",
            "extra": "iterations: 32336\ncpu: 22.317429366650178 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.2000827900938319,
            "unit": "us/iter",
            "extra": "iterations: 3546318\ncpu: 0.20006296671646526 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.38869767443146874,
            "unit": "us/iter",
            "extra": "iterations: 1808504\ncpu: 0.38867826667787314 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7521012714298669,
            "unit": "us/iter",
            "extra": "iterations: 950426\ncpu: 0.7520063666187586 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.3794369844850753,
            "unit": "us/iter",
            "extra": "iterations: 505320\ncpu: 1.3793022203751975 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.813626026282075,
            "unit": "us/iter",
            "extra": "iterations: 257970\ncpu: 2.8133601077644648 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.46732172140519,
            "unit": "us/iter",
            "extra": "iterations: 130986\ncpu: 5.465124540027172 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 11.263209264827184,
            "unit": "us/iter",
            "extra": "iterations: 59537\ncpu: 11.262507163612543 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.5488889138073473,
            "unit": "us/iter",
            "extra": "iterations: 1288648\ncpu: 0.5488647799864683 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 1.1788933204035064,
            "unit": "us/iter",
            "extra": "iterations: 586757\ncpu: 1.178732095228512 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 2.5560344120319454,
            "unit": "us/iter",
            "extra": "iterations: 269615\ncpu: 2.5559984310962074 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 5.4573040516421605,
            "unit": "us/iter",
            "extra": "iterations: 134464\ncpu: 5.456970876963347 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 11.074493890734017,
            "unit": "us/iter",
            "extra": "iterations: 65638\ncpu: 11.073546253694518 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 22.426951856074965,
            "unit": "us/iter",
            "extra": "iterations: 31572\ncpu: 22.425086278981365 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 45.63978255594499,
            "unit": "us/iter",
            "extra": "iterations: 14836\ncpu: 45.638434483688364 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.5603726794921361,
            "unit": "us/iter",
            "extra": "iterations: 1260877\ncpu: 0.5603518217875343 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9193576390552353,
            "unit": "us/iter",
            "extra": "iterations: 772301\ncpu: 0.9192865527818845 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.8196643937302366,
            "unit": "us/iter",
            "extra": "iterations: 383938\ncpu: 1.819513067213966 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.5055970680798207,
            "unit": "us/iter",
            "extra": "iterations: 197959\ncpu: 3.505543526689868 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 7.064555949836765,
            "unit": "us/iter",
            "extra": "iterations: 99196\ncpu: 7.06390572200492 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.976248792609226,
            "unit": "us/iter",
            "extra": "iterations: 49901\ncpu: 13.975002304563064 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 29.413758124106504,
            "unit": "us/iter",
            "extra": "iterations: 23818\ncpu: 29.41015165001255 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.36837504181793246,
            "unit": "us/iter",
            "extra": "iterations: 1933979\ncpu: 0.36766433658276715 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.7102639557036294,
            "unit": "us/iter",
            "extra": "iterations: 981570\ncpu: 0.7102356337296365 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.3801916088774864,
            "unit": "us/iter",
            "extra": "iterations: 497931\ncpu: 1.3801171005621198 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.696935134601575,
            "unit": "us/iter",
            "extra": "iterations: 263407\ncpu: 2.696784037629983 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.437386761479677,
            "unit": "us/iter",
            "extra": "iterations: 134018\ncpu: 5.436997254100158 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 11.067187292593065,
            "unit": "us/iter",
            "extra": "iterations: 63884\ncpu: 11.066345141193377 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 23.217419911943445,
            "unit": "us/iter",
            "extra": "iterations: 29299\ncpu: 23.21470647462373 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.23641138458288316,
            "unit": "us/iter",
            "extra": "iterations: 2944403\ncpu: 0.23639644097632234 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.37240643390889905,
            "unit": "us/iter",
            "extra": "iterations: 1834468\ncpu: 0.3723992928740107 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7262549397684688,
            "unit": "us/iter",
            "extra": "iterations: 970339\ncpu: 0.7262019675597793 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3909018000881161,
            "unit": "us/iter",
            "extra": "iterations: 478921\ncpu: 1.3908435462216064 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.730549313464092,
            "unit": "us/iter",
            "extra": "iterations: 259564\ncpu: 2.7304129270623143 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.47582874080935,
            "unit": "us/iter",
            "extra": "iterations: 120776\ncpu: 5.475459470424573 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 11.330475856296921,
            "unit": "us/iter",
            "extra": "iterations: 62128\ncpu: 11.329645312902311 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.5512482776513493,
            "unit": "us/iter",
            "extra": "iterations: 1314339\ncpu: 0.5511960841152892 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1632274598208188,
            "unit": "us/iter",
            "extra": "iterations: 603733\ncpu: 1.1631260905068925 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.3789519883215715,
            "unit": "us/iter",
            "extra": "iterations: 295928\ncpu: 2.378746532940485 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.192460518652226,
            "unit": "us/iter",
            "extra": "iterations: 137356\ncpu: 5.192140175893321 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.048488265524277,
            "unit": "us/iter",
            "extra": "iterations: 70050\ncpu: 10.047611763026419 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.580661449003735,
            "unit": "us/iter",
            "extra": "iterations: 34051\ncpu: 20.579231241373357 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 42.81094530205485,
            "unit": "us/iter",
            "extra": "iterations: 16454\ncpu: 42.80775464932567 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5402632246995155,
            "unit": "us/iter",
            "extra": "iterations: 1314907\ncpu: 0.5401689975032369 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9143534095948412,
            "unit": "us/iter",
            "extra": "iterations: 726098\ncpu: 0.9142502554751476 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.708907579833559,
            "unit": "us/iter",
            "extra": "iterations: 388465\ncpu: 1.7087049850051055 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.36646973974663,
            "unit": "us/iter",
            "extra": "iterations: 211102\ncpu: 3.366077033850974 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.710519132300607,
            "unit": "us/iter",
            "extra": "iterations: 104875\ncpu: 6.710025201430272 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.629080976814212,
            "unit": "us/iter",
            "extra": "iterations: 51064\ncpu: 13.627355710481018 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 27.968542285805068,
            "unit": "us/iter",
            "extra": "iterations: 25304\ncpu: 27.966416100220922 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.22921105057541175,
            "unit": "us/iter",
            "extra": "iterations: 3034756\ncpu: 0.22918805037373682 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3961606065390776,
            "unit": "us/iter",
            "extra": "iterations: 1760744\ncpu: 0.3961311877251936 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7513516139610973,
            "unit": "us/iter",
            "extra": "iterations: 926974\ncpu: 0.7512269071192954 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4677841550138893,
            "unit": "us/iter",
            "extra": "iterations: 476138\ncpu: 1.4676098358039047 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9610453270312136,
            "unit": "us/iter",
            "extra": "iterations: 235268\ncpu: 2.9607205867350963 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.972786962206039,
            "unit": "us/iter",
            "extra": "iterations: 117796\ncpu: 5.972299670617016 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.549834137019666,
            "unit": "us/iter",
            "extra": "iterations: 55992\ncpu: 12.548548239034185 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 373.78309044943643,
            "unit": "us/iter",
            "extra": "iterations: 1780\ncpu: 373.75415786516794 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 373.57077684093065,
            "unit": "us/iter",
            "extra": "iterations: 1779\ncpu: 373.53868071951257 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 380.8507466014275,
            "unit": "us/iter",
            "extra": "iterations: 1839\ncpu: 380.83117074497136 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 377.8783902702639,
            "unit": "us/iter",
            "extra": "iterations: 1850\ncpu: 377.86666054053916 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 387.49796400884856,
            "unit": "us/iter",
            "extra": "iterations: 1806\ncpu: 387.4480193798486 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 393.73266180758804,
            "unit": "us/iter",
            "extra": "iterations: 1715\ncpu: 393.70484839649504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 451.88626658551715,
            "unit": "us/iter",
            "extra": "iterations: 1643\ncpu: 451.8432361533776 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 370.03530303031863,
            "unit": "us/iter",
            "extra": "iterations: 1881\ncpu: 370.02339447103094 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 367.580309660585,
            "unit": "us/iter",
            "extra": "iterations: 1915\ncpu: 367.573051174931 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 367.8440694517067,
            "unit": "us/iter",
            "extra": "iterations: 1915\ncpu: 367.8045399477791 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 371.3034031385275,
            "unit": "us/iter",
            "extra": "iterations: 1848\ncpu: 371.26790530303003 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 384.93636423840803,
            "unit": "us/iter",
            "extra": "iterations: 1812\ncpu: 384.89160706401367 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 408.6944077181341,
            "unit": "us/iter",
            "extra": "iterations: 1788\ncpu: 408.68842281879284 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 426.5543813349701,
            "unit": "us/iter",
            "extra": "iterations: 1618\ncpu: 426.5103145859048 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 373.11777863435265,
            "unit": "us/iter",
            "extra": "iterations: 1816\ncpu: 373.0765346916305 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 371.61455620985475,
            "unit": "us/iter",
            "extra": "iterations: 1868\ncpu: 371.58709368308297 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 376.71428413864237,
            "unit": "us/iter",
            "extra": "iterations: 1904\ncpu: 376.66691018907613 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 375.84760986301137,
            "unit": "us/iter",
            "extra": "iterations: 1825\ncpu: 375.840980821916 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 384.8294799358106,
            "unit": "us/iter",
            "extra": "iterations: 1869\ncpu: 384.8234874264305 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 399.03527808989435,
            "unit": "us/iter",
            "extra": "iterations: 1780\ncpu: 398.99213258426914 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 433.4149035532979,
            "unit": "us/iter",
            "extra": "iterations: 1576\ncpu: 433.38273350253473 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 367.76781429316156,
            "unit": "us/iter",
            "extra": "iterations: 1917\ncpu: 367.5917584767834 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 370.27543216342127,
            "unit": "us/iter",
            "extra": "iterations: 1909\ncpu: 370.2218968046111 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 380.18115929201906,
            "unit": "us/iter",
            "extra": "iterations: 1921\ncpu: 380.1671561686635 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 374.6338883277354,
            "unit": "us/iter",
            "extra": "iterations: 1782\ncpu: 374.58893883276704 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 381.3436876042335,
            "unit": "us/iter",
            "extra": "iterations: 1799\ncpu: 381.32095330739503 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 404.1787578822187,
            "unit": "us/iter",
            "extra": "iterations: 1681\ncpu: 404.1102266508004 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 433.1666264984295,
            "unit": "us/iter",
            "extra": "iterations: 1585\ncpu: 433.1468788643579 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 376.20799637118347,
            "unit": "us/iter",
            "extra": "iterations: 1929\ncpu: 376.2034339035727 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 362.4139020217839,
            "unit": "us/iter",
            "extra": "iterations: 1929\ncpu: 362.36895645411903 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 380.4396238821912,
            "unit": "us/iter",
            "extra": "iterations: 1901\ncpu: 380.40816675434 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 370.8865932656541,
            "unit": "us/iter",
            "extra": "iterations: 1871\ncpu: 370.84597274185666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 386.09244420248405,
            "unit": "us/iter",
            "extra": "iterations: 1837\ncpu: 386.06315732172146 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 403.38095394359914,
            "unit": "us/iter",
            "extra": "iterations: 1737\ncpu: 403.3676551525679 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 432.0940689433032,
            "unit": "us/iter",
            "extra": "iterations: 1552\ncpu: 432.0523150773074 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 373.0568088627873,
            "unit": "us/iter",
            "extra": "iterations: 1873\ncpu: 373.0339578216677 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 367.02272132904716,
            "unit": "us/iter",
            "extra": "iterations: 1866\ncpu: 366.9766870310749 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 376.2009249592274,
            "unit": "us/iter",
            "extra": "iterations: 1839\ncpu: 376.16992985317705 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 382.1472303894621,
            "unit": "us/iter",
            "extra": "iterations: 1823\ncpu: 382.1421294569497 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 397.59422266287487,
            "unit": "us/iter",
            "extra": "iterations: 1765\ncpu: 397.54555410765715 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 434.20012566136387,
            "unit": "us/iter",
            "extra": "iterations: 1512\ncpu: 434.1379563492011 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 503.05474900000036,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 503.02074999999036 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 372.7686481381343,
            "unit": "us/iter",
            "extra": "iterations: 1853\ncpu: 372.7408019427972 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 371.0927913708056,
            "unit": "us/iter",
            "extra": "iterations: 1831\ncpu: 371.0472976515518 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 390.1679651029594,
            "unit": "us/iter",
            "extra": "iterations: 1748\ncpu: 390.13426887872595 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 463.56954447437965,
            "unit": "us/iter",
            "extra": "iterations: 1484\ncpu: 463.55188948787065 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 745.0896610348468,
            "unit": "us/iter",
            "extra": "iterations: 947\ncpu: 745.037814149953 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1906.6672330622991,
            "unit": "us/iter",
            "extra": "iterations: 369\ncpu: 1906.2989403794395 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 6385.54355555559,
            "unit": "us/iter",
            "extra": "iterations: 108\ncpu: 6385.013935184984 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 367.6647463389,
            "unit": "us/iter",
            "extra": "iterations: 1912\ncpu: 367.62029027196263 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 371.79515015808556,
            "unit": "us/iter",
            "extra": "iterations: 1898\ncpu: 371.76501369862626 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 407.04997586393864,
            "unit": "us/iter",
            "extra": "iterations: 1823\ncpu: 407.0352194185433 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 456.12645921645674,
            "unit": "us/iter",
            "extra": "iterations: 1557\ncpu: 456.07783943479797 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 696.0608929961021,
            "unit": "us/iter",
            "extra": "iterations: 1028\ncpu: 696.0122548637909 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1625.8900731131926,
            "unit": "us/iter",
            "extra": "iterations: 424\ncpu: 1625.7964386792503 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 5945.967221311519,
            "unit": "us/iter",
            "extra": "iterations: 122\ncpu: 5945.709836065375 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 369.35936241969523,
            "unit": "us/iter",
            "extra": "iterations: 1868\ncpu: 369.3405728051486 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 364.4606882352963,
            "unit": "us/iter",
            "extra": "iterations: 1870\ncpu: 364.437372727276 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 362.75903985316893,
            "unit": "us/iter",
            "extra": "iterations: 1907\ncpu: 362.7116360775971 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 388.6800177580485,
            "unit": "us/iter",
            "extra": "iterations: 1802\ncpu: 388.6362330743765 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 384.9983597972993,
            "unit": "us/iter",
            "extra": "iterations: 1776\ncpu: 384.95894594594546 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 404.73401308306677,
            "unit": "us/iter",
            "extra": "iterations: 1758\ncpu: 404.7071643913489 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 444.19961703471944,
            "unit": "us/iter",
            "extra": "iterations: 1585\ncpu: 444.1579135646712 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 362.51867947367157,
            "unit": "us/iter",
            "extra": "iterations: 1900\ncpu: 362.48441631577657 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 379.9030872446246,
            "unit": "us/iter",
            "extra": "iterations: 1811\ncpu: 379.85074047486876 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 394.27919092420376,
            "unit": "us/iter",
            "extra": "iterations: 1807\ncpu: 394.2556712783627 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 452.76882727274347,
            "unit": "us/iter",
            "extra": "iterations: 1540\ncpu: 452.73798246752267 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 721.1758793970084,
            "unit": "us/iter",
            "extra": "iterations: 995\ncpu: 721.1661296482256 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1772.1155288220182,
            "unit": "us/iter",
            "extra": "iterations: 399\ncpu: 1772.081944862189 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 6078.948227722961,
            "unit": "us/iter",
            "extra": "iterations: 101\ncpu: 6078.207623762457 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bc27c71e6b302a2345c8d83c21b783cc0a9c654",
          "message": "Google Benchmark for JKQ Tools (#6)\n\n✅ add multiple benchmarks for core package functionality\r\n\r\n♻️ changing maximum reference count to maximum supported by type\r\n♻️ restructure function order and/or visibility in package\r\n♻️ rewrote package reset functionality\r\n\r\n✨ provide const access methods for compute and unique tables\r\n\r\n💥 Add constexpr/inline definitions for gate matrices (moved from JKQ QFR)\r\n💥 move global SQRT_2 and PI constants to dd::ComplexNumbers class\r\n\r\n⬆️ googletest",
          "timestamp": "2021-03-26T17:30:38+01:00",
          "tree_id": "a88152eb5b464dd3df2e3763eba00c9e8bd03120",
          "url": "https://github.com/iic-jku/dd_package/commit/6bc27c71e6b302a2345c8d83c21b783cc0a9c654"
        },
        "date": 1616776841045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 5.710120321102154,
            "unit": "ns/iter",
            "extra": "iterations: 127708438\ncpu: 5.707888557841418 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 5.6351496191715045,
            "unit": "ns/iter",
            "extra": "iterations: 123103843\ncpu: 5.634334177528478 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 24.4471951737693,
            "unit": "us/iter",
            "extra": "iterations: 31536\ncpu: 24.446282914764083 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 14.160446579999757,
            "unit": "ms/iter",
            "extra": "iterations: 50\ncpu: 14.157616179999996 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 14.36495938775507,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 14.340179591836728 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 14.362372106382795,
            "unit": "ms/iter",
            "extra": "iterations: 47\ncpu: 14.361666319148936 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 14.415117306122497,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 14.391709224489787 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 13.941910760000269,
            "unit": "ms/iter",
            "extra": "iterations: 50\ncpu: 13.93291756 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 13.856258396226343,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 13.851871150943403 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 14.326219744680564,
            "unit": "ms/iter",
            "extra": "iterations: 47\ncpu: 14.312933425531916 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.4481236771095105,
            "unit": "ns/iter",
            "extra": "iterations: 112822559\ncpu: 6.44776136481711 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.27158662432337,
            "unit": "ns/iter",
            "extra": "iterations: 103723142\ncpu: 6.271283731455013 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.559069110540253,
            "unit": "ns/iter",
            "extra": "iterations: 106235170\ncpu: 6.5588315715031 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.437308770523469,
            "unit": "ns/iter",
            "extra": "iterations: 99816267\ncpu: 6.436311898941266 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.436785487952099,
            "unit": "ns/iter",
            "extra": "iterations: 109547488\ncpu: 6.436452819438457 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 6.959034991905826,
            "unit": "ns/iter",
            "extra": "iterations: 100754844\ncpu: 6.958649164302205 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.709230060021483,
            "unit": "ns/iter",
            "extra": "iterations: 105035720\ncpu: 6.709086823035059 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.17407347983610447,
            "unit": "us/iter",
            "extra": "iterations: 4009617\ncpu: 0.17406405948498305 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3460373722826636,
            "unit": "us/iter",
            "extra": "iterations: 2084486\ncpu: 0.3460062183195276 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6395532498845146,
            "unit": "us/iter",
            "extra": "iterations: 1058453\ncpu: 0.6394544500322623 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.2433512498554045,
            "unit": "us/iter",
            "extra": "iterations: 553344\ncpu: 1.2433076946709436 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.46148503607923,
            "unit": "us/iter",
            "extra": "iterations: 279940\ncpu: 2.4612499464170994 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.007631280000169,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.007404320000006 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.074534383364423,
            "unit": "us/iter",
            "extra": "iterations: 67998\ncpu: 10.073617474043347 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3430167640325138,
            "unit": "us/iter",
            "extra": "iterations: 1987350\ncpu: 0.3430087599064083 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.841829438312544,
            "unit": "us/iter",
            "extra": "iterations: 857719\ncpu: 0.8405562451105789 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.801782675369377,
            "unit": "us/iter",
            "extra": "iterations: 389307\ncpu: 1.801625341953787 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.7132912434354433,
            "unit": "us/iter",
            "extra": "iterations: 182229\ncpu: 3.7129381602269627 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.268934142759649,
            "unit": "us/iter",
            "extra": "iterations: 93976\ncpu: 7.2685218779262915 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.404752899793381,
            "unit": "us/iter",
            "extra": "iterations: 44917\ncpu: 14.404244428612737 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 29.86007451693963,
            "unit": "us/iter",
            "extra": "iterations: 23082\ncpu: 29.85900974785544 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3379770216411346,
            "unit": "us/iter",
            "extra": "iterations: 2031085\ncpu: 0.33795407183845066 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6748748737212638,
            "unit": "us/iter",
            "extra": "iterations: 1033428\ncpu: 0.6748497708597051 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2903450712450504,
            "unit": "us/iter",
            "extra": "iterations: 530844\ncpu: 1.2902033139679492 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.6114228813652933,
            "unit": "us/iter",
            "extra": "iterations: 272003\ncpu: 2.6113294522486914 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.34390777863938,
            "unit": "us/iter",
            "extra": "iterations: 136682\ncpu: 5.343559400652572 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.407602298077654,
            "unit": "us/iter",
            "extra": "iterations: 65446\ncpu: 10.40717660361216 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 20.889080026918638,
            "unit": "us/iter",
            "extra": "iterations: 35663\ncpu: 20.887906513753766 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.18041042350482195,
            "unit": "us/iter",
            "extra": "iterations: 3754668\ncpu: 0.1803967434670642 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.33599561484508383,
            "unit": "us/iter",
            "extra": "iterations: 2122616\ncpu: 0.33597391426428314 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6103441978095432,
            "unit": "us/iter",
            "extra": "iterations: 953321\ncpu: 0.6103279420048429 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2122087950724065,
            "unit": "us/iter",
            "extra": "iterations: 591604\ncpu: 1.2121195225184325 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.4156794323940276,
            "unit": "us/iter",
            "extra": "iterations: 302111\ncpu: 2.4155970620070013 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 4.903514657833272,
            "unit": "us/iter",
            "extra": "iterations: 132830\ncpu: 4.9029473612888435 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 9.077865535680726,
            "unit": "us/iter",
            "extra": "iterations: 69379\ncpu: 9.077236642211615 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.4371428549081261,
            "unit": "us/iter",
            "extra": "iterations: 1662071\ncpu: 0.4371129368119632 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 1.1074807791736727,
            "unit": "us/iter",
            "extra": "iterations: 667271\ncpu: 1.1074171183821786 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 2.389035976914139,
            "unit": "us/iter",
            "extra": "iterations: 303389\ncpu: 2.388912926968343 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 5.054280103299436,
            "unit": "us/iter",
            "extra": "iterations: 129720\ncpu: 5.053798196114706 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 9.341443590536526,
            "unit": "us/iter",
            "extra": "iterations: 67923\ncpu: 9.34119109874417 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 20.672843826632956,
            "unit": "us/iter",
            "extra": "iterations: 35070\ncpu: 20.671210749928832 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 41.85006533513918,
            "unit": "us/iter",
            "extra": "iterations: 17724\ncpu: 41.848012468968534 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.46380063586734555,
            "unit": "us/iter",
            "extra": "iterations: 1561961\ncpu: 0.46378448245506754 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.8100574723071164,
            "unit": "us/iter",
            "extra": "iterations: 837760\ncpu: 0.8099815197670016 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.6203566311316904,
            "unit": "us/iter",
            "extra": "iterations: 449041\ncpu: 1.6202629180854347 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.0521904711468855,
            "unit": "us/iter",
            "extra": "iterations: 226596\ncpu: 3.0519333748168567 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.227769106386778,
            "unit": "us/iter",
            "extra": "iterations: 116885\ncpu: 6.227503067117221 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.352346059582697,
            "unit": "us/iter",
            "extra": "iterations: 55083\ncpu: 13.35136631991711 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 28.213348455560237,
            "unit": "us/iter",
            "extra": "iterations: 25349\ncpu: 28.21045630991369 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.35989977727940425,
            "unit": "us/iter",
            "extra": "iterations: 1939650\ncpu: 0.35987205939215816 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.7104904467120281,
            "unit": "us/iter",
            "extra": "iterations: 1023993\ncpu: 0.710461997298812 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.358790643361707,
            "unit": "us/iter",
            "extra": "iterations: 538655\ncpu: 1.3586637588066528 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6129502589754456,
            "unit": "us/iter",
            "extra": "iterations: 281880\ncpu: 2.6128130871292634 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.105029000000059,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.104228789999965 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.454535287610458,
            "unit": "us/iter",
            "extra": "iterations: 72320\ncpu: 10.454309858960178 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.82724063380079,
            "unit": "us/iter",
            "extra": "iterations: 35153\ncpu: 19.825668876055996 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.19486256935278573,
            "unit": "us/iter",
            "extra": "iterations: 3732006\ncpu: 0.19485134000320425 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3574003148330419,
            "unit": "us/iter",
            "extra": "iterations: 1964851\ncpu: 0.35736370238761017 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6404553308449022,
            "unit": "us/iter",
            "extra": "iterations: 1011078\ncpu: 0.6404000433200954 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.2347593890150883,
            "unit": "us/iter",
            "extra": "iterations: 595563\ncpu: 1.234655311025039 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.52991190347124,
            "unit": "us/iter",
            "extra": "iterations: 298854\ncpu: 2.529763322558843 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 4.840306226834518,
            "unit": "us/iter",
            "extra": "iterations: 134900\ncpu: 4.839912972572273 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.410833565890155,
            "unit": "us/iter",
            "extra": "iterations: 69517\ncpu: 10.410553260353593 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.4523856965808691,
            "unit": "us/iter",
            "extra": "iterations: 1544372\ncpu: 0.45234248225168516 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.0525134304008605,
            "unit": "us/iter",
            "extra": "iterations: 676711\ncpu: 1.042404453304291 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.2100035699128826,
            "unit": "us/iter",
            "extra": "iterations: 320456\ncpu: 2.20981670182489 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.8281258821519,
            "unit": "us/iter",
            "extra": "iterations: 146375\ncpu: 4.827952942783947 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 9.686857349218569,
            "unit": "us/iter",
            "extra": "iterations: 75457\ncpu: 9.669136952171392 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.26916071428572,
            "unit": "us/iter",
            "extra": "iterations: 33992\ncpu: 20.26835402447598 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 39.658993991072805,
            "unit": "us/iter",
            "extra": "iterations: 17474\ncpu: 39.65697081377995 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.45271734220193094,
            "unit": "us/iter",
            "extra": "iterations: 1523878\ncpu: 0.45267570304185284 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8113772442822258,
            "unit": "us/iter",
            "extra": "iterations: 859072\ncpu: 0.8113478474446827 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.6160277704840922,
            "unit": "us/iter",
            "extra": "iterations: 434166\ncpu: 1.6158723345448702 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.270797144559535,
            "unit": "us/iter",
            "extra": "iterations: 219861\ncpu: 3.270634318956073 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.442132023593491,
            "unit": "us/iter",
            "extra": "iterations: 110200\ncpu: 6.441673702359394 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 12.641914580341258,
            "unit": "us/iter",
            "extra": "iterations: 57797\ncpu: 12.641279080228955 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 26.25903281179839,
            "unit": "us/iter",
            "extra": "iterations: 28953\ncpu: 26.25622353469421 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.1815592386794947,
            "unit": "us/iter",
            "extra": "iterations: 3505961\ncpu: 0.18154122792581015 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3539083565328969,
            "unit": "us/iter",
            "extra": "iterations: 2024105\ncpu: 0.3538777113835494 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.6919144453678222,
            "unit": "us/iter",
            "extra": "iterations: 940966\ncpu: 0.6918728232476016 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.356675166882165,
            "unit": "us/iter",
            "extra": "iterations: 496458\ncpu: 1.3565400497121736 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.714568440972204,
            "unit": "us/iter",
            "extra": "iterations: 267391\ncpu: 2.714394583213359 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.367330725526272,
            "unit": "us/iter",
            "extra": "iterations: 133062\ncpu: 5.366790375914959 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.942306625991431,
            "unit": "us/iter",
            "extra": "iterations: 59659\ncpu: 11.941964280326449 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 322.1499593764859,
            "unit": "us/iter",
            "extra": "iterations: 2117\ncpu: 322.1144459140308 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 334.26842552183183,
            "unit": "us/iter",
            "extra": "iterations: 2108\ncpu: 334.25603889942903 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 328.9169634317833,
            "unit": "us/iter",
            "extra": "iterations: 2133\ncpu: 328.8895583684915 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 330.08475741874065,
            "unit": "us/iter",
            "extra": "iterations: 2123\ncpu: 330.070293923698 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 344.3457028092762,
            "unit": "us/iter",
            "extra": "iterations: 2029\ncpu: 344.3215032035512 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 359.02320515463,
            "unit": "us/iter",
            "extra": "iterations: 1940\ncpu: 359.00241855669697 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 386.05940809626964,
            "unit": "us/iter",
            "extra": "iterations: 1828\ncpu: 386.0290645514278 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 323.3508724202535,
            "unit": "us/iter",
            "extra": "iterations: 2132\ncpu: 323.3040628517829 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 332.06762148455147,
            "unit": "us/iter",
            "extra": "iterations: 2169\ncpu: 332.0540456431503 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 335.5658292794834,
            "unit": "us/iter",
            "extra": "iterations: 2179\ncpu: 335.5315507113385 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 328.8289653767788,
            "unit": "us/iter",
            "extra": "iterations: 1964\ncpu: 328.81266446028803 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 347.4602512537522,
            "unit": "us/iter",
            "extra": "iterations: 1994\ncpu: 347.4401188565697 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 350.5644289340168,
            "unit": "us/iter",
            "extra": "iterations: 1970\ncpu: 350.5436532994969 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 381.3769120699171,
            "unit": "us/iter",
            "extra": "iterations: 1831\ncpu: 381.35664117968463 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 315.3167659963488,
            "unit": "us/iter",
            "extra": "iterations: 2188\ncpu: 315.2792477148102 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 337.37503887467255,
            "unit": "us/iter",
            "extra": "iterations: 1955\ncpu: 337.3581790281386 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 334.2815841098619,
            "unit": "us/iter",
            "extra": "iterations: 2039\ncpu: 334.2572780774892 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 336.5524689849716,
            "unit": "us/iter",
            "extra": "iterations: 2128\ncpu: 336.539037593988 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 340.75558966863144,
            "unit": "us/iter",
            "extra": "iterations: 2052\ncpu: 340.73411793372117 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 368.46348157894226,
            "unit": "us/iter",
            "extra": "iterations: 1900\ncpu: 368.43316315789974 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 419.5881669412221,
            "unit": "us/iter",
            "extra": "iterations: 1821\ncpu: 419.5467336628287 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 335.09964451673346,
            "unit": "us/iter",
            "extra": "iterations: 2152\ncpu: 335.0662802044589 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 323.7956148648512,
            "unit": "us/iter",
            "extra": "iterations: 2072\ncpu: 323.78167374517596 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 330.8672906814863,
            "unit": "us/iter",
            "extra": "iterations: 2157\ncpu: 330.84285581826765 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 345.1378890600855,
            "unit": "us/iter",
            "extra": "iterations: 1947\ncpu: 345.09392449922893 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 344.98520553937766,
            "unit": "us/iter",
            "extra": "iterations: 2058\ncpu: 344.97646161321836 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 356.0672302016624,
            "unit": "us/iter",
            "extra": "iterations: 2033\ncpu: 356.0274840137735 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 389.753204656188,
            "unit": "us/iter",
            "extra": "iterations: 1847\ncpu: 389.73534001083164 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 329.18873873462644,
            "unit": "us/iter",
            "extra": "iterations: 2197\ncpu: 329.15015976331483 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 319.04409035865206,
            "unit": "us/iter",
            "extra": "iterations: 2147\ncpu: 319.031397764325 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 323.83646084478266,
            "unit": "us/iter",
            "extra": "iterations: 2107\ncpu: 323.8266264831452 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 342.32582032755283,
            "unit": "us/iter",
            "extra": "iterations: 2076\ncpu: 342.302202312137 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 344.6515295902951,
            "unit": "us/iter",
            "extra": "iterations: 1977\ncpu: 344.6338027314069 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 356.11269163671267,
            "unit": "us/iter",
            "extra": "iterations: 1949\ncpu: 356.0726269881885 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 386.41630328324754,
            "unit": "us/iter",
            "extra": "iterations: 1797\ncpu: 386.383866444082 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 339.4790270924166,
            "unit": "us/iter",
            "extra": "iterations: 2067\ncpu: 339.4594586357057 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 336.54615744275253,
            "unit": "us/iter",
            "extra": "iterations: 2096\ncpu: 336.53323807252076 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 343.74312463201085,
            "unit": "us/iter",
            "extra": "iterations: 2038\ncpu: 343.71676104023976 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 346.4653574706686,
            "unit": "us/iter",
            "extra": "iterations: 1961\ncpu: 346.42445283018975 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 348.7148644067921,
            "unit": "us/iter",
            "extra": "iterations: 1947\ncpu: 348.7032121212039 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 386.2805736040471,
            "unit": "us/iter",
            "extra": "iterations: 1773\ncpu: 386.2326395939223 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 448.5249992565169,
            "unit": "us/iter",
            "extra": "iterations: 1345\ncpu: 448.49912788104325 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 334.25482956684294,
            "unit": "us/iter",
            "extra": "iterations: 2124\ncpu: 334.2165362523533 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 337.747016973819,
            "unit": "us/iter",
            "extra": "iterations: 2062\ncpu: 337.4485436469493 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 350.67972420537376,
            "unit": "us/iter",
            "extra": "iterations: 2045\ncpu: 350.64026992665373 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 414.52024952976274,
            "unit": "us/iter",
            "extra": "iterations: 1595\ncpu: 414.48680062696474 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 668.103077071292,
            "unit": "us/iter",
            "extra": "iterations: 1038\ncpu: 668.0271666666606 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1695.4877487684182,
            "unit": "us/iter",
            "extra": "iterations: 406\ncpu: 1695.3913596059494 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5862.773528455238,
            "unit": "us/iter",
            "extra": "iterations: 123\ncpu: 5862.133959349573 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 325.7122461904839,
            "unit": "us/iter",
            "extra": "iterations: 2100\ncpu: 325.69800523809874 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 335.50888645038305,
            "unit": "us/iter",
            "extra": "iterations: 2096\ncpu: 335.2731226145023 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 349.8291819100667,
            "unit": "us/iter",
            "extra": "iterations: 1979\ncpu: 349.7945154118231 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 416.89787413394,
            "unit": "us/iter",
            "extra": "iterations: 1732\ncpu: 416.8688903002358 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 657.8844947368548,
            "unit": "us/iter",
            "extra": "iterations: 1045\ncpu: 657.8544736842279 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1507.9472906724786,
            "unit": "us/iter",
            "extra": "iterations: 461\ncpu: 1507.922442516252 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 5355.212286885348,
            "unit": "us/iter",
            "extra": "iterations: 122\ncpu: 5354.958573770423 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 322.5542666362849,
            "unit": "us/iter",
            "extra": "iterations: 2194\ncpu: 322.5328518687399 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 327.43647307335607,
            "unit": "us/iter",
            "extra": "iterations: 2154\ncpu: 327.4215849582151 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 326.052414933836,
            "unit": "us/iter",
            "extra": "iterations: 2116\ncpu: 326.03248960302324 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 346.055746884009,
            "unit": "us/iter",
            "extra": "iterations: 2086\ncpu: 346.0198082454494 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 344.54271700878155,
            "unit": "us/iter",
            "extra": "iterations: 2046\ncpu: 344.5197429129993 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 352.97157560225077,
            "unit": "us/iter",
            "extra": "iterations: 1951\ncpu: 352.9308298308544 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 390.23957984083165,
            "unit": "us/iter",
            "extra": "iterations: 1885\ncpu: 390.2197198938898 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 332.17328907399553,
            "unit": "us/iter",
            "extra": "iterations: 2041\ncpu: 332.1531548260726 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 340.0178834059075,
            "unit": "us/iter",
            "extra": "iterations: 2067\ncpu: 339.9620464441221 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 355.8400200102634,
            "unit": "us/iter",
            "extra": "iterations: 1949\ncpu: 355.80179220112836 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 402.48323166473057,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 402.434098952258 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 642.6912178571545,
            "unit": "us/iter",
            "extra": "iterations: 1120\ncpu: 642.6552205357134 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1587.1863217592854,
            "unit": "us/iter",
            "extra": "iterations: 432\ncpu: 1587.01112037035 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5624.345035398438,
            "unit": "us/iter",
            "extra": "iterations: 113\ncpu: 5624.175353982114 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "04cbca3f302eede858bdada942574347efdf862b",
          "message": "Remove line",
          "timestamp": "2021-03-26T16:30:42Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/04cbca3f302eede858bdada942574347efdf862b"
        },
        "date": 1617106339746,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.951176591604813,
            "unit": "ns/iter",
            "extra": "iterations: 71604157\ncpu: 9.929788182549235 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.733482920301304,
            "unit": "ns/iter",
            "extra": "iterations: 71956803\ncpu: 9.732259950459444 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 26.689976548620287,
            "unit": "us/iter",
            "extra": "iterations: 25329\ncpu: 26.683375379999205 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 11.192860283333061,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 11.192080266666663 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 11.532528140844773,
            "unit": "ms/iter",
            "extra": "iterations: 71\ncpu: 11.171867577464784 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.752479603174907,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 10.752127238095245 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 11.013347846153902,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 11.005777061538453 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 11.00011609523808,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 10.99184784126983 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 11.339172360655565,
            "unit": "ms/iter",
            "extra": "iterations: 61\ncpu: 11.338134655737708 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.460572584615262,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 10.449678723076927 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.196656064326407,
            "unit": "ns/iter",
            "extra": "iterations: 98428269\ncpu: 7.196167393739295 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.165627427744621,
            "unit": "ns/iter",
            "extra": "iterations: 98200710\ncpu: 7.165307674455712 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.299422939725052,
            "unit": "ns/iter",
            "extra": "iterations: 96560277\ncpu: 7.299097754245246 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.1177237676202605,
            "unit": "ns/iter",
            "extra": "iterations: 98636590\ncpu: 7.117319262557636 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.208876730428702,
            "unit": "ns/iter",
            "extra": "iterations: 98720470\ncpu: 7.208202088178861 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.193482430112847,
            "unit": "ns/iter",
            "extra": "iterations: 96455828\ncpu: 7.19300967485344 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.2081569346762455,
            "unit": "ns/iter",
            "extra": "iterations: 97099662\ncpu: 7.207436015585707 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.18653414970338283,
            "unit": "us/iter",
            "extra": "iterations: 3783415\ncpu: 0.18652780649228265 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3726643711345948,
            "unit": "us/iter",
            "extra": "iterations: 1866234\ncpu: 0.37262814791714305 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6881673304035856,
            "unit": "us/iter",
            "extra": "iterations: 946158\ncpu: 0.6881325581985271 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3848465064896593,
            "unit": "us/iter",
            "extra": "iterations: 501487\ncpu: 1.3847468030078536 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.5782723663752702,
            "unit": "us/iter",
            "extra": "iterations: 272049\ncpu: 2.57813856694933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.15943184240856,
            "unit": "us/iter",
            "extra": "iterations: 138840\ncpu: 5.158945671276296 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.800031680915406,
            "unit": "us/iter",
            "extra": "iterations: 66791\ncpu: 10.799447784881178 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.34015473553660375,
            "unit": "us/iter",
            "extra": "iterations: 2037541\ncpu: 0.3401262202821935 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8118584293059028,
            "unit": "us/iter",
            "extra": "iterations: 854845\ncpu: 0.8118236849955237 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.7218286585543305,
            "unit": "us/iter",
            "extra": "iterations: 412212\ncpu: 1.7216195404306502 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.5424777296728718,
            "unit": "us/iter",
            "extra": "iterations: 199795\ncpu: 3.542340589103822 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.961327896260326,
            "unit": "us/iter",
            "extra": "iterations: 95701\ncpu: 6.960595406526581 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.030695293768275,
            "unit": "us/iter",
            "extra": "iterations: 50465\ncpu: 14.02960939264839 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 28.170349189146474,
            "unit": "us/iter",
            "extra": "iterations: 24912\ncpu: 28.167611512524143 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.33121761993428367,
            "unit": "us/iter",
            "extra": "iterations: 2088623\ncpu: 0.331201963686123 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6727941783993676,
            "unit": "us/iter",
            "extra": "iterations: 1068950\ncpu: 0.6727354291594542 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3061881897739245,
            "unit": "us/iter",
            "extra": "iterations: 532149\ncpu: 1.306121665172729 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.5721446049920433,
            "unit": "us/iter",
            "extra": "iterations: 267349\ncpu: 2.571914568597597 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.898939480125609,
            "unit": "us/iter",
            "extra": "iterations: 143804\ncpu: 4.898839343829098 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.733058560730653,
            "unit": "us/iter",
            "extra": "iterations: 70508\ncpu: 9.732210430022146 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 20.137726794850316,
            "unit": "us/iter",
            "extra": "iterations: 35574\ncpu: 20.136931270028708 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19488147844424325,
            "unit": "us/iter",
            "extra": "iterations: 3697319\ncpu: 0.1948644931638312 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3793995592277492,
            "unit": "us/iter",
            "extra": "iterations: 1844490\ncpu: 0.3793849210350803 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7280401777677008,
            "unit": "us/iter",
            "extra": "iterations: 988706\ncpu: 0.7255440869176482 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.4175449397566868,
            "unit": "us/iter",
            "extra": "iterations: 492170\ncpu: 1.4174945506633894 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.6461817695167325,
            "unit": "us/iter",
            "extra": "iterations: 269000\ncpu: 2.645850914498135 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.249369776180081,
            "unit": "us/iter",
            "extra": "iterations: 135198\ncpu: 5.249256608825577 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 11.041204076007574,
            "unit": "us/iter",
            "extra": "iterations: 65309\ncpu: 11.040254742837897 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.33649114193470187,
            "unit": "us/iter",
            "extra": "iterations: 2086065\ncpu: 0.3364737407511279 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.820679224630174,
            "unit": "us/iter",
            "extra": "iterations: 863330\ncpu: 0.8206018498140972 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7453965492295467,
            "unit": "us/iter",
            "extra": "iterations: 407793\ncpu: 1.74532739894996 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.558518642224253,
            "unit": "us/iter",
            "extra": "iterations: 194907\ncpu: 3.5581948980796176 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.936386284688241,
            "unit": "us/iter",
            "extra": "iterations: 101332\ncpu: 6.935910610665949 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 14.030353995861356,
            "unit": "us/iter",
            "extra": "iterations: 50252\ncpu: 14.029078424739325 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 28.31318968231536,
            "unit": "us/iter",
            "extra": "iterations: 24773\ncpu: 28.31219262907202 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.6835960190149363,
            "unit": "us/iter",
            "extra": "iterations: 1017939\ncpu: 0.6835316733124456 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9311024563115491,
            "unit": "us/iter",
            "extra": "iterations: 737895\ncpu: 0.9310562437745247 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7712626323744454,
            "unit": "us/iter",
            "extra": "iterations: 398302\ncpu: 1.7710856310036271 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.3361839165583715,
            "unit": "us/iter",
            "extra": "iterations: 209296\ncpu: 3.33605729684275 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.476666933230358,
            "unit": "us/iter",
            "extra": "iterations: 108792\ncpu: 6.475978463489989 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.024851495824638,
            "unit": "us/iter",
            "extra": "iterations: 54719\ncpu: 13.024372685904334 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 26.26209054603688,
            "unit": "us/iter",
            "extra": "iterations: 26793\ncpu: 26.25901511588867 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3712637890553011,
            "unit": "us/iter",
            "extra": "iterations: 1941703\ncpu: 0.3682321719645075 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6917686547088872,
            "unit": "us/iter",
            "extra": "iterations: 1014851\ncpu: 0.6916756361278676 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.379718061147877,
            "unit": "us/iter",
            "extra": "iterations: 527508\ncpu: 1.3796062145029102 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.5336432142568928,
            "unit": "us/iter",
            "extra": "iterations: 272822\ncpu: 2.5332898739837724 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.915815278059614,
            "unit": "us/iter",
            "extra": "iterations: 142793\ncpu: 4.915311051662189 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.93691634938541,
            "unit": "us/iter",
            "extra": "iterations: 71703\ncpu: 9.935947073344227 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 20.12209086634575,
            "unit": "us/iter",
            "extra": "iterations: 34028\ncpu: 20.117474080169373 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.28144594892684005,
            "unit": "us/iter",
            "extra": "iterations: 2448018\ncpu: 0.2814225013868348 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3869444188689395,
            "unit": "us/iter",
            "extra": "iterations: 1822489\ncpu: 0.3859925338369657 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7776852142840025,
            "unit": "us/iter",
            "extra": "iterations: 896054\ncpu: 0.7775793066042793 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3815979605385884,
            "unit": "us/iter",
            "extra": "iterations: 515136\ncpu: 1.381434702680451 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.653528491722348,
            "unit": "us/iter",
            "extra": "iterations: 262392\ncpu: 2.6531546236165497 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.357432805496845,
            "unit": "us/iter",
            "extra": "iterations: 131417\ncpu: 5.357271486946142 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.831830078362765,
            "unit": "us/iter",
            "extra": "iterations: 65848\ncpu: 10.83084295650584 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.7018355561438498,
            "unit": "us/iter",
            "extra": "iterations: 1019880\ncpu: 0.7018022179079898 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.3106956507088556,
            "unit": "us/iter",
            "extra": "iterations: 534156\ncpu: 1.3105415758692376 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.6917327597177763,
            "unit": "us/iter",
            "extra": "iterations: 267194\ncpu: 2.691575192556764 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.411558006523351,
            "unit": "us/iter",
            "extra": "iterations: 130606\ncpu: 5.410763249774114 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.99457002464873,
            "unit": "us/iter",
            "extra": "iterations: 62478\ncpu: 10.994158679855222 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 21.87322002992278,
            "unit": "us/iter",
            "extra": "iterations: 32082\ncpu: 21.872780531138815 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 45.737105915343264,
            "unit": "us/iter",
            "extra": "iterations: 15333\ncpu: 45.73327104937129 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.6999958056196219,
            "unit": "us/iter",
            "extra": "iterations: 1014691\ncpu: 0.6999533296343368 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 1.0387621462488683,
            "unit": "us/iter",
            "extra": "iterations: 672224\ncpu: 1.038689997679336 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.951043435576018,
            "unit": "us/iter",
            "extra": "iterations: 360580\ncpu: 1.9508637251095362 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.623417954938191,
            "unit": "us/iter",
            "extra": "iterations: 189207\ncpu: 3.6232451283514826 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 7.200363826615744,
            "unit": "us/iter",
            "extra": "iterations: 97956\ncpu: 7.200213759238904 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.234016534737382,
            "unit": "us/iter",
            "extra": "iterations: 49774\ncpu: 14.233146602644004 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 28.822836743213813,
            "unit": "us/iter",
            "extra": "iterations: 23950\ncpu: 28.82092025052174 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.2894252151727879,
            "unit": "us/iter",
            "extra": "iterations: 2446987\ncpu: 0.2894105849356757 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.49891542254506954,
            "unit": "us/iter",
            "extra": "iterations: 1417198\ncpu: 0.49887576683003787 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.8771961542929473,
            "unit": "us/iter",
            "extra": "iterations: 791948\ncpu: 0.8771182438746136 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.6372253898484501,
            "unit": "us/iter",
            "extra": "iterations: 434079\ncpu: 1.6370263500422733 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 3.114198874634877,
            "unit": "us/iter",
            "extra": "iterations: 227304\ncpu: 3.1140488552775065 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 6.148823241882217,
            "unit": "us/iter",
            "extra": "iterations: 115180\ncpu: 6.148254566765088 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.676533879683019,
            "unit": "us/iter",
            "extra": "iterations: 55520\ncpu: 12.675878242075159 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 369.20077016341736,
            "unit": "us/iter",
            "extra": "iterations: 1897\ncpu: 369.1521671059521 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 379.8730416889338,
            "unit": "us/iter",
            "extra": "iterations: 1871\ncpu: 379.85631266702626 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 386.8642255225599,
            "unit": "us/iter",
            "extra": "iterations: 1818\ncpu: 386.8288569857033 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 388.6609966814054,
            "unit": "us/iter",
            "extra": "iterations: 1808\ncpu: 388.6550232300868 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 419.2121471291784,
            "unit": "us/iter",
            "extra": "iterations: 1672\ncpu: 419.1491088516777 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 466.7606801346821,
            "unit": "us/iter",
            "extra": "iterations: 1485\ncpu: 466.71468686868246 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 566.295020441526,
            "unit": "us/iter",
            "extra": "iterations: 1223\ncpu: 566.1772771872401 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 372.7934964682137,
            "unit": "us/iter",
            "extra": "iterations: 1982\ncpu: 372.7589354187699 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 367.90768485167507,
            "unit": "us/iter",
            "extra": "iterations: 1888\ncpu: 367.89412552966337 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 362.6466814928431,
            "unit": "us/iter",
            "extra": "iterations: 1956\ncpu: 362.61912525562553 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 378.3490576414766,
            "unit": "us/iter",
            "extra": "iterations: 1891\ncpu: 378.3051649920734 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 384.20052802199643,
            "unit": "us/iter",
            "extra": "iterations: 1820\ncpu: 384.1772318681377 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 399.40928144745715,
            "unit": "us/iter",
            "extra": "iterations: 1741\ncpu: 399.37413038483464 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 422.89036237981475,
            "unit": "us/iter",
            "extra": "iterations: 1664\ncpu: 422.8758792067351 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 366.9552997892674,
            "unit": "us/iter",
            "extra": "iterations: 1898\ncpu: 366.9107792413073 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 355.50890650405097,
            "unit": "us/iter",
            "extra": "iterations: 1968\ncpu: 355.5006250000048 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 357.5338476141672,
            "unit": "us/iter",
            "extra": "iterations: 1949\ncpu: 357.49808568496684 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 370.46240352697686,
            "unit": "us/iter",
            "extra": "iterations: 1928\ncpu: 370.4277043568486 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 383.66237208040843,
            "unit": "us/iter",
            "extra": "iterations: 1841\ncpu: 383.64173112438885 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 387.69542897089923,
            "unit": "us/iter",
            "extra": "iterations: 1788\ncpu: 387.6513573825498 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 408.53465593915104,
            "unit": "us/iter",
            "extra": "iterations: 1709\ncpu: 408.52687361030013 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 369.4783500784761,
            "unit": "us/iter",
            "extra": "iterations: 1911\ncpu: 369.45244740972964 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 373.4638372827805,
            "unit": "us/iter",
            "extra": "iterations: 1899\ncpu: 373.44214165349536 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 370.55411699313646,
            "unit": "us/iter",
            "extra": "iterations: 1889\ncpu: 370.5212424563252 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 363.87607931403323,
            "unit": "us/iter",
            "extra": "iterations: 1866\ncpu: 363.84065594855423 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 369.15752198954135,
            "unit": "us/iter",
            "extra": "iterations: 1910\ncpu: 369.1493020942429 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 393.2351678710497,
            "unit": "us/iter",
            "extra": "iterations: 1799\ncpu: 393.20220511395246 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 424.4486810877726,
            "unit": "us/iter",
            "extra": "iterations: 1618\ncpu: 424.4090636588351 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 370.16603823990744,
            "unit": "us/iter",
            "extra": "iterations: 1909\ncpu: 370.14471870089136 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 369.00577267759047,
            "unit": "us/iter",
            "extra": "iterations: 1830\ncpu: 368.9726579235012 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 375.1846256830484,
            "unit": "us/iter",
            "extra": "iterations: 1830\ncpu: 375.1746803278652 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 374.1028393144221,
            "unit": "us/iter",
            "extra": "iterations: 1867\ncpu: 374.0589185859699 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 385.2379489685083,
            "unit": "us/iter",
            "extra": "iterations: 1842\ncpu: 385.22681976113773 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 400.40784142773816,
            "unit": "us/iter",
            "extra": "iterations: 1709\ncpu: 400.3859572849666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 422.07827250899265,
            "unit": "us/iter",
            "extra": "iterations: 1666\ncpu: 422.03217406962403 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 367.7045002647185,
            "unit": "us/iter",
            "extra": "iterations: 1889\ncpu: 367.67363737428184 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 372.80548270357036,
            "unit": "us/iter",
            "extra": "iterations: 1879\ncpu: 372.77307184671963 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 375.63815538290777,
            "unit": "us/iter",
            "extra": "iterations: 1802\ncpu: 375.6327164261905 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 373.3707698195692,
            "unit": "us/iter",
            "extra": "iterations: 1829\ncpu: 373.345510661577 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 393.6542852272528,
            "unit": "us/iter",
            "extra": "iterations: 1760\ncpu: 393.62922840910517 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 424.1588636085802,
            "unit": "us/iter",
            "extra": "iterations: 1635\ncpu: 424.1438177369925 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 476.45202859042274,
            "unit": "us/iter",
            "extra": "iterations: 1504\ncpu: 476.3937174202136 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 367.10704277517283,
            "unit": "us/iter",
            "extra": "iterations: 1917\ncpu: 367.0938977569191 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 361.76279597244064,
            "unit": "us/iter",
            "extra": "iterations: 1887\ncpu: 361.7546348701644 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 390.6396421223734,
            "unit": "us/iter",
            "extra": "iterations: 1847\ncpu: 390.5956247969781 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 459.4793722580356,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 459.4683400000026 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 696.8738127530513,
            "unit": "us/iter",
            "extra": "iterations: 988\ncpu: 696.8254321862165 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1691.9438444975447,
            "unit": "us/iter",
            "extra": "iterations: 418\ncpu: 1691.80173923446 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5821.892733333319,
            "unit": "us/iter",
            "extra": "iterations: 120\ncpu: 5821.6802250001365 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 367.99137773152574,
            "unit": "us/iter",
            "extra": "iterations: 1922\ncpu: 367.9518881373556 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 371.12370270269037,
            "unit": "us/iter",
            "extra": "iterations: 1887\ncpu: 371.0930190779033 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 388.3209662797178,
            "unit": "us/iter",
            "extra": "iterations: 1809\ncpu: 388.31184521834956 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 442.2526468305181,
            "unit": "us/iter",
            "extra": "iterations: 1546\ncpu: 442.20284087969264 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 670.592314606767,
            "unit": "us/iter",
            "extra": "iterations: 1068\ncpu: 670.543063670434 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1476.7063680851413,
            "unit": "us/iter",
            "extra": "iterations: 470\ncpu: 1476.5582808510235 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4975.4984927535525,
            "unit": "us/iter",
            "extra": "iterations: 138\ncpu: 4975.177478260909 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 360.924818642351,
            "unit": "us/iter",
            "extra": "iterations: 1974\ncpu: 360.8869260385045 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 369.30825941423126,
            "unit": "us/iter",
            "extra": "iterations: 1912\ncpu: 369.29293514645184 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 371.2160254776836,
            "unit": "us/iter",
            "extra": "iterations: 1884\ncpu: 371.1741464968192 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 370.68899034333003,
            "unit": "us/iter",
            "extra": "iterations: 1864\ncpu: 370.6665654506462 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 371.8755520262733,
            "unit": "us/iter",
            "extra": "iterations: 1826\ncpu: 371.8514008762359 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 405.59967565949336,
            "unit": "us/iter",
            "extra": "iterations: 1668\ncpu: 405.56993944843845 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 431.6417615725804,
            "unit": "us/iter",
            "extra": "iterations: 1577\ncpu: 431.6132897907483 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 366.71615755968156,
            "unit": "us/iter",
            "extra": "iterations: 1885\ncpu: 366.6860779840763 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 383.77777801492965,
            "unit": "us/iter",
            "extra": "iterations: 1874\ncpu: 383.7665186766322 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 396.00579518747304,
            "unit": "us/iter",
            "extra": "iterations: 1787\ncpu: 395.9616989367672 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 442.7355275287984,
            "unit": "us/iter",
            "extra": "iterations: 1562\ncpu: 442.69826760563336 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 660.0143225806412,
            "unit": "us/iter",
            "extra": "iterations: 1054\ncpu: 659.9508500948658 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1606.4651573033648,
            "unit": "us/iter",
            "extra": "iterations: 445\ncpu: 1606.3730224718813 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5424.651167999855,
            "unit": "us/iter",
            "extra": "iterations: 125\ncpu: 5424.263167999925 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "committer": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "distinct": true,
          "id": "df9e633786b3812f4854ad4f9245d918bce728ed",
          "message": "🐛 Fix SWAP and GHZ benchmarks",
          "timestamp": "2021-04-01T16:15:49+02:00",
          "tree_id": "e1157be4935fa89e295b770b1a6761e6c614bf31",
          "url": "https://github.com/iic-jku/dd_package/commit/df9e633786b3812f4854ad4f9245d918bce728ed"
        },
        "date": 1617289921121,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 10.102711809092646,
            "unit": "ns/iter",
            "extra": "iterations: 67601477\ncpu: 10.092150812030336 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.957732788666688,
            "unit": "ns/iter",
            "extra": "iterations: 70138552\ncpu: 9.957312463479427 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 26.783194608065536,
            "unit": "us/iter",
            "extra": "iterations: 26484\ncpu: 26.782985236369136 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 11.78903204918028,
            "unit": "ms/iter",
            "extra": "iterations: 61\ncpu: 11.775462721311479 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 11.603476433333526,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 11.59947925 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 12.155323542372772,
            "unit": "ms/iter",
            "extra": "iterations: 59\ncpu: 12.143136067796624 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 12.105583392857357,
            "unit": "ms/iter",
            "extra": "iterations: 56\ncpu: 12.101958696428573 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 11.704536693548379,
            "unit": "ms/iter",
            "extra": "iterations: 62\ncpu: 11.700900564516129 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 11.09965830645185,
            "unit": "ms/iter",
            "extra": "iterations: 62\ncpu: 11.099288854838708 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 11.710666301587661,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 11.70925079365078 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.764129333600297,
            "unit": "ns/iter",
            "extra": "iterations: 92281263\ncpu: 7.763725871415516 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.628756131659832,
            "unit": "ns/iter",
            "extra": "iterations: 91240179\ncpu: 7.628464418071778 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.648507967046232,
            "unit": "ns/iter",
            "extra": "iterations: 90166038\ncpu: 7.647887234437433 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.607938668925954,
            "unit": "ns/iter",
            "extra": "iterations: 91722379\ncpu: 7.607676213893222 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.636804209133773,
            "unit": "ns/iter",
            "extra": "iterations: 92316191\ncpu: 7.636271160711135 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.724302201554,
            "unit": "ns/iter",
            "extra": "iterations: 92479498\ncpu: 7.723909811880676 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.672058776547922,
            "unit": "ns/iter",
            "extra": "iterations: 87675513\ncpu: 7.671651273942361 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.19385884723027771,
            "unit": "us/iter",
            "extra": "iterations: 3424049\ncpu: 0.19384812892572464 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3904637046488471,
            "unit": "us/iter",
            "extra": "iterations: 1801002\ncpu: 0.3904372688092505 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7203593022623163,
            "unit": "us/iter",
            "extra": "iterations: 974177\ncpu: 0.7203214990704949 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3973667205816236,
            "unit": "us/iter",
            "extra": "iterations: 499552\ncpu: 1.3929617317116125 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.7380029730796385,
            "unit": "us/iter",
            "extra": "iterations: 245873\ncpu: 2.737877542471121 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.405047990883306,
            "unit": "us/iter",
            "extra": "iterations: 124607\ncpu: 5.404570080332565 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 11.003157048115945,
            "unit": "us/iter",
            "extra": "iterations: 63783\ncpu: 11.002465218004769 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3620975191733913,
            "unit": "us/iter",
            "extra": "iterations: 1912024\ncpu: 0.3620768049982639 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8884438109900257,
            "unit": "us/iter",
            "extra": "iterations: 796339\ncpu: 0.8884147002721211 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.8841015293581909,
            "unit": "us/iter",
            "extra": "iterations: 375517\ncpu: 1.884008100831652 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.822831182766109,
            "unit": "us/iter",
            "extra": "iterations: 181735\ncpu: 3.822658689850618 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.788743007379384,
            "unit": "us/iter",
            "extra": "iterations: 90524\ncpu: 7.787957293093534 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.485285068675372,
            "unit": "us/iter",
            "extra": "iterations: 45140\ncpu: 15.484470890562763 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 31.990688618143885,
            "unit": "us/iter",
            "extra": "iterations: 22079\ncpu: 31.98751505955883 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.37123687033959935,
            "unit": "us/iter",
            "extra": "iterations: 1899516\ncpu: 0.37122174911925027 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.7248714780040085,
            "unit": "us/iter",
            "extra": "iterations: 960038\ncpu: 0.7248230642953717 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.4000805719777196,
            "unit": "us/iter",
            "extra": "iterations: 500509\ncpu: 1.4000194082424093 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.6874164716494993,
            "unit": "us/iter",
            "extra": "iterations: 259379\ncpu: 2.6872025761530285 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.333830675622073,
            "unit": "us/iter",
            "extra": "iterations: 131316\ncpu: 5.33357817021537 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.569484133040035,
            "unit": "us/iter",
            "extra": "iterations: 66837\ncpu: 10.568942157786827 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 21.45157565628106,
            "unit": "us/iter",
            "extra": "iterations: 32608\ncpu: 21.450285819430714 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19868742124192276,
            "unit": "us/iter",
            "extra": "iterations: 3523448\ncpu: 0.1986675330528504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.39800811793904506,
            "unit": "us/iter",
            "extra": "iterations: 1775697\ncpu: 0.39799036209443606 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7296298345110299,
            "unit": "us/iter",
            "extra": "iterations: 967859\ncpu: 0.7295907337742366 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.3967099779431118,
            "unit": "us/iter",
            "extra": "iterations: 500524\ncpu: 1.3966383749830165 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.758767163153634,
            "unit": "us/iter",
            "extra": "iterations: 253246\ncpu: 2.758576214431821 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.406923808237876,
            "unit": "us/iter",
            "extra": "iterations: 125906\ncpu: 5.40648358299053 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 11.068442576067847,
            "unit": "us/iter",
            "extra": "iterations: 63989\ncpu: 11.05654195252306 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.5574787647289882,
            "unit": "us/iter",
            "extra": "iterations: 1218939\ncpu: 0.5574489412513699 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 1.1885673002721115,
            "unit": "us/iter",
            "extra": "iterations: 590904\ncpu: 1.1884805789096045 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 2.608011956460908,
            "unit": "us/iter",
            "extra": "iterations: 267805\ncpu: 2.607909714157704 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 5.486520485238699,
            "unit": "us/iter",
            "extra": "iterations: 131729\ncpu: 5.465925513744085 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 11.029617245930298,
            "unit": "us/iter",
            "extra": "iterations: 63644\ncpu: 11.028750471371941 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 22.297015434554012,
            "unit": "us/iter",
            "extra": "iterations: 31423\ncpu: 22.295318524647502 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 46.44156393098602,
            "unit": "us/iter",
            "extra": "iterations: 15243\ncpu: 46.439773207373854 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.5545055734653281,
            "unit": "us/iter",
            "extra": "iterations: 1269946\ncpu: 0.5544683222751235 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9295392899497995,
            "unit": "us/iter",
            "extra": "iterations: 751299\ncpu: 0.9294701031147379 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.8545304589552711,
            "unit": "us/iter",
            "extra": "iterations: 376638\ncpu: 1.8544127092858287 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.540327041061887,
            "unit": "us/iter",
            "extra": "iterations: 197385\ncpu: 3.5401990728778943 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 7.054438313499915,
            "unit": "us/iter",
            "extra": "iterations: 98571\ncpu: 7.053979963680995 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 14.254317134983525,
            "unit": "us/iter",
            "extra": "iterations: 49717\ncpu: 14.253156807530601 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 28.813099389204982,
            "unit": "us/iter",
            "extra": "iterations: 24067\ncpu: 28.810240121328007 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3646635423818588,
            "unit": "us/iter",
            "extra": "iterations: 1931322\ncpu: 0.36465199070895293 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.705979955628543,
            "unit": "us/iter",
            "extra": "iterations: 971345\ncpu: 0.7059616058146138 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.4397593095549601,
            "unit": "us/iter",
            "extra": "iterations: 488960\ncpu: 1.4396609559064217 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.716289758774532,
            "unit": "us/iter",
            "extra": "iterations: 260213\ncpu: 2.716173334921785 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.329736780753458,
            "unit": "us/iter",
            "extra": "iterations: 132969\ncpu: 5.329273334386229 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.530772066498375,
            "unit": "us/iter",
            "extra": "iterations: 66107\ncpu: 10.530127581042803 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 21.21352729661191,
            "unit": "us/iter",
            "extra": "iterations: 32733\ncpu: 21.2116348944491 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.24342252542535106,
            "unit": "us/iter",
            "extra": "iterations: 2977835\ncpu: 0.24340350858929416 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.38864709147623294,
            "unit": "us/iter",
            "extra": "iterations: 1797888\ncpu: 0.38863975397799844 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7551433070010329,
            "unit": "us/iter",
            "extra": "iterations: 957127\ncpu: 0.7550810446262647 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.410003611285487,
            "unit": "us/iter",
            "extra": "iterations: 490684\ncpu: 1.4099039748595952 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.737572252239606,
            "unit": "us/iter",
            "extra": "iterations: 256518\ncpu: 2.7374945150048275 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.607550758011912,
            "unit": "us/iter",
            "extra": "iterations: 125064\ncpu: 5.607119426853456 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 11.191934330813412,
            "unit": "us/iter",
            "extra": "iterations: 63226\ncpu: 11.19129125676149 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.5510448362665779,
            "unit": "us/iter",
            "extra": "iterations: 1106738\ncpu: 0.551001047221656 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1092221461263316,
            "unit": "us/iter",
            "extra": "iterations: 630783\ncpu: 1.1091478115294835 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.397837275492427,
            "unit": "us/iter",
            "extra": "iterations: 276160\ncpu: 2.397580366454236 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.934699155095263,
            "unit": "us/iter",
            "extra": "iterations: 139424\ncpu: 4.934290323043379 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.254550284981342,
            "unit": "us/iter",
            "extra": "iterations: 70180\ncpu: 10.254071672841372 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.66851096865199,
            "unit": "us/iter",
            "extra": "iterations: 34006\ncpu: 20.667906310650785 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 41.940043676779894,
            "unit": "us/iter",
            "extra": "iterations: 16645\ncpu: 41.93576797837228 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5467055067628157,
            "unit": "us/iter",
            "extra": "iterations: 1183236\ncpu: 0.5466607194169264 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8887823772870893,
            "unit": "us/iter",
            "extra": "iterations: 792500\ncpu: 0.8887370624605713 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.737371143443455,
            "unit": "us/iter",
            "extra": "iterations: 401524\ncpu: 1.7372769498211753 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.384039756961057,
            "unit": "us/iter",
            "extra": "iterations: 209020\ncpu: 3.383704970816212 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.641284255182334,
            "unit": "us/iter",
            "extra": "iterations: 105838\ncpu: 6.640993584534858 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.56493773196676,
            "unit": "us/iter",
            "extra": "iterations: 52001\ncpu: 13.564454779715645 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 27.468069460795967,
            "unit": "us/iter",
            "extra": "iterations: 25482\ncpu: 27.466601797347536 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.23191425978230898,
            "unit": "us/iter",
            "extra": "iterations: 3051940\ncpu: 0.2318923743586013 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.39894836961919805,
            "unit": "us/iter",
            "extra": "iterations: 1761889\ncpu: 0.39892205468108377 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7713757213549289,
            "unit": "us/iter",
            "extra": "iterations: 924129\ncpu: 0.7712932339532617 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4521465789490413,
            "unit": "us/iter",
            "extra": "iterations: 475921\ncpu: 1.4520228588358268 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9171096032274475,
            "unit": "us/iter",
            "extra": "iterations: 240440\ncpu: 2.9167949841956022 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.935248488260085,
            "unit": "us/iter",
            "extra": "iterations: 117249\ncpu: 5.934795631519133 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.317712371152071,
            "unit": "us/iter",
            "extra": "iterations: 57529\ncpu: 12.317011489857418 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 371.289100656458,
            "unit": "us/iter",
            "extra": "iterations: 1828\ncpu: 371.2550979212193 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 371.68710684647056,
            "unit": "us/iter",
            "extra": "iterations: 1928\ncpu: 371.6490254149446 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 381.27250477707,
            "unit": "us/iter",
            "extra": "iterations: 1884\ncpu: 381.2466852441672 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 388.4843144414126,
            "unit": "us/iter",
            "extra": "iterations: 1835\ncpu: 388.4765782016333 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 410.0239003476202,
            "unit": "us/iter",
            "extra": "iterations: 1726\ncpu: 410.0010208574744 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 461.88085329744393,
            "unit": "us/iter",
            "extra": "iterations: 1486\ncpu: 461.84791520861035 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 567.2505050590132,
            "unit": "us/iter",
            "extra": "iterations: 1186\ncpu: 567.1992200674553 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 361.1479641577135,
            "unit": "us/iter",
            "extra": "iterations: 1953\ncpu: 361.1139426523309 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 370.46283828045483,
            "unit": "us/iter",
            "extra": "iterations: 1954\ncpu: 370.423126919139 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 358.76545253505725,
            "unit": "us/iter",
            "extra": "iterations: 1854\ncpu: 358.746067961163 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 372.05476373057905,
            "unit": "us/iter",
            "extra": "iterations: 1930\ncpu: 372.03111813471895 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 380.72714610904046,
            "unit": "us/iter",
            "extra": "iterations: 1889\ncpu: 380.7064430915882 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 388.41755448354434,
            "unit": "us/iter",
            "extra": "iterations: 1762\ncpu: 388.3839676503956 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 426.62714242424323,
            "unit": "us/iter",
            "extra": "iterations: 1650\ncpu: 426.58411333333515 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 366.2504868488755,
            "unit": "us/iter",
            "extra": "iterations: 1939\ncpu: 366.2255915420378 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 365.5630015584523,
            "unit": "us/iter",
            "extra": "iterations: 1925\ncpu: 365.5350062337657 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 361.24341947368663,
            "unit": "us/iter",
            "extra": "iterations: 1900\ncpu: 361.2269036842077 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 376.3424579195075,
            "unit": "us/iter",
            "extra": "iterations: 1913\ncpu: 376.30597177208847 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 375.4977879429094,
            "unit": "us/iter",
            "extra": "iterations: 1891\ncpu: 375.46043469063926 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 391.17449692567703,
            "unit": "us/iter",
            "extra": "iterations: 1789\ncpu: 391.14353269983445 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 420.7254339622707,
            "unit": "us/iter",
            "extra": "iterations: 1643\ncpu: 420.6974923919699 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 366.74119958419885,
            "unit": "us/iter",
            "extra": "iterations: 1924\ncpu: 366.7249553014511 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 372.8850129198794,
            "unit": "us/iter",
            "extra": "iterations: 1935\ncpu: 372.85222170542977 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 378.2904130781348,
            "unit": "us/iter",
            "extra": "iterations: 1881\ncpu: 378.2522493354563 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 368.2844038147052,
            "unit": "us/iter",
            "extra": "iterations: 1835\ncpu: 368.2591215258817 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 382.163744959146,
            "unit": "us/iter",
            "extra": "iterations: 1835\ncpu: 382.1245934604925 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 391.46211405982615,
            "unit": "us/iter",
            "extra": "iterations: 1771\ncpu: 391.45429813664225 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 417.125804229621,
            "unit": "us/iter",
            "extra": "iterations: 1655\ncpu: 417.09623021148354 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 371.26094535238764,
            "unit": "us/iter",
            "extra": "iterations: 1958\ncpu: 371.22218181817874 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 363.1224356060632,
            "unit": "us/iter",
            "extra": "iterations: 1848\ncpu: 363.0915898268375 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 370.2977190775658,
            "unit": "us/iter",
            "extra": "iterations: 1908\ncpu: 370.26760849056933 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 366.9005075268935,
            "unit": "us/iter",
            "extra": "iterations: 1860\ncpu: 366.8846032258126 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 376.6239249074713,
            "unit": "us/iter",
            "extra": "iterations: 1891\ncpu: 376.61694077208085 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 392.3553947661663,
            "unit": "us/iter",
            "extra": "iterations: 1796\ncpu: 392.3198591314138 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 413.278999390999,
            "unit": "us/iter",
            "extra": "iterations: 1642\ncpu: 413.24346102313535 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 361.27729846938615,
            "unit": "us/iter",
            "extra": "iterations: 1960\ncpu: 361.241276020406 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 366.38935199585757,
            "unit": "us/iter",
            "extra": "iterations: 1929\ncpu: 366.37038206324775 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 373.6523482666902,
            "unit": "us/iter",
            "extra": "iterations: 1875\ncpu: 373.64407093333887 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 385.8176307439989,
            "unit": "us/iter",
            "extra": "iterations: 1828\ncpu: 385.782012035013 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 399.80349772468384,
            "unit": "us/iter",
            "extra": "iterations: 1758\ncpu: 399.7726888509649 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 422.6842797619058,
            "unit": "us/iter",
            "extra": "iterations: 1680\ncpu: 422.6505470238047 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 488.74963877264963,
            "unit": "us/iter",
            "extra": "iterations: 1434\ncpu: 488.74048396094963 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 369.94486896198396,
            "unit": "us/iter",
            "extra": "iterations: 1946\ncpu: 369.9283751284638 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 367.25549542272324,
            "unit": "us/iter",
            "extra": "iterations: 1857\ncpu: 367.21954173397614 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 398.5578728193486,
            "unit": "us/iter",
            "extra": "iterations: 1777\ncpu: 398.53006809228907 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 452.0502706270503,
            "unit": "us/iter",
            "extra": "iterations: 1515\ncpu: 452.00153861386667 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 725.0857289339683,
            "unit": "us/iter",
            "extra": "iterations: 985\ncpu: 725.0356040609048 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1765.8690989846866,
            "unit": "us/iter",
            "extra": "iterations: 394\ncpu: 1765.6769873096423 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 6175.351572727033,
            "unit": "us/iter",
            "extra": "iterations: 110\ncpu: 6174.757245454481 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 370.40698615547336,
            "unit": "us/iter",
            "extra": "iterations: 1878\ncpu: 370.3670037273589 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 364.9603972972862,
            "unit": "us/iter",
            "extra": "iterations: 1850\ncpu: 364.9357637837855 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 392.770896571099,
            "unit": "us/iter",
            "extra": "iterations: 1779\ncpu: 392.75928442945616 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 445.9112461059092,
            "unit": "us/iter",
            "extra": "iterations: 1605\ncpu: 445.898854205606 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 672.1931728748675,
            "unit": "us/iter",
            "extra": "iterations: 1047\ncpu: 672.1702569245203 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1572.1433377482715,
            "unit": "us/iter",
            "extra": "iterations: 453\ncpu: 1572.1269889625057 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 5107.066390977231,
            "unit": "us/iter",
            "extra": "iterations: 133\ncpu: 5106.605684210607 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 371.2096325107173,
            "unit": "us/iter",
            "extra": "iterations: 1864\ncpu: 371.19429023605437 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 366.44909302325345,
            "unit": "us/iter",
            "extra": "iterations: 1849\ncpu: 366.4367344510615 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 373.6813924336273,
            "unit": "us/iter",
            "extra": "iterations: 1771\ncpu: 373.64348955391176 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 368.0162727272835,
            "unit": "us/iter",
            "extra": "iterations: 1870\ncpu: 367.9860016042863 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 385.24840602741745,
            "unit": "us/iter",
            "extra": "iterations: 1825\ncpu: 385.18847780822347 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 387.8094435075829,
            "unit": "us/iter",
            "extra": "iterations: 1779\ncpu: 387.78806632940154 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 430.663304832717,
            "unit": "us/iter",
            "extra": "iterations: 1614\ncpu: 430.64554151177157 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 361.5919745157978,
            "unit": "us/iter",
            "extra": "iterations: 1962\ncpu: 361.5601452599302 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 368.13173347436083,
            "unit": "us/iter",
            "extra": "iterations: 1891\ncpu: 368.10328080379907 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 385.347236111089,
            "unit": "us/iter",
            "extra": "iterations: 1800\ncpu: 385.30916888888095 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 444.61998597833093,
            "unit": "us/iter",
            "extra": "iterations: 1569\ncpu: 444.57584703634126 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 697.1679090909171,
            "unit": "us/iter",
            "extra": "iterations: 1012\ncpu: 696.9403873517921 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1655.5684033019058,
            "unit": "us/iter",
            "extra": "iterations: 424\ncpu: 1655.4489103773694 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5598.9699666668,
            "unit": "us/iter",
            "extra": "iterations: 120\ncpu: 5598.391666666676 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "committer": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "distinct": true,
          "id": "17092ec00db72053a376698c886200ac8d397492",
          "message": "⚡ improved compute table reset",
          "timestamp": "2021-04-01T16:18:10+02:00",
          "tree_id": "9bdb42ef0ff3a0b6cfa07fbb43972d567c01db2d",
          "url": "https://github.com/iic-jku/dd_package/commit/17092ec00db72053a376698c886200ac8d397492"
        },
        "date": 1617296488736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 5.77230556912139,
            "unit": "ns/iter",
            "extra": "iterations: 120628563\ncpu: 5.771775661457561 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 5.789015792230573,
            "unit": "ns/iter",
            "extra": "iterations: 121301420\ncpu: 5.787790959083579 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 15.939916586123147,
            "unit": "us/iter",
            "extra": "iterations: 34143\ncpu: 15.939670064142001 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 14.437463224489747,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 14.433804673469389 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 14.41119185416658,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 14.40445054166667 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 14.451676437500005,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 14.44662179166667 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 14.548388250000007,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 14.533620062499992 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 14.500832749999878,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 14.492359812500004 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 14.403223645833426,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 14.400212104166663 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 14.395256374999832,
            "unit": "ms/iter",
            "extra": "iterations: 48\ncpu: 14.388735250000005 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.167289778330447,
            "unit": "ns/iter",
            "extra": "iterations: 99055012\ncpu: 7.166552228573753 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.211423615916734,
            "unit": "ns/iter",
            "extra": "iterations: 96661198\ncpu: 7.210914859548906 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.219231554327013,
            "unit": "ns/iter",
            "extra": "iterations: 97567652\ncpu: 7.218811066602269 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.192321998317496,
            "unit": "ns/iter",
            "extra": "iterations: 96874295\ncpu: 7.191909443057101 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.19286669458174,
            "unit": "ns/iter",
            "extra": "iterations: 96664668\ncpu: 7.192519649475239 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.2196298912981005,
            "unit": "ns/iter",
            "extra": "iterations: 96306463\ncpu: 7.213620450374128 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.188114784832108,
            "unit": "ns/iter",
            "extra": "iterations: 96599244\ncpu: 7.18781057955277 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.18949745293963907,
            "unit": "us/iter",
            "extra": "iterations: 3692492\ncpu: 0.1894870044403614 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.35772383148822,
            "unit": "us/iter",
            "extra": "iterations: 1960314\ncpu: 0.35769929052182486 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6577177095704273,
            "unit": "us/iter",
            "extra": "iterations: 1056745\ncpu: 0.6576796568708624 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.2682720063817872,
            "unit": "us/iter",
            "extra": "iterations: 547807\ncpu: 1.268148366121646 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.529572633403694,
            "unit": "us/iter",
            "extra": "iterations: 278047\ncpu: 2.5294401593975153 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.025192244514412,
            "unit": "us/iter",
            "extra": "iterations: 139411\ncpu: 5.024875834761945 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.420622746742819,
            "unit": "us/iter",
            "extra": "iterations: 67236\ncpu: 10.4198391040514 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3549712195693474,
            "unit": "us/iter",
            "extra": "iterations: 1963070\ncpu: 0.3549542802854716 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8528764872541903,
            "unit": "us/iter",
            "extra": "iterations: 817446\ncpu: 0.852827160448518 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.8330867437652478,
            "unit": "us/iter",
            "extra": "iterations: 383578\ncpu: 1.832972438461017 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.7910362175759755,
            "unit": "us/iter",
            "extra": "iterations: 184855\ncpu: 3.790843098644894 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.62152291796902,
            "unit": "us/iter",
            "extra": "iterations: 91173\ncpu: 7.62112578285241 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.367797698018656,
            "unit": "us/iter",
            "extra": "iterations: 45526\ncpu: 15.366891073232875 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 31.39420966873131,
            "unit": "us/iter",
            "extra": "iterations: 22278\ncpu: 31.391037615584903 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.35723243226704704,
            "unit": "us/iter",
            "extra": "iterations: 1961010\ncpu: 0.35720757874768516 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6938561303661797,
            "unit": "us/iter",
            "extra": "iterations: 1012778\ncpu: 0.6938122806775004 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3460752652385914,
            "unit": "us/iter",
            "extra": "iterations: 519815\ncpu: 1.3459777690139778 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.594716773011551,
            "unit": "us/iter",
            "extra": "iterations: 266899\ncpu: 2.5945851239607425 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.144050759579065,
            "unit": "us/iter",
            "extra": "iterations: 135009\ncpu: 5.143676162329893 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.286910922462452,
            "unit": "us/iter",
            "extra": "iterations: 67851\ncpu: 10.286457900399409 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 20.963767619620878,
            "unit": "us/iter",
            "extra": "iterations: 33230\ncpu: 20.962631778513334 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19071148263394092,
            "unit": "us/iter",
            "extra": "iterations: 3681664\ncpu: 0.19069932834718153 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.35452721226612594,
            "unit": "us/iter",
            "extra": "iterations: 1961891\ncpu: 0.3545080633939392 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6592096411991821,
            "unit": "us/iter",
            "extra": "iterations: 1053147\ncpu: 0.6591462179543821 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2792613678542373,
            "unit": "us/iter",
            "extra": "iterations: 546915\ncpu: 1.2791851677134503 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.5130648520264467,
            "unit": "us/iter",
            "extra": "iterations: 281672\ncpu: 2.512926780084655 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.0159145257125,
            "unit": "us/iter",
            "extra": "iterations: 142382\ncpu: 5.015818649829339 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.32712081451968,
            "unit": "us/iter",
            "extra": "iterations: 68212\ncpu: 10.327006010672672 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.4733877515349017,
            "unit": "us/iter",
            "extra": "iterations: 1504662\ncpu: 0.47335922419785653 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 1.141487391562479,
            "unit": "us/iter",
            "extra": "iterations: 606340\ncpu: 1.1414665946498694 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 2.489771697622071,
            "unit": "us/iter",
            "extra": "iterations: 280457\ncpu: 2.486958924184456 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 5.200933561755892,
            "unit": "us/iter",
            "extra": "iterations: 134546\ncpu: 5.2008623296121534 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 10.65831730318022,
            "unit": "us/iter",
            "extra": "iterations: 66063\ncpu: 10.65795993218593 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 21.991838267304992,
            "unit": "us/iter",
            "extra": "iterations: 32158\ncpu: 21.989519932831534 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 44.92654632917994,
            "unit": "us/iter",
            "extra": "iterations: 15487\ncpu: 44.92404203525526 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.47161567508273927,
            "unit": "us/iter",
            "extra": "iterations: 1487788\ncpu: 0.47154904260553204 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.8628431928478114,
            "unit": "us/iter",
            "extra": "iterations: 814746\ncpu: 0.8627990944417008 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7797553356063391,
            "unit": "us/iter",
            "extra": "iterations: 389787\ncpu: 1.779658049139663 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.4015429420619725,
            "unit": "us/iter",
            "extra": "iterations: 207256\ncpu: 3.401362151156063 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.818443452908679,
            "unit": "us/iter",
            "extra": "iterations: 101526\ncpu: 6.818076867009403 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.394335036922222,
            "unit": "us/iter",
            "extra": "iterations: 51460\ncpu: 13.39355015546057 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 28.0343101042532,
            "unit": "us/iter",
            "extra": "iterations: 25227\ncpu: 28.03250069370115 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.35837199156779376,
            "unit": "us/iter",
            "extra": "iterations: 1952512\ncpu: 0.356353096933591 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.7070429513843327,
            "unit": "us/iter",
            "extra": "iterations: 992890\ncpu: 0.7069853800521708 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.3940824121044795,
            "unit": "us/iter",
            "extra": "iterations: 500509\ncpu: 1.3939860262252937 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6147830174858715,
            "unit": "us/iter",
            "extra": "iterations: 266215\ncpu: 2.614635741787656 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.2000645312812726,
            "unit": "us/iter",
            "extra": "iterations: 134121\ncpu: 5.1997169272522665 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.219808661879323,
            "unit": "us/iter",
            "extra": "iterations: 68230\ncpu: 10.21924159460644 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 20.956858124943498,
            "unit": "us/iter",
            "extra": "iterations: 33311\ncpu: 20.95579637357054 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.2036749852721471,
            "unit": "us/iter",
            "extra": "iterations: 3422088\ncpu: 0.20365369183960255 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3543211981094914,
            "unit": "us/iter",
            "extra": "iterations: 1963293\ncpu: 0.3543006846150789 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6729378878665377,
            "unit": "us/iter",
            "extra": "iterations: 1028221\ncpu: 0.6728901413217588 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.293660430444176,
            "unit": "us/iter",
            "extra": "iterations: 538467\ncpu: 1.2935884817453942 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.5440473019651137,
            "unit": "us/iter",
            "extra": "iterations: 276479\ncpu: 2.543896701015265 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.1186060860207245,
            "unit": "us/iter",
            "extra": "iterations: 134735\ncpu: 5.118312049578829 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.367277586078215,
            "unit": "us/iter",
            "extra": "iterations: 66945\ncpu: 10.36662119650461 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.4661725160923184,
            "unit": "us/iter",
            "extra": "iterations: 1497298\ncpu: 0.4661509038280987 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.0854450701901897,
            "unit": "us/iter",
            "extra": "iterations: 642611\ncpu: 1.085382940846027 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.314831003562794,
            "unit": "us/iter",
            "extra": "iterations: 300888\ncpu: 2.3147012709047936 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.816811296146312,
            "unit": "us/iter",
            "extra": "iterations: 145678\ncpu: 4.81670064114008 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 9.877969551281824,
            "unit": "us/iter",
            "extra": "iterations: 70512\ncpu: 9.877685415248362 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.39190837718965,
            "unit": "us/iter",
            "extra": "iterations: 34773\ncpu: 20.389003652258737 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 42.49076005825588,
            "unit": "us/iter",
            "extra": "iterations: 16479\ncpu: 42.487464105831805 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.4720588700235278,
            "unit": "us/iter",
            "extra": "iterations: 1490385\ncpu: 0.47202232242004055 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8469929181009435,
            "unit": "us/iter",
            "extra": "iterations: 825626\ncpu: 0.8469299913035803 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.682486181248606,
            "unit": "us/iter",
            "extra": "iterations: 416246\ncpu: 1.682385228927111 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.2756377732611144,
            "unit": "us/iter",
            "extra": "iterations: 213532\ncpu: 3.275434225315202 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.516565422477494,
            "unit": "us/iter",
            "extra": "iterations: 107272\ncpu: 6.516199772540834 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.404185704665679,
            "unit": "us/iter",
            "extra": "iterations: 51975\ncpu: 13.40314387686398 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 27.569997561838612,
            "unit": "us/iter",
            "extra": "iterations: 25429\ncpu: 27.5681457391167 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.19969372999185953,
            "unit": "us/iter",
            "extra": "iterations: 3494828\ncpu: 0.19968086841469884 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3809088014459895,
            "unit": "us/iter",
            "extra": "iterations: 1835687\ncpu: 0.38089003735385546 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7275005441656677,
            "unit": "us/iter",
            "extra": "iterations: 962942\ncpu: 0.7274524218488725 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4300089215439944,
            "unit": "us/iter",
            "extra": "iterations: 489153\ncpu: 1.4299427581963178 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.829470463861516,
            "unit": "us/iter",
            "extra": "iterations: 246884\ncpu: 2.8292299298456127 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.812399657505745,
            "unit": "us/iter",
            "extra": "iterations: 119710\ncpu: 5.812054941107693 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.829213173407778,
            "unit": "us/iter",
            "extra": "iterations: 58694\ncpu: 11.828365011755979 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 39.022199854854435,
            "unit": "us/iter",
            "extra": "iterations: 17913\ncpu: 39.01943035784003 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 42.433784179628674,
            "unit": "us/iter",
            "extra": "iterations: 16523\ncpu: 42.41084766688839 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 48.76088490906655,
            "unit": "us/iter",
            "extra": "iterations: 14406\ncpu: 48.75800472025477 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 61.480478417900805,
            "unit": "us/iter",
            "extra": "iterations: 11352\ncpu: 61.47689711064161 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 87.1811944860279,
            "unit": "us/iter",
            "extra": "iterations: 8016\ncpu: 87.17995958083938 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 138.90207179896277,
            "unit": "us/iter",
            "extra": "iterations: 5014\ncpu: 138.89831591543762 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 242.90365414057047,
            "unit": "us/iter",
            "extra": "iterations: 2874\ncpu: 242.89458420320332 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 37.43112342058956,
            "unit": "us/iter",
            "extra": "iterations: 18757\ncpu: 37.428988377672304 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 38.509224676397864,
            "unit": "us/iter",
            "extra": "iterations: 18155\ncpu: 38.507063288350906 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 40.43980366461733,
            "unit": "us/iter",
            "extra": "iterations: 17246\ncpu: 40.43715377478856 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 44.543110051496576,
            "unit": "us/iter",
            "extra": "iterations: 15729\ncpu: 44.54204558458901 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 52.63269797088434,
            "unit": "us/iter",
            "extra": "iterations: 13257\ncpu: 52.62894576450133 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 68.62843470588253,
            "unit": "us/iter",
            "extra": "iterations: 10200\ncpu: 68.62278764705849 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 99.65232853067091,
            "unit": "us/iter",
            "extra": "iterations: 7010\ncpu: 99.64535278173939 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 37.70483091995434,
            "unit": "us/iter",
            "extra": "iterations: 18577\ncpu: 37.69206621090616 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 38.558751190344545,
            "unit": "us/iter",
            "extra": "iterations: 18062\ncpu: 38.55783041745072 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 40.49450635113954,
            "unit": "us/iter",
            "extra": "iterations: 17241\ncpu: 40.49352781161169 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 44.65575456053128,
            "unit": "us/iter",
            "extra": "iterations: 15678\ncpu: 44.65298590381442 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 52.74938690566417,
            "unit": "us/iter",
            "extra": "iterations: 13166\ncpu: 52.74565950174662 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 68.79366627195613,
            "unit": "us/iter",
            "extra": "iterations: 10134\ncpu: 68.79298727057419 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 100.00853253253247,
            "unit": "us/iter",
            "extra": "iterations: 6993\ncpu: 100.0066227656237 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 37.32226311025827,
            "unit": "us/iter",
            "extra": "iterations: 18783\ncpu: 37.31986349358405 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 38.313857956411624,
            "unit": "us/iter",
            "extra": "iterations: 18262\ncpu: 38.311312835395796 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 40.32804309997144,
            "unit": "us/iter",
            "extra": "iterations: 17355\ncpu: 40.32494935177157 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 44.09992891740527,
            "unit": "us/iter",
            "extra": "iterations: 15897\ncpu: 44.09821953827739 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 51.35665392592475,
            "unit": "us/iter",
            "extra": "iterations: 13500\ncpu: 51.352669333334056 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 66.43211377473418,
            "unit": "us/iter",
            "extra": "iterations: 10512\ncpu: 66.42955821917806 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 94.31275091228498,
            "unit": "us/iter",
            "extra": "iterations: 7399\ncpu: 94.3073382889591 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 37.544354340006954,
            "unit": "us/iter",
            "extra": "iterations: 18629\ncpu: 37.542000000000115 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 38.84927767604397,
            "unit": "us/iter",
            "extra": "iterations: 18021\ncpu: 38.847828977304594 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 40.806810645366944,
            "unit": "us/iter",
            "extra": "iterations: 17153\ncpu: 40.80615787325839 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 44.89885121151664,
            "unit": "us/iter",
            "extra": "iterations: 15559\ncpu: 44.895843306125656 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 52.848611402111295,
            "unit": "us/iter",
            "extra": "iterations: 13173\ncpu: 52.844366962726056 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 70.20378907795875,
            "unit": "us/iter",
            "extra": "iterations: 10108\ncpu: 70.20212564305653 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 99.98437483898725,
            "unit": "us/iter",
            "extra": "iterations: 6987\ncpu: 99.98175840847405 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 38.068949804856665,
            "unit": "us/iter",
            "extra": "iterations: 18448\ncpu: 38.0664258456202 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 40.31762249065153,
            "unit": "us/iter",
            "extra": "iterations: 17385\ncpu: 40.31540310612574 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 44.12298418200154,
            "unit": "us/iter",
            "extra": "iterations: 15868\ncpu: 44.120349319385014 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 52.52546085061781,
            "unit": "us/iter",
            "extra": "iterations: 13308\ncpu: 52.521648782687556 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 69.59816756325844,
            "unit": "us/iter",
            "extra": "iterations: 10038\ncpu: 69.59294700139337 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 102.26057297772529,
            "unit": "us/iter",
            "extra": "iterations: 6824\ncpu: 102.25221307151577 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 167.60086974285184,
            "unit": "us/iter",
            "extra": "iterations: 4161\ncpu: 167.5892146118682 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 38.70311311466427,
            "unit": "us/iter",
            "extra": "iterations: 18079\ncpu: 38.699955860389515 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 43.623404230096746,
            "unit": "us/iter",
            "extra": "iterations: 16028\ncpu: 43.61995875967041 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 61.796117517020726,
            "unit": "us/iter",
            "extra": "iterations: 11309\ncpu: 61.79088274825415 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 130.9115794708207,
            "unit": "us/iter",
            "extra": "iterations: 5329\ncpu: 130.90382304372324 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 394.4755665914317,
            "unit": "us/iter",
            "extra": "iterations: 1772\ncpu: 394.4450750564322 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1453.3037620041998,
            "unit": "us/iter",
            "extra": "iterations: 479\ncpu: 1453.2072922755306 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5761.823642856965,
            "unit": "us/iter",
            "extra": "iterations: 112\ncpu: 5761.384241071405 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 38.712644995864714,
            "unit": "us/iter",
            "extra": "iterations: 18135\ncpu: 38.689768899917695 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 44.17805514546156,
            "unit": "us/iter",
            "extra": "iterations: 16121\ncpu: 44.176708206686996 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 59.70560881049682,
            "unit": "us/iter",
            "extra": "iterations: 11736\ncpu: 59.70021941036199 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 122.02272566835309,
            "unit": "us/iter",
            "extra": "iterations: 5723\ncpu: 122.01308334789664 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 354.3416023362006,
            "unit": "us/iter",
            "extra": "iterations: 1969\ncpu: 354.31171965464114 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1265.0715729730134,
            "unit": "us/iter",
            "extra": "iterations: 555\ncpu: 1264.9348756756785 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4995.11941353368,
            "unit": "us/iter",
            "extra": "iterations: 133\ncpu: 4994.814714285752 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 37.6263943707714,
            "unit": "us/iter",
            "extra": "iterations: 18475\ncpu: 37.623821163735016 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 38.930121365430644,
            "unit": "us/iter",
            "extra": "iterations: 17987\ncpu: 38.929536665369895 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 40.953327618490164,
            "unit": "us/iter",
            "extra": "iterations: 17090\ncpu: 40.949904973667955 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 44.59295723935899,
            "unit": "us/iter",
            "extra": "iterations: 15692\ncpu: 44.590135228141655 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 52.012391921151725,
            "unit": "us/iter",
            "extra": "iterations: 13393\ncpu: 52.00862555066026 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 67.43318812733041,
            "unit": "us/iter",
            "extra": "iterations: 10461\ncpu: 67.43229920657457 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 97.91839115646015,
            "unit": "us/iter",
            "extra": "iterations: 7056\ncpu: 97.9128208616779 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 37.52565825242781,
            "unit": "us/iter",
            "extra": "iterations: 18540\ncpu: 37.52248236246011 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 41.88451259143824,
            "unit": "us/iter",
            "extra": "iterations: 16678\ncpu: 41.88251001319212 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 58.05863942227276,
            "unit": "us/iter",
            "extra": "iterations: 11978\ncpu: 58.054025964267915 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 120.05198997233579,
            "unit": "us/iter",
            "extra": "iterations: 5784\ncpu: 120.04286358921213 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 363.6347541493796,
            "unit": "us/iter",
            "extra": "iterations: 1928\ncpu: 363.61385321575585 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1329.103804971325,
            "unit": "us/iter",
            "extra": "iterations: 523\ncpu: 1328.994172084181 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5251.8999679998615,
            "unit": "us/iter",
            "extra": "iterations: 125\ncpu: 5251.8276880000485 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "dc5cc5ad1bf01b7e5e8b5ba62c284a5ae026a99a",
          "message": "[WIP] Introduce separate DD types for vectors and matrices",
          "timestamp": "2021-04-01T15:00:21Z",
          "url": "https://github.com/iic-jku/dd_package/pull/8/commits/dc5cc5ad1bf01b7e5e8b5ba62c284a5ae026a99a"
        },
        "date": 1617350383946,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 1.7247098562991214,
            "unit": "ns/iter",
            "extra": "iterations: 394755339\ncpu: 1.7244269088910282 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.680187345873202,
            "unit": "ns/iter",
            "extra": "iterations: 73175244\ncpu: 9.679282668329742 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 29.326530952572895,
            "unit": "us/iter",
            "extra": "iterations: 25006\ncpu: 29.32365504278974 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 31.97187722727273,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 31.936840681818182 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 31.830100772729317,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 31.80575981818181 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 30.731460000002084,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 30.716264043478255 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 31.570811347824414,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 31.560515304347835 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 31.130593913044027,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 31.117785217391265 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 31.384587545455194,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 31.34624731818187 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 31.40566009091117,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 31.375297318181822 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 3.9199483686354637,
            "unit": "ns/iter",
            "extra": "iterations: 175962810\ncpu: 3.9194949262290173 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 4.0288123728661995,
            "unit": "ns/iter",
            "extra": "iterations: 177272036\ncpu: 4.028476662839254 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 3.9827865278539782,
            "unit": "ns/iter",
            "extra": "iterations: 176563855\ncpu: 3.982533333337109 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 3.8091367840476718,
            "unit": "ns/iter",
            "extra": "iterations: 181081964\ncpu: 3.8088601800232285 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 3.955686534410216,
            "unit": "ns/iter",
            "extra": "iterations: 179140875\ncpu: 3.9553745118192603 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 4.002213873150316,
            "unit": "ns/iter",
            "extra": "iterations: 178376977\ncpu: 4.001972732164877 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 3.9689864703568,
            "unit": "ns/iter",
            "extra": "iterations: 177749552\ncpu: 3.9687822954400436 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.16328090817067728,
            "unit": "us/iter",
            "extra": "iterations: 4106673\ncpu: 0.16326809707030457 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.314579982348903,
            "unit": "us/iter",
            "extra": "iterations: 2229892\ncpu: 0.31455720590952524 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.5910424117311727,
            "unit": "us/iter",
            "extra": "iterations: 1189718\ncpu: 0.5909845778579461 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.0975463808662167,
            "unit": "us/iter",
            "extra": "iterations: 586190\ncpu: 1.0973797045326623 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.2204720166644565,
            "unit": "us/iter",
            "extra": "iterations: 315402\ncpu: 2.220223137456333 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.4484198725207635,
            "unit": "us/iter",
            "extra": "iterations: 132414\ncpu: 5.447773279260527 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.369711828910177,
            "unit": "us/iter",
            "extra": "iterations: 65416\ncpu: 10.368635884187325 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.32861394854350734,
            "unit": "us/iter",
            "extra": "iterations: 2223587\ncpu: 0.3285897619476995 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7584584202271981,
            "unit": "us/iter",
            "extra": "iterations: 936008\ncpu: 0.7584034132186916 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.5895562108088286,
            "unit": "us/iter",
            "extra": "iterations: 450038\ncpu: 1.5893975486514507 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.285076564245792,
            "unit": "us/iter",
            "extra": "iterations: 204939\ncpu: 3.2846426790410836 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.7875682232167485,
            "unit": "us/iter",
            "extra": "iterations: 107053\ncpu: 6.786634013058991 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.678932955472595,
            "unit": "us/iter",
            "extra": "iterations: 45343\ncpu: 14.676253644443536 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 26.944842584480465,
            "unit": "us/iter",
            "extra": "iterations: 26249\ncpu: 26.942183245075878 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.1719564461648908,
            "unit": "us/iter",
            "extra": "iterations: 4257834\ncpu: 0.17194601222123662 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.4657811104605388,
            "unit": "us/iter",
            "extra": "iterations: 1526898\ncpu: 0.46576840168760514 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.0557333297063263,
            "unit": "us/iter",
            "extra": "iterations: 606558\ncpu: 1.0556502411970556 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.1571152624992327,
            "unit": "us/iter",
            "extra": "iterations: 321258\ncpu: 2.1570377764911823 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.460236560169092,
            "unit": "us/iter",
            "extra": "iterations: 156717\ncpu: 4.459929599213896 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.928180273387374,
            "unit": "us/iter",
            "extra": "iterations: 66499\ncpu: 9.927571256710635 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 18.534263546048766,
            "unit": "us/iter",
            "extra": "iterations: 39458\ncpu: 18.5326997567034 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.1681125742327166,
            "unit": "us/iter",
            "extra": "iterations: 4223542\ncpu: 0.16810054972816674 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.31402658042485637,
            "unit": "us/iter",
            "extra": "iterations: 2222124\ncpu: 0.31400917050533794 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6089875507945347,
            "unit": "us/iter",
            "extra": "iterations: 1086977\ncpu: 0.6089286838635968 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.1716008565691598,
            "unit": "us/iter",
            "extra": "iterations: 617580\ncpu: 1.168924699634059 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.266765526047572,
            "unit": "us/iter",
            "extra": "iterations: 310124\ncpu: 2.266551076343664 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.26829403689899,
            "unit": "us/iter",
            "extra": "iterations: 127484\ncpu: 5.267659431771844 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 9.922073845821512,
            "unit": "us/iter",
            "extra": "iterations: 73992\ncpu: 9.920688398745794 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.381394903254306,
            "unit": "us/iter",
            "extra": "iterations: 1771758\ncpu: 0.38135742522398564 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 1.0034119116187998,
            "unit": "us/iter",
            "extra": "iterations: 703498\ncpu: 1.0033354167318245 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 2.2392704504191903,
            "unit": "us/iter",
            "extra": "iterations: 316705\ncpu: 2.2390614515085034 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 4.744535864360804,
            "unit": "us/iter",
            "extra": "iterations: 150163\ncpu: 4.744006466306609 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 9.615177213634164,
            "unit": "us/iter",
            "extra": "iterations: 73228\ncpu: 9.614289588681922 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 19.847382567791257,
            "unit": "us/iter",
            "extra": "iterations: 36140\ncpu: 19.84539806308789 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 39.248707131591914,
            "unit": "us/iter",
            "extra": "iterations: 17752\ncpu: 39.24412764758925 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.168505338380404,
            "unit": "us/iter",
            "extra": "iterations: 3957942\ncpu: 0.1684879791063138 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.5304968876340619,
            "unit": "us/iter",
            "extra": "iterations: 1321824\ncpu: 0.5304567975766862 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.3682051897828669,
            "unit": "us/iter",
            "extra": "iterations: 502179\ncpu: 1.3678773843589693 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 2.785287075439358,
            "unit": "us/iter",
            "extra": "iterations: 243281\ncpu: 2.7840941544962337 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 5.890053931649022,
            "unit": "us/iter",
            "extra": "iterations: 120115\ncpu: 5.889396195312775 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.26996659718364,
            "unit": "us/iter",
            "extra": "iterations: 59007\ncpu: 12.269341247648635 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 24.828537945115986,
            "unit": "us/iter",
            "extra": "iterations: 28897\ncpu: 24.825644357545933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.16997814649544302,
            "unit": "us/iter",
            "extra": "iterations: 3995469\ncpu: 0.16996570590336266 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.4859782585415144,
            "unit": "us/iter",
            "extra": "iterations: 1494058\ncpu: 0.48595703245791333 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.0436457664304641,
            "unit": "us/iter",
            "extra": "iterations: 709673\ncpu: 1.043530225892752 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6034898044139387,
            "unit": "us/iter",
            "extra": "iterations: 295471\ncpu: 2.6032871043181736 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.336618305713726,
            "unit": "us/iter",
            "extra": "iterations: 155263\ncpu: 4.336088288903345 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 8.75380167360815,
            "unit": "us/iter",
            "extra": "iterations: 78991\ncpu: 8.753240799584715 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 18.001512276843847,
            "unit": "us/iter",
            "extra": "iterations: 38202\ncpu: 17.999397178158027 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.1757500707731476,
            "unit": "us/iter",
            "extra": "iterations: 3995159\ncpu: 0.17573016868665473 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.30016189135476995,
            "unit": "us/iter",
            "extra": "iterations: 2251825\ncpu: 0.30014519334317497 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6136201528696485,
            "unit": "us/iter",
            "extra": "iterations: 1129328\ncpu: 0.6135475495161795 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.1651192471925342,
            "unit": "us/iter",
            "extra": "iterations: 632778\ncpu: 1.1650021571546518 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.2023716493681103,
            "unit": "us/iter",
            "extra": "iterations: 305129\ncpu: 2.202023599854471 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 4.768451759403772,
            "unit": "us/iter",
            "extra": "iterations: 144225\ncpu: 4.768051676200398 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 8.901594164422518,
            "unit": "us/iter",
            "extra": "iterations: 79855\ncpu: 8.90090189718867 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.4026743801105244,
            "unit": "us/iter",
            "extra": "iterations: 1780398\ncpu: 0.40263815618754484 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.0298203576110263,
            "unit": "us/iter",
            "extra": "iterations: 666758\ncpu: 1.029687352832663 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.1470957005471747,
            "unit": "us/iter",
            "extra": "iterations: 306853\ncpu: 2.1468206274665698 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.426881695324712,
            "unit": "us/iter",
            "extra": "iterations: 159757\ncpu: 4.4264378650075 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 9.609389973642028,
            "unit": "us/iter",
            "extra": "iterations: 76259\ncpu: 9.608683237388403 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 18.558516046344124,
            "unit": "us/iter",
            "extra": "iterations: 39012\ncpu: 18.55636798933678 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 38.86797334617821,
            "unit": "us/iter",
            "extra": "iterations: 18684\ncpu: 38.86392646114346 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.17425039747540103,
            "unit": "us/iter",
            "extra": "iterations: 4074466\ncpu: 0.17423525782274238 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.5374390570000287,
            "unit": "us/iter",
            "extra": "iterations: 1000000\ncpu: 0.5373648669999938 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.277752039521026,
            "unit": "us/iter",
            "extra": "iterations: 538852\ncpu: 1.277627337376487 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 2.7333618767727472,
            "unit": "us/iter",
            "extra": "iterations: 263026\ncpu: 2.7331399177267564 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 5.6046328309911075,
            "unit": "us/iter",
            "extra": "iterations: 108160\ncpu: 5.604018814718962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 11.67546244507485,
            "unit": "us/iter",
            "extra": "iterations: 63041\ncpu: 11.674028457670426 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 23.39251819739597,
            "unit": "us/iter",
            "extra": "iterations: 29180\ncpu: 23.38940363262514 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.17316878357245882,
            "unit": "us/iter",
            "extra": "iterations: 3974984\ncpu: 0.17314433114699204 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3299914362051138,
            "unit": "us/iter",
            "extra": "iterations: 2089611\ncpu: 0.32998081748229585 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.6193776792116167,
            "unit": "us/iter",
            "extra": "iterations: 1122765\ncpu: 0.6193304716481164 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.1895647478692224,
            "unit": "us/iter",
            "extra": "iterations: 595425\ncpu: 1.1895269647730613 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.360896603036364,
            "unit": "us/iter",
            "extra": "iterations: 305096\ncpu: 2.360507551721433 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 4.718422169859253,
            "unit": "us/iter",
            "extra": "iterations: 146839\ncpu: 4.717924386573079 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 9.033254726724058,
            "unit": "us/iter",
            "extra": "iterations: 75528\ncpu: 9.031894807223814 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 65.26692894442205,
            "unit": "us/iter",
            "extra": "iterations: 10724\ncpu: 65.26259278254348 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 65.66750277438301,
            "unit": "us/iter",
            "extra": "iterations: 10633\ncpu: 65.65756343459101 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 73.76850713029687,
            "unit": "us/iter",
            "extra": "iterations: 10238\ncpu: 73.76142518069956 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 84.31815564292539,
            "unit": "us/iter",
            "extra": "iterations: 8648\ncpu: 84.30677509250783 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 103.27006900156694,
            "unit": "us/iter",
            "extra": "iterations: 5739\ncpu: 103.26140965325001 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 154.08478764564146,
            "unit": "us/iter",
            "extra": "iterations: 4549\ncpu: 154.05772829193128 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 240.53186289174255,
            "unit": "us/iter",
            "extra": "iterations: 2808\ncpu: 240.5143757122508 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 63.56672064120586,
            "unit": "us/iter",
            "extra": "iterations: 11104\ncpu: 63.558895803313916 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 61.70485032202222,
            "unit": "us/iter",
            "extra": "iterations: 11645\ncpu: 61.69883203091406 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 66.90648481360057,
            "unit": "us/iter",
            "extra": "iterations: 11293\ncpu: 66.89956875940834 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 69.63395142098769,
            "unit": "us/iter",
            "extra": "iterations: 10169\ncpu: 69.6263893204841 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 75.12439375684376,
            "unit": "us/iter",
            "extra": "iterations: 9130\ncpu: 75.11087929901375 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 81.25146117511531,
            "unit": "us/iter",
            "extra": "iterations: 8680\ncpu: 81.24939988479407 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 101.65766000893913,
            "unit": "us/iter",
            "extra": "iterations: 6709\ncpu: 101.64789491727558 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 65.75686119929371,
            "unit": "us/iter",
            "extra": "iterations: 11340\ncpu: 65.75493747795362 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 65.02456570133945,
            "unit": "us/iter",
            "extra": "iterations: 10152\ncpu: 65.01870478723465 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 65.65938141242006,
            "unit": "us/iter",
            "extra": "iterations: 10351\ncpu: 65.65468602067394 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 69.40343723807524,
            "unit": "us/iter",
            "extra": "iterations: 10022\ncpu: 69.39528497305798 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 72.7257209113926,
            "unit": "us/iter",
            "extra": "iterations: 9875\ncpu: 72.71439078481077 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 84.05052446808476,
            "unit": "us/iter",
            "extra": "iterations: 8460\ncpu: 84.04140165484746 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 103.57218083584961,
            "unit": "us/iter",
            "extra": "iterations: 6293\ncpu: 103.56539504210967 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 64.05028232586912,
            "unit": "us/iter",
            "extra": "iterations: 11299\ncpu: 64.04500734578299 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 62.92628620497239,
            "unit": "us/iter",
            "extra": "iterations: 10772\ncpu: 62.91850529149563 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 65.31462928319839,
            "unit": "us/iter",
            "extra": "iterations: 10798\ncpu: 65.30927718095924 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 69.4143990879112,
            "unit": "us/iter",
            "extra": "iterations: 10306\ncpu: 69.40487997283097 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 75.88134673924213,
            "unit": "us/iter",
            "extra": "iterations: 9921\ncpu: 75.87611591573229 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 81.02761265976861,
            "unit": "us/iter",
            "extra": "iterations: 8215\ncpu: 81.0195069993935 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 99.48533128246976,
            "unit": "us/iter",
            "extra": "iterations: 7314\ncpu: 99.47318990976078 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 66.06561274509525,
            "unit": "us/iter",
            "extra": "iterations: 10608\ncpu: 66.05843005279007 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 67.00727034146395,
            "unit": "us/iter",
            "extra": "iterations: 10250\ncpu: 67.00366946341357 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 67.38312697516443,
            "unit": "us/iter",
            "extra": "iterations: 10632\ncpu: 67.37817992851751 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 71.14251724503718,
            "unit": "us/iter",
            "extra": "iterations: 9423\ncpu: 71.1389002440848 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 75.17940732734874,
            "unit": "us/iter",
            "extra": "iterations: 9253\ncpu: 75.17434929212152 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 86.52181304067226,
            "unit": "us/iter",
            "extra": "iterations: 7745\ncpu: 86.51984867656624 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 114.30905778222497,
            "unit": "us/iter",
            "extra": "iterations: 5988\ncpu: 114.29955594522586 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 66.0503113610982,
            "unit": "us/iter",
            "extra": "iterations: 10756\ncpu: 66.04076487541796 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 67.4692174397028,
            "unit": "us/iter",
            "extra": "iterations: 10780\ncpu: 67.46482254174217 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 68.93710788757815,
            "unit": "us/iter",
            "extra": "iterations: 9927\ncpu: 68.93197058527356 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 72.2820536830247,
            "unit": "us/iter",
            "extra": "iterations: 9761\ncpu: 72.27631759041196 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 84.36887423243326,
            "unit": "us/iter",
            "extra": "iterations: 8794\ncpu: 84.35552581305325 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 109.86225108158224,
            "unit": "us/iter",
            "extra": "iterations: 6472\ncpu: 109.85009425216575 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 152.78378851412597,
            "unit": "us/iter",
            "extra": "iterations: 4388\ncpu: 152.770437556973 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 64.10531777898454,
            "unit": "us/iter",
            "extra": "iterations: 11058\ncpu: 64.10069714234106 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 67.149189153686,
            "unit": "us/iter",
            "extra": "iterations: 10658\ncpu: 67.14126055545161 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 80.86969376224762,
            "unit": "us/iter",
            "extra": "iterations: 8673\ncpu: 80.86262700334173 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 131.89138229413635,
            "unit": "us/iter",
            "extra": "iterations: 5501\ncpu: 131.87469151063578 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 333.0473049853396,
            "unit": "us/iter",
            "extra": "iterations: 2046\ncpu: 333.02091642229595 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1151.9987717570082,
            "unit": "us/iter",
            "extra": "iterations: 609\ncpu: 1151.8499770114865 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 4232.895706249807,
            "unit": "us/iter",
            "extra": "iterations: 160\ncpu: 4232.637637499969 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 65.34998190045405,
            "unit": "us/iter",
            "extra": "iterations: 10608\ncpu: 65.34541063348394 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 72.28785685605558,
            "unit": "us/iter",
            "extra": "iterations: 9962\ncpu: 72.28290544067332 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 81.97700566379916,
            "unit": "us/iter",
            "extra": "iterations: 8828\ncpu: 81.96785274127515 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 125.32517811751566,
            "unit": "us/iter",
            "extra": "iterations: 5429\ncpu: 125.31234002578526 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 299.11325617793864,
            "unit": "us/iter",
            "extra": "iterations: 2428\ncpu: 299.10687850082405 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 984.873896453927,
            "unit": "us/iter",
            "extra": "iterations: 705\ncpu: 984.7713659574758 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 3797.8296117019677,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3797.715175531924 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 64.93794308322971,
            "unit": "us/iter",
            "extra": "iterations: 10489\ncpu: 64.9351218419289 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 67.97454237127718,
            "unit": "us/iter",
            "extra": "iterations: 10585\ncpu: 67.97310599905298 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 69.65561933624404,
            "unit": "us/iter",
            "extra": "iterations: 10064\ncpu: 69.6517050874412 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 70.38213345215192,
            "unit": "us/iter",
            "extra": "iterations: 8977\ncpu: 70.37956009802667 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 77.9000995214324,
            "unit": "us/iter",
            "extra": "iterations: 9194\ncpu: 77.89459614966496 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 94.28369963763296,
            "unit": "us/iter",
            "extra": "iterations: 7451\ncpu: 94.26868004294704 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 122.2478027222843,
            "unit": "us/iter",
            "extra": "iterations: 5657\ncpu: 122.23836255965725 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 64.56500544431232,
            "unit": "us/iter",
            "extra": "iterations: 10837\ncpu: 64.55744117375671 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 69.07759750997614,
            "unit": "us/iter",
            "extra": "iterations: 10522\ncpu: 69.0713907051872 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 82.2838992541766,
            "unit": "us/iter",
            "extra": "iterations: 8447\ncpu: 82.2745223156153 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 137.66974052363773,
            "unit": "us/iter",
            "extra": "iterations: 5118\ncpu: 137.65977627979478 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 353.3016453077935,
            "unit": "us/iter",
            "extra": "iterations: 1982\ncpu: 353.27611604439915 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1170.3803344261598,
            "unit": "us/iter",
            "extra": "iterations: 610\ncpu: 1170.266050819669 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4450.030741721874,
            "unit": "us/iter",
            "extra": "iterations: 151\ncpu: 4449.79696026494 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "67e62946b564bf6b05584796628c2de3040585e2",
          "message": "Dynamic qubit size",
          "timestamp": "2021-04-01T15:00:21Z",
          "url": "https://github.com/iic-jku/dd_package/pull/9/commits/67e62946b564bf6b05584796628c2de3040585e2"
        },
        "date": 1617709377874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 4.4637716787002235,
            "unit": "ns/iter",
            "extra": "iterations: 155704965\ncpu: 4.454908589459559 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 4.599400392634683,
            "unit": "ns/iter",
            "extra": "iterations: 153633870\ncpu: 4.5992266809395606 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 14.785940624144729,
            "unit": "us/iter",
            "extra": "iterations: 36530\ncpu: 14.785450424308777 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.27750596923056,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 10.277191 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 9.987664307692512,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 9.971257738461544 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 9.735043584415676,
            "unit": "ms/iter",
            "extra": "iterations: 77\ncpu: 9.73456516883116 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.11966782432425,
            "unit": "ms/iter",
            "extra": "iterations: 74\ncpu: 10.119327337837834 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 10.180426880597071,
            "unit": "ms/iter",
            "extra": "iterations: 67\ncpu: 10.171362746268658 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 9.494300076923059,
            "unit": "ms/iter",
            "extra": "iterations: 78\ncpu: 9.493737576923078 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 9.437739902777606,
            "unit": "ms/iter",
            "extra": "iterations: 72\ncpu: 9.43181184722223 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 5.631425246230668,
            "unit": "ns/iter",
            "extra": "iterations: 109481777\ncpu: 5.6311155782573685 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 5.463629915727651,
            "unit": "ns/iter",
            "extra": "iterations: 125985878\ncpu: 5.463384261210615 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 5.5410598579737504,
            "unit": "ns/iter",
            "extra": "iterations: 122197354\ncpu: 5.539660785126333 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.193069734766377,
            "unit": "ns/iter",
            "extra": "iterations: 117688829\ncpu: 6.19296401530174 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 5.748188502638487,
            "unit": "ns/iter",
            "extra": "iterations: 114972014\ncpu: 5.748016565144268 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 5.618036049616916,
            "unit": "ns/iter",
            "extra": "iterations: 122620776\ncpu: 5.617893822495464 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 5.845166280701983,
            "unit": "ns/iter",
            "extra": "iterations: 117135060\ncpu: 5.844889463496238 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.15272231232932273,
            "unit": "us/iter",
            "extra": "iterations: 4384289\ncpu: 0.15271580180959798 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.28110404605023703,
            "unit": "us/iter",
            "extra": "iterations: 2461833\ncpu: 0.2810924693104695 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.5260240398684312,
            "unit": "us/iter",
            "extra": "iterations: 1366896\ncpu: 0.525984940331964 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.0150756611011673,
            "unit": "us/iter",
            "extra": "iterations: 684275\ncpu: 1.0150350078550316 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.0498950448428714,
            "unit": "us/iter",
            "extra": "iterations: 354237\ncpu: 2.0497917495913756 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 3.977039629433413,
            "unit": "us/iter",
            "extra": "iterations: 181128\ncpu: 3.976880106885745 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 8.056097868093515,
            "unit": "us/iter",
            "extra": "iterations: 86167\ncpu: 8.05579170680193 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.26980758931249277,
            "unit": "us/iter",
            "extra": "iterations: 2550903\ncpu: 0.26979587463733384 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.657520670535667,
            "unit": "us/iter",
            "extra": "iterations: 1066252\ncpu: 0.6574870771637497 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.3995422968134106,
            "unit": "us/iter",
            "extra": "iterations: 446523\ncpu: 1.3994894305556436 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 2.7737714619331046,
            "unit": "us/iter",
            "extra": "iterations: 241509\ncpu: 2.7735894935592484 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 5.757665942193841,
            "unit": "us/iter",
            "extra": "iterations: 118707\ncpu: 5.7576122469610285 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 11.706303134688135,
            "unit": "us/iter",
            "extra": "iterations: 60963\ncpu: 11.705954037694957 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 23.30542876569081,
            "unit": "us/iter",
            "extra": "iterations: 28680\ncpu: 23.305267677824254 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.2661445365800438,
            "unit": "us/iter",
            "extra": "iterations: 2641276\ncpu: 0.2661354284822947 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.5350292739590666,
            "unit": "us/iter",
            "extra": "iterations: 1257739\ncpu: 0.5350154897001681 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.016581163618486,
            "unit": "us/iter",
            "extra": "iterations: 700092\ncpu: 1.0165147323494672 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.0573885366799773,
            "unit": "us/iter",
            "extra": "iterations: 363263\ncpu: 2.0573420579580057 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.040240832338466,
            "unit": "us/iter",
            "extra": "iterations: 170027\ncpu: 4.040097066936433 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 7.936645399813789,
            "unit": "us/iter",
            "extra": "iterations: 83714\ncpu: 7.936643942470726 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 16.59968594562024,
            "unit": "us/iter",
            "extra": "iterations: 43104\ncpu: 16.598348018745288 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.15475038838843283,
            "unit": "us/iter",
            "extra": "iterations: 4787089\ncpu: 0.1547471642996409 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.29722672964007646,
            "unit": "us/iter",
            "extra": "iterations: 2446535\ncpu: 0.29721902118710664 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.5402427685382162,
            "unit": "us/iter",
            "extra": "iterations: 1345302\ncpu: 0.5402300412844132 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.0571198327084943,
            "unit": "us/iter",
            "extra": "iterations: 683119\ncpu: 1.0570661319623662 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.0675220581742217,
            "unit": "us/iter",
            "extra": "iterations: 328427\ncpu: 2.067399583469071 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 4.0871076220022955,
            "unit": "us/iter",
            "extra": "iterations: 166964\ncpu: 4.086992495388224 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 8.511836953993733,
            "unit": "us/iter",
            "extra": "iterations: 85988\ncpu: 8.509773142764093 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.3653873108278931,
            "unit": "us/iter",
            "extra": "iterations: 1967851\ncpu: 0.36537498723226264 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8523519415873326,
            "unit": "us/iter",
            "extra": "iterations: 818042\ncpu: 0.852352107837979 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.894218622622857,
            "unit": "us/iter",
            "extra": "iterations: 377079\ncpu: 1.8941384988291634 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.8456938843833486,
            "unit": "us/iter",
            "extra": "iterations: 173245\ncpu: 3.845653987128037 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.874674067790976,
            "unit": "us/iter",
            "extra": "iterations: 93139\ncpu: 7.874449961884936 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 16.235702214116504,
            "unit": "us/iter",
            "extra": "iterations: 43313\ncpu: 16.23539147600023 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 32.13456754603897,
            "unit": "us/iter",
            "extra": "iterations: 21341\ncpu: 32.13343409399757 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.3398394862310039,
            "unit": "us/iter",
            "extra": "iterations: 2023166\ncpu: 0.33981269900739863 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.6547970961090632,
            "unit": "us/iter",
            "extra": "iterations: 979720\ncpu: 0.6547717041603709 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.3577869166783807,
            "unit": "us/iter",
            "extra": "iterations: 527282\ncpu: 1.3577874894269089 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 2.4975915517661194,
            "unit": "us/iter",
            "extra": "iterations: 279372\ncpu: 2.4975067007430716 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 5.237042888833766,
            "unit": "us/iter",
            "extra": "iterations: 137938\ncpu: 5.235786607026338 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 9.969906870943145,
            "unit": "us/iter",
            "extra": "iterations: 70558\ncpu: 9.969201819779485 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 22.37564808340746,
            "unit": "us/iter",
            "extra": "iterations: 32323\ncpu: 22.37521721374881 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.27808884996940075,
            "unit": "us/iter",
            "extra": "iterations: 2577401\ncpu: 0.2780760816807317 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.5388681500198133,
            "unit": "us/iter",
            "extra": "iterations: 1264073\ncpu: 0.5388468506170124 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.1628383593334517,
            "unit": "us/iter",
            "extra": "iterations: 621601\ncpu: 1.162780930210858 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.0390590144757677,
            "unit": "us/iter",
            "extra": "iterations: 326547\ncpu: 2.0389388357571936 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.323447961814155,
            "unit": "us/iter",
            "extra": "iterations: 159431\ncpu: 4.323224592456893 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 8.447221563798559,
            "unit": "us/iter",
            "extra": "iterations: 90958\ncpu: 8.44698236548734 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 17.135638585438603,
            "unit": "us/iter",
            "extra": "iterations: 39362\ncpu: 17.134813881408434 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.1684169563706864,
            "unit": "us/iter",
            "extra": "iterations: 4438438\ncpu: 0.1684110980033963 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.30621645364723155,
            "unit": "us/iter",
            "extra": "iterations: 2374744\ncpu: 0.3061938486843219 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6016685479212739,
            "unit": "us/iter",
            "extra": "iterations: 1083674\ncpu: 0.6016459221131104 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.1470032967716328,
            "unit": "us/iter",
            "extra": "iterations: 578748\ncpu: 1.1469543894752163 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.2006993242184283,
            "unit": "us/iter",
            "extra": "iterations: 319038\ncpu: 2.200618098784451 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 4.407188651130617,
            "unit": "us/iter",
            "extra": "iterations: 156368\ncpu: 4.406916459889504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 8.857333051448656,
            "unit": "us/iter",
            "extra": "iterations: 73316\ncpu: 8.856804258279173 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.37740346262404667,
            "unit": "us/iter",
            "extra": "iterations: 1890185\ncpu: 0.37737957025370666 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 0.9650161419751644,
            "unit": "us/iter",
            "extra": "iterations: 732748\ncpu: 0.9647745855328103 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 1.905098172944932,
            "unit": "us/iter",
            "extra": "iterations: 343832\ncpu: 1.905020126108105 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 3.908147283113504,
            "unit": "us/iter",
            "extra": "iterations: 181881\ncpu: 3.907446038893511 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 7.987362122093939,
            "unit": "us/iter",
            "extra": "iterations: 82428\ncpu: 7.986748337943472 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 16.728099483555248,
            "unit": "us/iter",
            "extra": "iterations: 44148\ncpu: 16.727610424028057 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 35.02848478574736,
            "unit": "us/iter",
            "extra": "iterations: 20770\ncpu: 35.027532546942304 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.41066507174003136,
            "unit": "us/iter",
            "extra": "iterations: 1895803\ncpu: 0.41065174018608475 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.6734169319814519,
            "unit": "us/iter",
            "extra": "iterations: 860927\ncpu: 0.6733970847702608 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.3353277873227063,
            "unit": "us/iter",
            "extra": "iterations: 480766\ncpu: 1.3352955429460311 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 2.6166376956516166,
            "unit": "us/iter",
            "extra": "iterations: 262009\ncpu: 2.616575556564843 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 5.225173641133677,
            "unit": "us/iter",
            "extra": "iterations: 132077\ncpu: 5.225012825851611 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 10.722497387318532,
            "unit": "us/iter",
            "extra": "iterations: 65450\ncpu: 10.722002139037354 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 21.8616785090997,
            "unit": "us/iter",
            "extra": "iterations: 32088\ncpu: 21.86095584018953 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.16103443934110684,
            "unit": "us/iter",
            "extra": "iterations: 4271278\ncpu: 0.16102123790584535 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3157618900306427,
            "unit": "us/iter",
            "extra": "iterations: 2314481\ncpu: 0.3157530068296036 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.6054836345819329,
            "unit": "us/iter",
            "extra": "iterations: 1200061\ncpu: 0.6054589408371741 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.1489283079229826,
            "unit": "us/iter",
            "extra": "iterations: 538888\ncpu: 1.148878659387466 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.3382535412195753,
            "unit": "us/iter",
            "extra": "iterations: 297214\ncpu: 2.338177360420444 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 4.812001608183915,
            "unit": "us/iter",
            "extra": "iterations: 134313\ncpu: 4.81167770804019 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 10.594907218073057,
            "unit": "us/iter",
            "extra": "iterations: 65336\ncpu: 10.594496862372887 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 32.77307726331393,
            "unit": "us/iter",
            "extra": "iterations: 21252\ncpu: 32.77049369471118 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 35.60685281212524,
            "unit": "us/iter",
            "extra": "iterations: 20056\ncpu: 35.60519879337887 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 41.104771789793126,
            "unit": "us/iter",
            "extra": "iterations: 17164\ncpu: 41.102864949895 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 50.730237499999475,
            "unit": "us/iter",
            "extra": "iterations: 10000\ncpu: 50.727096100000324 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 69.95344865353417,
            "unit": "us/iter",
            "extra": "iterations: 9952\ncpu: 69.9482126205779 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 114.3556808510661,
            "unit": "us/iter",
            "extra": "iterations: 5922\ncpu: 114.35467510976085 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 194.7887978665219,
            "unit": "us/iter",
            "extra": "iterations: 3656\ncpu: 194.78028911378618 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 31.15895519238558,
            "unit": "us/iter",
            "extra": "iterations: 22273\ncpu: 31.158690432362498 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 32.61268186460996,
            "unit": "us/iter",
            "extra": "iterations: 21538\ncpu: 32.610237069365944 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 33.91709054542034,
            "unit": "us/iter",
            "extra": "iterations: 20498\ncpu: 33.9157004097962 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 37.936402239999246,
            "unit": "us/iter",
            "extra": "iterations: 18750\ncpu: 37.92546762666689 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 46.81680125468604,
            "unit": "us/iter",
            "extra": "iterations: 15462\ncpu: 46.80593461389268 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 57.87571616587779,
            "unit": "us/iter",
            "extra": "iterations: 12081\ncpu: 57.87311083519559 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 85.02492359686494,
            "unit": "us/iter",
            "extra": "iterations: 8285\ncpu: 85.01965721182825 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 31.43876434233433,
            "unit": "us/iter",
            "extra": "iterations: 22329\ncpu: 31.437429441533126 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 33.07518286570849,
            "unit": "us/iter",
            "extra": "iterations: 21349\ncpu: 33.07328563398749 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 34.75929064790672,
            "unit": "us/iter",
            "extra": "iterations: 20327\ncpu: 34.75913189354023 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 37.30614409863739,
            "unit": "us/iter",
            "extra": "iterations: 18411\ncpu: 37.304148443865465 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 43.774880810488966,
            "unit": "us/iter",
            "extra": "iterations: 15941\ncpu: 43.77264330970423 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 58.6234514265727,
            "unit": "us/iter",
            "extra": "iterations: 11426\ncpu: 58.6186936810787 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 83.17068710229852,
            "unit": "us/iter",
            "extra": "iterations: 8172\ncpu: 83.1700895741568 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 31.548795932771,
            "unit": "us/iter",
            "extra": "iterations: 22669\ncpu: 31.547430279235495 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 32.30625772675086,
            "unit": "us/iter",
            "extra": "iterations: 21775\ncpu: 32.30477772675126 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 35.105222383043554,
            "unit": "us/iter",
            "extra": "iterations: 19345\ncpu: 35.10244636857014 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 36.80243944558189,
            "unit": "us/iter",
            "extra": "iterations: 17604\ncpu: 36.80081265621403 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 42.612223706923054,
            "unit": "us/iter",
            "extra": "iterations: 15641\ncpu: 42.610659868295244 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 55.11095437067655,
            "unit": "us/iter",
            "extra": "iterations: 11703\ncpu: 55.10829052379694 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 80.40289539984308,
            "unit": "us/iter",
            "extra": "iterations: 8891\ncpu: 80.39762400180031 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 31.650247639464492,
            "unit": "us/iter",
            "extra": "iterations: 21923\ncpu: 31.648828536240284 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 31.944535568686995,
            "unit": "us/iter",
            "extra": "iterations: 21831\ncpu: 31.94127506756511 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 36.29334962999509,
            "unit": "us/iter",
            "extra": "iterations: 20270\ncpu: 36.29092308830795 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 40.82534234448235,
            "unit": "us/iter",
            "extra": "iterations: 16831\ncpu: 40.8248339967916 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 47.32123774683891,
            "unit": "us/iter",
            "extra": "iterations: 14078\ncpu: 47.317046881659934 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 60.59840503654234,
            "unit": "us/iter",
            "extra": "iterations: 11357\ncpu: 60.597514748613406 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 91.23766154633697,
            "unit": "us/iter",
            "extra": "iterations: 7812\ncpu: 91.23345814132007 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 32.93287248702152,
            "unit": "us/iter",
            "extra": "iterations: 21190\ncpu: 32.932617932986666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 34.46129541587532,
            "unit": "us/iter",
            "extra": "iterations: 19982\ncpu: 34.458537784005514 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 37.4513670793503,
            "unit": "us/iter",
            "extra": "iterations: 19143\ncpu: 37.449161991329476 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 44.757291119984146,
            "unit": "us/iter",
            "extra": "iterations: 15777\ncpu: 44.74608449008149 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 62.31997919310148,
            "unit": "us/iter",
            "extra": "iterations: 11823\ncpu: 62.31759375792798 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 93.08830283828416,
            "unit": "us/iter",
            "extra": "iterations: 7575\ncpu: 93.0834039603958 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 152.37385073319817,
            "unit": "us/iter",
            "extra": "iterations: 4569\ncpu: 152.36624491135814 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 35.623570630447844,
            "unit": "us/iter",
            "extra": "iterations: 19510\ncpu: 35.62172629420837 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 40.06447012159736,
            "unit": "us/iter",
            "extra": "iterations: 17270\ncpu: 40.062563752172714 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 58.3064974375939,
            "unit": "us/iter",
            "extra": "iterations: 12098\ncpu: 58.30234013886498 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 117.0128631436304,
            "unit": "us/iter",
            "extra": "iterations: 5904\ncpu: 117.00611094173492 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 349.6421754051437,
            "unit": "us/iter",
            "extra": "iterations: 2098\ncpu: 349.61673212583145 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1310.0596085271545,
            "unit": "us/iter",
            "extra": "iterations: 516\ncpu: 1309.9857771317763 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 4719.329807142815,
            "unit": "us/iter",
            "extra": "iterations: 140\ncpu: 4718.911700000002 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 31.760778827286604,
            "unit": "us/iter",
            "extra": "iterations: 21915\ncpu: 31.759296098561535 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 38.749611023879936,
            "unit": "us/iter",
            "extra": "iterations: 18469\ncpu: 38.747782608696305 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 52.423897734232355,
            "unit": "us/iter",
            "extra": "iterations: 13064\ncpu: 52.42169902020882 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 103.68658940493798,
            "unit": "us/iter",
            "extra": "iterations: 6890\ncpu: 103.6787959361387 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 332.75199610135303,
            "unit": "us/iter",
            "extra": "iterations: 2052\ncpu: 332.73045077972137 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1204.4341472603166,
            "unit": "us/iter",
            "extra": "iterations: 584\ncpu: 1204.3042979452111 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4623.7336862746915,
            "unit": "us/iter",
            "extra": "iterations: 153\ncpu: 4623.53154248365 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 34.5223721289407,
            "unit": "us/iter",
            "extra": "iterations: 20071\ncpu: 34.51989108664357 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 34.40962056459732,
            "unit": "us/iter",
            "extra": "iterations: 20404\ncpu: 34.40820873358207 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 35.460803142663615,
            "unit": "us/iter",
            "extra": "iterations: 19283\ncpu: 35.46049774412638 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 38.71979220357078,
            "unit": "us/iter",
            "extra": "iterations: 18470\ncpu: 38.7165600974552 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 45.257186775019534,
            "unit": "us/iter",
            "extra": "iterations: 15259\ncpu: 45.252411691459514 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 58.33306391836769,
            "unit": "us/iter",
            "extra": "iterations: 12250\ncpu: 58.328569959183696 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 88.47018944343041,
            "unit": "us/iter",
            "extra": "iterations: 7654\ncpu: 88.46631212437963 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 34.175409965965535,
            "unit": "us/iter",
            "extra": "iterations: 19687\ncpu: 34.171821151013226 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 38.44048155555255,
            "unit": "us/iter",
            "extra": "iterations: 18000\ncpu: 38.438336999999166 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 52.7770909769418,
            "unit": "us/iter",
            "extra": "iterations: 13399\ncpu: 52.7721756847532 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 107.97098175242922,
            "unit": "us/iter",
            "extra": "iterations: 6083\ncpu: 107.96440013151357 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 314.19490290420316,
            "unit": "us/iter",
            "extra": "iterations: 2307\ncpu: 314.0992717815282 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1204.9831388888674,
            "unit": "us/iter",
            "extra": "iterations: 612\ncpu: 1204.9062500000255 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4471.467705882216,
            "unit": "us/iter",
            "extra": "iterations: 136\ncpu: 4471.303691176295 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "cc702935f4de384f044094bbd80244cc8b024abe",
          "message": "Remove line",
          "timestamp": "2021-04-01T15:00:21Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/cc702935f4de384f044094bbd80244cc8b024abe"
        },
        "date": 1617714907284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.229367125694127,
            "unit": "ns/iter",
            "extra": "iterations: 71102539\ncpu: 9.228473149179665 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.436079666380587,
            "unit": "ns/iter",
            "extra": "iterations: 78395930\ncpu: 9.435003602865608 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 27.832978991932208,
            "unit": "us/iter",
            "extra": "iterations: 25038\ncpu: 27.83187235402188 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.86623385526315,
            "unit": "ms/iter",
            "extra": "iterations: 76\ncpu: 10.850313907894733 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 9.721871638888835,
            "unit": "ms/iter",
            "extra": "iterations: 72\ncpu: 9.718963305555551 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.760826111110807,
            "unit": "ms/iter",
            "extra": "iterations: 72\ncpu: 10.747028569444453 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.140098208333134,
            "unit": "ms/iter",
            "extra": "iterations: 72\ncpu: 10.139482777777777 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 9.936674350649133,
            "unit": "ms/iter",
            "extra": "iterations: 77\ncpu: 9.934785961038955 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 10.117823528571128,
            "unit": "ms/iter",
            "extra": "iterations: 70\ncpu: 10.111184957142859 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.181223957142802,
            "unit": "ms/iter",
            "extra": "iterations: 70\ncpu: 10.172203914285697 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.324404651205309,
            "unit": "ns/iter",
            "extra": "iterations: 114665933\ncpu: 6.323725251509534 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.56272825461326,
            "unit": "ns/iter",
            "extra": "iterations: 103406727\ncpu: 6.562192631819781 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.445165709564964,
            "unit": "ns/iter",
            "extra": "iterations: 103833294\ncpu: 6.44417462090724 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.538113827076318,
            "unit": "ns/iter",
            "extra": "iterations: 111871959\ncpu: 6.538034316535032 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.492453851898369,
            "unit": "ns/iter",
            "extra": "iterations: 108220378\ncpu: 6.49191896187981 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 8.19447311680433,
            "unit": "ns/iter",
            "extra": "iterations: 89227433\ncpu: 8.194012619414934 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.272364851754117,
            "unit": "ns/iter",
            "extra": "iterations: 83404264\ncpu: 7.272004990056622 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.1788067903452556,
            "unit": "us/iter",
            "extra": "iterations: 3904691\ncpu: 0.17879882300545702 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.33997304097640973,
            "unit": "us/iter",
            "extra": "iterations: 1930745\ncpu: 0.3399578162833516 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6507439321906586,
            "unit": "us/iter",
            "extra": "iterations: 1023104\ncpu: 0.6507060044726634 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.2572812121985073,
            "unit": "us/iter",
            "extra": "iterations: 548920\ncpu: 1.2572121547766555 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.455972173277163,
            "unit": "us/iter",
            "extra": "iterations: 300790\ncpu: 2.4557927125236936 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.298461547134089,
            "unit": "us/iter",
            "extra": "iterations: 133046\ncpu: 5.297870052463051 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.216567676416334,
            "unit": "us/iter",
            "extra": "iterations: 69027\ncpu: 10.215296188448011 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3263504718128311,
            "unit": "us/iter",
            "extra": "iterations: 2240825\ncpu: 0.3263371253890865 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7779285839345846,
            "unit": "us/iter",
            "extra": "iterations: 942407\ncpu: 0.7778461386640796 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.660947755972169,
            "unit": "us/iter",
            "extra": "iterations: 428738\ncpu: 1.6607959383119753 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.507838314482848,
            "unit": "us/iter",
            "extra": "iterations: 199820\ncpu: 3.507540196176544 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.754254811520972,
            "unit": "us/iter",
            "extra": "iterations: 96695\ncpu: 6.754031728631239 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.30976136856614,
            "unit": "us/iter",
            "extra": "iterations: 50710\ncpu: 14.307503943995256 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 28.483319215626576,
            "unit": "us/iter",
            "extra": "iterations: 26161\ncpu: 28.481553457436654 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3236994001644877,
            "unit": "us/iter",
            "extra": "iterations: 2336974\ncpu: 0.3236788654901585 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6616443875115229,
            "unit": "us/iter",
            "extra": "iterations: 1013668\ncpu: 0.6615948880698612 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2278108020728746,
            "unit": "us/iter",
            "extra": "iterations: 547469\ncpu: 1.2275709985405516 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.367530602475915,
            "unit": "us/iter",
            "extra": "iterations: 305008\ncpu: 2.367409717122162 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.876864150068745,
            "unit": "us/iter",
            "extra": "iterations: 146706\ncpu: 4.87651665235229 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.087620438684084,
            "unit": "us/iter",
            "extra": "iterations: 70210\ncpu: 9.087334581968344 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 19.669280003256915,
            "unit": "us/iter",
            "extra": "iterations: 36846\ncpu: 19.66847972642887 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.1771478734771702,
            "unit": "us/iter",
            "extra": "iterations: 3740637\ncpu: 0.17714098347420587 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3593631634938434,
            "unit": "us/iter",
            "extra": "iterations: 1964600\ncpu: 0.3593480118090216 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6883488568127174,
            "unit": "us/iter",
            "extra": "iterations: 1065311\ncpu: 0.6883069113150992 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2963153103312615,
            "unit": "us/iter",
            "extra": "iterations: 591078\ncpu: 1.2962527212990511 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.40083399280707,
            "unit": "us/iter",
            "extra": "iterations: 288614\ncpu: 2.400580058486442 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.045893760000126,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.045470909999992 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 9.747317858666012,
            "unit": "us/iter",
            "extra": "iterations: 70330\ncpu: 9.746928679084323 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.33145575437963337,
            "unit": "us/iter",
            "extra": "iterations: 2215191\ncpu: 0.3314175585762151 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.7603920531406861,
            "unit": "us/iter",
            "extra": "iterations: 932167\ncpu: 0.7603491584662408 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7501260887846102,
            "unit": "us/iter",
            "extra": "iterations: 418586\ncpu: 1.749879107280223 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.3249038096436787,
            "unit": "us/iter",
            "extra": "iterations: 206476\ncpu: 3.3247998605164732 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.999371511208939,
            "unit": "us/iter",
            "extra": "iterations: 95771\ncpu: 6.997994110952179 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 14.17019294122336,
            "unit": "us/iter",
            "extra": "iterations: 49782\ncpu: 14.16883741111246 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 28.77247905253776,
            "unit": "us/iter",
            "extra": "iterations: 25373\ncpu: 28.766914633665607 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.5339636903224604,
            "unit": "us/iter",
            "extra": "iterations: 1231242\ncpu: 0.5339361498389408 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.8939803355315785,
            "unit": "us/iter",
            "extra": "iterations: 827940\ncpu: 0.8938620914558995 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7930078873702244,
            "unit": "us/iter",
            "extra": "iterations: 377946\ncpu: 1.7929222031718757 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.4061050857374107,
            "unit": "us/iter",
            "extra": "iterations: 215367\ncpu: 3.4055661034420335 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.1381477592135045,
            "unit": "us/iter",
            "extra": "iterations: 114558\ncpu: 6.137753269086404 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.529741297233052,
            "unit": "us/iter",
            "extra": "iterations: 53776\ncpu: 12.527489586432559 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 25.97711039460749,
            "unit": "us/iter",
            "extra": "iterations: 27293\ncpu: 25.975692448613323 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.35915843188981084,
            "unit": "us/iter",
            "extra": "iterations: 1974249\ncpu: 0.35911346339797895 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.7008637827503804,
            "unit": "us/iter",
            "extra": "iterations: 1054492\ncpu: 0.7008351528508544 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.2970485674722232,
            "unit": "us/iter",
            "extra": "iterations: 569064\ncpu: 1.2968967269059388 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.4726349194484936,
            "unit": "us/iter",
            "extra": "iterations: 267593\ncpu: 2.4724118044941403 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.009387500000457,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.008937440000025 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.733961575263487,
            "unit": "us/iter",
            "extra": "iterations: 73156\ncpu: 9.732889961178772 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.328057969772477,
            "unit": "us/iter",
            "extra": "iterations: 35001\ncpu: 19.32587814633857 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.23831208767917403,
            "unit": "us/iter",
            "extra": "iterations: 3038441\ncpu: 0.23830952057321447 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3601456465674934,
            "unit": "us/iter",
            "extra": "iterations: 1931786\ncpu: 0.3601150541519584 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7099841651798185,
            "unit": "us/iter",
            "extra": "iterations: 962878\ncpu: 0.7099643308913524 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.326076397954126,
            "unit": "us/iter",
            "extra": "iterations: 523980\ncpu: 1.3259792740180962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.668894670224248,
            "unit": "us/iter",
            "extra": "iterations: 285209\ncpu: 2.6688263729405435 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.301022470000021,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.300694449999952 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.005903672540912,
            "unit": "us/iter",
            "extra": "iterations: 66793\ncpu: 10.004661207012624 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.49664552738728446,
            "unit": "us/iter",
            "extra": "iterations: 1376332\ncpu: 0.49660942926561014 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1926744822795794,
            "unit": "us/iter",
            "extra": "iterations: 573041\ncpu: 1.192496688718611 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.2879618946045355,
            "unit": "us/iter",
            "extra": "iterations: 303789\ncpu: 2.2875992119530317 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.362287920000312,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.361395899999906 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 11.446882865931398,
            "unit": "us/iter",
            "extra": "iterations: 61118\ncpu: 11.446732370169089 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 22.30510542577008,
            "unit": "us/iter",
            "extra": "iterations: 31719\ncpu: 22.30326750528048 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 41.514890711049844,
            "unit": "us/iter",
            "extra": "iterations: 16342\ncpu: 41.512608309875894 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5035815730000195,
            "unit": "us/iter",
            "extra": "iterations: 1000000\ncpu: 0.5035717760000011 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9174796674644937,
            "unit": "us/iter",
            "extra": "iterations: 752882\ncpu: 0.9174074463196115 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.5847360320700326,
            "unit": "us/iter",
            "extra": "iterations: 442281\ncpu: 1.5846268186966992 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.081453067919624,
            "unit": "us/iter",
            "extra": "iterations: 233497\ncpu: 3.081341867347367 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.070551906419425,
            "unit": "us/iter",
            "extra": "iterations: 105748\ncpu: 6.070012028596253 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 12.708489277309754,
            "unit": "us/iter",
            "extra": "iterations: 52692\ncpu: 12.707311812039618 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 25.418833946124316,
            "unit": "us/iter",
            "extra": "iterations: 26654\ncpu: 25.417770653560208 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.20652094195949852,
            "unit": "us/iter",
            "extra": "iterations: 3481551\ncpu: 0.2065089455820151 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3168759845839676,
            "unit": "us/iter",
            "extra": "iterations: 2176173\ncpu: 0.3168668910973517 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.659347764541244,
            "unit": "us/iter",
            "extra": "iterations: 1043410\ncpu: 0.6593085881868146 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.2604211647032644,
            "unit": "us/iter",
            "extra": "iterations: 532084\ncpu: 1.2603778087670487 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.5140032511644876,
            "unit": "us/iter",
            "extra": "iterations: 250987\ncpu: 2.5138057628482837 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.306841556126781,
            "unit": "us/iter",
            "extra": "iterations: 126802\ncpu: 5.306519944480423 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.238419146471657,
            "unit": "us/iter",
            "extra": "iterations: 67344\ncpu: 11.236989471964737 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 65.39545542580487,
            "unit": "us/iter",
            "extra": "iterations: 10533\ncpu: 65.3932712427605 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 66.29285562797165,
            "unit": "us/iter",
            "extra": "iterations: 9053\ncpu: 66.28376471887888 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 73.2327187029424,
            "unit": "us/iter",
            "extra": "iterations: 9961\ncpu: 73.22325348860551 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 83.78020876852308,
            "unit": "us/iter",
            "extra": "iterations: 8234\ncpu: 83.77530738401725 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 108.4224213725868,
            "unit": "us/iter",
            "extra": "iterations: 6251\ncpu: 108.4080057590789 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 152.82174651741315,
            "unit": "us/iter",
            "extra": "iterations: 4020\ncpu: 152.81393855721151 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 243.34145881972148,
            "unit": "us/iter",
            "extra": "iterations: 3084\ncpu: 243.32207230868713 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 64.15625617100756,
            "unit": "us/iter",
            "extra": "iterations: 11789\ncpu: 64.15240512342042 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 60.94952209834714,
            "unit": "us/iter",
            "extra": "iterations: 10046\ncpu: 60.94400716703073 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 65.23170261927773,
            "unit": "us/iter",
            "extra": "iterations: 11339\ncpu: 65.22815786224507 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 70.28448685472803,
            "unit": "us/iter",
            "extra": "iterations: 10422\ncpu: 70.28106131260817 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 72.03152988554432,
            "unit": "us/iter",
            "extra": "iterations: 9436\ncpu: 72.0269523103006 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 91.57170577617708,
            "unit": "us/iter",
            "extra": "iterations: 7756\ncpu: 91.56752681794804 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 112.38963767188986,
            "unit": "us/iter",
            "extra": "iterations: 6254\ncpu: 112.37916661336781 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 65.48467665573199,
            "unit": "us/iter",
            "extra": "iterations: 11279\ncpu: 65.48077435942943 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 62.6257199550775,
            "unit": "us/iter",
            "extra": "iterations: 10684\ncpu: 62.6196164357921 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 66.27081642935342,
            "unit": "us/iter",
            "extra": "iterations: 9130\ncpu: 66.26768378970425 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 68.1117985220152,
            "unit": "us/iter",
            "extra": "iterations: 9743\ncpu: 68.09955496253836 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 76.94830985915502,
            "unit": "us/iter",
            "extra": "iterations: 9017\ncpu: 76.93293811689077 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 90.71968719084035,
            "unit": "us/iter",
            "extra": "iterations: 7682\ncpu: 90.71372533194497 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 112.54892185766322,
            "unit": "us/iter",
            "extra": "iterations: 6309\ncpu: 112.53416944048107 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 61.93737762423309,
            "unit": "us/iter",
            "extra": "iterations: 11289\ncpu: 61.93651900079726 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 66.90933030302878,
            "unit": "us/iter",
            "extra": "iterations: 10890\ncpu: 66.90184692378308 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 65.3894923566848,
            "unit": "us/iter",
            "extra": "iterations: 10990\ncpu: 65.38156924476782 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 67.73758361811088,
            "unit": "us/iter",
            "extra": "iterations: 9364\ncpu: 67.73129677488261 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 74.95848255163125,
            "unit": "us/iter",
            "extra": "iterations: 9829\ncpu: 74.9491868959204 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 84.29521430989494,
            "unit": "us/iter",
            "extra": "iterations: 8861\ncpu: 84.29075883083121 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 110.737771902132,
            "unit": "us/iter",
            "extra": "iterations: 6335\ncpu: 110.72855359116005 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 64.47201793005786,
            "unit": "us/iter",
            "extra": "iterations: 11266\ncpu: 64.47035913367584 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 62.69335404465616,
            "unit": "us/iter",
            "extra": "iterations: 10928\ncpu: 62.691349286237994 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 65.41292695464021,
            "unit": "us/iter",
            "extra": "iterations: 11089\ncpu: 65.40744431418413 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 71.7390854261004,
            "unit": "us/iter",
            "extra": "iterations: 9716\ncpu: 71.73582338410922 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 74.8705340749382,
            "unit": "us/iter",
            "extra": "iterations: 8540\ncpu: 74.85991557376978 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 91.42362119013002,
            "unit": "us/iter",
            "extra": "iterations: 7579\ncpu: 91.42095711835404 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 119.04655950567404,
            "unit": "us/iter",
            "extra": "iterations: 5907\ncpu: 119.03601371254436 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 65.98087181594143,
            "unit": "us/iter",
            "extra": "iterations: 10953\ncpu: 65.97949164612459 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 64.2746543676817,
            "unit": "us/iter",
            "extra": "iterations: 10841\ncpu: 64.27016299234306 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 71.79019141544654,
            "unit": "us/iter",
            "extra": "iterations: 8923\ncpu: 71.77848425417478 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 76.13032002737026,
            "unit": "us/iter",
            "extra": "iterations: 8768\ncpu: 76.12695768704357 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 92.73911047835979,
            "unit": "us/iter",
            "extra": "iterations: 7902\ncpu: 92.72916818526866 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 113.00865362005271,
            "unit": "us/iter",
            "extra": "iterations: 6464\ncpu: 112.99748437499913 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 175.06383494160187,
            "unit": "us/iter",
            "extra": "iterations: 3938\ncpu: 175.05241188420547 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 62.505166122049935,
            "unit": "us/iter",
            "extra": "iterations: 11323\ncpu: 62.50087414995968 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 69.9580861086084,
            "unit": "us/iter",
            "extra": "iterations: 9999\ncpu: 69.95299799980005 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 82.5600021956324,
            "unit": "us/iter",
            "extra": "iterations: 9109\ncpu: 82.55151849818962 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 139.95813531613356,
            "unit": "us/iter",
            "extra": "iterations: 5077\ncpu: 139.95071636793637 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 381.88112351273764,
            "unit": "us/iter",
            "extra": "iterations: 1765\ncpu: 381.84069121812615 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1393.3966810035995,
            "unit": "us/iter",
            "extra": "iterations: 558\ncpu: 1392.888998207897 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 4952.714231343372,
            "unit": "us/iter",
            "extra": "iterations: 134\ncpu: 4952.034582089694 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 62.81597787691123,
            "unit": "us/iter",
            "extra": "iterations: 10984\ncpu: 62.81075318645091 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 69.45896746285712,
            "unit": "us/iter",
            "extra": "iterations: 10634\ncpu: 69.44920039495972 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 89.134766162135,
            "unit": "us/iter",
            "extra": "iterations: 7796\ncpu: 89.1311885582353 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 133.36769759803641,
            "unit": "us/iter",
            "extra": "iterations: 4871\ncpu: 133.35660993635815 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 344.1041788491428,
            "unit": "us/iter",
            "extra": "iterations: 1929\ncpu: 344.094433385185 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1206.205564428291,
            "unit": "us/iter",
            "extra": "iterations: 551\ncpu: 1206.1560127041603 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4516.922429486997,
            "unit": "us/iter",
            "extra": "iterations: 156\ncpu: 4516.773044871642 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 61.87052013974688,
            "unit": "us/iter",
            "extra": "iterations: 9732\ncpu: 61.868022092068685 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 68.3522386061282,
            "unit": "us/iter",
            "extra": "iterations: 11651\ncpu: 68.3470629130539 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 66.14222572328913,
            "unit": "us/iter",
            "extra": "iterations: 10473\ncpu: 66.13848238327023 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 67.88289462095143,
            "unit": "us/iter",
            "extra": "iterations: 9537\ncpu: 67.87361549753736 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 77.39900840247066,
            "unit": "us/iter",
            "extra": "iterations: 9402\ncpu: 77.39555169112927 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 87.94320002635355,
            "unit": "us/iter",
            "extra": "iterations: 7589\ncpu: 87.93113058374104 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 114.40151502970801,
            "unit": "us/iter",
            "extra": "iterations: 5722\ncpu: 114.39901747640755 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 63.23901227049783,
            "unit": "us/iter",
            "extra": "iterations: 11002\ncpu: 63.23656516997 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 69.3092502540414,
            "unit": "us/iter",
            "extra": "iterations: 10825\ncpu: 69.30072277136378 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 83.3130217798595,
            "unit": "us/iter",
            "extra": "iterations: 8540\ncpu: 83.31013021077405 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 132.70444793675293,
            "unit": "us/iter",
            "extra": "iterations: 5186\ncpu: 132.68389317393297 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 369.9291407815656,
            "unit": "us/iter",
            "extra": "iterations: 1996\ncpu: 369.89572845691595 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1305.6014890109745,
            "unit": "us/iter",
            "extra": "iterations: 546\ncpu: 1305.4496666666682 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4972.991335820884,
            "unit": "us/iter",
            "extra": "iterations: 134\ncpu: 4972.7877462686365 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "1ad19347fe7c07dcb5fa0b20b4ad0cc33e5f2120",
          "message": "Remove line",
          "timestamp": "2021-04-01T15:00:21Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/1ad19347fe7c07dcb5fa0b20b4ad0cc33e5f2120"
        },
        "date": 1617808535917,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 10.066050734990583,
            "unit": "ns/iter",
            "extra": "iterations: 70565619\ncpu: 10.064894548717842 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.983965812761728,
            "unit": "ns/iter",
            "extra": "iterations: 71978204\ncpu: 9.982497465482746 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 26.82290096982399,
            "unit": "us/iter",
            "extra": "iterations: 25881\ncpu: 26.77336281441985 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.174749428571547,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 10.170507984126987 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 10.207848042253472,
            "unit": "ms/iter",
            "extra": "iterations: 71\ncpu: 10.20141111267605 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.298773264705872,
            "unit": "ms/iter",
            "extra": "iterations: 68\ncpu: 10.286186382352941 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 9.912472273972666,
            "unit": "ms/iter",
            "extra": "iterations: 73\ncpu: 9.904698397260274 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 10.316807626865549,
            "unit": "ms/iter",
            "extra": "iterations: 67\ncpu: 10.298705000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 9.888035134328467,
            "unit": "ms/iter",
            "extra": "iterations: 67\ncpu: 9.883940313432825 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 9.79576889855058,
            "unit": "ms/iter",
            "extra": "iterations: 69\ncpu: 9.794000840579722 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.216745365514029,
            "unit": "ns/iter",
            "extra": "iterations: 97744549\ncpu: 7.216226431204882 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.146317326945815,
            "unit": "ns/iter",
            "extra": "iterations: 97797563\ncpu: 7.145881048181138 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.1739035700055105,
            "unit": "ns/iter",
            "extra": "iterations: 96030162\ncpu: 7.1733326348028115 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.304396789317779,
            "unit": "ns/iter",
            "extra": "iterations: 98610820\ncpu: 7.303951696172892 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.146878602168641,
            "unit": "ns/iter",
            "extra": "iterations: 97166291\ncpu: 7.145968461428666 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.261734815220284,
            "unit": "ns/iter",
            "extra": "iterations: 97648832\ncpu: 7.261167138179391 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.218194183399531,
            "unit": "ns/iter",
            "extra": "iterations: 93318945\ncpu: 7.2180157844690545 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.1889707522509608,
            "unit": "us/iter",
            "extra": "iterations: 3700866\ncpu: 0.1889588685459025 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3684470255625909,
            "unit": "us/iter",
            "extra": "iterations: 1882087\ncpu: 0.36843164688986124 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7307842487881225,
            "unit": "us/iter",
            "extra": "iterations: 936347\ncpu: 0.7307487822356457 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3954443013959503,
            "unit": "us/iter",
            "extra": "iterations: 529735\ncpu: 1.3953627587378556 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.6969688392789664,
            "unit": "us/iter",
            "extra": "iterations: 252369\ncpu: 2.696832455650266 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.270591009399061,
            "unit": "us/iter",
            "extra": "iterations: 134585\ncpu: 5.270305539250302 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 11.039109190144847,
            "unit": "us/iter",
            "extra": "iterations: 64493\ncpu: 11.035674646860933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3414694168983349,
            "unit": "us/iter",
            "extra": "iterations: 2062299\ncpu: 0.34145864881862287 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.854630675117309,
            "unit": "us/iter",
            "extra": "iterations: 838595\ncpu: 0.854549847065629 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.751301259842148,
            "unit": "us/iter",
            "extra": "iterations: 399177\ncpu: 1.7512105907905486 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.6218577561301797,
            "unit": "us/iter",
            "extra": "iterations: 197302\ncpu: 3.621695679719403 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.210692136163059,
            "unit": "us/iter",
            "extra": "iterations: 99557\ncpu: 7.210048725855545 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.815670634182672,
            "unit": "us/iter",
            "extra": "iterations: 48393\ncpu: 14.814663711693894 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 29.396191928476394,
            "unit": "us/iter",
            "extra": "iterations: 23936\ncpu: 29.3935177974598 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.33700693721800506,
            "unit": "us/iter",
            "extra": "iterations: 2071868\ncpu: 0.33698682638083266 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6854635151980873,
            "unit": "us/iter",
            "extra": "iterations: 1066910\ncpu: 0.6854192003074313 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3438480281879097,
            "unit": "us/iter",
            "extra": "iterations: 536968\ncpu: 1.3437496442991028 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.625180577849104,
            "unit": "us/iter",
            "extra": "iterations: 261660\ncpu: 2.625076370098615 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.133632940048547,
            "unit": "us/iter",
            "extra": "iterations: 135610\ncpu: 5.13300343632476 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.079851868281251,
            "unit": "us/iter",
            "extra": "iterations: 67629\ncpu: 10.079098774194545 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 20.35020673556858,
            "unit": "us/iter",
            "extra": "iterations: 34058\ncpu: 20.34809527864229 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19117112821474022,
            "unit": "us/iter",
            "extra": "iterations: 3614179\ncpu: 0.1911606505931224 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3819045486710162,
            "unit": "us/iter",
            "extra": "iterations: 1895081\ncpu: 0.38187004249422607 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7629723743605943,
            "unit": "us/iter",
            "extra": "iterations: 934639\ncpu: 0.7629179875866564 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.356212474027757,
            "unit": "us/iter",
            "extra": "iterations: 515936\ncpu: 1.3560929010575022 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.712943258733178,
            "unit": "us/iter",
            "extra": "iterations: 264164\ncpu: 2.712807358307737 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.307380655063327,
            "unit": "us/iter",
            "extra": "iterations: 134216\ncpu: 5.306917878643373 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.814982878864534,
            "unit": "us/iter",
            "extra": "iterations: 65241\ncpu: 10.814306172498839 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.33518717300416667,
            "unit": "us/iter",
            "extra": "iterations: 2095019\ncpu: 0.3351652309597209 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8415007709132251,
            "unit": "us/iter",
            "extra": "iterations: 852236\ncpu: 0.8414378352944479 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7434798898239456,
            "unit": "us/iter",
            "extra": "iterations: 392463\ncpu: 1.7433038018870708 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.5639825043636875,
            "unit": "us/iter",
            "extra": "iterations: 195363\ncpu: 3.563747111786792 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.149497316319402,
            "unit": "us/iter",
            "extra": "iterations: 95764\ncpu: 7.148959316653376 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 15.008136720764682,
            "unit": "us/iter",
            "extra": "iterations: 48493\ncpu: 14.995004990410854 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 29.215675077131362,
            "unit": "us/iter",
            "extra": "iterations: 23661\ncpu: 29.2109309834748 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.5903408680862343,
            "unit": "us/iter",
            "extra": "iterations: 1189997\ncpu: 0.5903060318639448 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.960530906509041,
            "unit": "us/iter",
            "extra": "iterations: 716904\ncpu: 0.9604405192327001 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.8376235317768,
            "unit": "us/iter",
            "extra": "iterations: 392992\ncpu: 1.8374880404690068 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.446154409909111,
            "unit": "us/iter",
            "extra": "iterations: 194165\ncpu: 3.445829258620235 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.887124272107858,
            "unit": "us/iter",
            "extra": "iterations: 103209\ncpu: 6.88644909843132 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.46013724930039,
            "unit": "us/iter",
            "extra": "iterations: 52503\ncpu: 13.459452317010367 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 27.82486045206763,
            "unit": "us/iter",
            "extra": "iterations: 24952\ncpu: 27.82267754087864 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3737754052924807,
            "unit": "us/iter",
            "extra": "iterations: 1890610\ncpu: 0.3737463876738198 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.709375858534307,
            "unit": "us/iter",
            "extra": "iterations: 970695\ncpu: 0.7093274221047823 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.4082277754740442,
            "unit": "us/iter",
            "extra": "iterations: 516074\ncpu: 1.4080389207749335 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6383875497082814,
            "unit": "us/iter",
            "extra": "iterations: 269070\ncpu: 2.638217538187111 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.1066362887726395,
            "unit": "us/iter",
            "extra": "iterations: 131148\ncpu: 5.106361393235109 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.081844243111767,
            "unit": "us/iter",
            "extra": "iterations: 69647\ncpu: 10.081540597585013 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 21.162464326999803,
            "unit": "us/iter",
            "extra": "iterations: 33737\ncpu: 21.161902925571408 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.2633151671526575,
            "unit": "us/iter",
            "extra": "iterations: 2689338\ncpu: 0.2633033783778757 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.40585432488308687,
            "unit": "us/iter",
            "extra": "iterations: 1745631\ncpu: 0.4058046500090779 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7372466130829305,
            "unit": "us/iter",
            "extra": "iterations: 931378\ncpu: 0.7371830942968419 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.391366972156553,
            "unit": "us/iter",
            "extra": "iterations: 486759\ncpu: 1.3913085900825848 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.667707411919211,
            "unit": "us/iter",
            "extra": "iterations: 252013\ncpu: 2.667629602441161 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.418758795872203,
            "unit": "us/iter",
            "extra": "iterations: 132079\ncpu: 5.418509763096417 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 11.11931828018623,
            "unit": "us/iter",
            "extra": "iterations: 62844\ncpu: 11.118876185475175 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.5506871019510664,
            "unit": "us/iter",
            "extra": "iterations: 1266176\ncpu: 0.5506324981677057 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1740045762470062,
            "unit": "us/iter",
            "extra": "iterations: 610981\ncpu: 1.1739030362646319 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.498519547726289,
            "unit": "us/iter",
            "extra": "iterations: 282130\ncpu: 2.4983915677170243 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.6262033843281,
            "unit": "us/iter",
            "extra": "iterations: 126288\ncpu: 5.625826816482962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.891542046054258,
            "unit": "us/iter",
            "extra": "iterations: 62491\ncpu: 10.890412283368873 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 23.512487326383784,
            "unit": "us/iter",
            "extra": "iterations: 30023\ncpu: 23.510740099257127 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 45.06506820869951,
            "unit": "us/iter",
            "extra": "iterations: 15218\ncpu: 45.06262807202047 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5537613308193946,
            "unit": "us/iter",
            "extra": "iterations: 1280865\ncpu: 0.5537082120285927 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9188788979926954,
            "unit": "us/iter",
            "extra": "iterations: 759269\ncpu: 0.9188190614920329 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.7801540135742264,
            "unit": "us/iter",
            "extra": "iterations: 391920\ncpu: 1.7799566518677246 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.5563250482227646,
            "unit": "us/iter",
            "extra": "iterations: 194928\ncpu: 3.556082209841588 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 7.122746818015324,
            "unit": "us/iter",
            "extra": "iterations: 98052\ncpu: 7.122273875086611 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.663476353681038,
            "unit": "us/iter",
            "extra": "iterations: 49310\ncpu: 14.662596795781665 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 30.654322868087114,
            "unit": "us/iter",
            "extra": "iterations: 24016\ncpu: 30.652404022318773 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.22705336054754943,
            "unit": "us/iter",
            "extra": "iterations: 3001862\ncpu: 0.22704149291339593 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.38852567416930817,
            "unit": "us/iter",
            "extra": "iterations: 1815716\ncpu: 0.3884988285612962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.738141268963484,
            "unit": "us/iter",
            "extra": "iterations: 942139\ncpu: 0.7380863057362008 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.5004884431013812,
            "unit": "us/iter",
            "extra": "iterations: 475214\ncpu: 1.5003835787666242 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9865163444081078,
            "unit": "us/iter",
            "extra": "iterations: 239042\ncpu: 2.9863827444549056 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 6.059481869808143,
            "unit": "us/iter",
            "extra": "iterations: 113402\ncpu: 6.058861228197099 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.643980241099454,
            "unit": "us/iter",
            "extra": "iterations: 53090\ncpu: 12.642788321718028 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 58.45303421190481,
            "unit": "us/iter",
            "extra": "iterations: 11458\ncpu: 58.44829053936196 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 61.719209349062226,
            "unit": "us/iter",
            "extra": "iterations: 11445\ncpu: 61.71583066841392 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 67.05462555534314,
            "unit": "us/iter",
            "extra": "iterations: 10354\ncpu: 67.05390438477936 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 80.244351830404,
            "unit": "us/iter",
            "extra": "iterations: 8632\ncpu: 80.23312384151833 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 105.15600132353264,
            "unit": "us/iter",
            "extra": "iterations: 6800\ncpu: 105.14763779411851 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 158.4828468134407,
            "unit": "us/iter",
            "extra": "iterations: 4315\ncpu: 158.4659995365022 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 249.89233212209558,
            "unit": "us/iter",
            "extra": "iterations: 2752\ncpu: 249.87627398255918 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 58.380018481477244,
            "unit": "us/iter",
            "extra": "iterations: 12499\ncpu: 58.37416745339523 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 59.774547477873845,
            "unit": "us/iter",
            "extra": "iterations: 11637\ncpu: 59.77068153304156 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 59.90629800981936,
            "unit": "us/iter",
            "extra": "iterations: 11607\ncpu: 59.901699060911916 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 62.98420105726598,
            "unit": "us/iter",
            "extra": "iterations: 11350\ncpu: 62.98334942731281 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 68.46312476667516,
            "unit": "us/iter",
            "extra": "iterations: 10179\ncpu: 68.46026328716084 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 82.49845048183086,
            "unit": "us/iter",
            "extra": "iterations: 8613\ncpu: 82.47309845582267 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 109.9891344459917,
            "unit": "us/iter",
            "extra": "iterations: 6471\ncpu: 109.98225884716607 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 57.40393631414018,
            "unit": "us/iter",
            "extra": "iterations: 12122\ncpu: 57.398508579441966 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 58.7895320748124,
            "unit": "us/iter",
            "extra": "iterations: 11442\ncpu: 58.78571106449883 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 61.63460487849458,
            "unit": "us/iter",
            "extra": "iterations: 10946\ncpu: 61.633969029782044 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 62.380644044197595,
            "unit": "us/iter",
            "extra": "iterations: 11493\ncpu: 62.37311528756709 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 68.80369227646,
            "unit": "us/iter",
            "extra": "iterations: 9853\ncpu: 68.78108423830305 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 81.54787136978567,
            "unit": "us/iter",
            "extra": "iterations: 8505\ncpu: 81.54086995884849 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 111.299264431442,
            "unit": "us/iter",
            "extra": "iterations: 6323\ncpu: 111.2857436343503 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 56.77643183333222,
            "unit": "us/iter",
            "extra": "iterations: 12000\ncpu: 56.77332824999937 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 57.48727997087848,
            "unit": "us/iter",
            "extra": "iterations: 12362\ncpu: 57.48534177317641 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 60.217568629068694,
            "unit": "us/iter",
            "extra": "iterations: 12145\ncpu: 60.21412844792008 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 62.928667441238666,
            "unit": "us/iter",
            "extra": "iterations: 11189\ncpu: 62.924287782643724 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 70.10951148791429,
            "unit": "us/iter",
            "extra": "iterations: 9967\ncpu: 70.10574275107925 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 81.46135220500486,
            "unit": "us/iter",
            "extra": "iterations: 8390\ncpu: 81.45296317044193 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 107.4242549230768,
            "unit": "us/iter",
            "extra": "iterations: 6500\ncpu: 107.41398584615398 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 56.818485907455845,
            "unit": "us/iter",
            "extra": "iterations: 11389\ncpu: 56.817897269294924 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 58.18550102349796,
            "unit": "us/iter",
            "extra": "iterations: 12213\ncpu: 58.17911618766902 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 60.338948567987515,
            "unit": "us/iter",
            "extra": "iterations: 11627\ncpu: 60.3351000258021 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 62.73797144123976,
            "unit": "us/iter",
            "extra": "iterations: 11275\ncpu: 62.53889552106495 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 68.59318665214333,
            "unit": "us/iter",
            "extra": "iterations: 10099\ncpu: 68.58802564610353 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 84.01097610961774,
            "unit": "us/iter",
            "extra": "iterations: 8539\ncpu: 83.95053320060944 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 108.09372558427317,
            "unit": "us/iter",
            "extra": "iterations: 6461\ncpu: 108.08977263581603 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 57.97864034873376,
            "unit": "us/iter",
            "extra": "iterations: 12273\ncpu: 57.97622960971197 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 61.199283293828344,
            "unit": "us/iter",
            "extra": "iterations: 11391\ncpu: 61.194056799226864 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 65.13080929072386,
            "unit": "us/iter",
            "extra": "iterations: 10828\ncpu: 65.12544024750588 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 68.92569310818817,
            "unit": "us/iter",
            "extra": "iterations: 10186\ncpu: 68.92031690555663 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 83.54770508054608,
            "unit": "us/iter",
            "extra": "iterations: 8070\ncpu: 83.54307719950485 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 114.6493348859656,
            "unit": "us/iter",
            "extra": "iterations: 6226\ncpu: 114.63903389013957 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 170.62370077783237,
            "unit": "us/iter",
            "extra": "iterations: 4114\ncpu: 170.6179790957718 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 59.7713665839561,
            "unit": "us/iter",
            "extra": "iterations: 12090\ncpu: 59.76817568238207 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 63.04975938945035,
            "unit": "us/iter",
            "extra": "iterations: 10810\ncpu: 63.044890934319604 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 79.69541942124658,
            "unit": "us/iter",
            "extra": "iterations: 8743\ncpu: 79.69131053414152 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 142.11844582892962,
            "unit": "us/iter",
            "extra": "iterations: 4735\ncpu: 142.10141795142414 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 390.2476838888763,
            "unit": "us/iter",
            "extra": "iterations: 1800\ncpu: 390.2193205555686 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1469.0902419699157,
            "unit": "us/iter",
            "extra": "iterations: 467\ncpu: 1468.9115653104986 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5481.3455338983085,
            "unit": "us/iter",
            "extra": "iterations: 118\ncpu: 5480.893296609968 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 59.25644150471108,
            "unit": "us/iter",
            "extra": "iterations: 10394\ncpu: 59.25579719068615 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 62.36284413647966,
            "unit": "us/iter",
            "extra": "iterations: 11401\ncpu: 62.354242259450714 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 78.7127627520765,
            "unit": "us/iter",
            "extra": "iterations: 9273\ncpu: 78.70760401164611 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 132.27370801958207,
            "unit": "us/iter",
            "extra": "iterations: 5312\ncpu: 132.26289118975666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 347.80676238120566,
            "unit": "us/iter",
            "extra": "iterations: 1999\ncpu: 347.792115557771 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1217.3698839286017,
            "unit": "us/iter",
            "extra": "iterations: 560\ncpu: 1217.1817892857057 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4608.657296774166,
            "unit": "us/iter",
            "extra": "iterations: 155\ncpu: 4608.414393548386 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 58.88900977001273,
            "unit": "us/iter",
            "extra": "iterations: 11566\ncpu: 58.88399221857236 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 58.829399966488324,
            "unit": "us/iter",
            "extra": "iterations: 11936\ncpu: 58.825910774129994 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 59.8658965394545,
            "unit": "us/iter",
            "extra": "iterations: 11241\ncpu: 59.85936429143415 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 64.39339417421094,
            "unit": "us/iter",
            "extra": "iterations: 10711\ncpu: 64.39093389973017 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 70.86842439372435,
            "unit": "us/iter",
            "extra": "iterations: 9814\ncpu: 70.86750886488862 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 87.06890297415882,
            "unit": "us/iter",
            "extra": "iterations: 8204\ncpu: 87.060474280837 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 112.85503310614124,
            "unit": "us/iter",
            "extra": "iterations: 6162\ncpu: 112.84901525478412 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 57.98944712505267,
            "unit": "us/iter",
            "extra": "iterations: 12435\ncpu: 57.9845889022912 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 60.49521390471148,
            "unit": "us/iter",
            "extra": "iterations: 11061\ncpu: 60.49013886628615 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 75.68185943079627,
            "unit": "us/iter",
            "extra": "iterations: 9241\ncpu: 75.67864744075295 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 137.50543164482758,
            "unit": "us/iter",
            "extra": "iterations: 5113\ncpu: 137.49943301388873 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 361.9740644820147,
            "unit": "us/iter",
            "extra": "iterations: 1892\ncpu: 361.9267563424881 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1287.4654625228757,
            "unit": "us/iter",
            "extra": "iterations: 547\ncpu: 1287.427605118813 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5100.289553957073,
            "unit": "us/iter",
            "extra": "iterations: 139\ncpu: 5100.186611510665 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "51c638aa104b65afb0c18d62adaaa63a5ed08030",
          "message": "Remove line",
          "timestamp": "2021-04-01T15:00:21Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/51c638aa104b65afb0c18d62adaaa63a5ed08030"
        },
        "date": 1617816573141,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.870002120835112,
            "unit": "ns/iter",
            "extra": "iterations: 70868310\ncpu: 9.869311346637165 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 10.158865623169296,
            "unit": "ns/iter",
            "extra": "iterations: 66937968\ncpu: 10.070587203961736 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 27.182071504634756,
            "unit": "us/iter",
            "extra": "iterations: 25355\ncpu: 27.180041175310585 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.513277015872648,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 10.506338920634917 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 10.569141762711764,
            "unit": "ms/iter",
            "extra": "iterations: 59\ncpu: 10.56064422033898 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.490296101449426,
            "unit": "ms/iter",
            "extra": "iterations: 69\ncpu: 10.49032533333334 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.063170661538397,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 10.054455015384615 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 10.333791529411522,
            "unit": "ms/iter",
            "extra": "iterations: 68\ncpu: 10.332721794117646 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 11.022398032258065,
            "unit": "ms/iter",
            "extra": "iterations: 62\ncpu: 11.020092016129032 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 11.744308275862048,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 11.732136724137932 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.2283986510302025,
            "unit": "ns/iter",
            "extra": "iterations: 96755300\ncpu: 7.228409255100246 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.256464654834583,
            "unit": "ns/iter",
            "extra": "iterations: 96874507\ncpu: 7.256187698586165 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.286275666554391,
            "unit": "ns/iter",
            "extra": "iterations: 96372061\ncpu: 7.285900070145856 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.225547526334636,
            "unit": "ns/iter",
            "extra": "iterations: 94627001\ncpu: 7.220713219052558 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.221878310439933,
            "unit": "ns/iter",
            "extra": "iterations: 97625811\ncpu: 7.221404357911052 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.271408309763605,
            "unit": "ns/iter",
            "extra": "iterations: 96897269\ncpu: 7.270725885989618 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.247895352861328,
            "unit": "ns/iter",
            "extra": "iterations: 96279441\ncpu: 7.247210076759779 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.19197723725099336,
            "unit": "us/iter",
            "extra": "iterations: 3417777\ncpu: 0.19195979726003193 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.38082441562958685,
            "unit": "us/iter",
            "extra": "iterations: 1851822\ncpu: 0.3807909064694131 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7071456352705735,
            "unit": "us/iter",
            "extra": "iterations: 991058\ncpu: 0.7071034217977159 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.364288036824861,
            "unit": "us/iter",
            "extra": "iterations: 510525\ncpu: 1.3641542118407544 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.715927025819346,
            "unit": "us/iter",
            "extra": "iterations: 257365\ncpu: 2.7156952343947247 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.348754198115655,
            "unit": "us/iter",
            "extra": "iterations: 123746\ncpu: 5.348132909346566 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.890135807245224,
            "unit": "us/iter",
            "extra": "iterations: 64621\ncpu: 10.889496881818584 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3398974095859739,
            "unit": "us/iter",
            "extra": "iterations: 2060134\ncpu: 0.33985745587423033 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8303417908018024,
            "unit": "us/iter",
            "extra": "iterations: 841623\ncpu: 0.8302871950980416 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.7710875256538552,
            "unit": "us/iter",
            "extra": "iterations: 380060\ncpu: 1.7708471688680705 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.631638501968337,
            "unit": "us/iter",
            "extra": "iterations: 192546\ncpu: 3.6314045734525906 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.293157785306429,
            "unit": "us/iter",
            "extra": "iterations: 94749\ncpu: 7.29239121257217 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.78988964896898,
            "unit": "us/iter",
            "extra": "iterations: 47802\ncpu: 14.788639596669567 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 29.826496487418236,
            "unit": "us/iter",
            "extra": "iterations: 23487\ncpu: 29.823123387405907 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.34289570685830295,
            "unit": "us/iter",
            "extra": "iterations: 2065131\ncpu: 0.3428693622825869 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6836028433648383,
            "unit": "us/iter",
            "extra": "iterations: 1035604\ncpu: 0.6835420102664719 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3452196720118388,
            "unit": "us/iter",
            "extra": "iterations: 522092\ncpu: 1.3451244263463162 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.5823317304841216,
            "unit": "us/iter",
            "extra": "iterations: 269728\ncpu: 2.5820088867303346 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.101573552798919,
            "unit": "us/iter",
            "extra": "iterations: 138336\ncpu: 5.101149946507024 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.14388628503378,
            "unit": "us/iter",
            "extra": "iterations: 69683\ncpu: 10.14310919449504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 20.465445694517726,
            "unit": "us/iter",
            "extra": "iterations: 34398\ncpu: 20.46544572358867 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19310868232371592,
            "unit": "us/iter",
            "extra": "iterations: 3612731\ncpu: 0.19309061482850529 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3861720641386837,
            "unit": "us/iter",
            "extra": "iterations: 1778209\ncpu: 0.38614802759405725 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7163469105583615,
            "unit": "us/iter",
            "extra": "iterations: 979287\ncpu: 0.7162640278079874 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.3815122276461507,
            "unit": "us/iter",
            "extra": "iterations: 503940\ncpu: 1.3814810552843557 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.69615261273987,
            "unit": "us/iter",
            "extra": "iterations: 260378\ncpu: 2.695800478535047 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.364676770320229,
            "unit": "us/iter",
            "extra": "iterations: 129920\ncpu: 5.364675661945808 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.805230906689728,
            "unit": "us/iter",
            "extra": "iterations: 64355\ncpu: 10.804525227255029 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.3442190375432402,
            "unit": "us/iter",
            "extra": "iterations: 2017088\ncpu: 0.34421318653425237 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8272754860736746,
            "unit": "us/iter",
            "extra": "iterations: 804302\ncpu: 0.8272004060663811 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7660965223634992,
            "unit": "us/iter",
            "extra": "iterations: 395556\ncpu: 1.7660964262961656 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.6456390050492393,
            "unit": "us/iter",
            "extra": "iterations: 193698\ncpu: 3.645283838759316 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.316492565311554,
            "unit": "us/iter",
            "extra": "iterations: 94355\ncpu: 7.31649546923853 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 14.828811470229407,
            "unit": "us/iter",
            "extra": "iterations: 47462\ncpu: 14.827751864649588 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 29.719429257510573,
            "unit": "us/iter",
            "extra": "iterations: 23529\ncpu: 29.719426324960672 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.5967642561684879,
            "unit": "us/iter",
            "extra": "iterations: 1177350\ncpu: 0.5967348358601904 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9787313721629279,
            "unit": "us/iter",
            "extra": "iterations: 736465\ncpu: 0.9786660126414685 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.840258549684207,
            "unit": "us/iter",
            "extra": "iterations: 381710\ncpu: 1.8250700165046645 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.5589654421110453,
            "unit": "us/iter",
            "extra": "iterations: 198276\ncpu: 3.5585394853638497 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.919945860832384,
            "unit": "us/iter",
            "extra": "iterations: 102883\ncpu: 6.919477056462189 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 14.098401022733901,
            "unit": "us/iter",
            "extra": "iterations: 48693\ncpu: 14.097756802825819 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 28.023814962023536,
            "unit": "us/iter",
            "extra": "iterations: 25411\ncpu: 28.021451733501216 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3783498348624117,
            "unit": "us/iter",
            "extra": "iterations: 1853303\ncpu: 0.37833631845413307 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.7182997755866255,
            "unit": "us/iter",
            "extra": "iterations: 971867\ncpu: 0.7182166294359217 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.3664554296364235,
            "unit": "us/iter",
            "extra": "iterations: 513469\ncpu: 1.366407383892693 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6719295421043108,
            "unit": "us/iter",
            "extra": "iterations: 260496\ncpu: 2.6716482210859493 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.131705118466088,
            "unit": "us/iter",
            "extra": "iterations: 138225\ncpu: 5.130654317236371 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.745069979873227,
            "unit": "us/iter",
            "extra": "iterations: 64590\ncpu: 10.744608097228648 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 20.4315290743858,
            "unit": "us/iter",
            "extra": "iterations: 33999\ncpu: 20.42912435659872 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.26883153537045174,
            "unit": "us/iter",
            "extra": "iterations: 2660511\ncpu: 0.26881162152684246 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.403581770468379,
            "unit": "us/iter",
            "extra": "iterations: 1746792\ncpu: 0.40355438770042096 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7625935502247649,
            "unit": "us/iter",
            "extra": "iterations: 909303\ncpu: 0.7625839142728088 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.4151014273831037,
            "unit": "us/iter",
            "extra": "iterations: 496503\ncpu: 1.4151023558769882 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.7409785275716327,
            "unit": "us/iter",
            "extra": "iterations: 256841\ncpu: 2.7408181170451718 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.504359740432314,
            "unit": "us/iter",
            "extra": "iterations: 128059\ncpu: 5.50414680733097 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.962142870704035,
            "unit": "us/iter",
            "extra": "iterations: 63204\ncpu: 10.961741551167536 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.5619562130254112,
            "unit": "us/iter",
            "extra": "iterations: 1236829\ncpu: 0.5619265743283891 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.185952178782593,
            "unit": "us/iter",
            "extra": "iterations: 592854\ncpu: 1.185897809578734 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.703940618543832,
            "unit": "us/iter",
            "extra": "iterations: 257993\ncpu: 2.703732221416872 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.33272918174652,
            "unit": "us/iter",
            "extra": "iterations: 132624\ncpu: 5.332548513089611 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 11.233705958420579,
            "unit": "us/iter",
            "extra": "iterations: 60318\ncpu: 11.232985410656692 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 23.25450366692628,
            "unit": "us/iter",
            "extra": "iterations: 30816\ncpu: 23.253724331516185 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 46.44947785747217,
            "unit": "us/iter",
            "extra": "iterations: 15197\ncpu: 46.44632124761397 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5579613450924273,
            "unit": "us/iter",
            "extra": "iterations: 1260642\ncpu: 0.5579442633198081 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9232334055110237,
            "unit": "us/iter",
            "extra": "iterations: 757390\ncpu: 0.9231798624222702 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.780642712599419,
            "unit": "us/iter",
            "extra": "iterations: 393851\ncpu: 1.7805730441207481 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.5739499194822777,
            "unit": "us/iter",
            "extra": "iterations: 194367\ncpu: 3.5736858726018688 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 7.192409419610092,
            "unit": "us/iter",
            "extra": "iterations: 95970\ncpu: 7.192167635719574 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.54881282725231,
            "unit": "us/iter",
            "extra": "iterations: 48319\ncpu: 14.54816436598458 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 29.84089098238862,
            "unit": "us/iter",
            "extra": "iterations: 23565\ncpu: 29.8393712285171 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.2297033058074927,
            "unit": "us/iter",
            "extra": "iterations: 2954800\ncpu: 0.22968668302422854 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.381399043537657,
            "unit": "us/iter",
            "extra": "iterations: 1867716\ncpu: 0.3813799908551412 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7511844437010965,
            "unit": "us/iter",
            "extra": "iterations: 938758\ncpu: 0.751149245066348 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.5001759102092809,
            "unit": "us/iter",
            "extra": "iterations: 466596\ncpu: 1.5000634681823233 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9848531432857603,
            "unit": "us/iter",
            "extra": "iterations: 233275\ncpu: 2.9846491951559315 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 6.00624795654341,
            "unit": "us/iter",
            "extra": "iterations: 116714\ncpu: 6.006014754014154 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.616407896869005,
            "unit": "us/iter",
            "extra": "iterations: 55541\ncpu: 12.615768891449482 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 60.819670000860505,
            "unit": "us/iter",
            "extra": "iterations: 11597\ncpu: 60.817478572044585 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 63.307685639069945,
            "unit": "us/iter",
            "extra": "iterations: 11016\ncpu: 63.30205492011551 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 68.82359617491691,
            "unit": "us/iter",
            "extra": "iterations: 10039\ncpu: 68.81848371351664 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 81.2151863541435,
            "unit": "us/iter",
            "extra": "iterations: 8618\ncpu: 81.21160675330661 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 105.42944337606818,
            "unit": "us/iter",
            "extra": "iterations: 6552\ncpu: 105.42013751526231 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 154.63327870309806,
            "unit": "us/iter",
            "extra": "iterations: 4503\ncpu: 154.6244707972467 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 256.6371048674305,
            "unit": "us/iter",
            "extra": "iterations: 2527\ncpu: 256.6156288088603 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 58.698957220154995,
            "unit": "us/iter",
            "extra": "iterations: 11828\ncpu: 58.69692221846452 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 59.61013578875308,
            "unit": "us/iter",
            "extra": "iterations: 11702\ncpu: 59.60476833019995 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 61.49796180215132,
            "unit": "us/iter",
            "extra": "iterations: 11231\ncpu: 61.49792467278148 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 64.06171039400442,
            "unit": "us/iter",
            "extra": "iterations: 10939\ncpu: 64.0603817533594 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 71.27613045230613,
            "unit": "us/iter",
            "extra": "iterations: 9927\ncpu: 71.27166586078368 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 83.69999180716931,
            "unit": "us/iter",
            "extra": "iterations: 8422\ncpu: 83.69689551175411 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 109.209751811315,
            "unit": "us/iter",
            "extra": "iterations: 6487\ncpu: 109.20373130877114 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 58.840211610488396,
            "unit": "us/iter",
            "extra": "iterations: 11748\ncpu: 58.8380496254689 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 59.836363163280886,
            "unit": "us/iter",
            "extra": "iterations: 11722\ncpu: 59.833593840641505 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 62.17835057521164,
            "unit": "us/iter",
            "extra": "iterations: 11561\ncpu: 62.17833760055378 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 64.9733732646852,
            "unit": "us/iter",
            "extra": "iterations: 10877\ncpu: 64.97117835800333 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 72.16943863449175,
            "unit": "us/iter",
            "extra": "iterations: 9696\ncpu: 72.16470565181565 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 84.49096444498338,
            "unit": "us/iter",
            "extra": "iterations: 8297\ncpu: 84.48492081475223 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 111.38472037008016,
            "unit": "us/iter",
            "extra": "iterations: 6269\ncpu: 111.37757074493557 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 58.49477270821225,
            "unit": "us/iter",
            "extra": "iterations: 11923\ncpu: 58.492710978781 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 59.472356726135,
            "unit": "us/iter",
            "extra": "iterations: 11827\ncpu: 59.46910864970042 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 61.9283192496473,
            "unit": "us/iter",
            "extra": "iterations: 11408\ncpu: 61.928290059607484 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 64.5458166149912,
            "unit": "us/iter",
            "extra": "iterations: 10966\ncpu: 64.54017645449562 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 70.61091486581505,
            "unit": "us/iter",
            "extra": "iterations: 9949\ncpu: 70.60457020806155 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 84.03016748297762,
            "unit": "us/iter",
            "extra": "iterations: 8371\ncpu: 84.02731991398937 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 112.0787508997008,
            "unit": "us/iter",
            "extra": "iterations: 6391\ncpu: 112.06515396651473 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 59.31877256829152,
            "unit": "us/iter",
            "extra": "iterations: 12008\ncpu: 59.316332778148265 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 60.243439952657226,
            "unit": "us/iter",
            "extra": "iterations: 10983\ncpu: 60.241494036237796 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 61.40082070060731,
            "unit": "us/iter",
            "extra": "iterations: 11333\ncpu: 61.39873158034051 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 64.71556002270492,
            "unit": "us/iter",
            "extra": "iterations: 10571\ncpu: 64.71049115504714 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 71.20421050484343,
            "unit": "us/iter",
            "extra": "iterations: 9805\ncpu: 71.20050096889273 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 85.20760328185203,
            "unit": "us/iter",
            "extra": "iterations: 8288\ncpu: 85.20437017374388 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 111.59334649053783,
            "unit": "us/iter",
            "extra": "iterations: 6283\ncpu: 111.58403183192678 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 61.21297670041921,
            "unit": "us/iter",
            "extra": "iterations: 11159\ncpu: 61.21302751142639 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 61.34527476722485,
            "unit": "us/iter",
            "extra": "iterations: 10740\ncpu: 61.342556610801296 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 64.4634092682003,
            "unit": "us/iter",
            "extra": "iterations: 10768\ncpu: 64.45783831723676 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 71.8562504084969,
            "unit": "us/iter",
            "extra": "iterations: 9792\ncpu: 71.8532428513074 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 87.44821917130895,
            "unit": "us/iter",
            "extra": "iterations: 8085\ncpu: 87.27366753246761 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 117.13399588070683,
            "unit": "us/iter",
            "extra": "iterations: 6069\ncpu: 117.129412918109 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 174.3216914228624,
            "unit": "us/iter",
            "extra": "iterations: 3999\ncpu: 174.312711677917 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 60.054398319468774,
            "unit": "us/iter",
            "extra": "iterations: 11782\ncpu: 60.05299100322512 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 64.84469875976164,
            "unit": "us/iter",
            "extra": "iterations: 10885\ncpu: 64.84235783187845 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 81.17414966147999,
            "unit": "us/iter",
            "extra": "iterations: 8419\ncpu: 81.16914811735333 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 146.06523365843475,
            "unit": "us/iter",
            "extra": "iterations: 4819\ncpu: 146.06015978418665 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 407.31721918604745,
            "unit": "us/iter",
            "extra": "iterations: 1720\ncpu: 407.30737848837254 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1473.8420953346501,
            "unit": "us/iter",
            "extra": "iterations: 493\ncpu: 1473.736703853977 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5523.166778688892,
            "unit": "us/iter",
            "extra": "iterations: 122\ncpu: 5522.649114754063 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 59.70905438552005,
            "unit": "us/iter",
            "extra": "iterations: 11823\ncpu: 59.706867292564375 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 64.1341323853183,
            "unit": "us/iter",
            "extra": "iterations: 10900\ncpu: 64.1275856880729 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 78.85741084843413,
            "unit": "us/iter",
            "extra": "iterations: 9052\ncpu: 78.85634975695923 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 134.9860586261374,
            "unit": "us/iter",
            "extra": "iterations: 5066\ncpu: 134.98126549545702 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 353.8182731388323,
            "unit": "us/iter",
            "extra": "iterations: 1988\ncpu: 353.792481891349 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1205.4167474226902,
            "unit": "us/iter",
            "extra": "iterations: 582\ncpu: 1205.377455326418 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4598.296269736729,
            "unit": "us/iter",
            "extra": "iterations: 152\ncpu: 4598.019598684252 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 58.909814384396675,
            "unit": "us/iter",
            "extra": "iterations: 12305\ncpu: 58.903431775701286 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 58.70617579949525,
            "unit": "us/iter",
            "extra": "iterations: 11132\ncpu: 58.7061608875317 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 61.38126315789555,
            "unit": "us/iter",
            "extra": "iterations: 11761\ncpu: 61.37328330924301 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 65.08063144985525,
            "unit": "us/iter",
            "extra": "iterations: 11008\ncpu: 65.07400744912748 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 71.44405271728546,
            "unit": "us/iter",
            "extra": "iterations: 9826\ncpu: 71.43729391410488 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 85.99929784382869,
            "unit": "us/iter",
            "extra": "iterations: 8209\ncpu: 85.98981897916786 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 114.46721712589105,
            "unit": "us/iter",
            "extra": "iterations: 6061\ncpu: 114.45996139251068 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 57.98442169750039,
            "unit": "us/iter",
            "extra": "iterations: 12324\ncpu: 57.9807122687459 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 61.692145717858686,
            "unit": "us/iter",
            "extra": "iterations: 11186\ncpu: 61.692164401931194 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 77.81646760223619,
            "unit": "us/iter",
            "extra": "iterations: 9121\ncpu: 77.80828023242863 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 136.36326497241473,
            "unit": "us/iter",
            "extra": "iterations: 5076\ncpu: 136.350044326243 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 369.6453053354372,
            "unit": "us/iter",
            "extra": "iterations: 1893\ncpu: 369.6369123085071 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1344.6940150094683,
            "unit": "us/iter",
            "extra": "iterations: 533\ncpu: 1344.565251407101 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5028.940589552145,
            "unit": "us/iter",
            "extra": "iterations: 134\ncpu: 5028.469641791038 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "167ca8c3665be5c58cab32cc985ab70f31104802",
          "message": "Remove line",
          "timestamp": "2021-04-01T15:00:21Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/167ca8c3665be5c58cab32cc985ab70f31104802"
        },
        "date": 1617818736649,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.058292210893473,
            "unit": "ns/iter",
            "extra": "iterations: 78696895\ncpu: 9.057650088990169 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.241115133870172,
            "unit": "ns/iter",
            "extra": "iterations: 67668324\ncpu: 9.240042903973798 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 26.606528650578845,
            "unit": "us/iter",
            "extra": "iterations: 26893\ncpu: 26.604000743687944 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 11.239581451612198,
            "unit": "ms/iter",
            "extra": "iterations: 62\ncpu: 11.228343145161292 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 10.697930646153964,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 10.696043338461532 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 11.009758947368521,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 11.003640315789486 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.777024298507587,
            "unit": "ms/iter",
            "extra": "iterations: 67\ncpu: 10.775907507462685 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 11.238799203703643,
            "unit": "ms/iter",
            "extra": "iterations: 54\ncpu: 11.228678000000011 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 10.988369387755668,
            "unit": "ms/iter",
            "extra": "iterations: 49\ncpu: 10.981830734693881 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.508843746268877,
            "unit": "ms/iter",
            "extra": "iterations: 67\ncpu: 10.508604850746263 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.073886728554265,
            "unit": "ns/iter",
            "extra": "iterations: 99645554\ncpu: 7.07346789401161 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.099033038404633,
            "unit": "ns/iter",
            "extra": "iterations: 102170035\ncpu: 7.098466247956162 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.139813171419302,
            "unit": "ns/iter",
            "extra": "iterations: 92122415\ncpu: 7.13942707646125 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.086011808843493,
            "unit": "ns/iter",
            "extra": "iterations: 102465407\ncpu: 7.085054607746789 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.202444845413812,
            "unit": "ns/iter",
            "extra": "iterations: 101917364\ncpu: 7.20203153998371 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.091506578951789,
            "unit": "ns/iter",
            "extra": "iterations: 98272792\ncpu: 7.090827052110201 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.137851134295764,
            "unit": "ns/iter",
            "extra": "iterations: 101692395\ncpu: 7.137199974491706 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.18948677838377048,
            "unit": "us/iter",
            "extra": "iterations: 3688543\ncpu: 0.1894558290360178 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3807042766925452,
            "unit": "us/iter",
            "extra": "iterations: 1810067\ncpu: 0.38067911629790613 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7049912866138763,
            "unit": "us/iter",
            "extra": "iterations: 1066979\ncpu: 0.7049162064108092 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3713089011742747,
            "unit": "us/iter",
            "extra": "iterations: 522931\ncpu: 1.3712086164331414 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.712555612551843,
            "unit": "us/iter",
            "extra": "iterations: 270973\ncpu: 2.71225276688083 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.202548396991014,
            "unit": "us/iter",
            "extra": "iterations: 136930\ncpu: 5.202064755714595 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.485010419179652,
            "unit": "us/iter",
            "extra": "iterations: 66320\ncpu: 10.484252352231636 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.33358260064066336,
            "unit": "us/iter",
            "extra": "iterations: 2121285\ncpu: 0.33354480043935614 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7885658765156621,
            "unit": "us/iter",
            "extra": "iterations: 855153\ncpu: 0.788538172701258 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.6812486724982474,
            "unit": "us/iter",
            "extra": "iterations: 415442\ncpu: 1.6812168028268635 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.3387614757529795,
            "unit": "us/iter",
            "extra": "iterations: 200684\ncpu: 3.3384481473361043 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.602169353983952,
            "unit": "us/iter",
            "extra": "iterations: 103759\ncpu: 6.6019800691988335 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 13.818358490566244,
            "unit": "us/iter",
            "extra": "iterations: 50297\ncpu: 13.817345288983441 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 28.439494007934044,
            "unit": "us/iter",
            "extra": "iterations: 24449\ncpu: 28.43909423698305 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.32524204389205125,
            "unit": "us/iter",
            "extra": "iterations: 2159253\ncpu: 0.3252051176957962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6486693323668119,
            "unit": "us/iter",
            "extra": "iterations: 1070513\ncpu: 0.6486429552933946 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.259258783548027,
            "unit": "us/iter",
            "extra": "iterations: 561732\ncpu: 1.259178360855354 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.633614631929633,
            "unit": "us/iter",
            "extra": "iterations: 272869\ncpu: 2.6335767089702515 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.741382245622122,
            "unit": "us/iter",
            "extra": "iterations: 139222\ncpu: 4.7413836534455625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.387741577182954,
            "unit": "us/iter",
            "extra": "iterations: 67703\ncpu: 9.386793539429625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 18.936198489244582,
            "unit": "us/iter",
            "extra": "iterations: 38259\ncpu: 18.9340291696071 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.17354055279433636,
            "unit": "us/iter",
            "extra": "iterations: 3976705\ncpu: 0.1735198253327815 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.35868068231629907,
            "unit": "us/iter",
            "extra": "iterations: 1959619\ncpu: 0.3586529156943266 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6922254723124057,
            "unit": "us/iter",
            "extra": "iterations: 1019664\ncpu: 0.6921595966906693 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.3086903580910043,
            "unit": "us/iter",
            "extra": "iterations: 523973\ncpu: 1.3086112204254887 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.559210723079635,
            "unit": "us/iter",
            "extra": "iterations: 277383\ncpu: 2.559008053846143 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.559818880477271,
            "unit": "us/iter",
            "extra": "iterations: 130770\ncpu: 5.5592976370726985 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.468112603869393,
            "unit": "us/iter",
            "extra": "iterations: 65948\ncpu: 10.46693302298788 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.32757717379473605,
            "unit": "us/iter",
            "extra": "iterations: 2141083\ncpu: 0.3275538897838171 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8030456938933374,
            "unit": "us/iter",
            "extra": "iterations: 841491\ncpu: 0.8029284127815988 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7166458978030472,
            "unit": "us/iter",
            "extra": "iterations: 428173\ncpu: 1.7164451541783345 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.443665428175739,
            "unit": "us/iter",
            "extra": "iterations: 200782\ncpu: 3.443269311990144 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.182944687340112,
            "unit": "us/iter",
            "extra": "iterations: 103611\ncpu: 7.164790157415736 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 14.49545268522503,
            "unit": "us/iter",
            "extra": "iterations: 51802\ncpu: 14.493941971352394 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 27.81312573789659,
            "unit": "us/iter",
            "extra": "iterations: 25410\ncpu: 27.810679850452743 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.6276118312430948,
            "unit": "us/iter",
            "extra": "iterations: 1130194\ncpu: 0.6275417096533918 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9193576868006241,
            "unit": "us/iter",
            "extra": "iterations: 798271\ncpu: 0.9192847554276726 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7206943958721965,
            "unit": "us/iter",
            "extra": "iterations: 394602\ncpu: 1.720445887248409 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.2276858723699453,
            "unit": "us/iter",
            "extra": "iterations: 215075\ncpu: 3.2274858026269952 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.496899247425892,
            "unit": "us/iter",
            "extra": "iterations: 108295\ncpu: 6.496124659494857 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.718636541100937,
            "unit": "us/iter",
            "extra": "iterations: 51739\ncpu: 12.718317168866893 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 26.477386198727213,
            "unit": "us/iter",
            "extra": "iterations: 27012\ncpu: 26.472743632459633 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.35647327728903744,
            "unit": "us/iter",
            "extra": "iterations: 1996635\ncpu: 0.3564531970039565 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6881012973898132,
            "unit": "us/iter",
            "extra": "iterations: 1039780\ncpu: 0.6878581546096271 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.3401136904422668,
            "unit": "us/iter",
            "extra": "iterations: 508099\ncpu: 1.3398888484330846 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.555562477743753,
            "unit": "us/iter",
            "extra": "iterations: 283629\ncpu: 2.555232197694857 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.879514439934423,
            "unit": "us/iter",
            "extra": "iterations: 137466\ncpu: 4.879198412698371 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.6624784669611,
            "unit": "us/iter",
            "extra": "iterations: 74049\ncpu: 9.659811030533815 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.192000691004903,
            "unit": "us/iter",
            "extra": "iterations: 34732\ncpu: 19.18784118392265 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.2852133864286584,
            "unit": "us/iter",
            "extra": "iterations: 2391422\ncpu: 0.28515536488332216 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3758537780352434,
            "unit": "us/iter",
            "extra": "iterations: 1845311\ncpu: 0.3758278409438869 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7237027699968408,
            "unit": "us/iter",
            "extra": "iterations: 947835\ncpu: 0.7236213697531618 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.4107272127098742,
            "unit": "us/iter",
            "extra": "iterations: 490767\ncpu: 1.4106295859338578 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.6315275109135983,
            "unit": "us/iter",
            "extra": "iterations: 256789\ncpu: 2.631423187909151 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.216421825651506,
            "unit": "us/iter",
            "extra": "iterations: 129499\ncpu: 5.216239723858906 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.653639436786392,
            "unit": "us/iter",
            "extra": "iterations: 67683\ncpu: 10.6529562076149 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.6068122135724889,
            "unit": "us/iter",
            "extra": "iterations: 1163689\ncpu: 0.606753879258117 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1197232372767356,
            "unit": "us/iter",
            "extra": "iterations: 585245\ncpu: 1.1195946176387876 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.4096825628757954,
            "unit": "us/iter",
            "extra": "iterations: 299757\ncpu: 2.4093588506690162 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.081610099999807,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.081129029999971 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.157667867529293,
            "unit": "us/iter",
            "extra": "iterations: 69117\ncpu: 10.157409971497508 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 21.82926642203885,
            "unit": "us/iter",
            "extra": "iterations: 33248\ncpu: 21.827486796198084 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 44.034700271136195,
            "unit": "us/iter",
            "extra": "iterations: 16228\ncpu: 44.02790670446185 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.6028698477882405,
            "unit": "us/iter",
            "extra": "iterations: 1190775\ncpu: 0.6028057937057842 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.868522004896179,
            "unit": "us/iter",
            "extra": "iterations: 794096\ncpu: 0.8684405714170674 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.8958082898860158,
            "unit": "us/iter",
            "extra": "iterations: 423118\ncpu: 1.8956766859363168 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.3517089196889165,
            "unit": "us/iter",
            "extra": "iterations: 216521\ncpu: 3.351060640769236 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.913219574984257,
            "unit": "us/iter",
            "extra": "iterations: 100608\ncpu: 6.912695948632337 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.024874818649458,
            "unit": "us/iter",
            "extra": "iterations: 51006\ncpu: 14.023527330118231 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 29.443014696901244,
            "unit": "us/iter",
            "extra": "iterations: 24563\ncpu: 29.44019647437197 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.2657306997065349,
            "unit": "us/iter",
            "extra": "iterations: 2675879\ncpu: 0.2656870060268053 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3520015852453754,
            "unit": "us/iter",
            "extra": "iterations: 1932193\ncpu: 0.35196753895702393 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.6965318999529039,
            "unit": "us/iter",
            "extra": "iterations: 1003967\ncpu: 0.6964382982707571 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.5148921214641213,
            "unit": "us/iter",
            "extra": "iterations: 509879\ncpu: 1.514750683985793 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.791359263217677,
            "unit": "us/iter",
            "extra": "iterations: 244197\ncpu: 2.7910193409419666 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.780802637581017,
            "unit": "us/iter",
            "extra": "iterations: 124963\ncpu: 5.780427030401004 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.8860965120327,
            "unit": "us/iter",
            "extra": "iterations: 60293\ncpu: 11.884673046622133 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 57.22818278134958,
            "unit": "us/iter",
            "extra": "iterations: 11987\ncpu: 57.226140735796655 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 71.73901304625706,
            "unit": "us/iter",
            "extra": "iterations: 10961\ncpu: 71.73821111212479 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 66.00421368569789,
            "unit": "us/iter",
            "extra": "iterations: 10595\ncpu: 65.997524398301 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 79.32095267718097,
            "unit": "us/iter",
            "extra": "iterations: 9002\ncpu: 79.31718906909505 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 101.40663968023489,
            "unit": "us/iter",
            "extra": "iterations: 6880\ncpu: 101.39639113372112 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 149.71795788129734,
            "unit": "us/iter",
            "extra": "iterations: 4701\ncpu: 149.69590427568718 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 245.47732658051729,
            "unit": "us/iter",
            "extra": "iterations: 2863\ncpu: 245.43509500524053 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 56.19762526514297,
            "unit": "us/iter",
            "extra": "iterations: 12729\ncpu: 56.19421344960353 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 57.92953006459053,
            "unit": "us/iter",
            "extra": "iterations: 10993\ncpu: 57.92795342490697 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 58.68256380936456,
            "unit": "us/iter",
            "extra": "iterations: 11981\ncpu: 58.681106168099596 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 61.41654533415461,
            "unit": "us/iter",
            "extra": "iterations: 11327\ncpu: 61.41291798357889 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 70.82856021485013,
            "unit": "us/iter",
            "extra": "iterations: 10612\ncpu: 70.82220900866956 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 81.31055972392295,
            "unit": "us/iter",
            "extra": "iterations: 8983\ncpu: 81.30566848491544 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 107.82395002272301,
            "unit": "us/iter",
            "extra": "iterations: 6603\ncpu: 107.8129248826274 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 56.9667586622735,
            "unit": "us/iter",
            "extra": "iterations: 12439\ncpu: 56.96276935444942 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 58.18112393019306,
            "unit": "us/iter",
            "extra": "iterations: 11918\ncpu: 58.180154388320005 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 60.03747348773735,
            "unit": "us/iter",
            "extra": "iterations: 11787\ncpu: 60.0350605752104 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 63.49859804776143,
            "unit": "us/iter",
            "extra": "iterations: 11474\ncpu: 63.49307233745784 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 69.92870981600343,
            "unit": "us/iter",
            "extra": "iterations: 10707\ncpu: 69.92253366956113 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 83.8451589050805,
            "unit": "us/iter",
            "extra": "iterations: 8439\ncpu: 83.54677106292255 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 114.31643636363432,
            "unit": "us/iter",
            "extra": "iterations: 6545\ncpu: 114.30070466004707 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 60.24290752094103,
            "unit": "us/iter",
            "extra": "iterations: 11581\ncpu: 60.23603462568011 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 58.16535717888107,
            "unit": "us/iter",
            "extra": "iterations: 11896\ncpu: 58.158134667114794 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 60.42680865178146,
            "unit": "us/iter",
            "extra": "iterations: 10703\ncpu: 60.42238904979915 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 63.604312093063896,
            "unit": "us/iter",
            "extra": "iterations: 11519\ncpu: 63.598979772549505 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 67.69771086893597,
            "unit": "us/iter",
            "extra": "iterations: 10369\ncpu: 67.68474452695534 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 79.7421438372621,
            "unit": "us/iter",
            "extra": "iterations: 8308\ncpu: 79.73828743379849 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 106.3645499188842,
            "unit": "us/iter",
            "extra": "iterations: 6781\ncpu: 106.34998363073325 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 56.45855490033482,
            "unit": "us/iter",
            "extra": "iterations: 12040\ncpu: 56.44839700996663 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 57.93937713702145,
            "unit": "us/iter",
            "extra": "iterations: 11757\ncpu: 57.498917240792274 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 60.05013847180326,
            "unit": "us/iter",
            "extra": "iterations: 11988\ncpu: 60.04035076743351 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 62.81559587787454,
            "unit": "us/iter",
            "extra": "iterations: 10383\ncpu: 62.811724838678224 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 70.57793389533809,
            "unit": "us/iter",
            "extra": "iterations: 9727\ncpu: 70.56958620335072 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 81.78650405668066,
            "unit": "us/iter",
            "extra": "iterations: 8751\ncpu: 81.7760710775904 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 112.65247078760484,
            "unit": "us/iter",
            "extra": "iterations: 6196\ncpu: 112.64563912201483 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 58.680107082913196,
            "unit": "us/iter",
            "extra": "iterations: 11916\ncpu: 58.673534239677785 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 59.23029144407929,
            "unit": "us/iter",
            "extra": "iterations: 11793\ncpu: 59.22256304587467 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 62.34226347634531,
            "unit": "us/iter",
            "extra": "iterations: 10908\ncpu: 62.33722405573847 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 71.45284183380898,
            "unit": "us/iter",
            "extra": "iterations: 10470\ncpu: 71.44469140401144 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 82.30670451990436,
            "unit": "us/iter",
            "extra": "iterations: 8894\ncpu: 82.29239194962882 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 110.43910704628358,
            "unit": "us/iter",
            "extra": "iterations: 6287\ncpu: 110.4234294576105 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 164.4146931042639,
            "unit": "us/iter",
            "extra": "iterations: 4249\ncpu: 164.40576135561142 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 58.24189211377484,
            "unit": "us/iter",
            "extra": "iterations: 12059\ncpu: 58.23467874616563 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 62.7746214653559,
            "unit": "us/iter",
            "extra": "iterations: 11069\ncpu: 62.76935811726381 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 77.336461667596,
            "unit": "us/iter",
            "extra": "iterations: 8935\ncpu: 77.32873161723522 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 142.37294543973258,
            "unit": "us/iter",
            "extra": "iterations: 4912\ncpu: 142.3677536644941 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 374.3954180151035,
            "unit": "us/iter",
            "extra": "iterations: 1854\ncpu: 374.3581084142271 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1357.0553313839414,
            "unit": "us/iter",
            "extra": "iterations: 513\ncpu: 1356.9825263157788 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5275.635204724061,
            "unit": "us/iter",
            "extra": "iterations: 127\ncpu: 5275.135070866233 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 59.947777507754076,
            "unit": "us/iter",
            "extra": "iterations: 11933\ncpu: 59.94465080030179 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 62.33129355524399,
            "unit": "us/iter",
            "extra": "iterations: 11296\ncpu: 62.33016899787514 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 76.73854508405267,
            "unit": "us/iter",
            "extra": "iterations: 7852\ncpu: 76.73496650535141 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 135.29544420725023,
            "unit": "us/iter",
            "extra": "iterations: 5153\ncpu: 135.29418746361483 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 341.962609412901,
            "unit": "us/iter",
            "extra": "iterations: 2061\ncpu: 341.9196899563384 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1252.283333904132,
            "unit": "us/iter",
            "extra": "iterations: 584\ncpu: 1252.2176626712724 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4807.3399534882465,
            "unit": "us/iter",
            "extra": "iterations: 129\ncpu: 4806.02347286817 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 56.861749377660765,
            "unit": "us/iter",
            "extra": "iterations: 12453\ncpu: 56.85776495623691 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 57.32293881437376,
            "unit": "us/iter",
            "extra": "iterations: 12078\ncpu: 57.32147226361987 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 59.301415369490854,
            "unit": "us/iter",
            "extra": "iterations: 12206\ncpu: 59.29732778961123 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 62.624220268311774,
            "unit": "us/iter",
            "extra": "iterations: 11032\ncpu: 62.53937916968924 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 69.80355320648742,
            "unit": "us/iter",
            "extra": "iterations: 9933\ncpu: 69.79845303533507 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 84.28529342900096,
            "unit": "us/iter",
            "extra": "iterations: 7944\ncpu: 84.15205274420967 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 110.62490151750043,
            "unit": "us/iter",
            "extra": "iterations: 6458\ncpu: 110.61414880767973 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 57.10922786213845,
            "unit": "us/iter",
            "extra": "iterations: 11722\ncpu: 57.00322956833396 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 60.84947754625373,
            "unit": "us/iter",
            "extra": "iterations: 11134\ncpu: 60.84873172265247 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 78.95751451245062,
            "unit": "us/iter",
            "extra": "iterations: 9199\ncpu: 78.94737145341973 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 132.90086949835995,
            "unit": "us/iter",
            "extra": "iterations: 5203\ncpu: 132.88936229098343 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 374.50180737278436,
            "unit": "us/iter",
            "extra": "iterations: 1926\ncpu: 374.45041329179065 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1318.0694990724153,
            "unit": "us/iter",
            "extra": "iterations: 539\ncpu: 1318.034571428575 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5221.5100149254995,
            "unit": "us/iter",
            "extra": "iterations: 134\ncpu: 5220.8841119403105 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "committer": {
            "email": "lukas.burgholzer@jku.at",
            "name": "Lukas Burgholzer",
            "username": "burgholzer"
          },
          "distinct": true,
          "id": "3464f79d7438359037b7da6c2c2659f12764c857",
          "message": "📈 avoid measuring line setting during state/gate generation\n📈 avoid measuring state/gate generation during multiplication benchmarks\n\nSigned-off-by: Lukas Burgholzer <lukas.burgholzer@jku.at>",
          "timestamp": "2021-04-07T20:16:35+02:00",
          "tree_id": "416fbd43ed30131b9447fb19dbbfac158a8224f5",
          "url": "https://github.com/iic-jku/dd_package/commit/3464f79d7438359037b7da6c2c2659f12764c857"
        },
        "date": 1617819940491,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 5.710261454987623,
            "unit": "ns/iter",
            "extra": "iterations: 121063095\ncpu: 5.7096570841840775 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 5.664967551111673,
            "unit": "ns/iter",
            "extra": "iterations: 123151522\ncpu: 5.664831028235281 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 15.776296577948127,
            "unit": "us/iter",
            "extra": "iterations: 35242\ncpu: 15.775558821860276 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 13.418911176470418,
            "unit": "ms/iter",
            "extra": "iterations: 51\ncpu: 13.414166019607842 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 13.105548132074855,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 13.095512528301885 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 13.40372478431413,
            "unit": "ms/iter",
            "extra": "iterations: 51\ncpu: 13.402854254901968 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 13.328260653846787,
            "unit": "ms/iter",
            "extra": "iterations: 52\ncpu: 13.314784173076932 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 13.313525075471837,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 12.597709735849055 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 13.123919754717754,
            "unit": "ms/iter",
            "extra": "iterations: 53\ncpu: 13.122050018867919 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 13.142091888889135,
            "unit": "ms/iter",
            "extra": "iterations: 54\ncpu: 13.133137925925928 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.786493514571229,
            "unit": "ns/iter",
            "extra": "iterations: 102959116\ncpu: 6.786099290129881 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.733915948152531,
            "unit": "ns/iter",
            "extra": "iterations: 102420212\ncpu: 6.733298091591528 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.761935514076975,
            "unit": "ns/iter",
            "extra": "iterations: 104615142\ncpu: 6.761552242599843 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.77154934886579,
            "unit": "ns/iter",
            "extra": "iterations: 104349197\ncpu: 6.770996503212191 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.740308667833328,
            "unit": "ns/iter",
            "extra": "iterations: 103233692\ncpu: 6.739877626385769 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 6.798850556132652,
            "unit": "ns/iter",
            "extra": "iterations: 103003203\ncpu: 6.798608786951992 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.783821975608561,
            "unit": "ns/iter",
            "extra": "iterations: 101410553\ncpu: 6.783493617276685 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.19732575965941845,
            "unit": "us/iter",
            "extra": "iterations: 3541258\ncpu: 0.19731928681841326 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.36317478865642333,
            "unit": "us/iter",
            "extra": "iterations: 1928140\ncpu: 0.36315305683197285 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6808721835245151,
            "unit": "us/iter",
            "extra": "iterations: 1027481\ncpu: 0.6808585608882325 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3199949721697801,
            "unit": "us/iter",
            "extra": "iterations: 527663\ncpu: 1.3196332469777055 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.6055467710226754,
            "unit": "us/iter",
            "extra": "iterations: 269590\ncpu: 2.60538768871249 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.165837664972936,
            "unit": "us/iter",
            "extra": "iterations: 133052\ncpu: 5.165709181372696 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.619192786755116,
            "unit": "us/iter",
            "extra": "iterations: 65352\ncpu: 10.619071642795902 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3747202883199939,
            "unit": "us/iter",
            "extra": "iterations: 1864595\ncpu: 0.3747094066003625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8609427109182101,
            "unit": "us/iter",
            "extra": "iterations: 799943\ncpu: 0.8609235783049561 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.8591152857579158,
            "unit": "us/iter",
            "extra": "iterations: 373498\ncpu: 1.8590416923249988 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.8355441671356836,
            "unit": "us/iter",
            "extra": "iterations: 181266\ncpu: 3.8353189346043917 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.862376398079915,
            "unit": "us/iter",
            "extra": "iterations: 90213\ncpu: 7.862072916320253 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.809323462569996,
            "unit": "us/iter",
            "extra": "iterations: 44002\ncpu: 15.809032634880259 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 32.1448691193361,
            "unit": "us/iter",
            "extra": "iterations: 21745\ncpu: 32.143006990112625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3729921446972218,
            "unit": "us/iter",
            "extra": "iterations: 1858999\ncpu: 0.3729521167036676 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.7043784365174033,
            "unit": "us/iter",
            "extra": "iterations: 983663\ncpu: 0.7043394943186847 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3775336002191656,
            "unit": "us/iter",
            "extra": "iterations: 507333\ncpu: 1.3774106237914752 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.6797638836549873,
            "unit": "us/iter",
            "extra": "iterations: 257407\ncpu: 2.6795848597746112 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.2881411111277625,
            "unit": "us/iter",
            "extra": "iterations: 131074\ncpu: 5.2877809405374165 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.400955963821119,
            "unit": "us/iter",
            "extra": "iterations: 67331\ncpu: 10.400507388869848 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 21.444839015266556,
            "unit": "us/iter",
            "extra": "iterations: 32618\ncpu: 21.443925531914907 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19713935736985835,
            "unit": "us/iter",
            "extra": "iterations: 3602601\ncpu: 0.19713342138082965 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.35410156963247486,
            "unit": "us/iter",
            "extra": "iterations: 1931089\ncpu: 0.3540771761425783 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6761896600157736,
            "unit": "us/iter",
            "extra": "iterations: 1075050\ncpu: 0.6761540449281439 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2889218252373607,
            "unit": "us/iter",
            "extra": "iterations: 537552\ncpu: 1.2888818105039093 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.5889850442630764,
            "unit": "us/iter",
            "extra": "iterations: 269863\ncpu: 2.588833545169221 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.179335996613958,
            "unit": "us/iter",
            "extra": "iterations: 134671\ncpu: 5.179219289973355 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.5226782823051,
            "unit": "us/iter",
            "extra": "iterations: 65716\ncpu: 10.522129085763074 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.4898476699108378,
            "unit": "us/iter",
            "extra": "iterations: 1422864\ncpu: 0.4898099937871774 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 1.1779312155680313,
            "unit": "us/iter",
            "extra": "iterations: 597737\ncpu: 1.1778611178494824 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 2.511669773929691,
            "unit": "us/iter",
            "extra": "iterations: 280311\ncpu: 2.511484975616371 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 5.275694072255584,
            "unit": "us/iter",
            "extra": "iterations: 133221\ncpu: 5.27527452879049 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 10.83303638269864,
            "unit": "us/iter",
            "extra": "iterations: 63904\ncpu: 10.832734320230351 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 22.0252924308647,
            "unit": "us/iter",
            "extra": "iterations: 31351\ncpu: 22.024779241491427 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 45.73629293387038,
            "unit": "us/iter",
            "extra": "iterations: 15454\ncpu: 45.73230102238938 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.4868159549126034,
            "unit": "us/iter",
            "extra": "iterations: 1435257\ncpu: 0.48678941611154075 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.873231869862158,
            "unit": "us/iter",
            "extra": "iterations: 788149\ncpu: 0.8731573877528279 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.757599053512689,
            "unit": "us/iter",
            "extra": "iterations: 405922\ncpu: 1.757525120589686 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.4172280639345898,
            "unit": "us/iter",
            "extra": "iterations: 205210\ncpu: 3.416969406948973 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.711319163790194,
            "unit": "us/iter",
            "extra": "iterations: 101697\ncpu: 6.710979724082323 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.088356256146152,
            "unit": "us/iter",
            "extra": "iterations: 53891\ncpu: 13.087426397728626 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 28.342045108185854,
            "unit": "us/iter",
            "extra": "iterations: 24541\ncpu: 28.34049684201948 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.37800555800393976,
            "unit": "us/iter",
            "extra": "iterations: 1892406\ncpu: 0.377987436099865 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.7140321572158044,
            "unit": "us/iter",
            "extra": "iterations: 966315\ncpu: 0.7140066841557912 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.349026808925612,
            "unit": "us/iter",
            "extra": "iterations: 528145\ncpu: 1.3489056206155456 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6672775571584255,
            "unit": "us/iter",
            "extra": "iterations: 264659\ncpu: 2.667149414907483 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.287097394154031,
            "unit": "us/iter",
            "extra": "iterations: 133047\ncpu: 5.286632934226226 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.549566334305306,
            "unit": "us/iter",
            "extra": "iterations: 68901\ncpu: 10.549095789611153 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 21.37952543875644,
            "unit": "us/iter",
            "extra": "iterations: 32706\ncpu: 21.377868403351048 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.19771597965136994,
            "unit": "us/iter",
            "extra": "iterations: 3445144\ncpu: 0.1977078203407446 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3582144621994998,
            "unit": "us/iter",
            "extra": "iterations: 1954433\ncpu: 0.35817398959186647 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6837272632841411,
            "unit": "us/iter",
            "extra": "iterations: 991579\ncpu: 0.6836891573944118 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.299181707458381,
            "unit": "us/iter",
            "extra": "iterations: 526291\ncpu: 1.2990612455846637 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.546726974589256,
            "unit": "us/iter",
            "extra": "iterations: 272601\ncpu: 2.5466111056085636 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.083246392767273,
            "unit": "us/iter",
            "extra": "iterations: 137155\ncpu: 5.082778972695142 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.470966231567246,
            "unit": "us/iter",
            "extra": "iterations: 67341\ncpu: 10.470367651208017 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.47797299502242874,
            "unit": "us/iter",
            "extra": "iterations: 1452510\ncpu: 0.47794014430193404 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.0980060757945183,
            "unit": "us/iter",
            "extra": "iterations: 644031\ncpu: 1.0979447542121459 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.338059818015352,
            "unit": "us/iter",
            "extra": "iterations: 297168\ncpu: 2.337872748748164 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.89443867120921,
            "unit": "us/iter",
            "extra": "iterations: 140880\ncpu: 4.894320052527042 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 9.953396413626963,
            "unit": "us/iter",
            "extra": "iterations: 69541\ncpu: 9.953049841100878 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.61071004353746,
            "unit": "us/iter",
            "extra": "iterations: 33305\ncpu: 20.61070046539578 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 42.32172613110739,
            "unit": "us/iter",
            "extra": "iterations: 16643\ncpu: 42.318685633599756 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.48415329253599115,
            "unit": "us/iter",
            "extra": "iterations: 1458101\ncpu: 0.4841151717199276 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8360775834149369,
            "unit": "us/iter",
            "extra": "iterations: 830577\ncpu: 0.8360334105086 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.6930169579532883,
            "unit": "us/iter",
            "extra": "iterations: 429474\ncpu: 1.692896361595824 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.3603927873916852,
            "unit": "us/iter",
            "extra": "iterations: 205834\ncpu: 3.3602421903086688 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.557078207372998,
            "unit": "us/iter",
            "extra": "iterations: 105655\ncpu: 6.556562311296264 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.389582546264688,
            "unit": "us/iter",
            "extra": "iterations: 52092\ncpu: 13.388680066036928 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 27.88198763044558,
            "unit": "us/iter",
            "extra": "iterations: 24819\ncpu: 27.879900519763332 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.1959636820070218,
            "unit": "us/iter",
            "extra": "iterations: 3589488\ncpu: 0.19595056175142728 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3888546122983778,
            "unit": "us/iter",
            "extra": "iterations: 1808014\ncpu: 0.3888279565313073 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7275410707615215,
            "unit": "us/iter",
            "extra": "iterations: 944991\ncpu: 0.7275009677340868 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4252669731266363,
            "unit": "us/iter",
            "extra": "iterations: 487285\ncpu: 1.425151664836793 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.8654955484533855,
            "unit": "us/iter",
            "extra": "iterations: 245308\ncpu: 2.865330074844678 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.803219945835011,
            "unit": "us/iter",
            "extra": "iterations: 119634\ncpu: 5.8027711938077475 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.067524569186308,
            "unit": "us/iter",
            "extra": "iterations: 58610\ncpu: 12.066693755332013 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 37.377069314270024,
            "unit": "us/iter",
            "extra": "iterations: 18885\ncpu: 37.37380307122007 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 41.155650443510346,
            "unit": "us/iter",
            "extra": "iterations: 17136\ncpu: 41.15510714285699 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 47.24029100422779,
            "unit": "us/iter",
            "extra": "iterations: 14907\ncpu: 47.227210169719235 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 60.078486449044576,
            "unit": "us/iter",
            "extra": "iterations: 11549\ncpu: 60.07749207723643 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 86.10507980698142,
            "unit": "us/iter",
            "extra": "iterations: 8082\ncpu: 86.09999443207194 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 138.89788105201202,
            "unit": "us/iter",
            "extra": "iterations: 5019\ncpu: 138.8960061765295 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 242.91231835598836,
            "unit": "us/iter",
            "extra": "iterations: 2871\ncpu: 242.90068129571563 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 35.17523290017261,
            "unit": "us/iter",
            "extra": "iterations: 19854\ncpu: 35.17382673516661 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 36.08899946873501,
            "unit": "us/iter",
            "extra": "iterations: 18823\ncpu: 36.085812144716485 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 36.95521298646369,
            "unit": "us/iter",
            "extra": "iterations: 18912\ncpu: 36.952326353638085 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 39.48301340953008,
            "unit": "us/iter",
            "extra": "iterations: 17674\ncpu: 39.48103977594194 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 43.90819291139275,
            "unit": "us/iter",
            "extra": "iterations: 15800\ncpu: 43.905616139240585 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 52.55392320649013,
            "unit": "us/iter",
            "extra": "iterations: 13061\ncpu: 52.55151006814148 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 70.75320225729239,
            "unit": "us/iter",
            "extra": "iterations: 10012\ncpu: 70.7465699161013 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 34.84832491549255,
            "unit": "us/iter",
            "extra": "iterations: 20116\ncpu: 34.8462581030028 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 36.144540618259356,
            "unit": "us/iter",
            "extra": "iterations: 19474\ncpu: 36.14258416350002 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 37.0166963006526,
            "unit": "us/iter",
            "extra": "iterations: 18706\ncpu: 37.01520464022263 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 39.192580165568046,
            "unit": "us/iter",
            "extra": "iterations: 17757\ncpu: 39.189786563045644 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 44.05570178763422,
            "unit": "us/iter",
            "extra": "iterations: 15831\ncpu: 44.05120548291322 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 52.66648349470221,
            "unit": "us/iter",
            "extra": "iterations: 13117\ncpu: 52.66271045208478 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 70.85319653880858,
            "unit": "us/iter",
            "extra": "iterations: 9881\ncpu: 70.84759993927703 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 35.142441042573964,
            "unit": "us/iter",
            "extra": "iterations: 19989\ncpu: 35.14015538546254 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 35.52285113284879,
            "unit": "us/iter",
            "extra": "iterations: 19729\ncpu: 35.51928754625194 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 36.97205683419351,
            "unit": "us/iter",
            "extra": "iterations: 19161\ncpu: 36.97003173112054 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 38.97353985960559,
            "unit": "us/iter",
            "extra": "iterations: 18377\ncpu: 38.97191815856778 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 43.51266691463607,
            "unit": "us/iter",
            "extra": "iterations: 16131\ncpu: 43.50886591035905 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 52.498448595336356,
            "unit": "us/iter",
            "extra": "iterations: 13384\ncpu: 52.49360781530212 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 69.97949467550359,
            "unit": "us/iter",
            "extra": "iterations: 9954\ncpu: 69.97856992164031 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 35.430643981177674,
            "unit": "us/iter",
            "extra": "iterations: 19763\ncpu: 35.427304356626365 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 35.770420558362545,
            "unit": "us/iter",
            "extra": "iterations: 19593\ncpu: 35.76833792681058 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 37.77472295752934,
            "unit": "us/iter",
            "extra": "iterations: 18813\ncpu: 37.632028118853455 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 39.11684542958006,
            "unit": "us/iter",
            "extra": "iterations: 17843\ncpu: 39.11368374152395 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 44.56077985215091,
            "unit": "us/iter",
            "extra": "iterations: 15962\ncpu: 44.1180778724471 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 53.223762342134975,
            "unit": "us/iter",
            "extra": "iterations: 13065\ncpu: 53.220356678147425 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 71.32570703363508,
            "unit": "us/iter",
            "extra": "iterations: 9810\ncpu: 71.32140550458716 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 35.23086671080708,
            "unit": "us/iter",
            "extra": "iterations: 19634\ncpu: 35.22952735051489 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 36.72585315849826,
            "unit": "us/iter",
            "extra": "iterations: 19218\ncpu: 36.725150015609955 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 38.808289534627136,
            "unit": "us/iter",
            "extra": "iterations: 18136\ncpu: 38.80550749889826 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 42.837973582829655,
            "unit": "us/iter",
            "extra": "iterations: 16353\ncpu: 42.83485874151455 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 51.11217804859949,
            "unit": "us/iter",
            "extra": "iterations: 13457\ncpu: 51.1082653637506 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 68.05945695622346,
            "unit": "us/iter",
            "extra": "iterations: 10257\ncpu: 68.05625992005453 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 99.53507086391691,
            "unit": "us/iter",
            "extra": "iterations: 7084\ncpu: 99.53061307170991 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 36.64840583819022,
            "unit": "us/iter",
            "extra": "iterations: 19047\ncpu: 36.64613855200291 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 41.57465966510814,
            "unit": "us/iter",
            "extra": "iterations: 16901\ncpu: 41.57199585823249 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 59.46634542976639,
            "unit": "us/iter",
            "extra": "iterations: 11739\ncpu: 59.46116287588166 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 127.217603668406,
            "unit": "us/iter",
            "extra": "iterations: 5561\ncpu: 127.20394353533311 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 391.3829128262262,
            "unit": "us/iter",
            "extra": "iterations: 1801\ncpu: 391.35528539700476 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1463.5605435244681,
            "unit": "us/iter",
            "extra": "iterations: 471\ncpu: 1463.4532675159473 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5849.85531249974,
            "unit": "us/iter",
            "extra": "iterations: 112\ncpu: 5849.4879374999855 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 36.78654594253375,
            "unit": "us/iter",
            "extra": "iterations: 19002\ncpu: 36.78358641195677 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 41.3445070829876,
            "unit": "us/iter",
            "extra": "iterations: 16942\ncpu: 41.34081035296907 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 57.21964942389818,
            "unit": "us/iter",
            "extra": "iterations: 12411\ncpu: 57.21610579324903 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 116.93598936708364,
            "unit": "us/iter",
            "extra": "iterations: 5925\ncpu: 116.92684438818672 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 352.4771727227422,
            "unit": "us/iter",
            "extra": "iterations: 2009\ncpu: 352.4518855151742 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1273.3829135135984,
            "unit": "us/iter",
            "extra": "iterations: 555\ncpu: 1273.2757441441508 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4989.880124030993,
            "unit": "us/iter",
            "extra": "iterations: 129\ncpu: 4989.3375348837035 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 34.91212139597845,
            "unit": "us/iter",
            "extra": "iterations: 19943\ncpu: 34.909719350147185 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 35.4882261570819,
            "unit": "us/iter",
            "extra": "iterations: 19964\ncpu: 35.485656131035206 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 35.105919040704684,
            "unit": "us/iter",
            "extra": "iterations: 19973\ncpu: 35.10297907174809 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 35.32894314481774,
            "unit": "us/iter",
            "extra": "iterations: 19963\ncpu: 35.328950458348736 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 35.38241208263961,
            "unit": "us/iter",
            "extra": "iterations: 19797\ncpu: 35.379512451381466 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 35.28169264332793,
            "unit": "us/iter",
            "extra": "iterations: 19710\ncpu: 35.279166311517805 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 35.56847428396972,
            "unit": "us/iter",
            "extra": "iterations: 19657\ncpu: 35.566307574910255 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 36.15722932563558,
            "unit": "us/iter",
            "extra": "iterations: 19396\ncpu: 36.1542228810058 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 40.894298970879284,
            "unit": "us/iter",
            "extra": "iterations: 17102\ncpu: 40.893899426967096 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 56.18182734387632,
            "unit": "us/iter",
            "extra": "iterations: 12522\ncpu: 56.17705214822079 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 118.67544483626922,
            "unit": "us/iter",
            "extra": "iterations: 5955\ncpu: 118.66778270361077 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 368.60656995351127,
            "unit": "us/iter",
            "extra": "iterations: 1937\ncpu: 368.572045947341 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1357.5662003891027,
            "unit": "us/iter",
            "extra": "iterations: 514\ncpu: 1357.4787918288032 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5306.488319671901,
            "unit": "us/iter",
            "extra": "iterations: 122\ncpu: 5306.06203278694 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "a0779b742705c0b2cb5c402a3b62c055ea903856",
          "message": "Remove line",
          "timestamp": "2021-04-07T18:16:42Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/a0779b742705c0b2cb5c402a3b62c055ea903856"
        },
        "date": 1617821121540,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 10.321624986980105,
            "unit": "ns/iter",
            "extra": "iterations: 65206504\ncpu: 10.319803343543768 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 10.390973955140765,
            "unit": "ns/iter",
            "extra": "iterations: 70684005\ncpu: 10.389658876856227 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 28.381339549992084,
            "unit": "us/iter",
            "extra": "iterations: 24933\ncpu: 28.380609714033607 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.980743999999731,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 10.9740208 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 10.532602078124675,
            "unit": "ms/iter",
            "extra": "iterations: 64\ncpu: 10.530415953125004 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.642051465517735,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 10.640406931034477 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 11.162722867646668,
            "unit": "ms/iter",
            "extra": "iterations: 68\ncpu: 11.158489132352935 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 10.622394369231468,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 10.619863769230781 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 12.206774857143087,
            "unit": "ms/iter",
            "extra": "iterations: 56\ncpu: 12.201948160714277 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.560447534482693,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 10.557495741379308 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.091707557486937,
            "unit": "ns/iter",
            "extra": "iterations: 100249884\ncpu: 7.091561981258749 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.958693072301026,
            "unit": "ns/iter",
            "extra": "iterations: 103110065\ncpu: 6.9578337187548005 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.044078373248114,
            "unit": "ns/iter",
            "extra": "iterations: 96182565\ncpu: 7.043815259033686 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.120264856552122,
            "unit": "ns/iter",
            "extra": "iterations: 94837148\ncpu: 7.120037182054433 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.845184260852672,
            "unit": "ns/iter",
            "extra": "iterations: 105268399\ncpu: 6.844884313287603 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.074330135707081,
            "unit": "ns/iter",
            "extra": "iterations: 96946278\ncpu: 7.0740291236348485 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.048447130403496,
            "unit": "ns/iter",
            "extra": "iterations: 89912508\ncpu: 7.047674356942643 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.18916826765414588,
            "unit": "us/iter",
            "extra": "iterations: 3634840\ncpu: 0.18915820091118185 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3700993788684987,
            "unit": "us/iter",
            "extra": "iterations: 1840512\ncpu: 0.3700659224172405 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.692650201300089,
            "unit": "us/iter",
            "extra": "iterations: 921510\ncpu: 0.6926267539147682 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3549421821251117,
            "unit": "us/iter",
            "extra": "iterations: 550885\ncpu: 1.3545408606151916 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.5811437506378407,
            "unit": "us/iter",
            "extra": "iterations: 264611\ncpu: 2.5808660410942847 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.272321122539765,
            "unit": "us/iter",
            "extra": "iterations: 128138\ncpu: 5.272090020134527 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.64797955376213,
            "unit": "us/iter",
            "extra": "iterations: 65929\ncpu: 10.647873560951913 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.33947640686161173,
            "unit": "us/iter",
            "extra": "iterations: 2024826\ncpu: 0.3394439660494297 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8324133045759815,
            "unit": "us/iter",
            "extra": "iterations: 837351\ncpu: 0.8323907262306984 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.7844291162212929,
            "unit": "us/iter",
            "extra": "iterations: 408281\ncpu: 1.7843326312025323 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.4630504677216285,
            "unit": "us/iter",
            "extra": "iterations: 190498\ncpu: 3.4629324244873976 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.245566526349142,
            "unit": "us/iter",
            "extra": "iterations: 101674\ncpu: 7.2437232232429345 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.302528143321936,
            "unit": "us/iter",
            "extra": "iterations: 46050\ncpu: 15.301887709011956 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 28.838093332228816,
            "unit": "us/iter",
            "extra": "iterations: 24161\ncpu: 28.835448905260613 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3436145113033546,
            "unit": "us/iter",
            "extra": "iterations: 2142771\ncpu: 0.3435984624581912 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.7086577625793363,
            "unit": "us/iter",
            "extra": "iterations: 1004782\ncpu: 0.7085931863827186 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3269202328669107,
            "unit": "us/iter",
            "extra": "iterations: 538505\ncpu: 1.3268244528834432 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.663109098543005,
            "unit": "us/iter",
            "extra": "iterations: 271516\ncpu: 2.6627254047643527 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.10246756000015,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.102336420000029 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.873689220475008,
            "unit": "us/iter",
            "extra": "iterations: 66951\ncpu: 9.872887036788123 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 21.485177887338818,
            "unit": "us/iter",
            "extra": "iterations: 35292\ncpu: 21.482330528165008 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.1953852403233173,
            "unit": "us/iter",
            "extra": "iterations: 3532408\ncpu: 0.19537111001900115 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.40460670928539977,
            "unit": "us/iter",
            "extra": "iterations: 1785913\ncpu: 0.4045927808353491 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7070784035131213,
            "unit": "us/iter",
            "extra": "iterations: 969153\ncpu: 0.7070509733757186 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.3609632535882026,
            "unit": "us/iter",
            "extra": "iterations: 535372\ncpu: 1.3609327999970169 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.6045383267274724,
            "unit": "us/iter",
            "extra": "iterations: 246499\ncpu: 2.604463227031369 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.321406687729897,
            "unit": "us/iter",
            "extra": "iterations: 111727\ncpu: 5.321236719861782 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 11.165338902708482,
            "unit": "us/iter",
            "extra": "iterations: 63921\ncpu: 11.164729306487732 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.3351657094214724,
            "unit": "us/iter",
            "extra": "iterations: 2091070\ncpu: 0.3351571941637527 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8281340706836141,
            "unit": "us/iter",
            "extra": "iterations: 870414\ncpu: 0.8281018974878614 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.763750758538679,
            "unit": "us/iter",
            "extra": "iterations: 408351\ncpu: 1.763667491937084 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.5498482365370934,
            "unit": "us/iter",
            "extra": "iterations: 195014\ncpu: 3.549677469309878 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.4867385646479745,
            "unit": "us/iter",
            "extra": "iterations: 94597\ncpu: 7.486546148397916 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 15.268530637765801,
            "unit": "us/iter",
            "extra": "iterations: 43182\ncpu: 15.267829049140948 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 29.99180222165474,
            "unit": "us/iter",
            "extra": "iterations: 23496\ncpu: 29.991048689138662 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.6548744677083699,
            "unit": "us/iter",
            "extra": "iterations: 960000\ncpu: 0.6547744645833371 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9369844196537195,
            "unit": "us/iter",
            "extra": "iterations: 740420\ncpu: 0.9369517179438749 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.8144853977687934,
            "unit": "us/iter",
            "extra": "iterations: 385626\ncpu: 1.8144491009423624 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.3639844386794198,
            "unit": "us/iter",
            "extra": "iterations: 206602\ncpu: 3.363585642926979 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.533659265024244,
            "unit": "us/iter",
            "extra": "iterations: 106643\ncpu: 6.533376049060889 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 14.101719854960765,
            "unit": "us/iter",
            "extra": "iterations: 47711\ncpu: 14.100854142650494 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 27.169873632805327,
            "unit": "us/iter",
            "extra": "iterations: 24777\ncpu: 27.168670662307612 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.373296481514737,
            "unit": "us/iter",
            "extra": "iterations: 1909657\ncpu: 0.3732842248634207 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6846707531346883,
            "unit": "us/iter",
            "extra": "iterations: 1027293\ncpu: 0.6846289753750828 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.4188807829914702,
            "unit": "us/iter",
            "extra": "iterations: 485216\ncpu: 1.4188187508243824 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6461703257993956,
            "unit": "us/iter",
            "extra": "iterations: 259761\ncpu: 2.6458735529967945 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.980626061932432,
            "unit": "us/iter",
            "extra": "iterations: 137956\ncpu: 4.980249942010539 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.298174619675049,
            "unit": "us/iter",
            "extra": "iterations: 71189\ncpu: 10.297982413013226 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.93324573565378,
            "unit": "us/iter",
            "extra": "iterations: 34765\ncpu: 19.93264167985042 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.3123169580278683,
            "unit": "us/iter",
            "extra": "iterations: 2220783\ncpu: 0.3123006110907737 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3864902933944059,
            "unit": "us/iter",
            "extra": "iterations: 1766632\ncpu: 0.386467528042064 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7411181184933159,
            "unit": "us/iter",
            "extra": "iterations: 949792\ncpu: 0.7409907306020654 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3378958262626481,
            "unit": "us/iter",
            "extra": "iterations: 483212\ncpu: 1.3377956487007858 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.7814049931321136,
            "unit": "us/iter",
            "extra": "iterations: 248261\ncpu: 2.7812536080979546 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.383998163291509,
            "unit": "us/iter",
            "extra": "iterations: 125224\ncpu: 5.3837787245255795 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.710484321419559,
            "unit": "us/iter",
            "extra": "iterations: 60656\ncpu: 10.709473720654202 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.6126547865864369,
            "unit": "us/iter",
            "extra": "iterations: 1241041\ncpu: 0.612606043635937 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1899536205548027,
            "unit": "us/iter",
            "extra": "iterations: 594315\ncpu: 1.1898694766243436 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.601474229613413,
            "unit": "us/iter",
            "extra": "iterations: 267885\ncpu: 2.6013085092483847 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.100881910000226,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.1005257900000345 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 11.198544523866984,
            "unit": "us/iter",
            "extra": "iterations: 66032\ncpu: 11.197377029319133 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 22.665263769928256,
            "unit": "us/iter",
            "extra": "iterations: 31990\ncpu: 22.66468849640488 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 44.11337806992274,
            "unit": "us/iter",
            "extra": "iterations: 13844\ncpu: 44.11108848598664 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.6168988311703992,
            "unit": "us/iter",
            "extra": "iterations: 1135666\ncpu: 0.6168760286915291 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9132756499241386,
            "unit": "us/iter",
            "extra": "iterations: 808979\ncpu: 0.9132449927624983 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.7939662349184085,
            "unit": "us/iter",
            "extra": "iterations: 376454\ncpu: 1.7937061978356015 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.565672961152743,
            "unit": "us/iter",
            "extra": "iterations: 190696\ncpu: 3.5654500776104094 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 7.087299106443241,
            "unit": "us/iter",
            "extra": "iterations: 95685\ncpu: 7.086686951977841 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.193327330282068,
            "unit": "us/iter",
            "extra": "iterations: 46754\ncpu: 14.19297696453777 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 30.31224954064162,
            "unit": "us/iter",
            "extra": "iterations: 22858\ncpu: 30.24513583865594 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.28233479914007364,
            "unit": "us/iter",
            "extra": "iterations: 2372300\ncpu: 0.2823201770433744 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.36542159111905265,
            "unit": "us/iter",
            "extra": "iterations: 1872594\ncpu: 0.3653945158427289 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.722355456491945,
            "unit": "us/iter",
            "extra": "iterations: 963018\ncpu: 0.7222294038117762 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.486573006353737,
            "unit": "us/iter",
            "extra": "iterations: 465391\ncpu: 1.4865087764911653 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.918747299324007,
            "unit": "us/iter",
            "extra": "iterations: 230035\ncpu: 2.91861684526267 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.707866065292283,
            "unit": "us/iter",
            "extra": "iterations: 128040\ncpu: 5.707439065916912 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.478861151836606,
            "unit": "us/iter",
            "extra": "iterations: 53202\ncpu: 12.477810815382728 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 67.87619225379969,
            "unit": "us/iter",
            "extra": "iterations: 9992\ncpu: 67.87141973578755 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 72.4527138017685,
            "unit": "us/iter",
            "extra": "iterations: 9151\ncpu: 72.44732619385906 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 77.07497788872953,
            "unit": "us/iter",
            "extra": "iterations: 8412\ncpu: 77.07199381835447 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 89.90011869789772,
            "unit": "us/iter",
            "extra": "iterations: 7557\ncpu: 89.89801521767966 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 115.12741493308073,
            "unit": "us/iter",
            "extra": "iterations: 6201\ncpu: 115.08535897435831 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 167.11028673394378,
            "unit": "us/iter",
            "extra": "iterations: 4063\ncpu: 167.09658454344017 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 276.92856228571014,
            "unit": "us/iter",
            "extra": "iterations: 2625\ncpu: 276.9183935238126 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 66.6977742311459,
            "unit": "us/iter",
            "extra": "iterations: 11153\ncpu: 66.69144633730866 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 70.10998265276424,
            "unit": "us/iter",
            "extra": "iterations: 10261\ncpu: 70.10628934801687 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 66.63540142773292,
            "unit": "us/iter",
            "extra": "iterations: 10226\ncpu: 66.62988020731474 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 71.46582819737921,
            "unit": "us/iter",
            "extra": "iterations: 9930\ncpu: 71.46238569989964 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 73.99620878201445,
            "unit": "us/iter",
            "extra": "iterations: 9565\ncpu: 73.99129377940413 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 80.87973301270313,
            "unit": "us/iter",
            "extra": "iterations: 8109\ncpu: 80.87782155629624 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 98.48702736812713,
            "unit": "us/iter",
            "extra": "iterations: 7052\ncpu: 98.48474290981278 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 69.08818657817147,
            "unit": "us/iter",
            "extra": "iterations: 10848\ncpu: 69.08532863200594 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 66.60200272503687,
            "unit": "us/iter",
            "extra": "iterations: 11376\ncpu: 66.59780203938162 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 68.75273197447615,
            "unit": "us/iter",
            "extra": "iterations: 10499\ncpu: 68.74534974759501 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 70.64720136742302,
            "unit": "us/iter",
            "extra": "iterations: 10677\ncpu: 70.64354800037519 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 73.14571698714992,
            "unit": "us/iter",
            "extra": "iterations: 9413\ncpu: 73.13947338786791 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 84.89771654100011,
            "unit": "us/iter",
            "extra": "iterations: 8488\ncpu: 84.89545511310104 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 96.92873775888441,
            "unit": "us/iter",
            "extra": "iterations: 7291\ncpu: 96.92577821972237 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 65.69170815803757,
            "unit": "us/iter",
            "extra": "iterations: 10934\ncpu: 65.68737104444875 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 65.82978367786716,
            "unit": "us/iter",
            "extra": "iterations: 10207\ncpu: 65.82102410110636 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 67.93783520598981,
            "unit": "us/iter",
            "extra": "iterations: 10947\ncpu: 67.93395094546464 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 68.10829668362467,
            "unit": "us/iter",
            "extra": "iterations: 10614\ncpu: 68.10514038062955 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 71.50856270367181,
            "unit": "us/iter",
            "extra": "iterations: 9513\ncpu: 71.50438946704504 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 82.14094560913446,
            "unit": "us/iter",
            "extra": "iterations: 8586\ncpu: 82.13895399487612 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 96.46565520806396,
            "unit": "us/iter",
            "extra": "iterations: 7738\ncpu: 96.46105453605519 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 68.95267716611524,
            "unit": "us/iter",
            "extra": "iterations: 10318\ncpu: 68.94610593138219 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 64.25862069645409,
            "unit": "us/iter",
            "extra": "iterations: 10137\ncpu: 64.25588803393552 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 69.15325465437729,
            "unit": "us/iter",
            "extra": "iterations: 10850\ncpu: 69.14754036866303 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 68.21883449342909,
            "unit": "us/iter",
            "extra": "iterations: 10344\ncpu: 68.21656264501203 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 73.04739722253079,
            "unit": "us/iter",
            "extra": "iterations: 9073\ncpu: 72.98179598809669 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 83.89236728462124,
            "unit": "us/iter",
            "extra": "iterations: 9170\ncpu: 83.88787437295451 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 96.25205179055695,
            "unit": "us/iter",
            "extra": "iterations: 7009\ncpu: 96.24176515908002 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 67.99677969980024,
            "unit": "us/iter",
            "extra": "iterations: 10926\ncpu: 67.98852397949915 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 68.06943471022603,
            "unit": "us/iter",
            "extra": "iterations: 9611\ncpu: 68.06786369784636 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 70.86029090705465,
            "unit": "us/iter",
            "extra": "iterations: 8941\ncpu: 70.85377027178261 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 74.88996105901528,
            "unit": "us/iter",
            "extra": "iterations: 9065\ncpu: 74.88431285162679 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 81.53036536234953,
            "unit": "us/iter",
            "extra": "iterations: 8638\ncpu: 81.527980551054 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 93.21274611060433,
            "unit": "us/iter",
            "extra": "iterations: 7649\ncpu: 93.20729454830762 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 128.2408436052635,
            "unit": "us/iter",
            "extra": "iterations: 5614\ncpu: 128.23573138581946 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 67.77592676744106,
            "unit": "us/iter",
            "extra": "iterations: 10651\ncpu: 67.77137320439348 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 73.18558778280378,
            "unit": "us/iter",
            "extra": "iterations: 8840\ncpu: 73.18274841628931 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 90.6981453269862,
            "unit": "us/iter",
            "extra": "iterations: 7982\ncpu: 90.69253269857253 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 155.85410213879453,
            "unit": "us/iter",
            "extra": "iterations: 4582\ncpu: 155.84408467918155 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 423.40251525821736,
            "unit": "us/iter",
            "extra": "iterations: 1704\ncpu: 423.3681255868626 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1458.5618268040787,
            "unit": "us/iter",
            "extra": "iterations: 485\ncpu: 1458.1407958762752 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5374.756669491548,
            "unit": "us/iter",
            "extra": "iterations: 118\ncpu: 5374.41005932216 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 66.35231931913135,
            "unit": "us/iter",
            "extra": "iterations: 10751\ncpu: 66.34986373360745 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 71.09724582774156,
            "unit": "us/iter",
            "extra": "iterations: 10426\ncpu: 71.08793257241514 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 86.42476007325668,
            "unit": "us/iter",
            "extra": "iterations: 8190\ncpu: 86.4174829059847 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 135.94567233148473,
            "unit": "us/iter",
            "extra": "iterations: 5237\ncpu: 135.94145235821847 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 352.0666261306703,
            "unit": "us/iter",
            "extra": "iterations: 1990\ncpu: 352.05878693467014 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1227.808768965525,
            "unit": "us/iter",
            "extra": "iterations: 580\ncpu: 1227.7837689655391 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4695.62870394737,
            "unit": "us/iter",
            "extra": "iterations: 152\ncpu: 4695.285973684206 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 65.27482051281667,
            "unit": "us/iter",
            "extra": "iterations: 10257\ncpu: 65.27270478697284 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 66.03911875571585,
            "unit": "us/iter",
            "extra": "iterations: 10930\ncpu: 66.037545196708 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 66.6594037611623,
            "unit": "us/iter",
            "extra": "iterations: 10635\ncpu: 66.65660197461148 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 67.86035861637554,
            "unit": "us/iter",
            "extra": "iterations: 9598\ncpu: 67.8537322358821 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 67.33604739777054,
            "unit": "us/iter",
            "extra": "iterations: 10760\ncpu: 67.33373317844071 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 67.08287782358909,
            "unit": "us/iter",
            "extra": "iterations: 11156\ncpu: 67.07395876658249 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 68.5045196759279,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 68.50283198302614 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 70.22263881890275,
            "unit": "us/iter",
            "extra": "iterations: 9923\ncpu: 70.21785992139428 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 70.334115030517,
            "unit": "us/iter",
            "extra": "iterations: 9667\ncpu: 70.31715030516219 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 87.46282374767816,
            "unit": "us/iter",
            "extra": "iterations: 7546\ncpu: 87.46014709780289 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 148.91076929512892,
            "unit": "us/iter",
            "extra": "iterations: 4781\ncpu: 148.89796925328906 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 381.2114500279328,
            "unit": "us/iter",
            "extra": "iterations: 1791\ncpu: 381.1838738135131 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1383.5523965517068,
            "unit": "us/iter",
            "extra": "iterations: 522\ncpu: 1381.2443333333147 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5468.28760156215,
            "unit": "us/iter",
            "extra": "iterations: 128\ncpu: 5468.093101562488 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "43b2a944d933004c25b77cdf12cd72210a650507",
          "message": "Remove line",
          "timestamp": "2021-04-07T18:16:42Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/43b2a944d933004c25b77cdf12cd72210a650507"
        },
        "date": 1617821574680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.198383047905114,
            "unit": "ns/iter",
            "extra": "iterations: 75785795\ncpu: 9.195880943123973 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 8.970191485004896,
            "unit": "ns/iter",
            "extra": "iterations: 79776064\ncpu: 8.97011896951948 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 24.724151458502668,
            "unit": "us/iter",
            "extra": "iterations: 28351\ncpu: 24.72322782265176 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.761574605634,
            "unit": "ms/iter",
            "extra": "iterations: 71\ncpu: 10.760181605633804 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 10.734560285714322,
            "unit": "ms/iter",
            "extra": "iterations: 70\ncpu: 10.101964557142853 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.17113950684947,
            "unit": "ms/iter",
            "extra": "iterations: 73\ncpu: 10.163314602739721 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.892782366197016,
            "unit": "ms/iter",
            "extra": "iterations: 71\ncpu: 10.886500338028172 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 9.565000362319216,
            "unit": "ms/iter",
            "extra": "iterations: 69\ncpu: 9.556866072463768 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 9.841443281690282,
            "unit": "ms/iter",
            "extra": "iterations: 71\ncpu: 9.841030591549304 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.03587151388885,
            "unit": "ms/iter",
            "extra": "iterations: 72\ncpu: 10.02274727777778 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.395679460239207,
            "unit": "ns/iter",
            "extra": "iterations: 109702821\ncpu: 6.39544770685523 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.473494713575984,
            "unit": "ns/iter",
            "extra": "iterations: 107616230\ncpu: 6.472942891606594 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.564476342569904,
            "unit": "ns/iter",
            "extra": "iterations: 109200704\ncpu: 6.564261234066767 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.46671284612277,
            "unit": "ns/iter",
            "extra": "iterations: 107838718\ncpu: 6.466454052244949 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.536587510948199,
            "unit": "ns/iter",
            "extra": "iterations: 107789896\ncpu: 6.536265811036698 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 6.45957826133276,
            "unit": "ns/iter",
            "extra": "iterations: 94663172\ncpu: 6.459567887710343 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.4573539553921036,
            "unit": "ns/iter",
            "extra": "iterations: 108265363\ncpu: 6.456724788333271 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.17689053550124895,
            "unit": "us/iter",
            "extra": "iterations: 4039337\ncpu: 0.17688833637797488 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3553193858740495,
            "unit": "us/iter",
            "extra": "iterations: 1946376\ncpu: 0.3552894743872725 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6503592935145969,
            "unit": "us/iter",
            "extra": "iterations: 1076880\ncpu: 0.6503300302726389 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.2291164620585426,
            "unit": "us/iter",
            "extra": "iterations: 574187\ncpu: 1.22904187834277 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.3919013287880535,
            "unit": "us/iter",
            "extra": "iterations: 287480\ncpu: 2.3918676290524616 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 4.743572531657954,
            "unit": "us/iter",
            "extra": "iterations: 143882\ncpu: 4.74325611959799 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 9.822711389774305,
            "unit": "us/iter",
            "extra": "iterations: 72170\ncpu: 9.822709546903106 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.31095047192287745,
            "unit": "us/iter",
            "extra": "iterations: 2266472\ncpu: 0.31093831514353576 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7510164087418906,
            "unit": "us/iter",
            "extra": "iterations: 931150\ncpu: 0.7510158986199829 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.5972060032997155,
            "unit": "us/iter",
            "extra": "iterations: 441857\ncpu: 1.5970571180268776 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.2184194952092384,
            "unit": "us/iter",
            "extra": "iterations: 217397\ncpu: 3.218355032498155 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.449711704281974,
            "unit": "us/iter",
            "extra": "iterations: 109131\ncpu: 6.449324142544278 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 13.191280929127142,
            "unit": "us/iter",
            "extra": "iterations: 53857\ncpu: 13.190757598826504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 26.731918743104877,
            "unit": "us/iter",
            "extra": "iterations: 26287\ncpu: 26.729896640925098 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3194892050456163,
            "unit": "us/iter",
            "extra": "iterations: 2264067\ncpu: 0.31947781227322336 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6325125971271611,
            "unit": "us/iter",
            "extra": "iterations: 1130734\ncpu: 0.632491506402036 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2245347759045315,
            "unit": "us/iter",
            "extra": "iterations: 586268\ncpu: 1.2245360654171873 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.416716821724642,
            "unit": "us/iter",
            "extra": "iterations: 299458\ncpu: 2.4164200188340397 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.587478562287499,
            "unit": "us/iter",
            "extra": "iterations: 136745\ncpu: 4.587360276426912 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.164655398659233,
            "unit": "us/iter",
            "extra": "iterations: 77121\ncpu: 9.163308035424835 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 18.191490490361275,
            "unit": "us/iter",
            "extra": "iterations: 38645\ncpu: 18.190580644326502 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.17566549860341457,
            "unit": "us/iter",
            "extra": "iterations: 3909891\ncpu: 0.1756468914350796 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.36281835928845807,
            "unit": "us/iter",
            "extra": "iterations: 1963453\ncpu: 0.3628113232147641 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6488778472311498,
            "unit": "us/iter",
            "extra": "iterations: 1081621\ncpu: 0.6488040163791206 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2375240449493883,
            "unit": "us/iter",
            "extra": "iterations: 563923\ncpu: 1.2374712132684742 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.43546889910704,
            "unit": "us/iter",
            "extra": "iterations: 288593\ncpu: 2.4352613611556833 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.048156689999814,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.047822009999976 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 9.870758898646939,
            "unit": "us/iter",
            "extra": "iterations: 70713\ncpu: 9.870557111139423 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.314876762123983,
            "unit": "us/iter",
            "extra": "iterations: 2215650\ncpu: 0.31486078622526037 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.7521434103611706,
            "unit": "us/iter",
            "extra": "iterations: 867392\ncpu: 0.751032732605324 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.595650246521394,
            "unit": "us/iter",
            "extra": "iterations: 433431\ncpu: 1.5954819452231164 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.2940576539168602,
            "unit": "us/iter",
            "extra": "iterations: 212891\ncpu: 3.29389974212154 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.511090604303429,
            "unit": "us/iter",
            "extra": "iterations: 109167\ncpu: 6.5108326966940275 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 13.314284506990258,
            "unit": "us/iter",
            "extra": "iterations: 54431\ncpu: 13.314003123220198 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 26.57176134388893,
            "unit": "us/iter",
            "extra": "iterations: 25895\ncpu: 26.570243599150384 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.6036617227294281,
            "unit": "us/iter",
            "extra": "iterations: 1084291\ncpu: 0.6036544728306396 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.8708475367190426,
            "unit": "us/iter",
            "extra": "iterations: 809185\ncpu: 0.8707854532647072 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.651867539230018,
            "unit": "us/iter",
            "extra": "iterations: 424420\ncpu: 1.6518015432826045 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.216580921475496,
            "unit": "us/iter",
            "extra": "iterations: 224032\ncpu: 3.216356310705639 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.082247064938745,
            "unit": "us/iter",
            "extra": "iterations: 111582\ncpu: 6.08181996200103 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.349459186738724,
            "unit": "us/iter",
            "extra": "iterations: 56587\ncpu: 12.348268860339061 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 26.047940608760573,
            "unit": "us/iter",
            "extra": "iterations: 26940\ncpu: 26.046595953971803 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3400480919529077,
            "unit": "us/iter",
            "extra": "iterations: 1976838\ncpu: 0.34002244139378257 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6423417167653722,
            "unit": "us/iter",
            "extra": "iterations: 1079868\ncpu: 0.6423062105738848 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.256492657035097,
            "unit": "us/iter",
            "extra": "iterations: 536568\ncpu: 1.2564137611635517 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.355815777685621,
            "unit": "us/iter",
            "extra": "iterations: 301375\ncpu: 2.3557234541684084 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.7646894681292125,
            "unit": "us/iter",
            "extra": "iterations: 149698\ncpu: 4.764310431669082 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.074930619001243,
            "unit": "us/iter",
            "extra": "iterations: 77932\ncpu: 9.074654955602321 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.173863494458903,
            "unit": "us/iter",
            "extra": "iterations: 38438\ncpu: 19.171821608824533 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.27186791039500563,
            "unit": "us/iter",
            "extra": "iterations: 2545840\ncpu: 0.27186402012695116 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.36402918504575327,
            "unit": "us/iter",
            "extra": "iterations: 1739521\ncpu: 0.36351551950220956 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6910897328307479,
            "unit": "us/iter",
            "extra": "iterations: 989036\ncpu: 0.6910265561617519 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.288561282755148,
            "unit": "us/iter",
            "extra": "iterations: 536252\ncpu: 1.287440695792276 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.4549865367260595,
            "unit": "us/iter",
            "extra": "iterations: 287003\ncpu: 2.454963125821003 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 4.799123840400909,
            "unit": "us/iter",
            "extra": "iterations: 135715\ncpu: 4.7975339424529455 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.378724640761902,
            "unit": "us/iter",
            "extra": "iterations: 61171\ncpu: 10.377898039920844 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.577036459655537,
            "unit": "us/iter",
            "extra": "iterations: 1240851\ncpu: 0.5770034218451675 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1620282203136423,
            "unit": "us/iter",
            "extra": "iterations: 618845\ncpu: 1.1619211337249087 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.3267745353964306,
            "unit": "us/iter",
            "extra": "iterations: 295736\ncpu: 2.3266426508778135 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.938734606174378,
            "unit": "us/iter",
            "extra": "iterations: 138221\ncpu: 4.938489520405808 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.010921324094955,
            "unit": "us/iter",
            "extra": "iterations: 71445\ncpu: 10.009042774162099 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.436800711743686,
            "unit": "us/iter",
            "extra": "iterations: 34844\ncpu: 20.43610036161174 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 41.51174854564615,
            "unit": "us/iter",
            "extra": "iterations: 16846\ncpu: 41.509945090822484 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5775562044001671,
            "unit": "us/iter",
            "extra": "iterations: 1203678\ncpu: 0.5775111956852185 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8958751804925815,
            "unit": "us/iter",
            "extra": "iterations: 805435\ncpu: 0.8958675647321148 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.6744335351069968,
            "unit": "us/iter",
            "extra": "iterations: 427707\ncpu: 1.6743381310102394 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.2288648661439394,
            "unit": "us/iter",
            "extra": "iterations: 211309\ncpu: 3.228862627715788 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.473648590433655,
            "unit": "us/iter",
            "extra": "iterations: 105387\ncpu: 6.473216430869089 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.307929906807642,
            "unit": "us/iter",
            "extra": "iterations: 52687\ncpu: 13.307221269003954 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 26.900753520017616,
            "unit": "us/iter",
            "extra": "iterations: 25426\ncpu: 26.899577597735107 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.2514741600545461,
            "unit": "us/iter",
            "extra": "iterations: 2801670\ncpu: 0.25147037052900767 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.34195404897941434,
            "unit": "us/iter",
            "extra": "iterations: 2056864\ncpu: 0.3419193942817775 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.6748320506286959,
            "unit": "us/iter",
            "extra": "iterations: 955663\ncpu: 0.6748071161068283 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.3652807884163165,
            "unit": "us/iter",
            "extra": "iterations: 515413\ncpu: 1.3652299747969199 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.8144206277680612,
            "unit": "us/iter",
            "extra": "iterations: 259650\ncpu: 2.81437610244559 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.48637010610375,
            "unit": "us/iter",
            "extra": "iterations: 129779\ncpu: 5.485963260620009 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.42385674109124,
            "unit": "us/iter",
            "extra": "iterations: 58314\ncpu: 11.423099307199008 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 55.68381922251473,
            "unit": "us/iter",
            "extra": "iterations: 12579\ncpu: 55.679612608315516 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 57.49109323064527,
            "unit": "us/iter",
            "extra": "iterations: 12335\ncpu: 57.485887717876324 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 64.00605594613356,
            "unit": "us/iter",
            "extra": "iterations: 10099\ncpu: 64.00315961976489 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 72.7727670199777,
            "unit": "us/iter",
            "extra": "iterations: 9812\ncpu: 72.76852068895326 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 99.7035189393923,
            "unit": "us/iter",
            "extra": "iterations: 6864\ncpu: 99.70248310023167 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 143.21001621621573,
            "unit": "us/iter",
            "extra": "iterations: 4995\ncpu: 143.20035055054976 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 233.49174709977933,
            "unit": "us/iter",
            "extra": "iterations: 3017\ncpu: 233.47176400397814 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 53.02621448557078,
            "unit": "us/iter",
            "extra": "iterations: 12509\ncpu: 53.00845479255037 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 54.17835773773531,
            "unit": "us/iter",
            "extra": "iterations: 13208\ncpu: 54.173437537856586 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 56.020514446740016,
            "unit": "us/iter",
            "extra": "iterations: 12598\ncpu: 56.01732124146683 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 56.047633573415276,
            "unit": "us/iter",
            "extra": "iterations: 12218\ncpu: 56.044587903093195 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 59.90098660829653,
            "unit": "us/iter",
            "extra": "iterations: 11649\ncpu: 59.899842304060606 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 65.71430422794452,
            "unit": "us/iter",
            "extra": "iterations: 10880\ncpu: 65.70809402573452 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 78.30768195788517,
            "unit": "us/iter",
            "extra": "iterations: 8785\ncpu: 78.30187683551519 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 53.87920485293809,
            "unit": "us/iter",
            "extra": "iterations: 13600\ncpu: 53.87669757352916 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 54.00083304913708,
            "unit": "us/iter",
            "extra": "iterations: 12902\ncpu: 53.996692373276396 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 58.912703280237366,
            "unit": "us/iter",
            "extra": "iterations: 12682\ncpu: 58.912776375966 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 57.616261822941325,
            "unit": "us/iter",
            "extra": "iterations: 12222\ncpu: 57.61405220094851 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 60.89362419947297,
            "unit": "us/iter",
            "extra": "iterations: 11711\ncpu: 60.88612620613156 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 66.84589898123525,
            "unit": "us/iter",
            "extra": "iterations: 9325\ncpu: 66.84147227882073 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 81.14818968735867,
            "unit": "us/iter",
            "extra": "iterations: 8572\ncpu: 81.14058492767175 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 52.41299553464516,
            "unit": "us/iter",
            "extra": "iterations: 12541\ncpu: 52.413026233953126 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 53.46788075860562,
            "unit": "us/iter",
            "extra": "iterations: 13393\ncpu: 53.46584969760373 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 55.68977545088537,
            "unit": "us/iter",
            "extra": "iterations: 13418\ncpu: 55.68708674914324 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 56.46627152717875,
            "unit": "us/iter",
            "extra": "iterations: 11590\ncpu: 56.45312648835121 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 58.84865877185129,
            "unit": "us/iter",
            "extra": "iterations: 11611\ncpu: 58.842390922400966 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 67.99409408730291,
            "unit": "us/iter",
            "extra": "iterations: 10469\ncpu: 67.9892899035255 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 80.64433163149077,
            "unit": "us/iter",
            "extra": "iterations: 8814\ncpu: 80.63824041298028 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 54.3043681712047,
            "unit": "us/iter",
            "extra": "iterations: 12850\ncpu: 54.30382879377378 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 54.409877098937656,
            "unit": "us/iter",
            "extra": "iterations: 12685\ncpu: 54.40664942845945 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 54.68246579352836,
            "unit": "us/iter",
            "extra": "iterations: 12980\ncpu: 54.67356325115597 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 56.28025107948042,
            "unit": "us/iter",
            "extra": "iterations: 12506\ncpu: 56.277061010714526 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 58.51455917638027,
            "unit": "us/iter",
            "extra": "iterations: 11753\ncpu: 58.50889951501746 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 66.47491050254091,
            "unit": "us/iter",
            "extra": "iterations: 10626\ncpu: 66.47496245059314 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 78.72716318384721,
            "unit": "us/iter",
            "extra": "iterations: 8518\ncpu: 78.72567433669943 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 54.68715997361807,
            "unit": "us/iter",
            "extra": "iterations: 13646\ncpu: 54.68358573941078 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 54.32956771641287,
            "unit": "us/iter",
            "extra": "iterations: 12892\ncpu: 54.32480406453593 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 57.87078878251089,
            "unit": "us/iter",
            "extra": "iterations: 11803\ncpu: 57.862818859611195 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 60.026613402508765,
            "unit": "us/iter",
            "extra": "iterations: 11565\ncpu: 60.026661651534454 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 65.20983445046181,
            "unit": "us/iter",
            "extra": "iterations: 10891\ncpu: 65.2078996419073 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 79.30594744027259,
            "unit": "us/iter",
            "extra": "iterations: 8790\ncpu: 79.3015101251416 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 110.6239306766879,
            "unit": "us/iter",
            "extra": "iterations: 6650\ncpu: 110.61678947368307 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 53.546130287008864,
            "unit": "us/iter",
            "extra": "iterations: 13240\ncpu: 53.53994222054304 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 59.20546973947967,
            "unit": "us/iter",
            "extra": "iterations: 12475\ncpu: 59.20199198396767 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 74.39248858348756,
            "unit": "us/iter",
            "extra": "iterations: 9241\ncpu: 74.38414435667043 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 131.8948080959518,
            "unit": "us/iter",
            "extra": "iterations: 5336\ncpu: 131.89495914542755 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 365.12720769229793,
            "unit": "us/iter",
            "extra": "iterations: 1950\ncpu: 365.03884871795213 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1287.288302752369,
            "unit": "us/iter",
            "extra": "iterations: 545\ncpu: 1287.2271100917226 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5022.05982352965,
            "unit": "us/iter",
            "extra": "iterations: 136\ncpu: 5021.510058823629 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 54.056006921503446,
            "unit": "us/iter",
            "extra": "iterations: 12714\ncpu: 54.05238280635421 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 57.804848338948545,
            "unit": "us/iter",
            "extra": "iterations: 12462\ncpu: 57.80108401540511 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 71.27951984165114,
            "unit": "us/iter",
            "extra": "iterations: 10357\ncpu: 71.27335550835174 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 118.62142173765932,
            "unit": "us/iter",
            "extra": "iterations: 5916\ncpu: 118.61538235294167 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 304.0248091106259,
            "unit": "us/iter",
            "extra": "iterations: 2305\ncpu: 303.9887032538018 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1107.316258164832,
            "unit": "us/iter",
            "extra": "iterations: 643\ncpu: 1107.2538942457365 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4186.486735293931,
            "unit": "us/iter",
            "extra": "iterations: 170\ncpu: 4186.119729411744 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 52.504110337813934,
            "unit": "us/iter",
            "extra": "iterations: 12788\ncpu: 52.500371832967474 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 52.82659292373462,
            "unit": "us/iter",
            "extra": "iterations: 13086\ncpu: 52.82267438483803 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 53.73006676309408,
            "unit": "us/iter",
            "extra": "iterations: 13136\ncpu: 53.73011571254542 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 55.11773139617407,
            "unit": "us/iter",
            "extra": "iterations: 12699\ncpu: 55.061095991809566 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 51.811535740445294,
            "unit": "us/iter",
            "extra": "iterations: 13654\ncpu: 51.80975611542364 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 52.74861350223944,
            "unit": "us/iter",
            "extra": "iterations: 12709\ncpu: 52.746218742623675 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 54.2755283849325,
            "unit": "us/iter",
            "extra": "iterations: 13405\ncpu: 54.25787280865367 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 54.854477763466356,
            "unit": "us/iter",
            "extra": "iterations: 13199\ncpu: 54.854554435942504 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 58.490395476469004,
            "unit": "us/iter",
            "extra": "iterations: 12026\ncpu: 58.48224155995162 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 70.61498254257252,
            "unit": "us/iter",
            "extra": "iterations: 9337\ncpu: 70.61124900931777 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 126.12175582534203,
            "unit": "us/iter",
            "extra": "iterations: 5107\ncpu: 126.1159240258507 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 344.0453759141923,
            "unit": "us/iter",
            "extra": "iterations: 2051\ncpu: 344.0083549488055 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1202.0986961130302,
            "unit": "us/iter",
            "extra": "iterations: 566\ncpu: 1202.0193904593675 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4596.939125000021,
            "unit": "us/iter",
            "extra": "iterations: 152\ncpu: 4596.884124999958 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "b535707de9448e9e87f4ff9b99ee6728d8903031",
          "message": "Remove line",
          "timestamp": "2021-04-07T18:16:42Z",
          "url": "https://github.com/iic-jku/dd_package/pull/7/commits/b535707de9448e9e87f4ff9b99ee6728d8903031"
        },
        "date": 1617823533400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 9.330868529446512,
            "unit": "ns/iter",
            "extra": "iterations: 76993279\ncpu: 9.330209419967685 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.079339943718374,
            "unit": "ns/iter",
            "extra": "iterations: 76929258\ncpu: 9.078785876239701 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 27.07396773956407,
            "unit": "us/iter",
            "extra": "iterations: 27216\ncpu: 27.07247023809525 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 10.691783156249635,
            "unit": "ms/iter",
            "extra": "iterations: 64\ncpu: 10.681897468749993 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 10.769748399999694,
            "unit": "ms/iter",
            "extra": "iterations: 65\ncpu: 10.767382661538461 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 10.27243999999979,
            "unit": "ms/iter",
            "extra": "iterations: 67\ncpu: 10.266322134328362 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.109159514705786,
            "unit": "ms/iter",
            "extra": "iterations: 68\ncpu: 10.10842348529412 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 10.424238521127064,
            "unit": "ms/iter",
            "extra": "iterations: 71\ncpu: 10.419516338028167 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 9.917829603174658,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 9.89968612698413 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.127316400000078,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 10.127338316666663 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.5776863771931104,
            "unit": "ns/iter",
            "extra": "iterations: 110028229\ncpu: 6.577395642712743 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.653681908911678,
            "unit": "ns/iter",
            "extra": "iterations: 110429117\ncpu: 6.653681981356426 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.5273318690831355,
            "unit": "ns/iter",
            "extra": "iterations: 106780019\ncpu: 6.5268801647244485 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.508031585471249,
            "unit": "ns/iter",
            "extra": "iterations: 105988351\ncpu: 6.507624314298463 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.542191303348138,
            "unit": "ns/iter",
            "extra": "iterations: 103037099\ncpu: 6.541976497222616 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 6.533395171396797,
            "unit": "ns/iter",
            "extra": "iterations: 100304995\ncpu: 6.532900270819006 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.548275131620481,
            "unit": "ns/iter",
            "extra": "iterations: 103002381\ncpu: 6.5480519717306205 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.1843668036928467,
            "unit": "us/iter",
            "extra": "iterations: 3893903\ncpu: 0.18434749761357688 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3622643661293845,
            "unit": "us/iter",
            "extra": "iterations: 1921725\ncpu: 0.3622537475445244 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6770251159088927,
            "unit": "us/iter",
            "extra": "iterations: 1080590\ncpu: 0.6769565061679289 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.296707890303977,
            "unit": "us/iter",
            "extra": "iterations: 561005\ncpu: 1.2966697943868617 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.4774727244437496,
            "unit": "us/iter",
            "extra": "iterations: 289215\ncpu: 2.477274909669281 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 4.845313335511688,
            "unit": "us/iter",
            "extra": "iterations: 140782\ncpu: 4.8452031509710185 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.066852269301005,
            "unit": "us/iter",
            "extra": "iterations: 69647\ncpu: 10.065954427326357 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.32236032747417925,
            "unit": "us/iter",
            "extra": "iterations: 2124992\ncpu: 0.32234669306990393 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7811420189493092,
            "unit": "us/iter",
            "extra": "iterations: 842458\ncpu: 0.7810334022586293 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.617409959483039,
            "unit": "us/iter",
            "extra": "iterations: 403535\ncpu: 1.617355572626914 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.261097268857337,
            "unit": "us/iter",
            "extra": "iterations: 209070\ncpu: 3.2608679246185366 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.706117167021733,
            "unit": "us/iter",
            "extra": "iterations: 97664\ncpu: 6.7053203636959235 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 13.266412607671484,
            "unit": "us/iter",
            "extra": "iterations: 51778\ncpu: 13.265131600293579 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 26.86735330507532,
            "unit": "us/iter",
            "extra": "iterations: 26187\ncpu: 26.865854431588183 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3225355704543349,
            "unit": "us/iter",
            "extra": "iterations: 2168710\ncpu: 0.3225145409021964 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.649784555404918,
            "unit": "us/iter",
            "extra": "iterations: 1099090\ncpu: 0.6497591234566764 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2391941260579646,
            "unit": "us/iter",
            "extra": "iterations: 564391\ncpu: 1.2390935946887895 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.3822029488145033,
            "unit": "us/iter",
            "extra": "iterations: 296119\ncpu: 2.382131970592904 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.814168265608748,
            "unit": "us/iter",
            "extra": "iterations: 149995\ncpu: 4.8137072502417 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.69538398983136,
            "unit": "us/iter",
            "extra": "iterations: 73166\ncpu: 9.694934163409227 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 18.467909186148734,
            "unit": "us/iter",
            "extra": "iterations: 36272\ncpu: 18.46667600352895 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.18553589567226114,
            "unit": "us/iter",
            "extra": "iterations: 3764061\ncpu: 0.185530463241695 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3637669950175734,
            "unit": "us/iter",
            "extra": "iterations: 1863149\ncpu: 0.3637439045401096 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6665244858460849,
            "unit": "us/iter",
            "extra": "iterations: 1064370\ncpu: 0.6664962550616779 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2667202815089913,
            "unit": "us/iter",
            "extra": "iterations: 523891\ncpu: 1.2664810485387274 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.4506832169965573,
            "unit": "us/iter",
            "extra": "iterations: 262170\ncpu: 2.4505760918487924 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 4.891738488622904,
            "unit": "us/iter",
            "extra": "iterations: 143141\ncpu: 4.891446825158375 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.405738947647711,
            "unit": "us/iter",
            "extra": "iterations: 67791\ncpu: 10.405076676845033 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.3211054374627252,
            "unit": "us/iter",
            "extra": "iterations: 2122718\ncpu: 0.3210878599983595 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.7787641787059274,
            "unit": "us/iter",
            "extra": "iterations: 876367\ncpu: 0.7787381952994592 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.6166599460512203,
            "unit": "us/iter",
            "extra": "iterations: 435228\ncpu: 1.616551237512289 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.3251584858143906,
            "unit": "us/iter",
            "extra": "iterations: 215218\ncpu: 3.3243113773011466 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.75956604868935,
            "unit": "us/iter",
            "extra": "iterations: 105074\ncpu: 6.758752774235353 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 13.077641423135072,
            "unit": "us/iter",
            "extra": "iterations: 53347\ncpu: 13.077260389525174 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 27.05328473588762,
            "unit": "us/iter",
            "extra": "iterations: 25406\ncpu: 27.05114772101072 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.6146230067553129,
            "unit": "us/iter",
            "extra": "iterations: 1016684\ncpu: 0.6145846949494668 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.909619323001563,
            "unit": "us/iter",
            "extra": "iterations: 774507\ncpu: 0.9095257499286604 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7160194383435041,
            "unit": "us/iter",
            "extra": "iterations: 404767\ncpu: 1.7159624821193507 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.2724032514462262,
            "unit": "us/iter",
            "extra": "iterations: 210737\ncpu: 3.272046342123102 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.399699715520319,
            "unit": "us/iter",
            "extra": "iterations: 113892\ncpu: 6.3994640536648815 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.534474313811991,
            "unit": "us/iter",
            "extra": "iterations: 54504\ncpu: 12.533597919418822 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 26.63218145264502,
            "unit": "us/iter",
            "extra": "iterations: 27357\ncpu: 26.63133622107704 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.36237974103939613,
            "unit": "us/iter",
            "extra": "iterations: 1886928\ncpu: 0.36234821466425576 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6653792393351821,
            "unit": "us/iter",
            "extra": "iterations: 1048425\ncpu: 0.6653562934878557 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.2992727620008753,
            "unit": "us/iter",
            "extra": "iterations: 531401\ncpu: 1.299128620382729 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.4099188521751937,
            "unit": "us/iter",
            "extra": "iterations: 259970\ncpu: 2.4099183098049983 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.7572213462662045,
            "unit": "us/iter",
            "extra": "iterations: 142067\ncpu: 4.756832234086704 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.26297762391326,
            "unit": "us/iter",
            "extra": "iterations: 71058\ncpu: 9.262496158068018 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 18.614552952608104,
            "unit": "us/iter",
            "extra": "iterations: 37052\ncpu: 18.61265426967501 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.28611794127542783,
            "unit": "us/iter",
            "extra": "iterations: 2395794\ncpu: 0.286106823875507 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.38062485068827867,
            "unit": "us/iter",
            "extra": "iterations: 1764764\ncpu: 0.38059387544170376 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7315315105565389,
            "unit": "us/iter",
            "extra": "iterations: 968120\ncpu: 0.731493933603275 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.4012831053228452,
            "unit": "us/iter",
            "extra": "iterations: 441281\ncpu: 1.401115080866863 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.5328616520742324,
            "unit": "us/iter",
            "extra": "iterations: 276513\ncpu: 2.5327786975657616 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.240543032025341,
            "unit": "us/iter",
            "extra": "iterations: 137235\ncpu: 5.240198899697612 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.496715951615734,
            "unit": "us/iter",
            "extra": "iterations: 64401\ncpu: 10.496712846073857 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.5954842379004801,
            "unit": "us/iter",
            "extra": "iterations: 1208976\ncpu: 0.5954655468760355 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1040788563588155,
            "unit": "us/iter",
            "extra": "iterations: 634115\ncpu: 1.104003377936173 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.3705792067013087,
            "unit": "us/iter",
            "extra": "iterations: 292248\ncpu: 2.3705286092633777 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.937650034951521,
            "unit": "us/iter",
            "extra": "iterations: 140194\ncpu: 4.937582927942685 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.273326494797452,
            "unit": "us/iter",
            "extra": "iterations: 64390\ncpu: 10.27256393849964 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 21.292691771927796,
            "unit": "us/iter",
            "extra": "iterations: 33884\ncpu: 21.29269003069296 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 43.58181874611967,
            "unit": "us/iter",
            "extra": "iterations: 16110\ncpu: 43.57737895716987 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.6066954960793056,
            "unit": "us/iter",
            "extra": "iterations: 1234480\ncpu: 0.6066767553949867 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.865567791703478,
            "unit": "us/iter",
            "extra": "iterations: 801396\ncpu: 0.8655184939780128 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.6649712901560767,
            "unit": "us/iter",
            "extra": "iterations: 428111\ncpu: 1.664970582395689 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.3332379453088072,
            "unit": "us/iter",
            "extra": "iterations: 210893\ncpu: 3.3330248135310336 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.718540708520573,
            "unit": "us/iter",
            "extra": "iterations: 103455\ncpu: 6.718543975641608 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.45741715987887,
            "unit": "us/iter",
            "extra": "iterations: 51364\ncpu: 13.45706927030605 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 27.666425758010465,
            "unit": "us/iter",
            "extra": "iterations: 24373\ncpu: 27.666393222008175 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.2637874787406153,
            "unit": "us/iter",
            "extra": "iterations: 2687637\ncpu: 0.26378287283588064 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.34407204117825974,
            "unit": "us/iter",
            "extra": "iterations: 2021455\ncpu: 0.3440537592971382 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7001301708107207,
            "unit": "us/iter",
            "extra": "iterations: 1021189\ncpu: 0.7000823265820539 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4230963528071745,
            "unit": "us/iter",
            "extra": "iterations: 505704\ncpu: 1.423097246610654 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.837740381858905,
            "unit": "us/iter",
            "extra": "iterations: 247683\ncpu: 2.837556186738694 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.755478517257179,
            "unit": "us/iter",
            "extra": "iterations: 126846\ncpu: 5.755478667045095 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.985398262351064,
            "unit": "us/iter",
            "extra": "iterations: 58700\ncpu: 11.983449676320285 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 57.497807065220876,
            "unit": "us/iter",
            "extra": "iterations: 12144\ncpu: 57.49449711791942 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 60.57771281026011,
            "unit": "us/iter",
            "extra": "iterations: 12006\ncpu: 60.575661002831765 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 65.27431626144138,
            "unit": "us/iter",
            "extra": "iterations: 10817\ncpu: 65.26949597855224 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 75.72151615682407,
            "unit": "us/iter",
            "extra": "iterations: 9284\ncpu: 75.71887548470497 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 100.07945390580257,
            "unit": "us/iter",
            "extra": "iterations: 6964\ncpu: 100.07126349798975 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 148.74913900884474,
            "unit": "us/iter",
            "extra": "iterations: 4863\ncpu: 148.74910302282564 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 242.74860486111928,
            "unit": "us/iter",
            "extra": "iterations: 2880\ncpu: 242.7402142361146 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 57.69846627916028,
            "unit": "us/iter",
            "extra": "iterations: 12559\ncpu: 57.69785914483696 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 54.94895024837007,
            "unit": "us/iter",
            "extra": "iterations: 12884\ncpu: 54.945865492082746 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 55.89638582739981,
            "unit": "us/iter",
            "extra": "iterations: 12503\ncpu: 55.89241422058616 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 58.31823952833554,
            "unit": "us/iter",
            "extra": "iterations: 11364\ncpu: 58.315547782470965 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 63.40106635338438,
            "unit": "us/iter",
            "extra": "iterations: 10640\ncpu: 63.396716541354344 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 69.27917125193379,
            "unit": "us/iter",
            "extra": "iterations: 9705\ncpu: 69.27914920144326 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 82.30099541662365,
            "unit": "us/iter",
            "extra": "iterations: 8509\ncpu: 82.29694687977394 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 55.720671369159874,
            "unit": "us/iter",
            "extra": "iterations: 12263\ncpu: 55.716153388241 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 55.48580277361683,
            "unit": "us/iter",
            "extra": "iterations: 12691\ncpu: 55.4828688046652 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 57.50873439672745,
            "unit": "us/iter",
            "extra": "iterations: 12225\ncpu: 57.50368024539878 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 58.919991896808654,
            "unit": "us/iter",
            "extra": "iterations: 12094\ncpu: 58.91934173970533 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 61.83733898151765,
            "unit": "us/iter",
            "extra": "iterations: 11036\ncpu: 61.83579884015924 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 68.85822159774915,
            "unit": "us/iter",
            "extra": "iterations: 9964\ncpu: 68.85414662786016 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 82.46345438678387,
            "unit": "us/iter",
            "extra": "iterations: 8594\ncpu: 82.46088934140114 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 55.66596079950508,
            "unit": "us/iter",
            "extra": "iterations: 12908\ncpu: 55.65718205763873 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 55.797268831574605,
            "unit": "us/iter",
            "extra": "iterations: 12718\ncpu: 55.79547004245968 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 58.73334792800643,
            "unit": "us/iter",
            "extra": "iterations: 11945\ncpu: 58.730116199246645 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 60.88802864998837,
            "unit": "us/iter",
            "extra": "iterations: 11274\ncpu: 60.887110963278445 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 61.24098876501841,
            "unit": "us/iter",
            "extra": "iterations: 11571\ncpu: 61.238969060582974 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 68.27126386864875,
            "unit": "us/iter",
            "extra": "iterations: 10293\ncpu: 68.26412765957473 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 83.19814318415926,
            "unit": "us/iter",
            "extra": "iterations: 8737\ncpu: 83.19396360306757 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 55.33640726139413,
            "unit": "us/iter",
            "extra": "iterations: 10907\ncpu: 55.33111332171919 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 56.674362148001705,
            "unit": "us/iter",
            "extra": "iterations: 12216\ncpu: 56.67292035035951 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 57.56963998410432,
            "unit": "us/iter",
            "extra": "iterations: 12580\ncpu: 57.56775556438764 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 58.83877692642893,
            "unit": "us/iter",
            "extra": "iterations: 11485\ncpu: 58.83311867653453 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 61.59460076976888,
            "unit": "us/iter",
            "extra": "iterations: 11432\ncpu: 61.59175822253279 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 68.29840514631874,
            "unit": "us/iter",
            "extra": "iterations: 9910\ncpu: 68.28979132189643 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 81.89153586550002,
            "unit": "us/iter",
            "extra": "iterations: 8030\ncpu: 81.89133611456897 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 57.32198317233154,
            "unit": "us/iter",
            "extra": "iterations: 12836\ncpu: 57.32148527578728 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 56.88259289176074,
            "unit": "us/iter",
            "extra": "iterations: 12380\ncpu: 56.87854676898161 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 59.14786796036339,
            "unit": "us/iter",
            "extra": "iterations: 12110\ncpu: 59.14480495458396 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 60.2604250365138,
            "unit": "us/iter",
            "extra": "iterations: 11639\ncpu: 60.2537430191598 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 68.94721956147912,
            "unit": "us/iter",
            "extra": "iterations: 9897\ncpu: 68.9448381327684 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 81.67805195563338,
            "unit": "us/iter",
            "extra": "iterations: 8565\ncpu: 81.67481996497426 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 110.86350047273527,
            "unit": "us/iter",
            "extra": "iterations: 6346\ncpu: 110.86106082571656 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 61.42388442297855,
            "unit": "us/iter",
            "extra": "iterations: 11594\ncpu: 61.42157495256172 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 60.66403861880945,
            "unit": "us/iter",
            "extra": "iterations: 11005\ncpu: 60.658463698318485 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 75.15153513337425,
            "unit": "us/iter",
            "extra": "iterations: 9222\ncpu: 75.14902515723253 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 134.25586692233978,
            "unit": "us/iter",
            "extra": "iterations: 5215\ncpu: 134.24129952060972 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 363.6418856981966,
            "unit": "us/iter",
            "extra": "iterations: 1776\ncpu: 363.61937837836894 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1347.1524487896404,
            "unit": "us/iter",
            "extra": "iterations: 537\ncpu: 1346.9916666666375 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5289.128088888565,
            "unit": "us/iter",
            "extra": "iterations: 135\ncpu: 5288.948266666517 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 57.111070025552884,
            "unit": "us/iter",
            "extra": "iterations: 12524\ncpu: 57.10927587032827 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 59.322145951520284,
            "unit": "us/iter",
            "extra": "iterations: 11634\ncpu: 59.32087863159856 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 72.42244639454711,
            "unit": "us/iter",
            "extra": "iterations: 9971\ncpu: 72.41580964797916 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 118.97272167066193,
            "unit": "us/iter",
            "extra": "iterations: 5842\ncpu: 118.96039558370418 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 316.09297522521985,
            "unit": "us/iter",
            "extra": "iterations: 2220\ncpu: 316.0780153153156 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1120.3147483974235,
            "unit": "us/iter",
            "extra": "iterations: 624\ncpu: 1120.2119903846353 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4297.845159509161,
            "unit": "us/iter",
            "extra": "iterations: 163\ncpu: 4297.405533742379 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 55.37643594235352,
            "unit": "us/iter",
            "extra": "iterations: 12559\ncpu: 55.37214650848093 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 54.96445442628374,
            "unit": "us/iter",
            "extra": "iterations: 12968\ncpu: 54.96216710364098 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 55.65976209118229,
            "unit": "us/iter",
            "extra": "iterations: 12261\ncpu: 55.65632640078471 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 55.86465998904685,
            "unit": "us/iter",
            "extra": "iterations: 12779\ncpu: 55.8639810626816 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 57.23955354175005,
            "unit": "us/iter",
            "extra": "iterations: 12635\ncpu: 57.23802057775885 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 56.69687411375469,
            "unit": "us/iter",
            "extra": "iterations: 12694\ncpu: 56.693402473611044 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 56.11754148711188,
            "unit": "us/iter",
            "extra": "iterations: 12763\ncpu: 56.115575648358586 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 56.36651005454597,
            "unit": "us/iter",
            "extra": "iterations: 12283\ncpu: 56.36260302857637 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 60.37981631674885,
            "unit": "us/iter",
            "extra": "iterations: 10431\ncpu: 60.37585255488622 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 74.40111895424947,
            "unit": "us/iter",
            "extra": "iterations: 9180\ncpu: 74.39888976035101 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 130.35288684556284,
            "unit": "us/iter",
            "extra": "iterations: 5329\ncpu: 130.35160987052097 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 366.9622313687126,
            "unit": "us/iter",
            "extra": "iterations: 2053\ncpu: 366.94269605455196 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1270.9027391305071,
            "unit": "us/iter",
            "extra": "iterations: 529\ncpu: 1270.8883478260366 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5037.15356250023,
            "unit": "us/iter",
            "extra": "iterations: 128\ncpu: 5036.8931328124145 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bauer.hartwig@gmx.at",
            "name": "HartwigB",
            "username": "HartwigB"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e270d3cd75e15cd12e2bd90b5f1b2b19da9be3ef",
          "message": "♻️ Replace line by set of controls and target (#7)\n\n🚸 user-defined literals `_pc` and `_nc` for positive/negative controls\r\n🚸 convenience functions for `makeGateDD`\r\n🐛 also consider negative controls in Toffoli hash\r\n🚑️ circumvent gcc's troubles of compiling the package in reasonable time\r\n✅ added test for negative control\r\n📝 updated README.md\r\n\r\nCo-authored-by: Lukas Burgholzer <lukas.burgholzer@jku.at>",
          "timestamp": "2021-04-07T21:31:44+02:00",
          "tree_id": "8894848912a9047476f3613f1f55e83c5dd8f658",
          "url": "https://github.com/iic-jku/dd_package/commit/e270d3cd75e15cd12e2bd90b5f1b2b19da9be3ef"
        },
        "date": 1617824436400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 10.439365602008428,
            "unit": "ns/iter",
            "extra": "iterations: 67155635\ncpu: 10.401497208685468 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 10.231870960617709,
            "unit": "ns/iter",
            "extra": "iterations: 72195138\ncpu: 10.197195855488218 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 29.890299869141103,
            "unit": "us/iter",
            "extra": "iterations: 24454\ncpu: 29.8886562116627 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 12.021253017857296,
            "unit": "ms/iter",
            "extra": "iterations: 56\ncpu: 12.013379678571427 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 12.316950000000354,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.316679465517238 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 11.054731730158863,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 11.052006301587303 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 10.68522683333318,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 10.682643533333339 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 13.802743921874416,
            "unit": "ms/iter",
            "extra": "iterations: 64\ncpu: 13.796895281249999 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 10.955803166666556,
            "unit": "ms/iter",
            "extra": "iterations: 60\ncpu: 10.950304750000006 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.171872685714334,
            "unit": "ms/iter",
            "extra": "iterations: 70\ncpu: 10.169292685714293 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.645358419771918,
            "unit": "ns/iter",
            "extra": "iterations: 102982600\ncpu: 6.645002029469047 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.725557040387475,
            "unit": "ns/iter",
            "extra": "iterations: 96930539\ncpu: 6.725309450719152 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.824626032447597,
            "unit": "ns/iter",
            "extra": "iterations: 101923816\ncpu: 6.824048169468067 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.838152433874729,
            "unit": "ns/iter",
            "extra": "iterations: 103861809\ncpu: 6.837489110169457 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.0288238848705324,
            "unit": "ns/iter",
            "extra": "iterations: 94802037\ncpu: 7.02835349413432 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.049992511796411,
            "unit": "ns/iter",
            "extra": "iterations: 100818579\ncpu: 7.049366863224677 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.984870272393013,
            "unit": "ns/iter",
            "extra": "iterations: 96029290\ncpu: 6.984581589637913 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.1822342872388553,
            "unit": "us/iter",
            "extra": "iterations: 3725666\ncpu: 0.18221549355202554 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3850570978667348,
            "unit": "us/iter",
            "extra": "iterations: 1856269\ncpu: 0.3848401993461062 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7242360724605658,
            "unit": "us/iter",
            "extra": "iterations: 917409\ncpu: 0.7241278295721987 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.2998223308899095,
            "unit": "us/iter",
            "extra": "iterations: 519218\ncpu: 1.2996832428767828 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.530550424526949,
            "unit": "us/iter",
            "extra": "iterations: 267003\ncpu: 2.530147811073293 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.093289960850356,
            "unit": "us/iter",
            "extra": "iterations: 137422\ncpu: 5.093036726288374 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.11693033047767,
            "unit": "us/iter",
            "extra": "iterations: 69112\ncpu: 10.116614972797764 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3168677304481186,
            "unit": "us/iter",
            "extra": "iterations: 2075489\ncpu: 0.31684371972099157 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8227419988472344,
            "unit": "us/iter",
            "extra": "iterations: 931647\ncpu: 0.8226898095523302 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.6116307682869206,
            "unit": "us/iter",
            "extra": "iterations: 423826\ncpu: 1.6116300274169109 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.5346196119549544,
            "unit": "us/iter",
            "extra": "iterations: 198379\ncpu: 3.5342600023187924 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.097395572071319,
            "unit": "us/iter",
            "extra": "iterations: 101989\ncpu: 7.0966298130190495 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.105419344838786,
            "unit": "us/iter",
            "extra": "iterations: 48385\ncpu: 15.103912348868434 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 27.323475531005496,
            "unit": "us/iter",
            "extra": "iterations: 25706\ncpu: 27.321694195907604 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3238877135626018,
            "unit": "us/iter",
            "extra": "iterations: 2218202\ncpu: 0.3238653238072992 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6445115774527308,
            "unit": "us/iter",
            "extra": "iterations: 983161\ncpu: 0.6443645730455105 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3433421883732048,
            "unit": "us/iter",
            "extra": "iterations: 538601\ncpu: 1.3432140694131645 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.426681241241067,
            "unit": "us/iter",
            "extra": "iterations: 275434\ncpu: 2.4265803277736158 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.786106473959367,
            "unit": "us/iter",
            "extra": "iterations: 147097\ncpu: 4.785780838494345 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.116019454991644,
            "unit": "us/iter",
            "extra": "iterations: 74531\ncpu: 10.115277548939378 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 19.049153250499643,
            "unit": "us/iter",
            "extra": "iterations: 33964\ncpu: 19.045917589212117 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.18192498466928447,
            "unit": "us/iter",
            "extra": "iterations: 3921865\ncpu: 0.18191381549339297 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3935254777416526,
            "unit": "us/iter",
            "extra": "iterations: 1747231\ncpu: 0.3934124468945408 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6605867864247826,
            "unit": "us/iter",
            "extra": "iterations: 1038538\ncpu: 0.6604855585448022 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.23888184636109,
            "unit": "us/iter",
            "extra": "iterations: 573279\ncpu: 1.2387585032767658 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.5881369106095526,
            "unit": "us/iter",
            "extra": "iterations: 306397\ncpu: 2.5879215233830495 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.120064490000118,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.119718500000019 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.420230713760796,
            "unit": "us/iter",
            "extra": "iterations: 70724\ncpu: 10.419716107686247 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.3283250860411672,
            "unit": "us/iter",
            "extra": "iterations: 2169601\ncpu: 0.32827733578662777 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8072775747063706,
            "unit": "us/iter",
            "extra": "iterations: 837144\ncpu: 0.8072167679634552 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7260508199850266,
            "unit": "us/iter",
            "extra": "iterations: 424459\ncpu: 1.7259139327944573 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.467057447262277,
            "unit": "us/iter",
            "extra": "iterations: 196824\ncpu: 3.466801904239314 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.720387218531303,
            "unit": "us/iter",
            "extra": "iterations: 100411\ncpu: 6.719535658443783 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 14.39748293811423,
            "unit": "us/iter",
            "extra": "iterations: 46683\ncpu: 14.394978793136739 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 28.7278525559426,
            "unit": "us/iter",
            "extra": "iterations: 24355\ncpu: 28.72555733935552 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.6301541337801997,
            "unit": "us/iter",
            "extra": "iterations: 1112287\ncpu: 0.6301131353688376 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.9250136151414899,
            "unit": "us/iter",
            "extra": "iterations: 684532\ncpu: 0.9249597053169133 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.78522373348889,
            "unit": "us/iter",
            "extra": "iterations: 387166\ncpu: 1.7852242526461546 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.4413579907374356,
            "unit": "us/iter",
            "extra": "iterations: 203617\ncpu: 3.4409071541177743 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.468568925848876,
            "unit": "us/iter",
            "extra": "iterations: 108225\ncpu: 6.468444185724188 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.963985938714451,
            "unit": "us/iter",
            "extra": "iterations: 52769\ncpu: 12.963057344274118 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 28.08879090044292,
            "unit": "us/iter",
            "extra": "iterations: 25232\ncpu: 28.088790900443765 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.35886999289894,
            "unit": "us/iter",
            "extra": "iterations: 1956047\ncpu: 0.3588255665635849 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6517527060225164,
            "unit": "us/iter",
            "extra": "iterations: 1089699\ncpu: 0.6514215136473511 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.4362189423065612,
            "unit": "us/iter",
            "extra": "iterations: 504078\ncpu: 1.4361155852864076 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.7703091785190077,
            "unit": "us/iter",
            "extra": "iterations: 257754\ncpu: 2.7103213645568975 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.15678480593306,
            "unit": "us/iter",
            "extra": "iterations: 132815\ncpu: 5.116234416293352 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.13514265407551,
            "unit": "us/iter",
            "extra": "iterations: 71053\ncpu: 10.1341546591981 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.234892277284594,
            "unit": "us/iter",
            "extra": "iterations: 35415\ncpu: 19.23205178596627 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.294969455420316,
            "unit": "us/iter",
            "extra": "iterations: 2335177\ncpu: 0.2938188334331815 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3761422914051961,
            "unit": "us/iter",
            "extra": "iterations: 1806996\ncpu: 0.3761090860190047 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7351312995247161,
            "unit": "us/iter",
            "extra": "iterations: 947254\ncpu: 0.7350823168864962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3603924667648597,
            "unit": "us/iter",
            "extra": "iterations: 508573\ncpu: 1.3602819634546184 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.601595554237676,
            "unit": "us/iter",
            "extra": "iterations: 273159\ncpu: 2.6014293140624933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.067121344133709,
            "unit": "us/iter",
            "extra": "iterations: 132219\ncpu: 5.0669125995507835 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.437734479293711,
            "unit": "us/iter",
            "extra": "iterations: 66669\ncpu: 10.437537971170958 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.6043836319001499,
            "unit": "us/iter",
            "extra": "iterations: 1219995\ncpu: 0.6043419915655464 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.1066929736902078,
            "unit": "us/iter",
            "extra": "iterations: 604414\ncpu: 1.1066120688799357 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.6109694399421977,
            "unit": "us/iter",
            "extra": "iterations: 285667\ncpu: 2.6107275464089383 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.206679926130044,
            "unit": "us/iter",
            "extra": "iterations: 136456\ncpu: 5.205971265462841 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.720111249588042,
            "unit": "us/iter",
            "extra": "iterations: 69807\ncpu: 10.718985273683273 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 22.83319284753037,
            "unit": "us/iter",
            "extra": "iterations: 31206\ncpu: 22.83093363455726 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 47.91673103494782,
            "unit": "us/iter",
            "extra": "iterations: 14764\ncpu: 47.91237577892193 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.6301634957097887,
            "unit": "us/iter",
            "extra": "iterations: 1096567\ncpu: 0.6301223664399878 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9243484662817454,
            "unit": "us/iter",
            "extra": "iterations: 763830\ncpu: 0.9242658549677163 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.7823589207762354,
            "unit": "us/iter",
            "extra": "iterations: 376604\ncpu: 1.7823201532644344 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.4650665730363976,
            "unit": "us/iter",
            "extra": "iterations: 195094\ncpu: 3.464981993295545 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.968075350945717,
            "unit": "us/iter",
            "extra": "iterations: 100158\ncpu: 6.967928582839098 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.578932605627706,
            "unit": "us/iter",
            "extra": "iterations: 53135\ncpu: 13.577792133245346 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 27.55370099506452,
            "unit": "us/iter",
            "extra": "iterations: 24722\ncpu: 27.553381401180964 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.2545442767155545,
            "unit": "us/iter",
            "extra": "iterations: 2631959\ncpu: 0.254534930445343 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3462635732227436,
            "unit": "us/iter",
            "extra": "iterations: 1939241\ncpu: 0.34625444594044213 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7141326522506737,
            "unit": "us/iter",
            "extra": "iterations: 1007122\ncpu: 0.7141067368203688 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4859436313236924,
            "unit": "us/iter",
            "extra": "iterations: 515162\ncpu: 1.485888891261393 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9250374452923755,
            "unit": "us/iter",
            "extra": "iterations: 245852\ncpu: 2.9249605657062077 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.780921708914097,
            "unit": "us/iter",
            "extra": "iterations: 117127\ncpu: 5.780828638998691 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.35647299915383,
            "unit": "us/iter",
            "extra": "iterations: 56776\ncpu: 12.356053790333997 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 68.617396905679,
            "unit": "us/iter",
            "extra": "iterations: 10083\ncpu: 68.6092246355255 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 68.50414606066377,
            "unit": "us/iter",
            "extra": "iterations: 9989\ncpu: 68.50003153468903 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 76.52138384484246,
            "unit": "us/iter",
            "extra": "iterations: 9384\ncpu: 76.51360464620646 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 87.90082329889405,
            "unit": "us/iter",
            "extra": "iterations: 8421\ncpu: 87.89513513834493 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 112.80288730682355,
            "unit": "us/iter",
            "extra": "iterations: 5759\ncpu: 112.78753741969113 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 155.66207277151517,
            "unit": "us/iter",
            "extra": "iterations: 4521\ncpu: 155.66224972351273 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 253.6195464778477,
            "unit": "us/iter",
            "extra": "iterations: 2754\ncpu: 253.56188489469807 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 62.066848440207046,
            "unit": "us/iter",
            "extra": "iterations: 11540\ncpu: 62.06433544194033 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 61.54609228812518,
            "unit": "us/iter",
            "extra": "iterations: 11009\ncpu: 61.54066036879011 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 68.15066417653975,
            "unit": "us/iter",
            "extra": "iterations: 11646\ncpu: 68.14603597801808 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 70.80156220767218,
            "unit": "us/iter",
            "extra": "iterations: 9621\ncpu: 70.79438000207978 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 71.7037813939509,
            "unit": "us/iter",
            "extra": "iterations: 9986\ncpu: 71.6972923092333 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 80.59582021151853,
            "unit": "us/iter",
            "extra": "iterations: 8510\ncpu: 80.59130787309051 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 95.01589925165709,
            "unit": "us/iter",
            "extra": "iterations: 7216\ncpu: 94.99915881374709 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 62.144551968078126,
            "unit": "us/iter",
            "extra": "iterations: 11026\ncpu: 62.144597315436215 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 65.14562721614631,
            "unit": "us/iter",
            "extra": "iterations: 10604\ncpu: 65.13859204073866 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 64.80223949689733,
            "unit": "us/iter",
            "extra": "iterations: 11449\ncpu: 64.79538300288155 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 68.22331599045278,
            "unit": "us/iter",
            "extra": "iterations: 10475\ncpu: 68.21612744630082 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 75.35781992084472,
            "unit": "us/iter",
            "extra": "iterations: 9096\ncpu: 75.34682607739668 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 78.63180341112594,
            "unit": "us/iter",
            "extra": "iterations: 8912\ncpu: 78.62343278725426 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 94.5073301150046,
            "unit": "us/iter",
            "extra": "iterations: 7043\ncpu: 94.50470339343968 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 65.23716445361427,
            "unit": "us/iter",
            "extra": "iterations: 11146\ncpu: 65.23592643100642 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 69.1757663286348,
            "unit": "us/iter",
            "extra": "iterations: 11636\ncpu: 69.16685424544465 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 69.87128393228096,
            "unit": "us/iter",
            "extra": "iterations: 10101\ncpu: 69.86429462429474 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 68.57997834189645,
            "unit": "us/iter",
            "extra": "iterations: 9927\ncpu: 68.57214113025005 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 74.33885354599397,
            "unit": "us/iter",
            "extra": "iterations: 9969\ncpu: 74.33204243153726 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 77.59416258861216,
            "unit": "us/iter",
            "extra": "iterations: 8746\ncpu: 77.58803395838066 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 93.08350650046492,
            "unit": "us/iter",
            "extra": "iterations: 7461\ncpu: 93.0736151990338 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 66.62891120487704,
            "unit": "us/iter",
            "extra": "iterations: 10665\ncpu: 66.62881734646022 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 65.89296386016973,
            "unit": "us/iter",
            "extra": "iterations: 10155\ncpu: 65.89105337272343 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 67.3523660396523,
            "unit": "us/iter",
            "extra": "iterations: 9835\ncpu: 67.34399786476895 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 69.81985492227943,
            "unit": "us/iter",
            "extra": "iterations: 9843\ncpu: 69.81235720816832 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 72.67106065486054,
            "unit": "us/iter",
            "extra": "iterations: 9315\ncpu: 72.65982071926882 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 84.3328949886421,
            "unit": "us/iter",
            "extra": "iterations: 8361\ncpu: 84.32852948211945 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 99.64590114120546,
            "unit": "us/iter",
            "extra": "iterations: 7273\ncpu: 99.6270230991332 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 66.55743784033412,
            "unit": "us/iter",
            "extra": "iterations: 10835\ncpu: 66.5528969081676 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 64.98264407285986,
            "unit": "us/iter",
            "extra": "iterations: 10047\ncpu: 64.97336767194184 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 66.97729048219405,
            "unit": "us/iter",
            "extra": "iterations: 10307\ncpu: 66.97174075870753 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 75.26376162226119,
            "unit": "us/iter",
            "extra": "iterations: 9271\ncpu: 75.25783993096782 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 82.639388818588,
            "unit": "us/iter",
            "extra": "iterations: 8693\ncpu: 82.629460945588 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 92.8052496845579,
            "unit": "us/iter",
            "extra": "iterations: 7133\ncpu: 92.79964166549676 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 125.48306928406843,
            "unit": "us/iter",
            "extra": "iterations: 5629\ncpu: 125.48003162195819 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 64.92194062247668,
            "unit": "us/iter",
            "extra": "iterations: 11149\ncpu: 64.91760839537211 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 71.36969857413503,
            "unit": "us/iter",
            "extra": "iterations: 10029\ncpu: 71.36410479608904 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 83.96647149066418,
            "unit": "us/iter",
            "extra": "iterations: 7822\ncpu: 83.95670403988781 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 154.10437842429343,
            "unit": "us/iter",
            "extra": "iterations: 4709\ncpu: 154.09346273094093 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 422.2242346335606,
            "unit": "us/iter",
            "extra": "iterations: 1692\ncpu: 422.2009497635936 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1445.8515958763294,
            "unit": "us/iter",
            "extra": "iterations: 485\ncpu: 1445.624179381442 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5564.7413846154095,
            "unit": "us/iter",
            "extra": "iterations: 130\ncpu: 5564.055238461554 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 66.27769852539319,
            "unit": "us/iter",
            "extra": "iterations: 10986\ncpu: 66.26881449117006 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 69.4673713790281,
            "unit": "us/iter",
            "extra": "iterations: 9804\ncpu: 69.45531507547823 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 83.86171862464205,
            "unit": "us/iter",
            "extra": "iterations: 8725\ncpu: 83.85782177650457 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 138.34956460142536,
            "unit": "us/iter",
            "extra": "iterations: 5294\ncpu: 138.3480154892363 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 347.6262131552701,
            "unit": "us/iter",
            "extra": "iterations: 2022\ncpu: 347.5929782393697 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1242.624651724135,
            "unit": "us/iter",
            "extra": "iterations: 580\ncpu: 1241.4420655172253 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4773.489075342409,
            "unit": "us/iter",
            "extra": "iterations: 146\ncpu: 4772.978794520684 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 64.46568447461617,
            "unit": "us/iter",
            "extra": "iterations: 10164\ncpu: 64.45771517119286 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 62.69602369413003,
            "unit": "us/iter",
            "extra": "iterations: 11142\ncpu: 62.694937713157834 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 62.90070803402804,
            "unit": "us/iter",
            "extra": "iterations: 10580\ncpu: 62.89631294895953 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 63.72518194082282,
            "unit": "us/iter",
            "extra": "iterations: 11119\ncpu: 63.71855355697361 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 63.75025518460313,
            "unit": "us/iter",
            "extra": "iterations: 10753\ncpu: 63.743122291452316 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 65.49862346544803,
            "unit": "us/iter",
            "extra": "iterations: 11404\ncpu: 65.49374807085155 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 68.58741000379054,
            "unit": "us/iter",
            "extra": "iterations: 10556\ncpu: 68.58319439181619 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 64.99307244701133,
            "unit": "us/iter",
            "extra": "iterations: 10380\ncpu: 64.98827485549097 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 69.03027955287624,
            "unit": "us/iter",
            "extra": "iterations: 10109\ncpu: 69.02832080324643 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 85.58106076537466,
            "unit": "us/iter",
            "extra": "iterations: 8179\ncpu: 85.57663479643195 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 143.22305360134519,
            "unit": "us/iter",
            "extra": "iterations: 4776\ncpu: 143.2115795644911 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 398.21699613260415,
            "unit": "us/iter",
            "extra": "iterations: 1810\ncpu: 398.20097403315003 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1347.0816785715194,
            "unit": "us/iter",
            "extra": "iterations: 504\ncpu: 1347.0638194444323 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4988.926875968844,
            "unit": "us/iter",
            "extra": "iterations: 129\ncpu: 4988.523775193786 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "ce083698c681f521e444ece7d6e37d0eef15b7e8",
          "message": "Dynamic qubit size",
          "timestamp": "2021-04-07T19:31:47Z",
          "url": "https://github.com/iic-jku/dd_package/pull/9/commits/ce083698c681f521e444ece7d6e37d0eef15b7e8"
        },
        "date": 1617826457600,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 5.567185942968609,
            "unit": "ns/iter",
            "extra": "iterations: 126616151\ncpu: 5.549724000060624 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 5.518804647604756,
            "unit": "ns/iter",
            "extra": "iterations: 128849769\ncpu: 5.5174978621808775 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 17.645405717098402,
            "unit": "us/iter",
            "extra": "iterations: 28441\ncpu: 17.644105376041633 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 12.14819058620681,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.146554310344833 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 12.230567068965472,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.22692898275862 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 12.096060298245591,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.088609771929816 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 12.172448596491074,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 12.172034315789478 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 12.257729172413752,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.252946586206887 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 12.281987910714268,
            "unit": "ms/iter",
            "extra": "iterations: 56\ncpu: 12.270850499999986 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 12.212961637930983,
            "unit": "ms/iter",
            "extra": "iterations: 58\ncpu: 12.212271948275848 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 8.891132607300438,
            "unit": "ns/iter",
            "extra": "iterations: 79138471\ncpu: 8.890442715275608 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 8.703966279529642,
            "unit": "ns/iter",
            "extra": "iterations: 81149046\ncpu: 8.703516650091002 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 8.917202377741093,
            "unit": "ns/iter",
            "extra": "iterations: 80408082\ncpu: 8.916381477672854 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 8.919677502528401,
            "unit": "ns/iter",
            "extra": "iterations: 77238435\ncpu: 8.919562184293337 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 8.850091244983238,
            "unit": "ns/iter",
            "extra": "iterations: 79061333\ncpu: 8.849802886576692 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 8.591841450961958,
            "unit": "ns/iter",
            "extra": "iterations: 80360147\ncpu: 8.591619724140124 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 8.601570630061065,
            "unit": "ns/iter",
            "extra": "iterations: 79185292\ncpu: 8.601037980639125 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.17888194857933232,
            "unit": "us/iter",
            "extra": "iterations: 3846002\ncpu: 0.17864411536967453 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3340796310615837,
            "unit": "us/iter",
            "extra": "iterations: 2013561\ncpu: 0.3340526678854044 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6773381025020779,
            "unit": "us/iter",
            "extra": "iterations: 1050847\ncpu: 0.6772966340485356 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.2371375683119206,
            "unit": "us/iter",
            "extra": "iterations: 554808\ncpu: 1.2370532184106942 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.4848827844908983,
            "unit": "us/iter",
            "extra": "iterations: 283111\ncpu: 2.4847100430573144 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.030205249999966,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.029928559999988 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 10.13099738173935,
            "unit": "us/iter",
            "extra": "iterations: 68366\ncpu: 10.130260904543206 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3258697295066109,
            "unit": "us/iter",
            "extra": "iterations: 2134359\ncpu: 0.3258568581948966 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7889288671856917,
            "unit": "us/iter",
            "extra": "iterations: 863160\ncpu: 0.7887536412716066 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.6906061798158054,
            "unit": "us/iter",
            "extra": "iterations: 401889\ncpu: 1.6905328660401269 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.557675644169316,
            "unit": "us/iter",
            "extra": "iterations: 199016\ncpu: 3.554299930658839 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.05203534367419,
            "unit": "us/iter",
            "extra": "iterations: 100895\ncpu: 7.051736389315611 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 14.280805228440771,
            "unit": "us/iter",
            "extra": "iterations: 49422\ncpu: 14.279677228764488 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 29.222031398471362,
            "unit": "us/iter",
            "extra": "iterations: 24205\ncpu: 29.220308779177962 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.33296810192655313,
            "unit": "us/iter",
            "extra": "iterations: 2161792\ncpu: 0.33294358569187155 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6325037600889429,
            "unit": "us/iter",
            "extra": "iterations: 1099841\ncpu: 0.6324727592442914 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2817093390895034,
            "unit": "us/iter",
            "extra": "iterations: 571212\ncpu: 1.2815850472329053 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.5627652101810363,
            "unit": "us/iter",
            "extra": "iterations: 273764\ncpu: 2.5626045718209993 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.068670710859283,
            "unit": "us/iter",
            "extra": "iterations: 138635\ncpu: 5.067732607205986 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.06679597150292,
            "unit": "us/iter",
            "extra": "iterations: 69902\ncpu: 10.06636405253069 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 20.378138092417217,
            "unit": "us/iter",
            "extra": "iterations: 33760\ncpu: 20.376811048578105 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.18554705770637245,
            "unit": "us/iter",
            "extra": "iterations: 3896450\ncpu: 0.18554012370234385 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.35538391841676753,
            "unit": "us/iter",
            "extra": "iterations: 1973935\ncpu: 0.3551984655016484 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.659563938546117,
            "unit": "us/iter",
            "extra": "iterations: 1018650\ncpu: 0.6595213419722148 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2433390226943706,
            "unit": "us/iter",
            "extra": "iterations: 549388\ncpu: 1.2432867390623827 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.4971389994421944,
            "unit": "us/iter",
            "extra": "iterations: 292217\ncpu: 2.497061984757888 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 4.898364423324116,
            "unit": "us/iter",
            "extra": "iterations: 143937\ncpu: 4.897989953938172 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.218200651969905,
            "unit": "us/iter",
            "extra": "iterations: 67181\ncpu: 10.21773162054755 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.33954483456445816,
            "unit": "us/iter",
            "extra": "iterations: 2040825\ncpu: 0.3358912121323486 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.7855837863425587,
            "unit": "us/iter",
            "extra": "iterations: 908370\ncpu: 0.7855102799519986 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.7217556489930013,
            "unit": "us/iter",
            "extra": "iterations: 415251\ncpu: 1.7215943465518535 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.5860311596188215,
            "unit": "us/iter",
            "extra": "iterations: 197082\ncpu: 3.585794308967822 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.298491117621497,
            "unit": "us/iter",
            "extra": "iterations: 96258\ncpu: 7.297884622576795 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 14.603930290198953,
            "unit": "us/iter",
            "extra": "iterations: 48415\ncpu: 14.596932954662748 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 30.19675832359141,
            "unit": "us/iter",
            "extra": "iterations: 23097\ncpu: 30.19459371346944 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.45248264432731755,
            "unit": "us/iter",
            "extra": "iterations: 1538690\ncpu: 0.45247042549181266 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.8505177769359913,
            "unit": "us/iter",
            "extra": "iterations: 813076\ncpu: 0.8504320727705712 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7036149760519423,
            "unit": "us/iter",
            "extra": "iterations: 414021\ncpu: 1.703537274679296 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.2559835010731573,
            "unit": "us/iter",
            "extra": "iterations: 215711\ncpu: 3.255875884864456 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.405277827844097,
            "unit": "us/iter",
            "extra": "iterations: 107635\ncpu: 6.404979895015595 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.691540810443474,
            "unit": "us/iter",
            "extra": "iterations: 53773\ncpu: 12.690380897476356 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 26.88858304033928,
            "unit": "us/iter",
            "extra": "iterations: 26451\ncpu: 26.88723053948836 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3574941408320889,
            "unit": "us/iter",
            "extra": "iterations: 1961712\ncpu: 0.3574762437095743 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6700500926779025,
            "unit": "us/iter",
            "extra": "iterations: 1008331\ncpu: 0.6699959656104971 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.3272420782671361,
            "unit": "us/iter",
            "extra": "iterations: 529903\ncpu: 1.3271183310907853 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.5327658621819267,
            "unit": "us/iter",
            "extra": "iterations: 274710\ncpu: 2.532647642968934 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.071101861961649,
            "unit": "us/iter",
            "extra": "iterations: 137382\ncpu: 5.070666710340511 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.664240560396227,
            "unit": "us/iter",
            "extra": "iterations: 70236\ncpu: 9.663722749017548 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 20.02027685179955,
            "unit": "us/iter",
            "extra": "iterations: 35398\ncpu: 20.018234843776458 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.22156722369541512,
            "unit": "us/iter",
            "extra": "iterations: 3208452\ncpu: 0.22155716308051118 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.37019520898154407,
            "unit": "us/iter",
            "extra": "iterations: 1836478\ncpu: 0.37016543405366104 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6798376271399742,
            "unit": "us/iter",
            "extra": "iterations: 1031835\ncpu: 0.6798027320259554 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3024553641723127,
            "unit": "us/iter",
            "extra": "iterations: 541090\ncpu: 1.3023507531094696 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.4913772491880413,
            "unit": "us/iter",
            "extra": "iterations: 273432\ncpu: 2.4912005873489265 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 4.930357529831929,
            "unit": "us/iter",
            "extra": "iterations: 143051\ncpu: 4.930090583078763 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 10.09605441996673,
            "unit": "us/iter",
            "extra": "iterations: 67953\ncpu: 10.095528953835803 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.438097918514517,
            "unit": "us/iter",
            "extra": "iterations: 1621246\ncpu: 0.4380875024518178 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.170727398606744,
            "unit": "us/iter",
            "extra": "iterations: 607363\ncpu: 1.1706875163617227 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.3724534658609815,
            "unit": "us/iter",
            "extra": "iterations: 280998\ncpu: 2.3723220805841825 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.32555958935725,
            "unit": "us/iter",
            "extra": "iterations: 130040\ncpu: 5.3254380498308125 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 10.68901121677277,
            "unit": "us/iter",
            "extra": "iterations: 66775\ncpu: 10.688100606514324 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 22.249824506782506,
            "unit": "us/iter",
            "extra": "iterations: 31477\ncpu: 22.248719064713875 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 45.21567885168581,
            "unit": "us/iter",
            "extra": "iterations: 15292\ncpu: 45.21458703897494 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.4244715873904819,
            "unit": "us/iter",
            "extra": "iterations: 1689074\ncpu: 0.42443884933401504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9014924983472324,
            "unit": "us/iter",
            "extra": "iterations: 801690\ncpu: 0.9014590564931563 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.6904669248934507,
            "unit": "us/iter",
            "extra": "iterations: 416688\ncpu: 1.6903464702607198 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.4061834894240466,
            "unit": "us/iter",
            "extra": "iterations: 207358\ncpu: 3.4060407170207894 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.956521155820816,
            "unit": "us/iter",
            "extra": "iterations: 102265\ncpu: 6.955808165061371 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.333566339616333,
            "unit": "us/iter",
            "extra": "iterations: 49126\ncpu: 14.332974209176351 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 30.489780411218355,
            "unit": "us/iter",
            "extra": "iterations: 23248\ncpu: 30.487070844804187 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.19213889385996566,
            "unit": "us/iter",
            "extra": "iterations: 3660061\ncpu: 0.1921314953493967 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.38015348545390115,
            "unit": "us/iter",
            "extra": "iterations: 1850462\ncpu: 0.38012085576467025 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7473816966238565,
            "unit": "us/iter",
            "extra": "iterations: 937226\ncpu: 0.7473383901001468 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.5265262958856518,
            "unit": "us/iter",
            "extra": "iterations: 465396\ncpu: 1.5263934992995007 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 3.004754917480745,
            "unit": "us/iter",
            "extra": "iterations: 233097\ncpu: 3.0046571684749104 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 6.081976750019281,
            "unit": "us/iter",
            "extra": "iterations: 115613\ncpu: 6.081395699445461 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.67077149886169,
            "unit": "us/iter",
            "extra": "iterations: 54468\ncpu: 12.67019506866413 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 38.791746981973816,
            "unit": "us/iter",
            "extra": "iterations: 18141\ncpu: 38.78689724932481 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 41.36368756260079,
            "unit": "us/iter",
            "extra": "iterations: 16973\ncpu: 41.36147852471642 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 47.95368617057131,
            "unit": "us/iter",
            "extra": "iterations: 14903\ncpu: 47.952530698517506 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 60.02494564056961,
            "unit": "us/iter",
            "extra": "iterations: 11240\ncpu: 60.02272855871896 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 84.85058418777085,
            "unit": "us/iter",
            "extra": "iterations: 8095\ncpu: 84.84189116738752 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 133.75729967735953,
            "unit": "us/iter",
            "extra": "iterations: 5269\ncpu: 133.74835035110883 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 231.08338128804587,
            "unit": "us/iter",
            "extra": "iterations: 3121\ncpu: 231.05968535725745 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 35.55059410465803,
            "unit": "us/iter",
            "extra": "iterations: 19473\ncpu: 35.548910850921835 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 36.315106819015476,
            "unit": "us/iter",
            "extra": "iterations: 19079\ncpu: 36.31412794171602 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 37.70095073572877,
            "unit": "us/iter",
            "extra": "iterations: 18553\ncpu: 37.69614984099603 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 39.53695479009783,
            "unit": "us/iter",
            "extra": "iterations: 17651\ncpu: 39.534311483768846 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 44.163188974903626,
            "unit": "us/iter",
            "extra": "iterations: 16018\ncpu: 44.15959501810398 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 54.44347609274031,
            "unit": "us/iter",
            "extra": "iterations: 13155\ncpu: 54.44103800836284 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 73.06317053449622,
            "unit": "us/iter",
            "extra": "iterations: 9523\ncpu: 73.05526651265325 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 35.89877557400554,
            "unit": "us/iter",
            "extra": "iterations: 19512\ncpu: 35.896567958179716 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 36.881636579321416,
            "unit": "us/iter",
            "extra": "iterations: 18967\ncpu: 36.878612010333356 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 37.27594830485557,
            "unit": "us/iter",
            "extra": "iterations: 18435\ncpu: 37.275191971792744 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 39.398171211520705,
            "unit": "us/iter",
            "extra": "iterations: 17639\ncpu: 39.39739140540857 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 44.71547693652065,
            "unit": "us/iter",
            "extra": "iterations: 16021\ncpu: 44.710370825790505 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 55.606593155893634,
            "unit": "us/iter",
            "extra": "iterations: 12887\ncpu: 55.60424877783723 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 73.51543948172282,
            "unit": "us/iter",
            "extra": "iterations: 9493\ncpu: 73.51247097861666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 35.8619562671825,
            "unit": "us/iter",
            "extra": "iterations: 19642\ncpu: 35.8605207718153 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 36.19034548151382,
            "unit": "us/iter",
            "extra": "iterations: 18878\ncpu: 36.187064148744085 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 37.73559147733493,
            "unit": "us/iter",
            "extra": "iterations: 18398\ncpu: 37.73256016958393 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 40.40949573139148,
            "unit": "us/iter",
            "extra": "iterations: 17453\ncpu: 40.406947344296164 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 44.29187591894115,
            "unit": "us/iter",
            "extra": "iterations: 15643\ncpu: 44.290247714632706 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 53.75185220444805,
            "unit": "us/iter",
            "extra": "iterations: 12815\ncpu: 53.748725477956164 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 71.15999628961225,
            "unit": "us/iter",
            "extra": "iterations: 9972\ncpu: 71.15608965102268 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 36.07811019157039,
            "unit": "us/iter",
            "extra": "iterations: 19575\ncpu: 36.07628224776464 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 36.57890842027519,
            "unit": "us/iter",
            "extra": "iterations: 18978\ncpu: 36.57665022657832 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 38.05198546574446,
            "unit": "us/iter",
            "extra": "iterations: 18508\ncpu: 38.050379781716295 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 40.35425101631769,
            "unit": "us/iter",
            "extra": "iterations: 17465\ncpu: 40.349908960778826 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 45.180977024922065,
            "unit": "us/iter",
            "extra": "iterations: 15408\ncpu: 45.179781736760546 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 54.59656154572644,
            "unit": "us/iter",
            "extra": "iterations: 12706\ncpu: 54.58985432079368 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 72.596461855247,
            "unit": "us/iter",
            "extra": "iterations: 9713\ncpu: 72.59439802326892 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 36.15712593240492,
            "unit": "us/iter",
            "extra": "iterations: 19439\ncpu: 36.152502340655786 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 37.285007983924544,
            "unit": "us/iter",
            "extra": "iterations: 18412\ncpu: 37.28415967847105 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 38.65534681564252,
            "unit": "us/iter",
            "extra": "iterations: 17900\ncpu: 38.652972569833096 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 43.76689927169465,
            "unit": "us/iter",
            "extra": "iterations: 16202\ncpu: 43.762351006047716 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 51.530806383134276,
            "unit": "us/iter",
            "extra": "iterations: 13661\ncpu: 51.52722860698363 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 68.0462729251154,
            "unit": "us/iter",
            "extra": "iterations: 10109\ncpu: 68.0442056583232 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 101.30272789913475,
            "unit": "us/iter",
            "extra": "iterations: 6821\ncpu: 101.2946660313741 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 37.582572739887276,
            "unit": "us/iter",
            "extra": "iterations: 18738\ncpu: 37.580742074928004 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 41.95381163535213,
            "unit": "us/iter",
            "extra": "iterations: 16553\ncpu: 41.951745605027135 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 58.79766955929881,
            "unit": "us/iter",
            "extra": "iterations: 11754\ncpu: 58.79328279734457 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 122.94051725327834,
            "unit": "us/iter",
            "extra": "iterations: 5796\ncpu: 122.9340978260838 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 371.84880124546095,
            "unit": "us/iter",
            "extra": "iterations: 1927\ncpu: 371.8073087701068 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1389.3138229572514,
            "unit": "us/iter",
            "extra": "iterations: 514\ncpu: 1389.2306614785934 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5390.4379839998455,
            "unit": "us/iter",
            "extra": "iterations: 125\ncpu: 5390.259735999962 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 36.11873116175797,
            "unit": "us/iter",
            "extra": "iterations: 18911\ncpu: 36.116910739780636 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 40.56135036538278,
            "unit": "us/iter",
            "extra": "iterations: 17379\ncpu: 40.557070487370666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 55.33537341122737,
            "unit": "us/iter",
            "extra": "iterations: 12667\ncpu: 55.330685639849875 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 107.24742879523468,
            "unit": "us/iter",
            "extra": "iterations: 6383\ncpu: 107.24335469214911 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 328.35265717000146,
            "unit": "us/iter",
            "extra": "iterations: 2106\ncpu: 328.33007075023687 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1196.2417155025432,
            "unit": "us/iter",
            "extra": "iterations: 587\ncpu: 1196.17745826233 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4669.092872483087,
            "unit": "us/iter",
            "extra": "iterations: 149\ncpu: 4668.876999999911 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 36.251308506772425,
            "unit": "us/iter",
            "extra": "iterations: 19267\ncpu: 36.24724700264777 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 36.50400911363331,
            "unit": "us/iter",
            "extra": "iterations: 19202\ncpu: 36.502276221226644 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 35.785131007512824,
            "unit": "us/iter",
            "extra": "iterations: 19434\ncpu: 35.782517289287405 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 36.10156576417433,
            "unit": "us/iter",
            "extra": "iterations: 19243\ncpu: 36.10032261082002 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 36.48224895256979,
            "unit": "us/iter",
            "extra": "iterations: 19333\ncpu: 36.47925360782143 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 35.39714628765054,
            "unit": "us/iter",
            "extra": "iterations: 19489\ncpu: 35.39419611062559 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 35.53147329414781,
            "unit": "us/iter",
            "extra": "iterations: 19565\ncpu: 35.53029792997645 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 36.347706818183255,
            "unit": "us/iter",
            "extra": "iterations: 19360\ncpu: 36.34416869834611 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 41.37954998819545,
            "unit": "us/iter",
            "extra": "iterations: 16944\ncpu: 41.378552348912756 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 55.78680725897432,
            "unit": "us/iter",
            "extra": "iterations: 12426\ncpu: 55.778559391598634 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 116.17736942979938,
            "unit": "us/iter",
            "extra": "iterations: 6261\ncpu: 116.172369429805 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 356.439860957183,
            "unit": "us/iter",
            "extra": "iterations: 1985\ncpu: 356.4109460957136 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1319.5931259541314,
            "unit": "us/iter",
            "extra": "iterations: 524\ncpu: 1319.5181507633597 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5201.007472868072,
            "unit": "us/iter",
            "extra": "iterations: 129\ncpu: 5200.458759689984 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "a53eba7aafd9b0ec51ba96d9c69547f7c2fbec61",
          "message": "Dynamic qubit size",
          "timestamp": "2021-04-07T19:31:47Z",
          "url": "https://github.com/iic-jku/dd_package/pull/9/commits/a53eba7aafd9b0ec51ba96d9c69547f7c2fbec61"
        },
        "date": 1617827310354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 8.84053758989492,
            "unit": "ns/iter",
            "extra": "iterations: 78098343\ncpu: 8.839352647981277 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 9.013702264490375,
            "unit": "ns/iter",
            "extra": "iterations: 79485037\ncpu: 9.012587350245557 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 25.578514797563297,
            "unit": "us/iter",
            "extra": "iterations: 27910\ncpu: 25.461653135077036 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 0.6125520901060132,
            "unit": "ms/iter",
            "extra": "iterations: 1132\ncpu: 0.6120286192579506 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 0.6260549567219135,
            "unit": "ms/iter",
            "extra": "iterations: 1086\ncpu: 0.6259492688766114 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 0.6971045540138706,
            "unit": "ms/iter",
            "extra": "iterations: 1009\ncpu: 0.6969130991080277 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 0.850191181250004,
            "unit": "ms/iter",
            "extra": "iterations: 800\ncpu: 0.8500761724999993 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 4.372447089172034,
            "unit": "ms/iter",
            "extra": "iterations: 157\ncpu: 4.372071076433121 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 2.0556452276422674,
            "unit": "ms/iter",
            "extra": "iterations: 369\ncpu: 2.0552933658536605 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 13.135485901960807,
            "unit": "ms/iter",
            "extra": "iterations: 51\ncpu: 13.13094311764705 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.916105713755112,
            "unit": "ns/iter",
            "extra": "iterations: 95684502\ncpu: 6.914821252871239 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.781254016888959,
            "unit": "ns/iter",
            "extra": "iterations: 97790230\ncpu: 6.780582559218848 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.849167093430446,
            "unit": "ns/iter",
            "extra": "iterations: 104122783\ncpu: 6.848809352320143 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.076753070194542,
            "unit": "ns/iter",
            "extra": "iterations: 105178190\ncpu: 7.0545401570420685 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.972388208713581,
            "unit": "ns/iter",
            "extra": "iterations: 105180246\ncpu: 6.971915135091049 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 6.84374968100097,
            "unit": "ns/iter",
            "extra": "iterations: 104624164\ncpu: 6.842824865965004 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.983865311495845,
            "unit": "ns/iter",
            "extra": "iterations: 102130884\ncpu: 6.983419275994918 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.17829346747876787,
            "unit": "us/iter",
            "extra": "iterations: 3847963\ncpu: 0.17828486136691055 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.3451665377195803,
            "unit": "us/iter",
            "extra": "iterations: 2051229\ncpu: 0.3451473292353024 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6285956453547771,
            "unit": "us/iter",
            "extra": "iterations: 1138738\ncpu: 0.628584411866471 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.213133282181424,
            "unit": "us/iter",
            "extra": "iterations: 593005\ncpu: 1.213060984308734 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.3665649969400033,
            "unit": "us/iter",
            "extra": "iterations: 292483\ncpu: 2.3664096579972256 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 4.764081257469654,
            "unit": "us/iter",
            "extra": "iterations: 148934\ncpu: 4.763917654800124 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 9.685142995432601,
            "unit": "us/iter",
            "extra": "iterations: 73345\ncpu: 9.684379085145512 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.31677606817916504,
            "unit": "us/iter",
            "extra": "iterations: 2231063\ncpu: 0.3167677228298796 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.7501163111989005,
            "unit": "us/iter",
            "extra": "iterations: 912741\ncpu: 0.7500671669181076 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.5609143810246005,
            "unit": "us/iter",
            "extra": "iterations: 450858\ncpu: 1.5606035137449026 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.202330105318075,
            "unit": "us/iter",
            "extra": "iterations: 214683\ncpu: 3.201871857576053 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 6.510883275402758,
            "unit": "us/iter",
            "extra": "iterations: 110765\ncpu: 6.500478716200971 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 13.327043034049783,
            "unit": "us/iter",
            "extra": "iterations: 53539\ncpu: 13.32522127794692 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 26.782869245837322,
            "unit": "us/iter",
            "extra": "iterations: 26546\ncpu: 26.771272169065092 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.3755359188274516,
            "unit": "us/iter",
            "extra": "iterations: 2154817\ncpu: 0.3205705895210598 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6610177901255626,
            "unit": "us/iter",
            "extra": "iterations: 1048503\ncpu: 0.655256417005959 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.3169054455570077,
            "unit": "us/iter",
            "extra": "iterations: 594705\ncpu: 1.2369747589140851 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.3976100473769666,
            "unit": "us/iter",
            "extra": "iterations: 300357\ncpu: 2.3510093022636434 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.71156339002081,
            "unit": "us/iter",
            "extra": "iterations: 146064\ncpu: 4.688299848011842 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.075905802241506,
            "unit": "us/iter",
            "extra": "iterations: 77539\ncpu: 8.999680573646772 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 18.51300024495159,
            "unit": "us/iter",
            "extra": "iterations: 36742\ncpu: 18.51152484894668 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.18101512547637816,
            "unit": "us/iter",
            "extra": "iterations: 3891051\ncpu: 0.18100602485035586 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.33791719008529586,
            "unit": "us/iter",
            "extra": "iterations: 2060333\ncpu: 0.3378942302045341 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6172660335786204,
            "unit": "us/iter",
            "extra": "iterations: 1127384\ncpu: 0.6172433341257246 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.2058964214863572,
            "unit": "us/iter",
            "extra": "iterations: 550452\ncpu: 1.2058292203498335 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.3797487351037834,
            "unit": "us/iter",
            "extra": "iterations: 287573\ncpu: 2.379708251470073 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 4.671507697160033,
            "unit": "us/iter",
            "extra": "iterations: 149016\ncpu: 4.6712453629140365 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 9.59369475753936,
            "unit": "us/iter",
            "extra": "iterations: 72218\ncpu: 9.593522182835326 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.3158959801834504,
            "unit": "us/iter",
            "extra": "iterations: 2282940\ncpu: 0.31563187819215716 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.7337412960601962,
            "unit": "us/iter",
            "extra": "iterations: 970279\ncpu: 0.7337425647674578 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.5237013209690158,
            "unit": "us/iter",
            "extra": "iterations: 461328\ncpu: 1.523585284222944 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.134308303535887,
            "unit": "us/iter",
            "extra": "iterations: 213945\ncpu: 3.134309060739904 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.2678856592287016,
            "unit": "us/iter",
            "extra": "iterations: 111054\ncpu: 6.227380418535154 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 12.783387100243694,
            "unit": "us/iter",
            "extra": "iterations: 55784\ncpu: 12.782618510683994 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 26.04745726622987,
            "unit": "us/iter",
            "extra": "iterations: 26864\ncpu: 26.042060862120383 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.4762377499119213,
            "unit": "us/iter",
            "extra": "iterations: 1498928\ncpu: 0.4762065215940997 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.8332615123990664,
            "unit": "us/iter",
            "extra": "iterations: 851799\ncpu: 0.8331743122497153 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.56603916286969,
            "unit": "us/iter",
            "extra": "iterations: 447720\ncpu: 1.5659564102564107 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 2.997515776632275,
            "unit": "us/iter",
            "extra": "iterations: 236077\ncpu: 2.997279044549 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 5.945302097451363,
            "unit": "us/iter",
            "extra": "iterations: 121004\ncpu: 5.945049444646438 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 11.731604487620853,
            "unit": "us/iter",
            "extra": "iterations: 55174\ncpu: 11.729932975676961 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 24.28658599098689,
            "unit": "us/iter",
            "extra": "iterations: 29067\ncpu: 24.28550971892523 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.33905450830553885,
            "unit": "us/iter",
            "extra": "iterations: 1962123\ncpu: 0.33902990128549604 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6453757528321926,
            "unit": "us/iter",
            "extra": "iterations: 1088556\ncpu: 0.6453626740378982 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.1775834422926053,
            "unit": "us/iter",
            "extra": "iterations: 601907\ncpu: 1.1775376976841998 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.272297397203683,
            "unit": "us/iter",
            "extra": "iterations: 302175\ncpu: 2.27226218251013 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.5528549530999225,
            "unit": "us/iter",
            "extra": "iterations: 157356\ncpu: 4.5526826241134986 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 8.910523258103867,
            "unit": "us/iter",
            "extra": "iterations: 76167\ncpu: 8.909464479367756 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 17.99989129119679,
            "unit": "us/iter",
            "extra": "iterations: 38019\ncpu: 17.99951216497027 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.20750961988551808,
            "unit": "us/iter",
            "extra": "iterations: 3422390\ncpu: 0.20749602675323287 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.34855568493332495,
            "unit": "us/iter",
            "extra": "iterations: 1968396\ncpu: 0.3485490851434353 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.6606498659388402,
            "unit": "us/iter",
            "extra": "iterations: 1081223\ncpu: 0.6605536952136664 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.2370348354332772,
            "unit": "us/iter",
            "extra": "iterations: 580099\ncpu: 1.2369221029513893 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.3821426667977588,
            "unit": "us/iter",
            "extra": "iterations: 294953\ncpu: 2.3819344573541934 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 4.750339090342835,
            "unit": "us/iter",
            "extra": "iterations: 147704\ncpu: 4.749983656502141 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 9.954507912403054,
            "unit": "us/iter",
            "extra": "iterations: 70459\ncpu: 9.952946252430408 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.4327187002751478,
            "unit": "us/iter",
            "extra": "iterations: 1661644\ncpu: 0.43271324904732555 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.0123694490290254,
            "unit": "us/iter",
            "extra": "iterations: 686479\ncpu: 1.012238993472479 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.1936481176248455,
            "unit": "us/iter",
            "extra": "iterations: 312451\ncpu: 2.1935394285823704 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.892686074834435,
            "unit": "us/iter",
            "extra": "iterations: 149851\ncpu: 4.876370007540805 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 9.619301605409898,
            "unit": "us/iter",
            "extra": "iterations: 72754\ncpu: 9.618635264040545 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 20.073568629202324,
            "unit": "us/iter",
            "extra": "iterations: 33579\ncpu: 20.070863218082625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 40.98755012656741,
            "unit": "us/iter",
            "extra": "iterations: 16987\ncpu: 40.98518896803376 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.42747423917512256,
            "unit": "us/iter",
            "extra": "iterations: 1659186\ncpu: 0.42746546740389396 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8395425062096419,
            "unit": "us/iter",
            "extra": "iterations: 841430\ncpu: 0.8395155235729707 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.558208343117016,
            "unit": "us/iter",
            "extra": "iterations: 447171\ncpu: 1.558079233671232 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.2071068329944716,
            "unit": "us/iter",
            "extra": "iterations: 215879\ncpu: 3.207050708961992 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 6.4014474460587065,
            "unit": "us/iter",
            "extra": "iterations: 108127\ncpu: 6.400789821228678 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 13.382986977920357,
            "unit": "us/iter",
            "extra": "iterations: 52219\ncpu: 13.382277485206712 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 26.41127450248318,
            "unit": "us/iter",
            "extra": "iterations: 26783\ncpu: 26.408830937534976 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.18393751994624719,
            "unit": "us/iter",
            "extra": "iterations: 3979446\ncpu: 0.18392804676831886 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3396841769221847,
            "unit": "us/iter",
            "extra": "iterations: 2108136\ncpu: 0.3396370931476921 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.655023022220645,
            "unit": "us/iter",
            "extra": "iterations: 1080391\ncpu: 0.6549785142601211 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.3101641081271518,
            "unit": "us/iter",
            "extra": "iterations: 511620\ncpu: 1.3100495699933477 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.5922668459529725,
            "unit": "us/iter",
            "extra": "iterations: 270703\ncpu: 2.5921697838590525 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 5.283764886387517,
            "unit": "us/iter",
            "extra": "iterations: 133612\ncpu: 5.283672731491257 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 11.066535822449236,
            "unit": "us/iter",
            "extra": "iterations: 63396\ncpu: 11.065974777588565 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 56.0049837313671,
            "unit": "us/iter",
            "extra": "iterations: 12478\ncpu: 56.00202251963486 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 59.048996931992605,
            "unit": "us/iter",
            "extra": "iterations: 11734\ncpu: 59.04093787284843 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 63.207414493020416,
            "unit": "us/iter",
            "extra": "iterations: 10888\ncpu: 63.20467670830225 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 74.74761719485426,
            "unit": "us/iter",
            "extra": "iterations: 9561\ncpu: 74.74637109089043 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 97.25892847896628,
            "unit": "us/iter",
            "extra": "iterations: 6180\ncpu: 97.24599207119645 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 139.2076658795768,
            "unit": "us/iter",
            "extra": "iterations: 5082\ncpu: 139.19857949626004 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 230.41412418301238,
            "unit": "us/iter",
            "extra": "iterations: 3060\ncpu: 230.38405882352757 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 54.350624585505656,
            "unit": "us/iter",
            "extra": "iterations: 12666\ncpu: 54.346817700932505 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 54.60455015455916,
            "unit": "us/iter",
            "extra": "iterations: 12940\ncpu: 54.59310973724884 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 55.7327443711806,
            "unit": "us/iter",
            "extra": "iterations: 12436\ncpu: 55.730103087809745 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 57.40111189540344,
            "unit": "us/iter",
            "extra": "iterations: 12467\ncpu: 57.39717478142277 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 59.884291967625785,
            "unit": "us/iter",
            "extra": "iterations: 11491\ncpu: 59.87783421808445 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 66.40593750589109,
            "unit": "us/iter",
            "extra": "iterations: 10609\ncpu: 66.40309831275235 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 80.33739161473146,
            "unit": "us/iter",
            "extra": "iterations: 8825\ncpu: 80.33745529745065 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 54.46068299424113,
            "unit": "us/iter",
            "extra": "iterations: 13025\ncpu: 54.4567093282147 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 54.79585591887862,
            "unit": "us/iter",
            "extra": "iterations: 12722\ncpu: 54.792833831158134 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 55.98237395581164,
            "unit": "us/iter",
            "extra": "iterations: 12809\ncpu: 55.97765578889816 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 57.951773841730656,
            "unit": "us/iter",
            "extra": "iterations: 11828\ncpu: 57.949432702063305 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 60.92865945017128,
            "unit": "us/iter",
            "extra": "iterations: 11640\ncpu: 60.92795051546455 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 66.61561686404752,
            "unit": "us/iter",
            "extra": "iterations: 10555\ncpu: 66.60633036475612 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 81.0743373258086,
            "unit": "us/iter",
            "extra": "iterations: 8683\ncpu: 81.06840642635098 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 55.20757377678846,
            "unit": "us/iter",
            "extra": "iterations: 13019\ncpu: 55.20260050695127 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 55.05563569624382,
            "unit": "us/iter",
            "extra": "iterations: 12668\ncpu: 55.05335506788783 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 55.10225933217911,
            "unit": "us/iter",
            "extra": "iterations: 12698\ncpu: 55.10088218617123 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 56.708245242957446,
            "unit": "us/iter",
            "extra": "iterations: 12245\ncpu: 56.699365373621184 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 60.148163253012015,
            "unit": "us/iter",
            "extra": "iterations: 11620\ncpu: 60.144882185887 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 66.43343163564133,
            "unit": "us/iter",
            "extra": "iterations: 10583\ncpu: 66.42758045922729 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 79.4827487122055,
            "unit": "us/iter",
            "extra": "iterations: 8930\ncpu: 79.4795154535279 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 54.190155663328554,
            "unit": "us/iter",
            "extra": "iterations: 12784\ncpu: 54.189034574468096 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 55.01479379054804,
            "unit": "us/iter",
            "extra": "iterations: 12948\ncpu: 55.00875324374475 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 55.72966351829857,
            "unit": "us/iter",
            "extra": "iterations: 12705\ncpu: 55.72685344352556 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 57.73253525641211,
            "unit": "us/iter",
            "extra": "iterations: 11232\ncpu: 57.73001397792002 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 60.548644882225986,
            "unit": "us/iter",
            "extra": "iterations: 11675\ncpu: 60.54741524625218 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 67.22505459387709,
            "unit": "us/iter",
            "extra": "iterations: 10514\ncpu: 67.21843950922577 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 80.42687974754918,
            "unit": "us/iter",
            "extra": "iterations: 8873\ncpu: 80.41821255494278 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 54.750404737464976,
            "unit": "us/iter",
            "extra": "iterations: 12665\ncpu: 54.74719163047785 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 55.522472308058674,
            "unit": "us/iter",
            "extra": "iterations: 12621\ncpu: 55.519450598209666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 56.43419539102559,
            "unit": "us/iter",
            "extra": "iterations: 12237\ncpu: 56.432402386206476 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 59.583102819806456,
            "unit": "us/iter",
            "extra": "iterations: 11632\ncpu: 59.58020185694726 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 66.99595546210443,
            "unit": "us/iter",
            "extra": "iterations: 10463\ncpu: 66.98743572589179 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 79.959377620811,
            "unit": "us/iter",
            "extra": "iterations: 8919\ncpu: 79.95362036102658 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 105.4661756429687,
            "unit": "us/iter",
            "extra": "iterations: 6610\ncpu: 105.46155431164904 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 55.62277433354024,
            "unit": "us/iter",
            "extra": "iterations: 12904\ncpu: 55.621192885926476 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 59.40043118803443,
            "unit": "us/iter",
            "extra": "iterations: 11902\ncpu: 59.3966874474879 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 73.91163387435068,
            "unit": "us/iter",
            "extra": "iterations: 9057\ncpu: 73.90418549188443 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 130.6887060785716,
            "unit": "us/iter",
            "extra": "iterations: 5396\ncpu: 130.6802459229072 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 355.10696195372736,
            "unit": "us/iter",
            "extra": "iterations: 1945\ncpu: 355.0675629820056 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1281.673865008871,
            "unit": "us/iter",
            "extra": "iterations: 563\ncpu: 1281.593836589705 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 4928.125099290777,
            "unit": "us/iter",
            "extra": "iterations: 141\ncpu: 4927.603397163089 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 56.121394071422024,
            "unit": "us/iter",
            "extra": "iterations: 12853\ncpu: 56.11779911304707 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 59.37548392050616,
            "unit": "us/iter",
            "extra": "iterations: 11070\ncpu: 59.37258003613441 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 72.63651554538889,
            "unit": "us/iter",
            "extra": "iterations: 9617\ncpu: 72.63060424248447 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 117.55795947778611,
            "unit": "us/iter",
            "extra": "iterations: 5898\ncpu: 117.55014801627796 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 314.8852201230216,
            "unit": "us/iter",
            "extra": "iterations: 2276\ncpu: 313.9062412126521 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1085.8672522935885,
            "unit": "us/iter",
            "extra": "iterations: 654\ncpu: 1085.7972339449511 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4070.4257117646553,
            "unit": "us/iter",
            "extra": "iterations: 170\ncpu: 4070.213717647127 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 54.54222216232891,
            "unit": "us/iter",
            "extra": "iterations: 12986\ncpu: 54.53781518558532 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 55.02282116590522,
            "unit": "us/iter",
            "extra": "iterations: 12917\ncpu: 55.016773941318796 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 56.46322779156318,
            "unit": "us/iter",
            "extra": "iterations: 12090\ncpu: 56.46007568238188 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 56.1275164425103,
            "unit": "us/iter",
            "extra": "iterations: 12863\ncpu: 56.12602254528583 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 54.4001627744053,
            "unit": "us/iter",
            "extra": "iterations: 12846\ncpu: 54.39623532617156 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 55.25206523908187,
            "unit": "us/iter",
            "extra": "iterations: 13029\ncpu: 55.24795939826717 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 54.35812764165381,
            "unit": "us/iter",
            "extra": "iterations: 13060\ncpu: 54.35204969372047 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 55.37190355921723,
            "unit": "us/iter",
            "extra": "iterations: 12868\ncpu: 55.36900326391045 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 59.33612440931329,
            "unit": "us/iter",
            "extra": "iterations: 11639\ncpu: 59.33551928859997 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 71.72717394021612,
            "unit": "us/iter",
            "extra": "iterations: 9601\ncpu: 71.719404541194 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 123.44567720962965,
            "unit": "us/iter",
            "extra": "iterations: 5691\ncpu: 123.43899086276481 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 334.4095024485787,
            "unit": "us/iter",
            "extra": "iterations: 2042\ncpu: 334.3719441723786 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1165.010761658042,
            "unit": "us/iter",
            "extra": "iterations: 579\ncpu: 1164.9211519861674 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4656.730753246742,
            "unit": "us/iter",
            "extra": "iterations: 154\ncpu: 4656.259681818204 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "d380c7d6d758648104014892945e8e5066404706",
          "message": "Dynamic qubit size",
          "timestamp": "2021-04-07T19:31:47Z",
          "url": "https://github.com/iic-jku/dd_package/pull/9/commits/d380c7d6d758648104014892945e8e5066404706"
        },
        "date": 1617827959542,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 10.15952779501237,
            "unit": "ns/iter",
            "extra": "iterations: 67879588\ncpu: 10.128736535643087 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 10.001928083733812,
            "unit": "ns/iter",
            "extra": "iterations: 70800867\ncpu: 10.001349037152329 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 29.47110663149924,
            "unit": "us/iter",
            "extra": "iterations: 23886\ncpu: 29.467811940048563 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 0.7103913780369191,
            "unit": "ms/iter",
            "extra": "iterations: 1029\ncpu: 0.7103068231292518 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 0.7562091259500617,
            "unit": "ms/iter",
            "extra": "iterations: 921\ncpu: 0.7560570347448426 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 0.839834239570927,
            "unit": "ms/iter",
            "extra": "iterations: 839\ncpu: 0.8396564076281292 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 1.0231180324858378,
            "unit": "ms/iter",
            "extra": "iterations: 708\ncpu: 1.0229241511299438 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 5.254969490000008,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 5.253160800000005 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 2.0128876350574583,
            "unit": "ms/iter",
            "extra": "iterations: 348\ncpu: 2.0126603563218386 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 11.566409781818265,
            "unit": "ms/iter",
            "extra": "iterations: 55\ncpu: 11.55049189090908 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.123956217034399,
            "unit": "ns/iter",
            "extra": "iterations: 97149746\ncpu: 7.122640011843163 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.452207644285606,
            "unit": "ns/iter",
            "extra": "iterations: 100958656\ncpu: 7.45183027198777 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.673710617653765,
            "unit": "ns/iter",
            "extra": "iterations: 92718987\ncpu: 7.6731023711464825 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.694909388074911,
            "unit": "ns/iter",
            "extra": "iterations: 94145224\ncpu: 7.693884333420898 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.335509329737481,
            "unit": "ns/iter",
            "extra": "iterations: 93226257\ncpu: 7.333486348164764 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.44125738664919,
            "unit": "ns/iter",
            "extra": "iterations: 86266957\ncpu: 7.438161241737108 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.22374919405542,
            "unit": "ns/iter",
            "extra": "iterations: 93771940\ncpu: 7.221766180799912 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.18282063662033712,
            "unit": "us/iter",
            "extra": "iterations: 3776568\ncpu: 0.1827986552870223 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.35414413197918715,
            "unit": "us/iter",
            "extra": "iterations: 2015833\ncpu: 0.3540581719815086 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.6514431811029848,
            "unit": "us/iter",
            "extra": "iterations: 1064549\ncpu: 0.6513250014795011 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.3436011001465231,
            "unit": "us/iter",
            "extra": "iterations: 506478\ncpu: 1.3435053388301132 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.557822873758156,
            "unit": "us/iter",
            "extra": "iterations: 272382\ncpu: 2.5573295739072335 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.1080424499920705,
            "unit": "us/iter",
            "extra": "iterations: 134629\ncpu: 5.1070872843146775 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 11.17526403467682,
            "unit": "us/iter",
            "extra": "iterations: 66211\ncpu: 11.173568002295694 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.3488295262011444,
            "unit": "us/iter",
            "extra": "iterations: 1934133\ncpu: 0.3487882219061459 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8035162769901935,
            "unit": "us/iter",
            "extra": "iterations: 847669\ncpu: 0.8033257804638383 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.6778497319209535,
            "unit": "us/iter",
            "extra": "iterations: 438117\ncpu: 1.6775795369729969 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.3155552015310144,
            "unit": "us/iter",
            "extra": "iterations: 196471\ncpu: 3.3144900723262003 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.163794177964201,
            "unit": "us/iter",
            "extra": "iterations: 110202\ncpu: 7.1377101958222395 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.367613891747894,
            "unit": "us/iter",
            "extra": "iterations: 46632\ncpu: 15.366188282724334 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 27.8212839236381,
            "unit": "us/iter",
            "extra": "iterations: 24253\ncpu: 27.816619923308327 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.32374699324100337,
            "unit": "us/iter",
            "extra": "iterations: 2173104\ncpu: 0.3236632047982973 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6340637259822576,
            "unit": "us/iter",
            "extra": "iterations: 1205411\ncpu: 0.6339393791827017 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2819802102324662,
            "unit": "us/iter",
            "extra": "iterations: 591821\ncpu: 1.2819038391675868 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.6479847270712433,
            "unit": "us/iter",
            "extra": "iterations: 270675\ncpu: 2.6476496499492037 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 4.769117908727482,
            "unit": "us/iter",
            "extra": "iterations: 148369\ncpu: 4.768403487251379 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 9.659519623936689,
            "unit": "us/iter",
            "extra": "iterations: 73711\ncpu: 9.658207580958011 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 19.582902843533674,
            "unit": "us/iter",
            "extra": "iterations: 34851\ncpu: 19.58178620412608 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.19061069673288825,
            "unit": "us/iter",
            "extra": "iterations: 3624976\ncpu: 0.190599077621479 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.370844910225102,
            "unit": "us/iter",
            "extra": "iterations: 2015207\ncpu: 0.3707829940050811 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.6527367039269887,
            "unit": "us/iter",
            "extra": "iterations: 990330\ncpu: 0.6519603859319621 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.3361151557481057,
            "unit": "us/iter",
            "extra": "iterations: 542639\ncpu: 1.3360048006133078 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.6001715184098435,
            "unit": "us/iter",
            "extra": "iterations: 287182\ncpu: 2.600053161409832 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.008407616492661,
            "unit": "us/iter",
            "extra": "iterations: 139408\ncpu: 5.007599219557006 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.358123608731253,
            "unit": "us/iter",
            "extra": "iterations: 67115\ncpu: 10.357289577590691 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.34156416922746763,
            "unit": "us/iter",
            "extra": "iterations: 2145491\ncpu: 0.34152825297332845 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.7725236727641848,
            "unit": "us/iter",
            "extra": "iterations: 827660\ncpu: 0.7724694512239295 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.6666288369048619,
            "unit": "us/iter",
            "extra": "iterations: 391103\ncpu: 1.6664839134447829 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.62308795094201,
            "unit": "us/iter",
            "extra": "iterations: 199111\ncpu: 3.62286449769224 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 6.844868718773243,
            "unit": "us/iter",
            "extra": "iterations: 104478\ncpu: 6.844756810046104 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 13.663582017926514,
            "unit": "us/iter",
            "extra": "iterations: 50428\ncpu: 13.66254519314672 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 28.402128431215857,
            "unit": "us/iter",
            "extra": "iterations: 25064\ncpu: 28.401498124800575 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.49252384026725476,
            "unit": "us/iter",
            "extra": "iterations: 1339813\ncpu: 0.4924589192670913 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.883461962277953,
            "unit": "us/iter",
            "extra": "iterations: 780817\ncpu: 0.8833395648404165 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.7545228458443414,
            "unit": "us/iter",
            "extra": "iterations: 402327\ncpu: 1.75432184019466 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.157514772616002,
            "unit": "us/iter",
            "extra": "iterations: 214417\ncpu: 3.1573935695396997 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.5389672680744315,
            "unit": "us/iter",
            "extra": "iterations: 100819\ncpu: 6.538723504498109 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 12.33938159182612,
            "unit": "us/iter",
            "extra": "iterations: 58235\ncpu: 12.338588735296705 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 26.041530770931107,
            "unit": "us/iter",
            "extra": "iterations: 27136\ncpu: 26.038871056898497 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.34225364689760746,
            "unit": "us/iter",
            "extra": "iterations: 1903193\ncpu: 0.3422283299696885 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.6690961969411424,
            "unit": "us/iter",
            "extra": "iterations: 1039742\ncpu: 0.6690603245805242 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.2884407908200342,
            "unit": "us/iter",
            "extra": "iterations: 527756\ncpu: 1.288389628919433 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.6378507928139445,
            "unit": "us/iter",
            "extra": "iterations: 269357\ncpu: 2.6378002650757306 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 4.853541573072833,
            "unit": "us/iter",
            "extra": "iterations: 114858\ncpu: 4.853281477998924 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 9.509095835584045,
            "unit": "us/iter",
            "extra": "iterations: 72207\ncpu: 9.508155774370856 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 19.16589556252832,
            "unit": "us/iter",
            "extra": "iterations: 35696\ncpu: 19.16462634468847 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.22479694121897395,
            "unit": "us/iter",
            "extra": "iterations: 3017215\ncpu: 0.22478185644708995 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.3872169562391753,
            "unit": "us/iter",
            "extra": "iterations: 1944936\ncpu: 0.3871951524368933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.710236006543862,
            "unit": "us/iter",
            "extra": "iterations: 940118\ncpu: 0.7101979304725614 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3745931471540294,
            "unit": "us/iter",
            "extra": "iterations: 515990\ncpu: 1.3743014593305998 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.7071165738986442,
            "unit": "us/iter",
            "extra": "iterations: 261405\ncpu: 2.707064141848852 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.169620590476191,
            "unit": "us/iter",
            "extra": "iterations: 116821\ncpu: 5.169112984822974 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 11.055257612109072,
            "unit": "us/iter",
            "extra": "iterations: 62105\ncpu: 11.05453322598835 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.455968643437278,
            "unit": "us/iter",
            "extra": "iterations: 1522871\ncpu: 0.45596937232372203 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.0584176353958044,
            "unit": "us/iter",
            "extra": "iterations: 662724\ncpu: 1.0582968007797944 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.475335047589517,
            "unit": "us/iter",
            "extra": "iterations: 277477\ncpu: 2.4751584095258408 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.277068874131934,
            "unit": "us/iter",
            "extra": "iterations: 131312\ncpu: 5.276755879127529 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 11.482213389325757,
            "unit": "us/iter",
            "extra": "iterations: 61437\ncpu: 11.481871526930123 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 23.680023236603937,
            "unit": "us/iter",
            "extra": "iterations: 27844\ncpu: 23.679093413302567 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 47.478633196310426,
            "unit": "us/iter",
            "extra": "iterations: 14839\ncpu: 47.473767976278204 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.4847774000435836,
            "unit": "us/iter",
            "extra": "iterations: 1472817\ncpu: 0.48476218294601287 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.8920079249232324,
            "unit": "us/iter",
            "extra": "iterations: 750165\ncpu: 0.8919791339238574 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.7513221435210127,
            "unit": "us/iter",
            "extra": "iterations: 401377\ncpu: 1.7512314332909005 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.490699697957588,
            "unit": "us/iter",
            "extra": "iterations: 199972\ncpu: 3.490538155341758 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 7.149205123768606,
            "unit": "us/iter",
            "extra": "iterations: 80917\ncpu: 7.148455207187672 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 14.837119287579256,
            "unit": "us/iter",
            "extra": "iterations: 49016\ncpu: 14.834797392688042 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 29.86547422852382,
            "unit": "us/iter",
            "extra": "iterations: 23980\ncpu: 29.862876605504383 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.19636810824851858,
            "unit": "us/iter",
            "extra": "iterations: 3618710\ncpu: 0.19635183753326543 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3830414422268631,
            "unit": "us/iter",
            "extra": "iterations: 1754925\ncpu: 0.38301700300582214 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7334472076561757,
            "unit": "us/iter",
            "extra": "iterations: 903739\ncpu: 0.7334217788542909 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.4939500192016884,
            "unit": "us/iter",
            "extra": "iterations: 476523\ncpu: 1.4938612532868363 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9117491296850866,
            "unit": "us/iter",
            "extra": "iterations: 245888\ncpu: 2.9116869265681737 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 6.08518967883822,
            "unit": "us/iter",
            "extra": "iterations: 120936\ncpu: 6.0849275649930785 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 12.85582642936699,
            "unit": "us/iter",
            "extra": "iterations: 54727\ncpu: 12.85535505326445 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 71.14652725045651,
            "unit": "us/iter",
            "extra": "iterations: 9798\ncpu: 71.14229250867598 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 73.22151916411646,
            "unit": "us/iter",
            "extra": "iterations: 9810\ncpu: 73.21581335372122 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 81.09609361557955,
            "unit": "us/iter",
            "extra": "iterations: 8834\ncpu: 81.08291883631416 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 92.40936109632734,
            "unit": "us/iter",
            "extra": "iterations: 7516\ncpu: 92.40369438531135 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 118.68007069022889,
            "unit": "us/iter",
            "extra": "iterations: 5998\ncpu: 118.67903701233602 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 167.40011991633705,
            "unit": "us/iter",
            "extra": "iterations: 4303\ncpu: 167.40037508714775 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 274.1632011695852,
            "unit": "us/iter",
            "extra": "iterations: 2565\ncpu: 274.15111345029374 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 69.01605226875182,
            "unit": "us/iter",
            "extra": "iterations: 9719\ncpu: 69.00803971602018 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 70.6858368527943,
            "unit": "us/iter",
            "extra": "iterations: 9850\ncpu: 70.67368639593958 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 71.23684818616253,
            "unit": "us/iter",
            "extra": "iterations: 9841\ncpu: 71.23167737018598 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 72.51048678996102,
            "unit": "us/iter",
            "extra": "iterations: 9084\ncpu: 72.51037758696553 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 73.63015966479455,
            "unit": "us/iter",
            "extra": "iterations: 9069\ncpu: 73.62263105083211 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 81.20769221032856,
            "unit": "us/iter",
            "extra": "iterations: 8691\ncpu: 81.20064307904707 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 97.1126508639178,
            "unit": "us/iter",
            "extra": "iterations: 7003\ncpu: 97.10314379551622 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 68.26118530132243,
            "unit": "us/iter",
            "extra": "iterations: 10205\ncpu: 68.25485928466375 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 69.75718608037377,
            "unit": "us/iter",
            "extra": "iterations: 10302\ncpu: 69.75381867598526 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 70.36722841691669,
            "unit": "us/iter",
            "extra": "iterations: 10170\ncpu: 70.36494739429617 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 70.7894910872479,
            "unit": "us/iter",
            "extra": "iterations: 9593\ncpu: 70.78457145835436 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 76.11044240922563,
            "unit": "us/iter",
            "extra": "iterations: 9281\ncpu: 76.10528240491371 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 82.75666237296105,
            "unit": "us/iter",
            "extra": "iterations: 8462\ncpu: 82.75387307964948 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 95.48648925108822,
            "unit": "us/iter",
            "extra": "iterations: 7117\ncpu: 95.47856498524663 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 66.16886953685692,
            "unit": "us/iter",
            "extra": "iterations: 10731\ncpu: 66.16689274065799 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 70.71456614173434,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 70.70816968503951 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 69.78542275764175,
            "unit": "us/iter",
            "extra": "iterations: 9878\ncpu: 69.77648309374413 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 72.0840215065071,
            "unit": "us/iter",
            "extra": "iterations: 9532\ncpu: 72.0785459504821 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 75.48028279723431,
            "unit": "us/iter",
            "extra": "iterations: 9109\ncpu: 75.48043671094393 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 81.19707274360309,
            "unit": "us/iter",
            "extra": "iterations: 8908\ncpu: 81.18556387516837 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 96.99416099835355,
            "unit": "us/iter",
            "extra": "iterations: 7292\ncpu: 96.98150383982487 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 69.271500495929,
            "unit": "us/iter",
            "extra": "iterations: 10082\ncpu: 69.26562755405732 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 69.35847766358182,
            "unit": "us/iter",
            "extra": "iterations: 9827\ncpu: 69.3493288897943 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 70.7077788909163,
            "unit": "us/iter",
            "extra": "iterations: 9882\ncpu: 70.70789850232723 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 71.03496674370069,
            "unit": "us/iter",
            "extra": "iterations: 9953\ncpu: 71.03148096051332 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 74.83440637493031,
            "unit": "us/iter",
            "extra": "iterations: 9255\ncpu: 74.82852879524525 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 81.56517176634426,
            "unit": "us/iter",
            "extra": "iterations: 8628\ncpu: 81.55432452480275 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 97.19555146956625,
            "unit": "us/iter",
            "extra": "iterations: 7179\ncpu: 97.17954589775759 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 70.0345817326149,
            "unit": "us/iter",
            "extra": "iterations: 10412\ncpu: 70.0311523242418 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 69.85591664191787,
            "unit": "us/iter",
            "extra": "iterations: 10101\ncpu: 69.85268824868896 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 72.88934050900173,
            "unit": "us/iter",
            "extra": "iterations: 9941\ncpu: 72.87920138819021 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 73.37299114675317,
            "unit": "us/iter",
            "extra": "iterations: 9601\ncpu: 73.3697734610982 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 80.78946018956799,
            "unit": "us/iter",
            "extra": "iterations: 8440\ncpu: 80.78380841232189 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 95.87222934352049,
            "unit": "us/iter",
            "extra": "iterations: 7068\ncpu: 95.86816878890593 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 126.88960988106234,
            "unit": "us/iter",
            "extra": "iterations: 5465\ncpu: 126.88479579139975 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 71.17811221089099,
            "unit": "us/iter",
            "extra": "iterations: 9901\ncpu: 71.17649580850427 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 74.7975676078854,
            "unit": "us/iter",
            "extra": "iterations: 9385\ncpu: 74.79147277570482 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 89.05603886786923,
            "unit": "us/iter",
            "extra": "iterations: 7667\ncpu: 89.05024990217873 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 154.084613209629,
            "unit": "us/iter",
            "extra": "iterations: 4527\ncpu: 154.0754303070483 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 397.0786545559097,
            "unit": "us/iter",
            "extra": "iterations: 1734\ncpu: 397.0492485582462 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1390.3524574257378,
            "unit": "us/iter",
            "extra": "iterations: 505\ncpu: 1390.2321148514777 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 5649.544095238269,
            "unit": "us/iter",
            "extra": "iterations: 126\ncpu: 5648.7624682539545 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 71.43856594383311,
            "unit": "us/iter",
            "extra": "iterations: 8439\ncpu: 71.43518971442056 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 73.2218228412799,
            "unit": "us/iter",
            "extra": "iterations: 10087\ncpu: 73.21628333498525 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 88.43163937906213,
            "unit": "us/iter",
            "extra": "iterations: 7537\ncpu: 88.41630516120281 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 142.2816111786155,
            "unit": "us/iter",
            "extra": "iterations: 4938\ncpu: 142.26849027946608 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 349.7357042394136,
            "unit": "us/iter",
            "extra": "iterations: 2005\ncpu: 349.7156698254405 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1231.2460577933346,
            "unit": "us/iter",
            "extra": "iterations: 571\ncpu: 1231.205119089304 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 4524.7302933334295,
            "unit": "us/iter",
            "extra": "iterations: 150\ncpu: 4523.531813333459 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 68.85104770164966,
            "unit": "us/iter",
            "extra": "iterations: 10377\ncpu: 68.8384170762279 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 70.23427867994182,
            "unit": "us/iter",
            "extra": "iterations: 9545\ncpu: 68.67704546883247 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 69.48446050023975,
            "unit": "us/iter",
            "extra": "iterations: 10595\ncpu: 68.86417206229312 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 68.61495169230763,
            "unit": "us/iter",
            "extra": "iterations: 9750\ncpu: 68.60610205127999 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 68.66449949535965,
            "unit": "us/iter",
            "extra": "iterations: 9908\ncpu: 68.65561980217775 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 67.72459971217172,
            "unit": "us/iter",
            "extra": "iterations: 9728\ncpu: 67.71746761924379 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 69.09808099569089,
            "unit": "us/iter",
            "extra": "iterations: 10445\ncpu: 69.09247898515963 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 69.29395513308025,
            "unit": "us/iter",
            "extra": "iterations: 10520\ncpu: 69.21526692015286 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 72.32681901148575,
            "unit": "us/iter",
            "extra": "iterations: 9752\ncpu: 72.312436833469 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 87.57673917980986,
            "unit": "us/iter",
            "extra": "iterations: 7925\ncpu: 87.56667141956055 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 142.64306614539097,
            "unit": "us/iter",
            "extra": "iterations: 4732\ncpu: 142.62835904480016 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 370.42094590164385,
            "unit": "us/iter",
            "extra": "iterations: 1830\ncpu: 370.4076333333352 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1300.4641353383251,
            "unit": "us/iter",
            "extra": "iterations: 532\ncpu: 1300.3428966165397 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4979.95358870964,
            "unit": "us/iter",
            "extra": "iterations: 124\ncpu: 4979.791629032372 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "9ae629fc6c146021a9fafcb80cd13d52f8b4377a",
          "message": "Dynamic qubit size",
          "timestamp": "2021-04-07T19:31:47Z",
          "url": "https://github.com/iic-jku/dd_package/pull/9/commits/9ae629fc6c146021a9fafcb80cd13d52f8b4377a"
        },
        "date": 1617829549735,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 4.137443148502342,
            "unit": "ns/iter",
            "extra": "iterations: 169084376\ncpu: 4.13703454185501 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 4.1413646983553845,
            "unit": "ns/iter",
            "extra": "iterations: 169077261\ncpu: 4.14100236104487 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 16.895964410674562,
            "unit": "us/iter",
            "extra": "iterations: 38298\ncpu: 16.872845527181575 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 0.500953464798852,
            "unit": "ms/iter",
            "extra": "iterations: 1392\ncpu: 0.5009379346264368 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 0.5453439387602655,
            "unit": "ms/iter",
            "extra": "iterations: 1339\ncpu: 0.545305869305452 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 0.5721668817377297,
            "unit": "ms/iter",
            "extra": "iterations: 1243\ncpu: 0.5721304456958968 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 0.6671440866666617,
            "unit": "ms/iter",
            "extra": "iterations: 1050\ncpu: 0.6670238076190477 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 4.513286177631558,
            "unit": "ms/iter",
            "extra": "iterations: 152\ncpu: 4.512930427631579 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 2.1307870866872802,
            "unit": "ms/iter",
            "extra": "iterations: 323\ncpu: 2.130588931888545 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 10.985159765624974,
            "unit": "ms/iter",
            "extra": "iterations: 64\ncpu: 10.983844359374995 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 6.701866559284483,
            "unit": "ns/iter",
            "extra": "iterations: 104488993\ncpu: 6.701694254054114 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 6.7041656793976605,
            "unit": "ns/iter",
            "extra": "iterations: 105100527\ncpu: 6.703980570906174 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 6.707672923233882,
            "unit": "ns/iter",
            "extra": "iterations: 104966722\ncpu: 6.707371865913852 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 6.713083632347472,
            "unit": "ns/iter",
            "extra": "iterations: 104570005\ncpu: 6.712583775816013 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 6.72578748281963,
            "unit": "ns/iter",
            "extra": "iterations: 104273132\ncpu: 6.725365379837242 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 6.710603193224926,
            "unit": "ns/iter",
            "extra": "iterations: 105402908\ncpu: 6.7103433142470825 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 6.692759987902239,
            "unit": "ns/iter",
            "extra": "iterations: 103513653\ncpu: 6.692635695119364 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.13828411159158974,
            "unit": "us/iter",
            "extra": "iterations: 5055327\ncpu: 0.13827685390084551 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.2638418375526688,
            "unit": "us/iter",
            "extra": "iterations: 2644648\ncpu: 0.2638287473418007 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.4935661455492153,
            "unit": "us/iter",
            "extra": "iterations: 1417019\ncpu: 0.4935527420592093 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 0.9570230637641843,
            "unit": "us/iter",
            "extra": "iterations: 731884\ncpu: 0.9570084316640329 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 1.8819660497560409,
            "unit": "us/iter",
            "extra": "iterations: 372015\ncpu: 1.8818488448046424 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 3.74504384644134,
            "unit": "us/iter",
            "extra": "iterations: 187290\ncpu: 3.7449668695605713 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 7.701224548752311,
            "unit": "us/iter",
            "extra": "iterations: 90693\ncpu: 7.70080467070223 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.2547911015635992,
            "unit": "us/iter",
            "extra": "iterations: 2746033\ncpu: 0.2547657209509128 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.6127145131260155,
            "unit": "us/iter",
            "extra": "iterations: 1140788\ncpu: 0.6126849835376973 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.3238090319603901,
            "unit": "us/iter",
            "extra": "iterations: 528811\ncpu: 1.3236999173617783 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 2.7082127801111664,
            "unit": "us/iter",
            "extra": "iterations: 258558\ncpu: 2.708065799549813 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 5.4912975153378465,
            "unit": "us/iter",
            "extra": "iterations: 127301\ncpu: 5.4909566853363305 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 11.105717971488046,
            "unit": "us/iter",
            "extra": "iterations: 63061\ncpu: 11.105460998081266 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 22.63292029079132,
            "unit": "us/iter",
            "extra": "iterations: 30950\ncpu: 22.63215760904683 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.25415728170940255,
            "unit": "us/iter",
            "extra": "iterations: 2750714\ncpu: 0.2541512876293214 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.49182987546029133,
            "unit": "us/iter",
            "extra": "iterations: 1421876\ncpu: 0.49179717851626964 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 0.9828090809912214,
            "unit": "us/iter",
            "extra": "iterations: 712213\ncpu: 0.9827915300619343 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 1.8976853120109196,
            "unit": "us/iter",
            "extra": "iterations: 368689\ncpu: 1.8976666106122029 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 3.7537120220721274,
            "unit": "us/iter",
            "extra": "iterations: 186299\ncpu: 3.753645510711251 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 7.475105236194356,
            "unit": "us/iter",
            "extra": "iterations: 93694\ncpu: 7.475042211881223 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 15.217966708009454,
            "unit": "us/iter",
            "extra": "iterations: 45957\ncpu: 15.217564375394444 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.13943097634137452,
            "unit": "us/iter",
            "extra": "iterations: 5035585\ncpu: 0.1394241590599702 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.2679427994933604,
            "unit": "us/iter",
            "extra": "iterations: 2609365\ncpu: 0.2679251369586094 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.49662799003273683,
            "unit": "us/iter",
            "extra": "iterations: 1407008\ncpu: 0.4966192551854727 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 0.9613460182994834,
            "unit": "us/iter",
            "extra": "iterations: 726687\ncpu: 0.9612977320359329 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 1.8911837314392665,
            "unit": "us/iter",
            "extra": "iterations: 370002\ncpu: 1.8910983319009063 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 3.747358373285046,
            "unit": "us/iter",
            "extra": "iterations: 187101\ncpu: 3.747322136172435 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 7.704990866671128,
            "unit": "us/iter",
            "extra": "iterations: 90438\ncpu: 7.704672294831859 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.25468747976480766,
            "unit": "us/iter",
            "extra": "iterations: 2745835\ncpu: 0.2546673434492598 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.6123897206124427,
            "unit": "us/iter",
            "extra": "iterations: 1145613\ncpu: 0.6123607675541377 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.3229284962262344,
            "unit": "us/iter",
            "extra": "iterations: 529049\ncpu: 1.3228487342382365 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 2.706705544179541,
            "unit": "us/iter",
            "extra": "iterations: 258830\ncpu: 2.7065799482285704 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 5.489998381928039,
            "unit": "us/iter",
            "extra": "iterations: 127312\ncpu: 5.489919159230851 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 11.105454131280402,
            "unit": "us/iter",
            "extra": "iterations: 62995\ncpu: 11.105216096515614 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 22.612296697609654,
            "unit": "us/iter",
            "extra": "iterations: 30917\ncpu: 22.61175042856669 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.3503748972925392,
            "unit": "us/iter",
            "extra": "iterations: 1995960\ncpu: 0.3503692899657307 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.6752815360474411,
            "unit": "us/iter",
            "extra": "iterations: 1036869\ncpu: 0.6752714065132595 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.2793067542265624,
            "unit": "us/iter",
            "extra": "iterations: 547435\ncpu: 1.279244089252613 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 2.466908580489111,
            "unit": "us/iter",
            "extra": "iterations: 284436\ncpu: 2.466808659944608 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 4.8571498802375,
            "unit": "us/iter",
            "extra": "iterations: 144035\ncpu: 4.857090207241275 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 9.68129679478318,
            "unit": "us/iter",
            "extra": "iterations: 72070\ncpu: 9.680677660607767 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 20.098767746381167,
            "unit": "us/iter",
            "extra": "iterations: 34824\ncpu: 20.097251550654725 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.271871502100071,
            "unit": "us/iter",
            "extra": "iterations: 2572758\ncpu: 0.27185607390978783 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.5219098921147896,
            "unit": "us/iter",
            "extra": "iterations: 1339572\ncpu: 0.5218801146933498 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 0.991566081147656,
            "unit": "us/iter",
            "extra": "iterations: 706268\ncpu: 0.9914777237535923 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 1.9295259550083215,
            "unit": "us/iter",
            "extra": "iterations: 362955\ncpu: 1.929396451350719 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 3.846677143454,
            "unit": "us/iter",
            "extra": "iterations: 181926\ncpu: 3.846497966206026 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 7.524100114256219,
            "unit": "us/iter",
            "extra": "iterations: 92774\ncpu: 7.523694548041458 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 15.410090153085877,
            "unit": "us/iter",
            "extra": "iterations: 45334\ncpu: 15.409001345568532 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.16476978423207098,
            "unit": "us/iter",
            "extra": "iterations: 4238628\ncpu: 0.16476486188455336 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.28060739146994107,
            "unit": "us/iter",
            "extra": "iterations: 2491683\ncpu: 0.2805991416243566 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.5209825630660886,
            "unit": "us/iter",
            "extra": "iterations: 1341807\ncpu: 0.5209819020172045 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 0.9849801333996915,
            "unit": "us/iter",
            "extra": "iterations: 711546\ncpu: 0.9849288928614575 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 1.9176332327061174,
            "unit": "us/iter",
            "extra": "iterations: 365706\ncpu: 1.9175370762306196 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 3.77355573869419,
            "unit": "us/iter",
            "extra": "iterations: 185652\ncpu: 3.7733596352315124 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 7.727547959194818,
            "unit": "us/iter",
            "extra": "iterations: 90087\ncpu: 7.726988477804772 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.3290162174439037,
            "unit": "us/iter",
            "extra": "iterations: 2126599\ncpu: 0.32899754631690914 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 0.8493634601269529,
            "unit": "us/iter",
            "extra": "iterations: 824305\ncpu: 0.8493148118718296 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 1.902967532714455,
            "unit": "us/iter",
            "extra": "iterations: 368340\ncpu: 1.9028331052831597 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 4.019120929298743,
            "unit": "us/iter",
            "extra": "iterations: 174325\ncpu: 4.018914929011935 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 8.223279560929901,
            "unit": "us/iter",
            "extra": "iterations: 85180\ncpu: 8.22267016905367 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 17.505953534441684,
            "unit": "us/iter",
            "extra": "iterations: 39879\ncpu: 17.504873567541544 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 35.47927100669843,
            "unit": "us/iter",
            "extra": "iterations: 19708\ncpu: 35.47707448751819 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.3278955370428896,
            "unit": "us/iter",
            "extra": "iterations: 2135714\ncpu: 0.3278796617899254 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.6618527535681402,
            "unit": "us/iter",
            "extra": "iterations: 1052725\ncpu: 0.6618064831746227 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.3059800245702495,
            "unit": "us/iter",
            "extra": "iterations: 535608\ncpu: 1.30594231228807 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 2.6488601672594845,
            "unit": "us/iter",
            "extra": "iterations: 263901\ncpu: 2.648764313132569 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 5.590779989289053,
            "unit": "us/iter",
            "extra": "iterations: 125103\ncpu: 5.590647314612743 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 11.105911693182302,
            "unit": "us/iter",
            "extra": "iterations: 62917\ncpu: 11.10548261995971 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 22.900511673727298,
            "unit": "us/iter",
            "extra": "iterations: 30453\ncpu: 22.899319705776175 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.1444286483826479,
            "unit": "us/iter",
            "extra": "iterations: 4850759\ncpu: 0.144421266651261 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.2788183109553927,
            "unit": "us/iter",
            "extra": "iterations: 2511775\ncpu: 0.2787953773725769 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.5585597231195051,
            "unit": "us/iter",
            "extra": "iterations: 1252237\ncpu: 0.5585320183000585 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.137126174632003,
            "unit": "us/iter",
            "extra": "iterations: 614767\ncpu: 1.1370669847275383 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.2528476276224163,
            "unit": "us/iter",
            "extra": "iterations: 309879\ncpu: 2.252732008300008 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 4.615573428964338,
            "unit": "us/iter",
            "extra": "iterations: 152113\ncpu: 4.615292223544328 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 9.540242965664357,
            "unit": "us/iter",
            "extra": "iterations: 72928\ncpu: 9.539365442628405 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 36.93227112750084,
            "unit": "us/iter",
            "extra": "iterations: 18980\ncpu: 36.92953603793493 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 39.5276647984608,
            "unit": "us/iter",
            "extra": "iterations: 17664\ncpu: 39.52546659873146 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 44.36800807374452,
            "unit": "us/iter",
            "extra": "iterations: 15730\ncpu: 44.36561608391656 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 53.98279208537713,
            "unit": "us/iter",
            "extra": "iterations: 12837\ncpu: 53.97933239853598 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 73.50388470860679,
            "unit": "us/iter",
            "extra": "iterations: 9489\ncpu: 73.49701148698365 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 112.85656102298299,
            "unit": "us/iter",
            "extra": "iterations: 6178\ncpu: 112.84747782453981 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 190.78973989071665,
            "unit": "us/iter",
            "extra": "iterations: 3660\ncpu: 190.7821778688533 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 33.35523519030703,
            "unit": "us/iter",
            "extra": "iterations: 20966\ncpu: 33.353647333779044 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 33.97104967477813,
            "unit": "us/iter",
            "extra": "iterations: 20755\ncpu: 33.96916988677393 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 34.60026833658173,
            "unit": "us/iter",
            "extra": "iterations: 20001\ncpu: 34.597618469076814 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 36.65944296458776,
            "unit": "us/iter",
            "extra": "iterations: 19146\ncpu: 36.65561318291074 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 40.20231535054965,
            "unit": "us/iter",
            "extra": "iterations: 17387\ncpu: 40.19997526887891 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 47.49658735757191,
            "unit": "us/iter",
            "extra": "iterations: 14744\ncpu: 47.49620733857789 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 61.964929823002564,
            "unit": "us/iter",
            "extra": "iterations: 11243\ncpu: 61.961673663612736 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 35.065655622154885,
            "unit": "us/iter",
            "extra": "iterations: 20855\ncpu: 35.06277425077933 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 34.052037240506074,
            "unit": "us/iter",
            "extra": "iterations: 20569\ncpu: 34.05200777869597 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 35.09428697483116,
            "unit": "us/iter",
            "extra": "iterations: 19946\ncpu: 35.09396109495631 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 37.0726996505704,
            "unit": "us/iter",
            "extra": "iterations: 18888\ncpu: 37.07038055908541 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 40.76728667015749,
            "unit": "us/iter",
            "extra": "iterations: 17187\ncpu: 40.764231570373 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 47.85186754421987,
            "unit": "us/iter",
            "extra": "iterations: 14586\ncpu: 47.8480676676269 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 62.05339216384583,
            "unit": "us/iter",
            "extra": "iterations: 11230\ncpu: 62.04901006233421 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 33.043224210376685,
            "unit": "us/iter",
            "extra": "iterations: 21181\ncpu: 33.03246938293779 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 33.577961956780044,
            "unit": "us/iter",
            "extra": "iterations: 20871\ncpu: 33.57608806477937 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 34.525470280409415,
            "unit": "us/iter",
            "extra": "iterations: 20256\ncpu: 34.43007671800923 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 36.2932996894404,
            "unit": "us/iter",
            "extra": "iterations: 19320\ncpu: 36.290534886127766 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 39.852853825135675,
            "unit": "us/iter",
            "extra": "iterations: 17568\ncpu: 39.851134676685284 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 46.74253911882464,
            "unit": "us/iter",
            "extra": "iterations: 14980\ncpu: 46.74199826435231 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 60.898303860636766,
            "unit": "us/iter",
            "extra": "iterations: 11423\ncpu: 60.89638711371738 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 33.65058988926274,
            "unit": "us/iter",
            "extra": "iterations: 20770\ncpu: 33.649146124218134 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 34.12121401727841,
            "unit": "us/iter",
            "extra": "iterations: 20489\ncpu: 34.11996027136489 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 35.10543478042253,
            "unit": "us/iter",
            "extra": "iterations: 19879\ncpu: 35.10298128678515 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 37.10405385100519,
            "unit": "us/iter",
            "extra": "iterations: 17437\ncpu: 37.10152824453768 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 40.70860721966901,
            "unit": "us/iter",
            "extra": "iterations: 17203\ncpu: 40.70460762657656 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 48.048770676174904,
            "unit": "us/iter",
            "extra": "iterations: 14582\ncpu: 48.04620525305239 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 62.05496772185836,
            "unit": "us/iter",
            "extra": "iterations: 11246\ncpu: 62.05067535123636 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 33.71441419205393,
            "unit": "us/iter",
            "extra": "iterations: 20744\ncpu: 33.712447743926056 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 34.6121100608679,
            "unit": "us/iter",
            "extra": "iterations: 20207\ncpu: 34.61007155936075 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 36.32231707570135,
            "unit": "us/iter",
            "extra": "iterations: 19273\ncpu: 36.321263736833906 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 39.680165439093216,
            "unit": "us/iter",
            "extra": "iterations: 17650\ncpu: 39.680122832862224 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 46.11668619439923,
            "unit": "us/iter",
            "extra": "iterations: 15175\ncpu: 46.1131740362429 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 59.42130528024674,
            "unit": "us/iter",
            "extra": "iterations: 11704\ncpu: 59.42058373205879 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 84.59117323312245,
            "unit": "us/iter",
            "extra": "iterations: 8249\ncpu: 84.58984895138684 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 35.779793593029275,
            "unit": "us/iter",
            "extra": "iterations: 19510\ncpu: 35.77903628908202 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 39.38893043429375,
            "unit": "us/iter",
            "extra": "iterations: 17753\ncpu: 39.38747766574686 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 52.63027748060188,
            "unit": "us/iter",
            "extra": "iterations: 13273\ncpu: 52.62967610939507 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 101.91312427156336,
            "unit": "us/iter",
            "extra": "iterations: 6864\ncpu: 101.90737048368571 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 297.29791893038293,
            "unit": "us/iter",
            "extra": "iterations: 2356\ncpu: 297.27115619694024 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1101.5169905213324,
            "unit": "us/iter",
            "extra": "iterations: 633\ncpu: 1101.4093823064466 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 4308.860283950612,
            "unit": "us/iter",
            "extra": "iterations: 162\ncpu: 4308.419086419692 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 36.212474859182784,
            "unit": "us/iter",
            "extra": "iterations: 19351\ncpu: 36.21210232029353 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 39.30005078168952,
            "unit": "us/iter",
            "extra": "iterations: 17782\ncpu: 39.29957361376718 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 50.58367334393895,
            "unit": "us/iter",
            "extra": "iterations: 13828\ncpu: 50.581572823257694 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 93.66494967206475,
            "unit": "us/iter",
            "extra": "iterations: 7471\ncpu: 93.65456324454492 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 265.0985740810978,
            "unit": "us/iter",
            "extra": "iterations: 2639\ncpu: 265.0847828722977 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 982.2036732394178,
            "unit": "us/iter",
            "extra": "iterations: 710\ncpu: 982.126819718307 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 3778.4199945654655,
            "unit": "us/iter",
            "extra": "iterations: 184\ncpu: 3778.2154184783803 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 33.59189138558729,
            "unit": "us/iter",
            "extra": "iterations: 20872\ncpu: 33.58983528171633 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 33.59287468263487,
            "unit": "us/iter",
            "extra": "iterations: 20875\ncpu: 33.589899017964264 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 33.55662353564993,
            "unit": "us/iter",
            "extra": "iterations: 20743\ncpu: 33.5566235356513 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 33.57402181014828,
            "unit": "us/iter",
            "extra": "iterations: 20816\ncpu: 33.574039248654294 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 33.55020737349589,
            "unit": "us/iter",
            "extra": "iterations: 20750\ncpu: 33.54905320481866 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 33.53851438589608,
            "unit": "us/iter",
            "extra": "iterations: 20819\ncpu: 33.538073538594546 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 33.65673753482369,
            "unit": "us/iter",
            "extra": "iterations: 20818\ncpu: 33.65331703333555 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 36.0267278018132,
            "unit": "us/iter",
            "extra": "iterations: 19416\ncpu: 36.02346276267052 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 39.449957473211086,
            "unit": "us/iter",
            "extra": "iterations: 17730\ncpu: 39.44772436548265 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 51.64828664254371,
            "unit": "us/iter",
            "extra": "iterations: 13543\ncpu: 51.64580624676983 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 98.4198792134837,
            "unit": "us/iter",
            "extra": "iterations: 7120\ncpu: 98.4182207865159 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 284.0974588091185,
            "unit": "us/iter",
            "extra": "iterations: 2452\ncpu: 284.0879530995128 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1041.7646881559635,
            "unit": "us/iter",
            "extra": "iterations: 667\ncpu: 1041.7505382308739 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 4104.455187134311,
            "unit": "us/iter",
            "extra": "iterations: 171\ncpu: 4104.12436257298 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "committer": {
            "name": "iic-jku",
            "username": "iic-jku"
          },
          "id": "dbdf4b89b515538f75a7af2e814903cac0ed71df",
          "message": "Dynamic qubit size",
          "timestamp": "2021-04-07T19:31:47Z",
          "url": "https://github.com/iic-jku/dd_package/pull/9/commits/dbdf4b89b515538f75a7af2e814903cac0ed71df"
        },
        "date": 1617871564988,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_DDVectorNodeCreation",
            "value": 10.721398960221878,
            "unit": "ns/iter",
            "extra": "iterations: 64386820\ncpu: 10.711602157087428 ns\nthreads: 1"
          },
          {
            "name": "BM_DDMatrixNodeCreation",
            "value": 10.69287670739827,
            "unit": "ns/iter",
            "extra": "iterations: 67962237\ncpu: 10.690647999123394 ns\nthreads: 1"
          },
          {
            "name": "BM_ComplexNumbersCreation",
            "value": 29.859437645037175,
            "unit": "us/iter",
            "extra": "iterations: 23270\ncpu: 29.856192608508803 us\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/2",
            "value": 0.7053802124874209,
            "unit": "ms/iter",
            "extra": "iterations: 993\ncpu: 0.7053056173212489 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/4",
            "value": 0.7757401779005731,
            "unit": "ms/iter",
            "extra": "iterations: 905\ncpu: 0.7757120220994468 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/8",
            "value": 0.8564192167664749,
            "unit": "ms/iter",
            "extra": "iterations: 835\ncpu: 0.8563418586826337 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/16",
            "value": 1.0065053994293724,
            "unit": "ms/iter",
            "extra": "iterations: 701\ncpu: 1.0063654522111278 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/32",
            "value": 4.485880435897463,
            "unit": "ms/iter",
            "extra": "iterations: 156\ncpu: 4.484646467948718 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/64",
            "value": 2.035209457971016,
            "unit": "ms/iter",
            "extra": "iterations: 345\ncpu: 2.03511615942029 ms\nthreads: 1"
          },
          {
            "name": "BM_PackageCreation/128",
            "value": 11.841656317460638,
            "unit": "ms/iter",
            "extra": "iterations: 63\ncpu: 11.837817000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/2",
            "value": 7.206186975647687,
            "unit": "ns/iter",
            "extra": "iterations: 95156670\ncpu: 7.205691182762058 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/4",
            "value": 7.439805780583115,
            "unit": "ns/iter",
            "extra": "iterations: 86262436\ncpu: 7.439460601367657 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/8",
            "value": 7.443034463453372,
            "unit": "ns/iter",
            "extra": "iterations: 92253726\ncpu: 7.442751645608329 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/16",
            "value": 7.420269886022268,
            "unit": "ns/iter",
            "extra": "iterations: 89571219\ncpu: 7.420199495107901 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/32",
            "value": 7.562538780751061,
            "unit": "ns/iter",
            "extra": "iterations: 93172835\ncpu: 7.562137451329018 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/64",
            "value": 7.290970050313552,
            "unit": "ns/iter",
            "extra": "iterations: 95240730\ncpu: 7.290225851901812 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdentCached/128",
            "value": 7.9383509709657485,
            "unit": "ns/iter",
            "extra": "iterations: 90671939\ncpu: 7.937880185842283 ns\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/2",
            "value": 0.19948393081448626,
            "unit": "us/iter",
            "extra": "iterations: 3458296\ncpu: 0.1994628510688504 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/4",
            "value": 0.38769240308035235,
            "unit": "us/iter",
            "extra": "iterations: 1853159\ncpu: 0.38766154873920694 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/8",
            "value": 0.7067542134912943,
            "unit": "us/iter",
            "extra": "iterations: 1032754\ncpu: 0.7067010536875192 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/16",
            "value": 1.4296816114797515,
            "unit": "us/iter",
            "extra": "iterations: 504679\ncpu: 1.429526273135995 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/32",
            "value": 2.8001498570279155,
            "unit": "us/iter",
            "extra": "iterations: 252147\ncpu: 2.7998521140445933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/64",
            "value": 5.510824823895017,
            "unit": "us/iter",
            "extra": "iterations: 127055\ncpu: 5.510660312463106 us\nthreads: 1"
          },
          {
            "name": "BM_MakeIdent/128",
            "value": 11.037314625268394,
            "unit": "us/iter",
            "extra": "iterations: 64286\ncpu: 11.036257116635028 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/2",
            "value": 0.35680807552046895,
            "unit": "us/iter",
            "extra": "iterations: 1996280\ncpu: 0.3567740617548625 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/4",
            "value": 0.8585062989582103,
            "unit": "us/iter",
            "extra": "iterations: 844981\ncpu: 0.8584216710198206 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/8",
            "value": 1.7299562630941445,
            "unit": "us/iter",
            "extra": "iterations: 416216\ncpu: 1.7299024809233627 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/16",
            "value": 3.6794334736586625,
            "unit": "us/iter",
            "extra": "iterations: 189797\ncpu: 3.6791289957164612 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/32",
            "value": 7.610149524806173,
            "unit": "us/iter",
            "extra": "iterations: 94593\ncpu: 7.60951329379551 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/64",
            "value": 15.928410973577787,
            "unit": "us/iter",
            "extra": "iterations: 42010\ncpu: 15.92736622232807 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetTop/128",
            "value": 30.62149543808149,
            "unit": "us/iter",
            "extra": "iterations: 21811\ncpu: 30.619387144101722 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/2",
            "value": 0.36312316919182985,
            "unit": "us/iter",
            "extra": "iterations: 2021853\ncpu: 0.3631066155650287 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/4",
            "value": 0.6945429758731858,
            "unit": "us/iter",
            "extra": "iterations: 969544\ncpu: 0.6944509088808756 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/8",
            "value": 1.2958040048013357,
            "unit": "us/iter",
            "extra": "iterations: 526518\ncpu: 1.2955829392347482 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/16",
            "value": 2.617278701942638,
            "unit": "us/iter",
            "extra": "iterations: 252901\ncpu: 2.6169738593362637 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/32",
            "value": 5.328740299006537,
            "unit": "us/iter",
            "extra": "iterations: 131636\ncpu: 5.328626431979115 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/64",
            "value": 10.78543876149361,
            "unit": "us/iter",
            "extra": "iterations: 61881\ncpu: 10.784419127034067 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetMiddle/128",
            "value": 22.105943002990323,
            "unit": "us/iter",
            "extra": "iterations: 33107\ncpu: 22.104813362732976 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/2",
            "value": 0.21305419227773656,
            "unit": "us/iter",
            "extra": "iterations: 3380537\ncpu: 0.21303067471233247 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/4",
            "value": 0.3896383431774595,
            "unit": "us/iter",
            "extra": "iterations: 1713207\ncpu: 0.38962884403344195 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/8",
            "value": 0.7182107308004934,
            "unit": "us/iter",
            "extra": "iterations: 986562\ncpu: 0.7181482876899788 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/16",
            "value": 1.4187526390361767,
            "unit": "us/iter",
            "extra": "iterations: 482752\ncpu: 1.4185998069402064 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/32",
            "value": 2.7595752868335244,
            "unit": "us/iter",
            "extra": "iterations: 250668\ncpu: 2.7595262219349697 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/64",
            "value": 5.496236846865892,
            "unit": "us/iter",
            "extra": "iterations: 127137\ncpu: 5.495624381572589 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSingleQubitGateDD_TargetBottom/128",
            "value": 10.825596443570277,
            "unit": "us/iter",
            "extra": "iterations: 64053\ncpu: 10.823913712082168 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/2",
            "value": 0.35962257884304016,
            "unit": "us/iter",
            "extra": "iterations: 1927849\ncpu: 0.3595654115026654 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/4",
            "value": 0.8465794780224712,
            "unit": "us/iter",
            "extra": "iterations: 850688\ncpu: 0.846545152864498 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/8",
            "value": 1.8653489920151658,
            "unit": "us/iter",
            "extra": "iterations: 384728\ncpu: 1.8651870334366083 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/16",
            "value": 3.840359466217439,
            "unit": "us/iter",
            "extra": "iterations: 187567\ncpu: 3.840182068274287 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/32",
            "value": 7.54104813413813,
            "unit": "us/iter",
            "extra": "iterations: 94112\ncpu: 7.539931273376334 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/64",
            "value": 15.38020103163669,
            "unit": "us/iter",
            "extra": "iterations: 43620\ncpu: 15.379638972948177 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetTop/128",
            "value": 30.441282570535808,
            "unit": "us/iter",
            "extra": "iterations: 23357\ncpu: 30.43829027700485 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/2",
            "value": 0.5421972720912522,
            "unit": "us/iter",
            "extra": "iterations: 1323578\ncpu: 0.5421746183451231 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/4",
            "value": 0.951790570328417,
            "unit": "us/iter",
            "extra": "iterations: 716780\ncpu: 0.9517426965038118 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/8",
            "value": 1.8285866945694829,
            "unit": "us/iter",
            "extra": "iterations: 388969\ncpu: 1.8285303353223583 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/16",
            "value": 3.632433478922174,
            "unit": "us/iter",
            "extra": "iterations: 195299\ncpu: 3.6321927864454056 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/32",
            "value": 6.934015150169371,
            "unit": "us/iter",
            "extra": "iterations: 101319\ncpu: 6.933671552226109 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/64",
            "value": 13.470050852699563,
            "unit": "us/iter",
            "extra": "iterations: 45268\ncpu: 13.46928474860824 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlBottom_TargetMiddle/128",
            "value": 29.273743195313315,
            "unit": "us/iter",
            "extra": "iterations: 25093\ncpu: 29.271978480054177 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/2",
            "value": 0.3907173958063395,
            "unit": "us/iter",
            "extra": "iterations: 1728704\ncpu: 0.3907134639591306 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/4",
            "value": 0.738337122884875,
            "unit": "us/iter",
            "extra": "iterations: 980503\ncpu: 0.7382625784928739 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/8",
            "value": 1.3817928492269207,
            "unit": "us/iter",
            "extra": "iterations: 485458\ncpu: 1.381704308096674 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/16",
            "value": 2.7373787558774314,
            "unit": "us/iter",
            "extra": "iterations: 253303\ncpu: 2.7369748877826217 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/32",
            "value": 5.192609109275775,
            "unit": "us/iter",
            "extra": "iterations: 129187\ncpu: 5.192285686640286 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/64",
            "value": 10.438153100571606,
            "unit": "us/iter",
            "extra": "iterations: 66649\ncpu: 10.437078860898069 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetMiddle/128",
            "value": 20.106839176829478,
            "unit": "us/iter",
            "extra": "iterations: 34112\ncpu: 20.10604438320811 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/2",
            "value": 0.242967051413636,
            "unit": "us/iter",
            "extra": "iterations: 2849925\ncpu: 0.24295378650315289 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/4",
            "value": 0.4068918990511724,
            "unit": "us/iter",
            "extra": "iterations: 1796950\ncpu: 0.40687994546314776 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/8",
            "value": 0.7331297111258184,
            "unit": "us/iter",
            "extra": "iterations: 859163\ncpu: 0.7331042409880271 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/16",
            "value": 1.3369338112771936,
            "unit": "us/iter",
            "extra": "iterations: 517913\ncpu: 1.3368262854958368 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/32",
            "value": 2.7729081502995134,
            "unit": "us/iter",
            "extra": "iterations: 258923\ncpu: 2.7727080908223387 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/64",
            "value": 5.532283469328653,
            "unit": "us/iter",
            "extra": "iterations: 117406\ncpu: 5.531781237756213 us\nthreads: 1"
          },
          {
            "name": "BM_MakeControlledQubitGateDD_ControlTop_TargetBottom/128",
            "value": 11.154757088517199,
            "unit": "us/iter",
            "extra": "iterations: 60203\ncpu: 11.154177715396239 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/2",
            "value": 0.5219686830048978,
            "unit": "us/iter",
            "extra": "iterations: 1385829\ncpu: 0.5219057755321933 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/4",
            "value": 1.2105896193373535,
            "unit": "us/iter",
            "extra": "iterations: 573894\ncpu: 1.21050007144175 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/8",
            "value": 2.6582100661443158,
            "unit": "us/iter",
            "extra": "iterations: 271981\ncpu: 2.6579527209621276 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/16",
            "value": 5.545208093120179,
            "unit": "us/iter",
            "extra": "iterations: 127491\ncpu: 5.545035602513134 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/32",
            "value": 11.864877295959673,
            "unit": "us/iter",
            "extra": "iterations: 55369\ncpu: 11.864355559970425 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/64",
            "value": 23.88439872447242,
            "unit": "us/iter",
            "extra": "iterations: 28694\ncpu: 23.882363839129937 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetTop/128",
            "value": 50.170854600000325,
            "unit": "us/iter",
            "extra": "iterations: 10000\ncpu: 50.16831880000012 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/2",
            "value": 0.5021914018262291,
            "unit": "us/iter",
            "extra": "iterations: 1375734\ncpu: 0.5021463422434856 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/4",
            "value": 0.9650227028905053,
            "unit": "us/iter",
            "extra": "iterations: 754089\ncpu: 0.9649720019785467 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/8",
            "value": 1.833506723335977,
            "unit": "us/iter",
            "extra": "iterations: 366336\ncpu: 1.833427086063077 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/16",
            "value": 3.749557307846374,
            "unit": "us/iter",
            "extra": "iterations: 184774\ncpu: 3.7494854795588233 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/32",
            "value": 7.544886231303794,
            "unit": "us/iter",
            "extra": "iterations: 92398\ncpu: 7.544196670923627 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/64",
            "value": 15.14008497058359,
            "unit": "us/iter",
            "extra": "iterations: 46063\ncpu: 15.13854234418086 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetMiddle/128",
            "value": 31.659490921138858,
            "unit": "us/iter",
            "extra": "iterations: 22635\ncpu: 31.656761740667125 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/2",
            "value": 0.21804392091618793,
            "unit": "us/iter",
            "extra": "iterations: 3394829\ncpu: 0.21658052791466184 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/4",
            "value": 0.3947008738776075,
            "unit": "us/iter",
            "extra": "iterations: 1813984\ncpu: 0.3946843356942524 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/8",
            "value": 0.7623808904045201,
            "unit": "us/iter",
            "extra": "iterations: 914326\ncpu: 0.7623128884008425 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/16",
            "value": 1.566798938511754,
            "unit": "us/iter",
            "extra": "iterations: 471602\ncpu: 1.5667343671146468 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/32",
            "value": 2.9887786846187154,
            "unit": "us/iter",
            "extra": "iterations: 230838\ncpu: 2.9884622679108013 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/64",
            "value": 6.193539412266373,
            "unit": "us/iter",
            "extra": "iterations: 113759\ncpu: 6.193358608989175 us\nthreads: 1"
          },
          {
            "name": "BM_MakeFullControlledToffoliDD_TargetBottom/128",
            "value": 13.58655659813152,
            "unit": "us/iter",
            "extra": "iterations: 48491\ncpu: 13.584794477325524 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/2",
            "value": 73.98932637704296,
            "unit": "us/iter",
            "extra": "iterations: 9967\ncpu: 73.98429246513454 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/4",
            "value": 74.86622321137828,
            "unit": "us/iter",
            "extra": "iterations: 9211\ncpu: 74.86391976984133 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/8",
            "value": 82.69235716769205,
            "unit": "us/iter",
            "extra": "iterations: 8629\ncpu: 82.68294993626088 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/16",
            "value": 95.02215015459085,
            "unit": "us/iter",
            "extra": "iterations: 7439\ncpu: 95.01275547788572 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/32",
            "value": 116.74349890590939,
            "unit": "us/iter",
            "extra": "iterations: 5941\ncpu: 116.7064990742292 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/64",
            "value": 168.76434117032258,
            "unit": "us/iter",
            "extra": "iterations: 3828\ncpu: 168.751991118075 us\nthreads: 1"
          },
          {
            "name": "BM_MakeSWAPDD/128",
            "value": 282.26251315257036,
            "unit": "us/iter",
            "extra": "iterations: 2471\ncpu: 282.23581626871714 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/2",
            "value": 70.00214216211126,
            "unit": "us/iter",
            "extra": "iterations: 10277\ncpu: 69.9980758003314 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/4",
            "value": 70.53779528180755,
            "unit": "us/iter",
            "extra": "iterations: 10131\ncpu: 70.53435189023801 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/8",
            "value": 70.18660481350268,
            "unit": "us/iter",
            "extra": "iterations: 9598\ncpu: 70.17616388831073 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/16",
            "value": 72.39991909053725,
            "unit": "us/iter",
            "extra": "iterations: 9764\ncpu: 72.39604506349954 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/32",
            "value": 76.29385430172374,
            "unit": "us/iter",
            "extra": "iterations: 9101\ncpu: 76.28812734864367 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/64",
            "value": 84.60525094683948,
            "unit": "us/iter",
            "extra": "iterations: 7129\ncpu: 84.60290980502302 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_X/128",
            "value": 97.81994790913062,
            "unit": "us/iter",
            "extra": "iterations: 6911\ncpu: 97.8166632904065 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/2",
            "value": 64.21267918025086,
            "unit": "us/iter",
            "extra": "iterations: 10735\ncpu: 64.20678192827224 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/4",
            "value": 69.89787643465316,
            "unit": "us/iter",
            "extra": "iterations: 10804\ncpu: 69.894592280636 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/8",
            "value": 69.73982760814087,
            "unit": "us/iter",
            "extra": "iterations: 9432\ncpu: 69.73445122985608 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/16",
            "value": 70.49170422104369,
            "unit": "us/iter",
            "extra": "iterations: 9808\ncpu: 70.48927824225082 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/32",
            "value": 77.54660847962992,
            "unit": "us/iter",
            "extra": "iterations: 9057\ncpu: 77.54355205918058 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/64",
            "value": 85.16233849452225,
            "unit": "us/iter",
            "extra": "iterations: 8396\ncpu: 85.15308122915688 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_H/128",
            "value": 98.82310067822188,
            "unit": "us/iter",
            "extra": "iterations: 6635\ncpu: 98.81988560663139 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/2",
            "value": 71.54667591611795,
            "unit": "us/iter",
            "extra": "iterations: 9442\ncpu: 71.53483732260139 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/4",
            "value": 70.73131377525173,
            "unit": "us/iter",
            "extra": "iterations: 9851\ncpu: 70.72529316820595 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/8",
            "value": 73.5417910907825,
            "unit": "us/iter",
            "extra": "iterations: 10057\ncpu: 73.54040936661042 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/16",
            "value": 74.01915875799357,
            "unit": "us/iter",
            "extra": "iterations: 9694\ncpu: 74.01124107695463 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/32",
            "value": 78.99606105820025,
            "unit": "us/iter",
            "extra": "iterations: 9450\ncpu: 78.92404359788321 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/64",
            "value": 84.13955347871409,
            "unit": "us/iter",
            "extra": "iterations: 7704\ncpu: 84.12875610072666 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_T/128",
            "value": 102.17753469555795,
            "unit": "us/iter",
            "extra": "iterations: 7292\ncpu: 102.17010244103137 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/2",
            "value": 70.03053982213585,
            "unit": "us/iter",
            "extra": "iterations: 10120\ncpu: 70.02756492094898 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/4",
            "value": 68.80687889850833,
            "unit": "us/iter",
            "extra": "iterations: 9587\ncpu: 68.7756304370501 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/8",
            "value": 71.09398749526419,
            "unit": "us/iter",
            "extra": "iterations: 10556\ncpu: 71.0900025577863 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/16",
            "value": 71.42222341095018,
            "unit": "us/iter",
            "extra": "iterations: 9534\ncpu: 71.41640780365101 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/32",
            "value": 73.30063018042655,
            "unit": "us/iter",
            "extra": "iterations: 9145\ncpu: 73.29669316566496 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/64",
            "value": 86.38600062806458,
            "unit": "us/iter",
            "extra": "iterations: 7961\ncpu: 86.3818936063312 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlTop_TargetBottom/128",
            "value": 101.1888092881042,
            "unit": "us/iter",
            "extra": "iterations: 6869\ncpu: 101.18135696607865 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/2",
            "value": 69.16262580581257,
            "unit": "us/iter",
            "extra": "iterations: 10083\ncpu: 69.15953228205885 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/4",
            "value": 70.86089059558064,
            "unit": "us/iter",
            "extra": "iterations: 10091\ncpu: 70.85054404915223 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/8",
            "value": 73.3055590697672,
            "unit": "us/iter",
            "extra": "iterations: 9675\ncpu: 73.30205064599512 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/16",
            "value": 75.42256427840356,
            "unit": "us/iter",
            "extra": "iterations: 9770\ncpu: 75.41854073694958 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/32",
            "value": 85.44115641369201,
            "unit": "us/iter",
            "extra": "iterations: 8209\ncpu: 85.43243233036888 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/64",
            "value": 98.55291722037835,
            "unit": "us/iter",
            "extra": "iterations: 7224\ncpu: 98.54899003322308 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_CX_ControlBottom_TargetTop/128",
            "value": 131.89690015128429,
            "unit": "us/iter",
            "extra": "iterations: 5288\ncpu: 131.88498884266238 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/2",
            "value": 70.33223716042036,
            "unit": "us/iter",
            "extra": "iterations: 10086\ncpu: 70.32563553440457 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/4",
            "value": 75.14237150990914,
            "unit": "us/iter",
            "extra": "iterations: 9133\ncpu: 75.13281353333987 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/8",
            "value": 92.76911486746201,
            "unit": "us/iter",
            "extra": "iterations: 7809\ncpu: 92.76355640927234 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/16",
            "value": 159.24059656242054,
            "unit": "us/iter",
            "extra": "iterations: 4189\ncpu: 159.23119360229163 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/32",
            "value": 428.4589599012956,
            "unit": "us/iter",
            "extra": "iterations: 1621\ncpu: 428.4473726095082 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/64",
            "value": 1466.7063131524212,
            "unit": "us/iter",
            "extra": "iterations: 479\ncpu: 1466.6662630480164 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_HadamardLayer/128",
            "value": 6016.706581196596,
            "unit": "us/iter",
            "extra": "iterations: 117\ncpu: 6015.952196581132 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/2",
            "value": 70.0425545823546,
            "unit": "us/iter",
            "extra": "iterations: 9362\ncpu: 70.0380193334747 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/4",
            "value": 72.81429648716824,
            "unit": "us/iter",
            "extra": "iterations: 9508\ncpu: 72.80632803954501 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/8",
            "value": 87.90252839770118,
            "unit": "us/iter",
            "extra": "iterations: 7483\ncpu: 87.89674555659428 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/16",
            "value": 144.37452413516183,
            "unit": "us/iter",
            "extra": "iterations: 4972\ncpu: 144.37212630732046 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/32",
            "value": 377.52640422076297,
            "unit": "us/iter",
            "extra": "iterations: 1848\ncpu: 377.50848214284986 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/64",
            "value": 1250.5081895307405,
            "unit": "us/iter",
            "extra": "iterations: 554\ncpu: 1250.429290613722 us\nthreads: 1"
          },
          {
            "name": "BM_MxV_GHZ/128",
            "value": 5017.071214875944,
            "unit": "us/iter",
            "extra": "iterations: 121\ncpu: 5016.285685950482 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/2",
            "value": 69.89451996311438,
            "unit": "us/iter",
            "extra": "iterations: 10845\ncpu: 69.89209165514087 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/4",
            "value": 68.29825569058487,
            "unit": "us/iter",
            "extra": "iterations: 10368\ncpu: 68.29037962962917 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/8",
            "value": 69.84859466760828,
            "unit": "us/iter",
            "extra": "iterations: 8514\ncpu: 69.8446147521723 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/16",
            "value": 71.26821528662482,
            "unit": "us/iter",
            "extra": "iterations: 10205\ncpu: 71.2656236158752 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/32",
            "value": 70.0892900471148,
            "unit": "us/iter",
            "extra": "iterations: 10188\ncpu: 70.08072762073026 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/64",
            "value": 69.51038541873518,
            "unit": "us/iter",
            "extra": "iterations: 10054\ncpu: 69.50665227770135 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_Bell/128",
            "value": 68.24222874866685,
            "unit": "us/iter",
            "extra": "iterations: 10317\ncpu: 68.23510458466714 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/2",
            "value": 69.77873688794298,
            "unit": "us/iter",
            "extra": "iterations: 10334\ncpu: 69.77400367718235 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/4",
            "value": 74.11763095982178,
            "unit": "us/iter",
            "extra": "iterations: 9606\ncpu: 74.11319643972497 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/8",
            "value": 90.29323022338816,
            "unit": "us/iter",
            "extra": "iterations: 7610\ncpu: 90.28571550591356 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/16",
            "value": 156.15318225315232,
            "unit": "us/iter",
            "extra": "iterations: 4598\ncpu: 156.1449354066988 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/32",
            "value": 399.42568106506553,
            "unit": "us/iter",
            "extra": "iterations: 1690\ncpu: 399.38057514792183 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/64",
            "value": 1396.536799212643,
            "unit": "us/iter",
            "extra": "iterations: 508\ncpu: 1396.5037952756038 us\nthreads: 1"
          },
          {
            "name": "BM_MxM_GHZ/128",
            "value": 5493.098663999717,
            "unit": "us/iter",
            "extra": "iterations: 125\ncpu: 5492.336879999812 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}