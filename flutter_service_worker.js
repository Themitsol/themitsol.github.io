'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6fde3b36894b34f2ad56804fa5e5cdcc",
"version.json": "bd341ba74d38c530da636604a427deda",
"index.html": "9772471cd2463d7e9f0a3fc34698ae53",
"/": "9772471cd2463d7e9f0a3fc34698ae53",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "866e7547ed54d3be4b8fab11f986770e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "acb7c9102b2098f023a4d3824269ed5a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76858bfccb016815b5d8257df072ea5f",
"assets/AssetManifest.json": "6d8cc78081718317ef35b1a5a8bc756c",
"assets/NOTICES": "f66268e346fc7e0e3eaeb05b697c9620",
"assets/FontManifest.json": "760cc3770462a4d4092771fcdf1361d4",
"assets/AssetManifest.bin.json": "dccb8bfd1caae69d743beb6d4e98af1c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "af5861e6ea793da548f4cc392422ecb4",
"assets/fonts/MaterialIcons-Regular.otf": "2059c702fe73e896b5fbf0f2b9c85b81",
"assets/assets/brand3.png": "6a4e9027e0d2ab58edae8ae06c0189cd",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/person_small.png": "6f780d058150543096d7bd3060db4ac4",
"assets/assets/brand2.png": "477c4da0c1872eb4d8f43014d69b739d",
"assets/assets/Unity.png": "8d5f6e695f6a5172fecc54868275a49c",
"assets/assets/Game.jpeg": "7b82e583ce89dd5be509c6e83e14d16d",
"assets/assets/Dashboard.jpg": "fd945659e123fa06c89735b836830898",
"assets/assets/brand1.png": "565460b19c5d7a1dbebb929df4c7d389",
"assets/assets/brand5.png": "7415bcfb12688cced48676100c87ff05",
"assets/assets/Castle.PNG": "49df1fa836276f3cb0220d21dbdc145e",
"assets/assets/brand4.png": "3c61986400bddfe38db19e2f4c478b7a",
"assets/assets/mobile.jpeg": "088c30d3bd46ad7c84d99fda336eeaae",
"assets/assets/brand6.png": "a0622d47f38bd5451ce88c0335cee03c",
"assets/assets/Flutter.png": "ce080284e67af33322a66ffc0dabec99",
"assets/assets/ecommerce.png": "fb7926d9c9f3b5d2208fd2d846419348",
"assets/assets/brand7.png": "700df40f37aa5620ae112e664a7c9505",
"assets/assets/usama2.png": "ee08c0a3c6334a9454ce58ca8d9f5bf0",
"assets/assets/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/Firebase.png": "3d6f4786eefd84178f1ab59398688ddf",
"assets/assets/Mindaven.png": "2df346a2ffc624303258c05ad34914a8",
"assets/assets/android.png": "3b3764e23ddc6b9b5bab17994127b996",
"assets/assets/person.png": "5b6ba176416812aa5448c6704d31caa0",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/Figma.png": "8f8f3795b0915bdf7d93cbe4b4c11d7a",
"assets/assets/game2.jpeg": "36163dd295bfd344d05921430c5df167",
"assets/assets/upwork.png": "fa8b257a5c58b2ea96137e951c9fded3",
"assets/assets/fiverr.png": "9375be6e5c9008e8984dcc55cfc190c9",
"assets/assets/Oop.png": "f2441f6530cdf1c798bcd9dac2566af7",
"assets/assets/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/Shwebos.PNG": "a4b855fb393bf79d565ac32808f016d4",
"assets/assets/Web3.PNG": "c19c44d375a4fc68d41fe10d3f7dfb8d",
"assets/assets/Grocery.png": "6e4b964554676659d5544b9768475ec0",
"assets/assets/Wordpress.png": "33f8c00b82b679085deea83e76d3f99b",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/logo.png": "acb7c9102b2098f023a4d3824269ed5a",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/linkedin.png": "be64999d7612f20503ba8a16d5d0f75f",
"assets/assets/React.png": "6b00b4d00ee919f897a942fca61576a2",
"assets/assets/room.jpeg": "969c642f581347257c20379e17312b4b",
"assets/assets/web.png": "216c27003c96dd18d13d7507a81bb4ba",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/ios.png": "673d9baede7feb0bf0b795ef78a8ec3e",
"assets/assets/b5.png": "c19f1cc140d35bd29bb3d4ad97368e6e",
"assets/assets/Log.png": "e127242dabfae74f7befb46c532c192f",
"assets/assets/b4.png": "68bee9f83cd22a69ec4915cce5f023cb",
"assets/assets/usama.png": "b5f1d0a59dc9fda9093fe46e6f0e50be",
"assets/assets/Devops.png": "47c20df99949383fc43011d57ebe4d5d",
"assets/assets/b6.png": "4efd088b2606c48141e52f8f1090ec7c",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/b7.png": "551ffa2f47c63f4f120c0ed071b510db",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/2.png": "e9fd55a4cb8aae875a862426a55d3d15",
"assets/assets/empowering.png": "7a4a7632965330b61f91f6031c682432",
"assets/assets/Dart.png": "065b8f7b3359c2e86046fb46db0e755e",
"assets/assets/3.png": "5153d2c1d32451dfc71403f2506a0db4",
"assets/assets/b2.png": "6ec1bdea9206a0a0f9ecec82ef6e6865",
"assets/assets/1.png": "2e17e87762ecf36b9a9cb1b8f5f584fe",
"assets/assets/b1.png": "f52b154afaf3b4a98ec83fc767fea397",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
