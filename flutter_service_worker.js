'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6273591860fd74f670c95963193e895d",
"version.json": "a29049add4ab295080411d36f0208290",
"index.html": "cfda998b2d3c5b35602b211ca8a9c06f",
"/": "cfda998b2d3c5b35602b211ca8a9c06f",
"main.dart.js": "e550fda7d01e0819b1094cca56764300",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e1ec3cda6f4293eb1d4d6c2e97967aa",
"assets/AssetManifest.json": "e46a2df9a9aa04733a33acbd4e4d50dc",
"assets/NOTICES": "804f691f76e4bc17640dcdf3fd2fee83",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "98ebbc57bc152e2e28075931ebb0bfe1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7304e7b5bca6b34583f8b66fb42205a3",
"assets/fonts/MaterialIcons-Regular.otf": "0f3e1a74a73a66901a4fc42d58810081",
"assets/assets/svg/google-logo.svg": "d677415d7c9c5baea125e867d6d78c2f",
"assets/assets/svg/apple-logo.svg": "00587615733dd4954be85d8bf79f1d6f",
"assets/assets/policies/pt-BR.md": "468880974dd88f072b6021a14c32222a",
"assets/assets/policies/zh-CN.md": "c3d4d0b0738a92be87c61358de8ffea9",
"assets/assets/policies/fr-FR.md": "8dc7737a6a0e2fedc02b552ab9ddedf4",
"assets/assets/policies/ja-JP.md": "cf04af1a1c201eeb4e1e9439befa5c1a",
"assets/assets/policies/en-US.md": "ec35d5aa72bdafb9e3c8ab6bd3ebe304",
"assets/assets/policies/es-ES.md": "518f05e4bb97f7645930b200fe044247",
"assets/assets/policies/hi-IN.md": "aee40600d4994f90a70473724e551452",
"assets/assets/policies/de-DE.md": "6af2b3ed1a6dc64873aee3db698af66c",
"assets/assets/policies/it-IT.md": "1443826aac06a5c71eafb2681fc9c926",
"assets/assets/policies/ru-RU.md": "89ace91b52be4336ae98e619f8818fab",
"assets/assets/policies/ar-AE.md": "cd96d7dfb4250a8f42c933d1200b9026",
"assets/assets/png/flags/tg.png": "74461052c69a847c6e12a30ee7cbf343",
"assets/assets/png/flags/me.png": "40152be87409f2061c234d90620723cd",
"assets/assets/png/flags/la.png": "55877a36286d1b56cdfa83dc82283d44",
"assets/assets/png/flags/mr.png": "6f8e10b511fb72e6dc18ab013b455082",
"assets/assets/png/flags/ni.png": "d6a844344b9008067b863a4f41ebcf16",
"assets/assets/png/flags/lv.png": "023165922a332ad4fa529229d086c1b7",
"assets/assets/png/flags/om.png": "2f8df0bec6110a60610147fc6bb4ab76",
"assets/assets/png/flags/af.png": "579db104fb5180751ea6d6318255fc61",
"assets/assets/png/flags/cy.png": "25210e3aa7f68c699d4fe4908ad2aadb",
"assets/assets/png/flags/bj.png": "c2a66906a774e3131ec2470ccabf13ac",
"assets/assets/png/flags/aq.png": "6b7a0cccbd52d1f0113b1bf9f72f6243",
"assets/assets/png/flags/cn.png": "860b276ea1a0e1c5f232b7c00443c509",
"assets/assets/png/flags/gb-sct.png": "af894f743ab6a1cfd01073351813981e",
"assets/assets/png/flags/co.png": "2ccac1937f6fa4475bc90dc07a93bc99",
"assets/assets/png/flags/cx.png": "9b8e3f52dc86246067a146b1301bada2",
"assets/assets/png/flags/ag.png": "c69ee03188db4033f046e1f8dc5fb79b",
"assets/assets/png/flags/ms.png": "793d8ee6bd8822c406cb757385ee4337",
"assets/assets/png/flags/md.png": "6574af02a5264a2e0307ba2a80b836f7",
"assets/assets/png/flags/zm.png": "d1735e22ab89e66a30f831568af78185",
"assets/assets/png/flags/vn.png": "2d26c85f583bdb5a37f0704c349ab5e8",
"assets/assets/png/flags/tf.png": "1ea889f9003315f890add4715a83b499",
"assets/assets/png/flags/td.png": "196a1eab2e6439c4894bbd36b8912024",
"assets/assets/png/flags/yt.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/lb.png": "1f0c77186a9e1e6c4c8506e40ee4daeb",
"assets/assets/png/flags/mf.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/lu.png": "d25f201a6f075b66872ff61d3536de90",
"assets/assets/png/flags/mq.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/cz.png": "123c5dc5f0e56c960f50b94526a916a1",
"assets/assets/png/flags/ae.png": "282571363a17384878b7e98fb3a35c6b",
"assets/assets/png/flags/cm.png": "60ac10a8ea13f635b18babbf2f658f82",
"assets/assets/png/flags/bi.png": "55dd79aa05ca0bf7a36641f3230cd19a",
"assets/assets/png/flags/ar.png": "962154ff5a41af87bfd37ac88ef6c3fa",
"assets/assets/png/flags/as.png": "30fff2286efa4f9c1f55688299fb885b",
"assets/assets/png/flags/bh.png": "7fee0f7adf2e86c51ee5c0307c4fbf0e",
"assets/assets/png/flags/cl.png": "8303a76c4e43c61a81ac30e59a33ddf8",
"assets/assets/png/flags/ad.png": "5bedc8e2e08e29329204a3fc32d8ea07",
"assets/assets/png/flags/mp.png": "8c1c2e4a6deea119c626496453ca777b",
"assets/assets/png/flags/lt.png": "9ccc701b86f20881cae092cc78a260c5",
"assets/assets/png/flags/mg.png": "28a2468c496e65bba30c74dfc9f2356d",
"assets/assets/png/flags/lc.png": "44b298a8117f9664cc9615cee60fce7d",
"assets/assets/png/flags/tr.png": "d18541cf4704b0dde9c4b68a58630744",
"assets/assets/png/flags/ua.png": "60e319d0b06596855da3c5264eabdf46",
"assets/assets/png/flags/tv.png": "7f584d8e7d562702242d55c7059323dd",
"assets/assets/png/flags/vi.png": "fd18669807e0a2baa0b4f70ca77a0177",
"assets/assets/png/flags/mt.png": "784db4d0665aac21d986fc76742688e0",
"assets/assets/png/flags/no.png": "79d00c90e799e80b19ffd252b174dde0",
"assets/assets/png/flags/mc.png": "60c884051700b7bf226617b317faf42b",
"assets/assets/png/flags/ch.png": "30b34d54a50ada215d83daad9eff14a8",
"assets/assets/png/flags/bl.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/aw.png": "bb409c8a6def60af0841734d514ba8ff",
"assets/assets/png/flags/bz.png": "50783837583ba69d986b90e6ba32b3d2",
"assets/assets/png/flags/bm.png": "cc659569f88c4fc040be439f962ed8b1",
"assets/assets/png/flags/ci.png": "2df36768d5451e70fef805ba6ece7406",
"assets/assets/png/flags/mu.png": "fb6b051fad61f150160619af8be359b6",
"assets/assets/png/flags/us.png": "a2080b2d193dbbd3cb34b32ad919da62",
"assets/assets/png/flags/tw.png": "48ff7c2867c6ddf731752a883bb098f2",
"assets/assets/png/flags/ye.png": "c18b7080cfb7eeb83ce2e1e20525b1a7",
"assets/assets/png/flags/mw.png": "1318b7c392a100c355d59f3f546dece6",
"assets/assets/png/flags/nl.png": "7cadf7011fb252216e71b93ad0d14e62",
"assets/assets/png/flags/ls.png": "6087c1051c2b843c4384ed0a97553808",
"assets/assets/png/flags/bo.png": "b3a3b5d9ce8df7df649cb32bfd25c560",
"assets/assets/png/flags/at.png": "e75b31cfa5cd8a50371b2944e0fad3c9",
"assets/assets/png/flags/ck.png": "f42cfd517e713b8c6b2b9dc292c29026",
"assets/assets/png/flags/by.png": "8e058eae0cd3a9fb49949b09da17d04e",
"assets/assets/png/flags/au.png": "5347b41102bfafe4c1355d6a937da953",
"assets/assets/png/flags/bn.png": "91e1d83c4c607dadfa4451e0625a33cb",
"assets/assets/png/flags/ma.png": "8c344f4d0b57b52583e63ffc22e3168b",
"assets/assets/png/flags/nz.png": "c583b4a24364beb9ebaaff4d9a07289a",
"assets/assets/png/flags/lr.png": "0d43adf380161caea79aa1c5835bcef8",
"assets/assets/png/flags/mv.png": "c95ac006e8587c593a80407398217f9a",
"assets/assets/png/flags/tc.png": "4704673d8d98ed95702e7d7d37f1e25e",
"assets/assets/png/flags/ug.png": "a5b479c8d5177a02e0fb328d36fed123",
"assets/assets/png/flags/tt.png": "bf3c5fdc2cd2fc3a5687d34dad32e7cf",
"assets/assets/png/flags/pl.png": "71dc14339c063733b5dcc0818d020161",
"assets/assets/png/flags/rs.png": "f976c7245e61cbf1e5983bdaf15187fd",
"assets/assets/png/flags/in.png": "6e20ae599f9a2df82f857666ee4065c2",
"assets/assets/png/flags/ge.png": "0ca0e32cafbac1e360f168e27a58f206",
"assets/assets/png/flags/gr.png": "95f678f904c54f80f83b138dc4c9cc4d",
"assets/assets/png/flags/gs.png": "ef6cfe4992ab72174feb8a24e6304a95",
"assets/assets/png/flags/gd.png": "dd7bca7eeb6a6a79a703bad38bf45893",
"assets/assets/png/flags/io.png": "4ecd4957989a44f043256e05d547b58d",
"assets/assets/png/flags/hk.png": "894715985bf64cb712760a961fd279de",
"assets/assets/png/flags/kp.png": "ebda7063709544484e6df3e086c684cc",
"assets/assets/png/flags/gb-nir.png": "f2ed3a9b82f70d34d8b5112c4ddec3d0",
"assets/assets/png/flags/kg.png": "05aa8a79aedc299f7fd61aa1d7da2499",
"assets/assets/png/flags/pm.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/sv.png": "7bfb05370a8d063634be3abafa356b5b",
"assets/assets/png/flags/re.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/sa.png": "c341975dc48be0f86d12074b52c97397",
"assets/assets/png/flags/sc.png": "3b007330a643bbc719d9d5698cf130e0",
"assets/assets/png/flags/st.png": "69904f6dc1b6d23bdb5758871485a037",
"assets/assets/png/flags/ke.png": "5f14e9fd30eef943ad883ed3c6a9a997",
"assets/assets/png/flags/im.png": "9ae3a6fc1761b9184a15dc89d7046f25",
"assets/assets/png/flags/kr.png": "e6db3551a107fc7341729365659de1e5",
"assets/assets/png/flags/gf.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/dj.png": "3ba804bafa7397316ec8ac9c0b47b584",
"assets/assets/png/flags/gq.png": "4c47217980da6d80af7022099433df07",
"assets/assets/png/flags/gp.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/dk.png": "aaf7c414e30901386d30d6f6e80b7fa7",
"assets/assets/png/flags/gg.png": "74d9c87998ee9eff058d4b2892912363",
"assets/assets/png/flags/il.png": "e343841a0c95f5d87ba2c75014c03169",
"assets/assets/png/flags/pn.png": "d4962fcc4d707d7988f458eac1908db1",
"assets/assets/png/flags/sb.png": "7aad66cae04dc409739073000ec4c185",
"assets/assets/png/flags/py.png": "fa912b4410a040d078367195efb21e3f",
"assets/assets/png/flags/ru.png": "bb82bb216b46888b29f5f1bff7845297",
"assets/assets/png/flags/kw.png": "6b7c7c0c10fefc4a3a2814b522e6f0f1",
"assets/assets/png/flags/do.png": "152febe6831d451789a6b3d96ae4f3c9",
"assets/assets/png/flags/gt.png": "50c7ce75611caf4ca01360f257b9f04b",
"assets/assets/png/flags/gb.png": "f2ed3a9b82f70d34d8b5112c4ddec3d0",
"assets/assets/png/flags/gu.png": "7626db24fad60160bb19921a4336d127",
"assets/assets/png/flags/je.png": "b15d7208a14a54fcbd999e83767b305c",
"assets/assets/png/flags/hm.png": "5347b41102bfafe4c1355d6a937da953",
"assets/assets/png/flags/sg.png": "7f6a73b9c27b028863a912f84df6ef61",
"assets/assets/png/flags/pk.png": "984dda73560d68f45e92bc5a2cea6cfb",
"assets/assets/png/flags/sr.png": "639dabac77db7cdc057b68d81adc7eef",
"assets/assets/png/flags/se.png": "fb152dd232d22eb2c1c8b6598f02b11b",
"assets/assets/png/flags/jp.png": "82d69aa8d101ca493580ac95256c4318",
"assets/assets/png/flags/gw.png": "2207a60c30b0bff3035f68c95565538d",
"assets/assets/png/flags/eh.png": "a4e853435a09109e3415d51d340896ee",
"assets/assets/png/flags/dz.png": "a0fd447e2ca9c9d9602881dbbf7e2aa1",
"assets/assets/png/flags/ga.png": "0ff1d8cfed30d800337c3d8c77b49505",
"assets/assets/png/flags/fr.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/dm.png": "6b06e835cf2c3ca983a4fea4cb4ad737",
"assets/assets/png/flags/hn.png": "81a79f4fdf3dbe27e836edd1cd7ad631",
"assets/assets/png/flags/sd.png": "4e75d16a8c056e9d95ebe37f9ffba23e",
"assets/assets/png/flags/rw.png": "489fab47108b9c67bf33298b6526ead3",
"assets/assets/png/flags/ph.png": "4d97a6fb99cda449ea4658e155620ec9",
"assets/assets/png/flags/ss.png": "2400f4b85ddf82abdc62cbef74690187",
"assets/assets/png/flags/qa.png": "03b27e79c7fa97dac578d21604a53cba",
"assets/assets/png/flags/pe.png": "64341c41d83316b6b37a3189878d0aec",
"assets/assets/png/flags/pr.png": "dc094c2392f076c80317b38dee0cbfa2",
"assets/assets/png/flags/si.png": "e8fe8fa7194fd490d5450fc91939f60f",
"assets/assets/png/flags/ht.png": "691e83b74b409547728e25f5195e577c",
"assets/assets/png/flags/es.png": "c8559445559e7161a5a6db355ac8510d",
"assets/assets/png/flags/gl.png": "bcb1136b6a1de33f7d1575c20b97616b",
"assets/assets/png/flags/gm.png": "c435307d4b8e9958b24e76a62a05b82e",
"assets/assets/png/flags/er.png": "6fb3d60ca9736fcf4e6899cfa4995b63",
"assets/assets/png/flags/fi.png": "4d018fe7faa4d00afad1aad1dfd1cdff",
"assets/assets/png/flags/ee.png": "7b882f69d9d76b3165f16077e8442771",
"assets/assets/png/flags/kn.png": "27df2ab57adaa4079f9bcc71768b2982",
"assets/assets/png/flags/hu.png": "717612fed5f1c7f5495745876438c970",
"assets/assets/png/flags/iq.png": "6ee6a2bebf7630388411ed388315b6ea",
"assets/assets/png/flags/ky.png": "f1dac91f4412d25e5f1ea8200021bb60",
"assets/assets/png/flags/sh.png": "f2ed3a9b82f70d34d8b5112c4ddec3d0",
"assets/assets/png/flags/ps.png": "fee6eccb91f1538b6563048d436d8807",
"assets/assets/png/flags/pf.png": "1aabbf6f2fd89b337f8bfbf085e8ed19",
"assets/assets/png/flags/sj.png": "79d00c90e799e80b19ffd252b174dde0",
"assets/assets/png/flags/id.png": "18db2184beb1a2e860afc18456b69e45",
"assets/assets/png/flags/is.png": "e1ee8b829455678fb6cf2a6a9108da06",
"assets/assets/png/flags/eg.png": "ea312f1c8a60d6d75b34dc30e351e4ec",
"assets/assets/png/flags/fk.png": "b70f66b1af48a79815bb6a81640e241d",
"assets/assets/png/flags/fj.png": "cb54b7407725989ca3b42a0276f1f8b1",
"assets/assets/png/flags/gn.png": "8598577fcfef24d76bcfa61f5d5eeef7",
"assets/assets/png/flags/gy.png": "d3d0c23c6862b60d3321f49384f5aeb5",
"assets/assets/png/flags/ir.png": "b9e5ff5483794e47828c73f4b72a5da6",
"assets/assets/png/flags/km.png": "c820f6261008e79f3cbc61f53493bd52",
"assets/assets/png/flags/ie.png": "8e9b4e1622396ece22b65c2ddde9a30a",
"assets/assets/png/flags/kz.png": "b04a4ae85283287b249b9954ec8e5a7a",
"assets/assets/png/flags/ro.png": "cfabe0d63e7932077b993055fdc2cd1d",
"assets/assets/png/flags/sk.png": "e3c409a6e8d20bc0eb2565ed582f8184",
"assets/assets/png/flags/pg.png": "d83fdf03072545dc1d1ea135121bb4bf",
"assets/assets/png/flags/pt.png": "545cc5cdb970d88aea843b21ebbc4af3",
"assets/assets/png/flags/so.png": "40dc331a7dbf74686803f46a4b6fa4be",
"assets/assets/png/flags/sx.png": "322108edc0584556fbc2846a790c07d8",
"assets/assets/png/flags/hr.png": "c17b969fc38f98cc7d417c829378d80c",
"assets/assets/png/flags/ki.png": "dc2dcdc9882e44f2d757a16664fe244a",
"assets/assets/png/flags/jm.png": "fc080413030627c1b47dfe3b4efb5b30",
"assets/assets/png/flags/eu.png": "dc9a1f3ff8e2c92b8ecaef94b9f9f337",
"assets/assets/png/flags/ec.png": "c40c8877ea895a4a697bf115d98fc6f2",
"assets/assets/png/flags/et.png": "99a9367d501d57d14fb58f4a3cd356d0",
"assets/assets/png/flags/fo.png": "d40bc6a813628ac279fd90eb5927395f",
"assets/assets/png/flags/kh.png": "6d1db8ead494b30cc2fac98b12457f69",
"assets/assets/png/flags/sy.png": "575fdd3a9320f47c316b695f59db5cec",
"assets/assets/png/flags/sn.png": "39ac982f90af4f3cffed56717d1ef929",
"assets/assets/png/flags/pw.png": "c623e317d723088fc9d72f2b57164821",
"assets/assets/png/flags/sl.png": "ceb186674dc593e061bef9c5119bd117",
"assets/assets/png/flags/gb-eng.png": "efa028a8a47b6c06618a58995f79ae41",
"assets/assets/png/flags/fm.png": "92a83e32793994220ad367d86ab219e6",
"assets/assets/png/flags/gi.png": "b89bce4d96e8893a5025175027324fe2",
"assets/assets/png/flags/de.png": "797064ed8e2e2934f869a2cb901f6931",
"assets/assets/png/flags/gh.png": "43c609c3e9c70c22df3f8854cf53a523",
"assets/assets/png/flags/jo.png": "5aa2c89f9789464dc168b89184d4097f",
"assets/assets/png/flags/it.png": "aa924bc550555f67db6c8c885ce8fed5",
"assets/assets/png/flags/pa.png": "dc08793ac9e66a40929660ff0a003c53",
"assets/assets/png/flags/sz.png": "4ba76aa67afdf8b318961ce69b72984a",
"assets/assets/png/flags/sm.png": "f000f9b477987f268d6e8f038813ca37",
"assets/assets/png/flags/tn.png": "7e03eb31c1daf949de6ba4801cd7eb20",
"assets/assets/png/flags/ml.png": "5be76a96a2f6b8eb221d5dec830275bf",
"assets/assets/png/flags/cg.png": "e7293c5271c7bc5b94d0506238373be7",
"assets/assets/png/flags/ax.png": "bef7132898cd74712efbf0e84ba63105",
"assets/assets/png/flags/ao.png": "cecee9d049b297470e92520cb2babdeb",
"assets/assets/png/flags/bt.png": "5305595a5d32ec303e290a0a649f4455",
"assets/assets/png/flags/bb.png": "757d3c104c2b291b65eeaea9f041595e",
"assets/assets/png/flags/cf.png": "06238e9b9110e02f8a952ac2b2dae0af",
"assets/assets/png/flags/mm.png": "990eb8d064798454998ae2530dd7d41b",
"assets/assets/png/flags/li.png": "b1f45f82b3103e12cee75e5a57c5903d",
"assets/assets/png/flags/na.png": "5f5121b358488a56e900b3112086197b",
"assets/assets/png/flags/mz.png": "b286f66c74d346a7d80669af8537bad6",
"assets/assets/png/flags/to.png": "fb724e7676d272724eecb8d3d0435d33",
"assets/assets/png/flags/vg.png": "d2850d443bbe8c267aab18e03edde93d",
"assets/assets/png/flags/ve.png": "e22933042ef4628fdf0cc8064071a37f",
"assets/assets/png/flags/tz.png": "46c234b7da52faae7eb4c9407ac086fc",
"assets/assets/png/flags/tm.png": "e2312929d40903f55cf4ab37021d4d97",
"assets/assets/png/flags/mx.png": "6b51334b3515a05369a2de2d9f696b61",
"assets/assets/png/flags/nc.png": "8d19c94b101b18428bd2730c881a479b",
"assets/assets/png/flags/mo.png": "7db41cb6ed56807f566e20de936974bf",
"assets/assets/png/flags/lk.png": "867ccc141d3043962243babc688bfe1f",
"assets/assets/png/flags/cd.png": "86168bee97da7da542d014000723a649",
"assets/assets/png/flags/al.png": "a98e6d9171ff7f6be98307c1a458ec43",
"assets/assets/png/flags/bw.png": "280e99f116d78effe1967a90541475e3",
"assets/assets/png/flags/cr.png": "f0719e721396143ea588999a09408bc0",
"assets/assets/png/flags/bv.png": "79d00c90e799e80b19ffd252b174dde0",
"assets/assets/png/flags/am.png": "7f9af56f566b3db6c67e50a80be7033e",
"assets/assets/png/flags/az.png": "8c9526fa30b98542c2370c769352dfa2",
"assets/assets/png/flags/ba.png": "68e7e577add1f4bfcdf47bf8b8b50505",
"assets/assets/png/flags/mn.png": "6350a8f021b90c82ae8e313411d83142",
"assets/assets/png/flags/nu.png": "733034b2b6c8d1f50c3ea00fdb54b789",
"assets/assets/png/flags/my.png": "5c2e1ac32a47f2872066f037b223be52",
"assets/assets/png/flags/tl.png": "d5d9f2460841f47f5cc9d8f32825d610",
"assets/assets/png/flags/ws.png": "25deebfc1afd5d77bad3f326572b4e96",
"assets/assets/png/flags/th.png": "78a13f40a0c66c61cbd31a7801e119dc",
"assets/assets/png/flags/xk.png": "bc78afa8f6de8b1e93c887fd854e4141",
"assets/assets/png/flags/nf.png": "5e00ffcdb356ac11ab369b6eaffa9eba",
"assets/assets/png/flags/ly.png": "926bd702ca0a1c9ad8e98ed4089fa88f",
"assets/assets/png/flags/ai.png": "8c7f7bace5e5ef2047fb04b5e785fc2e",
"assets/assets/png/flags/br.png": "551227a41721cffe3d94465785dd8dcf",
"assets/assets/png/flags/cv.png": "3bced6038fac4d2c73a1bf284c91c10d",
"assets/assets/png/flags/be.png": "46a7cc1d2708ca99131d89ccfad268f1",
"assets/assets/png/flags/ca.png": "078069db829e1d9c4b6c8a57ad32f5d9",
"assets/assets/png/flags/bd.png": "0018bca5530dfd81bbc1a1ac58986a4c",
"assets/assets/png/flags/cw.png": "862ef9ab1066a7fa3827d8026a4f0bf3",
"assets/assets/png/flags/bs.png": "68c5e08a623daa505865cd3a26dd7eb6",
"assets/assets/png/flags/ng.png": "e4b6ae0e9482538fc7d29edc6775e6b5",
"assets/assets/png/flags/mk.png": "444b84d146fefad4baa8417116deaeda",
"assets/assets/png/flags/np.png": "259d36721cf1ffcd018287deed56681d",
"assets/assets/png/flags/va.png": "487addb0a1edd4a30c17e33cc7117098",
"assets/assets/png/flags/uz.png": "9f48f57e7d1e164beac44afc4aeeeb24",
"assets/assets/png/flags/um.png": "a2080b2d193dbbd3cb34b32ad919da62",
"assets/assets/png/flags/tk.png": "137651e956ac755679acaa9fed86f466",
"assets/assets/png/flags/vc.png": "5d57a1f1e1bcc97b3a135dee9f7289e3",
"assets/assets/png/flags/zw.png": "85e9277e10d53a78a39f0b4bc509cede",
"assets/assets/png/flags/nr.png": "aa7da9d91ea5a368f4ea8a88a00bee72",
"assets/assets/png/flags/ne.png": "53ad76e8daddb242ea2081336418d767",
"assets/assets/png/flags/cu.png": "1dbc9ba0498d4250fb101561b29c4a98",
"assets/assets/png/flags/bq.png": "7cadf7011fb252216e71b93ad0d14e62",
"assets/assets/png/flags/bf.png": "79cac524761cf8e112b0334280014bde",
"assets/assets/png/flags/bg.png": "a4e511af79e0d080b1870e6972390f9b",
"assets/assets/png/flags/cc.png": "40826e8cd61a066257dfbbadb5752060",
"assets/assets/png/flags/gb-wls.png": "a75a1026c5a7e7c12287c9a8dd9fa5df",
"assets/assets/png/flags/mh.png": "4002b6ca26be1a19b597102d756b1401",
"assets/assets/png/flags/za.png": "22dd71869885b962ac251edd6399b21a",
"assets/assets/png/flags/uy.png": "acaca268f280f1a89b8d31f3754463d7",
"assets/assets/png/flags/wf.png": "dc1db0f7301719879a2c9c59e6ae4f29",
"assets/assets/png/flags/vu.png": "2a53e0aa1090046db2bfc476470e0bfe",
"assets/assets/png/flags/tj.png": "43528cd478b04e487a4fcdf86ed208cb",
"assets/assets/png/gideoes-logo.png": "86d8a343b224db2054266432f90d458c",
"assets/assets/png/gideoes-white-logo.png": "6b977220783482696957060d7009b040",
"assets/assets/translations/it-IT.json": "129827eeaa0cbf68da5688f367290f22",
"assets/assets/translations/es-ES.json": "a681856d6561f9c68456765d821eea54",
"assets/assets/translations/ja-JP.json": "1db94e10282dbad0d06deee2232ebb2e",
"assets/assets/translations/zh-CN.json": "9f7402063b796d06ef60103c6dbbac8f",
"assets/assets/translations/ar-AE.json": "10306b1634422f7c5794d77ab182c7c3",
"assets/assets/translations/pt-BR.json": "00fc6e0b2498adf8a592e96cabd4cfac",
"assets/assets/translations/de-DE.json": "46f431125d9427e2b6b421e15a2ca7ff",
"assets/assets/translations/fr-FR.json": "e3cdce0ff7b2bfd81a09f3e13ed8f7f7",
"assets/assets/translations/ru-RU.json": "232ce24afe2cfb08f9ef6d29b69a85d7",
"assets/assets/translations/en-US.json": "58ca81ef248e61b40181fe08cea3b271",
"assets/assets/translations/hi-IN.json": "2ce4d6b77748ebe52c44f5159d5be486",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
