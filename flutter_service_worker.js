'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "757c0f1253ef8f1a3b934bb35407e919",
".git/config": "56e65b888d756507f6aca0f864140448",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6ecd5f944e02e252b8fb8fc34e6f109c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e40b8bebd71bb6e0e02bd81ab4b56dce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bffd5f10d7e3fe362960cab25139d75d",
".git/logs/refs/heads/master": "bffd5f10d7e3fe362960cab25139d75d",
".git/logs/refs/remotes/origin/master": "e10190caf7dea2d54f87849b7f8812e5",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/9b018810ac7f63b51022c6b52fe27a5dd88760": "d4bd18ad9aa171f824e202f693b4f07f",
".git/objects/07/f255cc1c5241edfa606d7e1c856db43624f106": "58272f2d99b39d4b8509fe3b977777eb",
".git/objects/0d/fd91f8100577c740c07490119b8e596d90cdb6": "57ed86c651b51ce2c90d266befee9b4e",
".git/objects/19/132a596526538f5e62f89134e4e38ae2950439": "8237feccd479f0c0988ad91047a8e76b",
".git/objects/1a/17e91f711733fbfd5a7d320d6fd99904b69a25": "6a1203c4db4cfee0b307338e29020e22",
".git/objects/1b/14d32473b0f48c14689feea8b165adfdae48a6": "2722107bd6c4c851b66efbc4fc93f8f0",
".git/objects/1e/b8e57aa5bda4491b2b267fb587ced653cca070": "52a27cec39c2fe25a62e5db81811b381",
".git/objects/20/b146f3c4f807dafe6aa0283a92568ad558b4b5": "a25d9392c9a391433899854b1fd49c02",
".git/objects/2b/06edcc323a87ad271fa0675446cea8b37a250b": "1e8eb5a89e9f4946ec7ef772b8a99fc3",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/d5200d5f5ca2bd55c052410d834ef94c9ecde8": "a3b9f8861da3119278007a595ec86a4a",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/241df1da6dea8e833381e3e08fc1912359cb4c": "d49c688348f74f6d3e2536068c1d6b00",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/0ac2d2a2442d105a26c0e17c8bc78ca09ee5f7": "9989f5a30ab0723fbc8a10aed0bb5691",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/45/7654949cf4394cd655871f5043fc422d24e491": "4ef75b6d09e73b55c8f44de6a268dbad",
".git/objects/46/9665f8157b0595d12a2c7c5b9cbe6667d47521": "e8359d88551a3ff38f2db3f4c6b10198",
".git/objects/4b/4c46bfb48fa07738ffb8972e0f78ccdfae6b79": "e4631fed2dcbab90e6746507cd5229a9",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/51/6d888ad5220383549619a5477852f1117eb36a": "a00e7b2c027a50a736437d0c4632329b",
".git/objects/53/11c8a316fd863fcd1d8889f292b7ad4c10916a": "d4f16e58d6af5137abd367e68c411077",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/61/6bb095ad9883b6426664d8721f6cc7dbd82053": "9269fba6ba297c1dc9192a2724af767c",
".git/objects/69/97ed1341573a936952ca971a264906766eea51": "53ac5d39063f07611559fa19a6099f43",
".git/objects/6c/f639eb7d723c4b9408ab93aaa3149681e9df3c": "4e0ce756c5bbc64f6157fe0bc63118d2",
".git/objects/73/ec7bca73f5abe66c83d62e958cf3e6602b3931": "688df44b7257403968a0a35beca744d4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/dd14c4f8915296826ea424526f7b6c373fd70b": "9088074dd3016b62d33ae139ef4e0ede",
".git/objects/8e/ac55a6189e7768996de8a83543d18b69636a95": "83b1a947e245eaa5b91ebf9852be0b31",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9f/ac2d8343de2ae73eedaaf6d82a98a8d4d4524f": "6cc1284eb5592a01366a0dcaf572b45b",
".git/objects/a0/ef172ac07ea25bbdc0b76c16e893492219b769": "487125409c41320ca669c01a8a266f74",
".git/objects/a1/0e1dbaaddedbfc875e835ea9816e57187f188a": "2e22b2c845198f800c2943cef04fadcf",
".git/objects/a2/e47fd980433a34379e818cf90f6fb5aa6c6a02": "8e372b63545d96f779128a50cf2ba9ab",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b4/4b0f3c14ff7c67bb7f0daa158efb8e46d52627": "1ee1bcdbfc82894a84dd518fc807ec5a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/cf/a8e4c713a68c36e1012027a045cb680d3e02fa": "3da140fe4e0252aa9a3aaf6de3aa628f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/19caebbf8e96197cc771c36b526549034f02ad": "41d43ee7e2b091131ecaa596c58f101c",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/0a2231805bb3d38440eec4e33ec53f6026ac97": "1828bac87f886bccb3e965215d33c347",
".git/objects/db/9cc55e9277d8d8005d19c7e1b1991921c0ed7c": "665e551f3738f4634cd15c6e24d6d574",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/ORIG_HEAD": "c9fe9ca9f56e02c0443ba239e5d660e2",
".git/refs/heads/master": "c9fe9ca9f56e02c0443ba239e5d660e2",
".git/refs/remotes/origin/master": "c9fe9ca9f56e02c0443ba239e5d660e2",
"assets/AssetManifest.bin": "80c8bb9d01078000f2512757317014ca",
"assets/AssetManifest.json": "b53c4d8e633b2924ff7b8dd93740081a",
"assets/assets/fonts/NotoSansKR-Black.ttf": "15e2e9d1b8e380eafc51a606a7e671d6",
"assets/assets/fonts/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/assets/fonts/NotoSansKR-ExtraBold.ttf": "db13746e4342665b3fb5571c353f8c46",
"assets/assets/fonts/NotoSansKR-ExtraLight.ttf": "33e4ba0602de9a23075c13d344127395",
"assets/assets/fonts/NotoSansKR-Light.ttf": "e61301e66b058697c6031c39edb7c0d2",
"assets/assets/fonts/NotoSansKR-Medium.ttf": "4dee649c78a37741c4f5d9fdb69ea434",
"assets/assets/fonts/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/assets/fonts/NotoSansKR-SemiBold.ttf": "90c2026b48704ad2560e68249b15b7f5",
"assets/assets/fonts/NotoSansKR-Thin.ttf": "b59719d81a60f284b7c372c7891689fd",
"assets/assets/images/0.jpg": "6ee093fb835f42d056231b2c6114317d",
"assets/assets/images/ujLogo.jpg": "6ee093fb835f42d056231b2c6114317d",
"assets/FontManifest.json": "7abc41f99410886e4f335c927fbf78f9",
"assets/fonts/MaterialIcons-Regular.otf": "1c773f9906139b93291ac51e1eb8b8b0",
"assets/NOTICES": "169867a421127575b0ccc03facad7e05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "72249d2b09fa7cc4cda57e01655b73f0",
"/": "72249d2b09fa7cc4cda57e01655b73f0",
"main.dart.js": "50aca38a61125a56dde9cefa4aad0cc6",
"manifest.json": "a19ba40fc013b4bafb8c0582d528dc4e",
"version.json": "ae76c5d9d22b82793703cd63c584ca45"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
