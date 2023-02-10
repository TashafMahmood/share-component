'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1c2704e27a728274b018a0bbbdcb3a13",
"assets/assets/fonts/AvenirLTPro-Black.otf": "d5b402a76c1f3d5037eae506f8af27e1",
"assets/assets/fonts/AvenirLTPro-Heavy.otf": "31301b64b0e8f744a184acd8f3769cc1",
"assets/assets/fonts/AvenirLTPro-Light.otf": "20789885c842a7940aaa1fd0b4f7428a",
"assets/assets/fonts/AvenirLTPro-Medium.otf": "c4e0137cdf6a556d6021cd64e2956152",
"assets/assets/fonts/FuturaBoldFont.ttf": "4c62644b159530ff6214336f8cfb1d32",
"assets/assets/fonts/FuturaHeavyFont.ttf": "3ea9695ee3af8a5e17413f22249f361a",
"assets/assets/fonts/FuturaLightFont.ttf": "e1da9c1e1974d9f2a9095ce4ae7af771",
"assets/assets/fonts/FuturaMedium.ttf": "ee64fb9d3f1ba2333e1b489283925bce",
"assets/assets/fonts/FuturaPTLight.otf": "a15258a71bcff8eb791ad54f27144d48",
"assets/assets/fonts/FuturaPTMedium.otf": "bd99f124d37cfd9caecec4fe24094334",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/assets/fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/assets/fonts/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/assets/fonts/WorkSans-Bold.ttf": "c3c52b1b8ae0ad984a5fa87f99689b44",
"assets/assets/fonts/WorkSans-ExtraBold.ttf": "d07d1e39f8cafab2f569cce24aecc324",
"assets/assets/fonts/WorkSans-Light.ttf": "b1023033e286ef21672fe03bb922456c",
"assets/assets/fonts/WorkSans-Medium.ttf": "afdad9a25d460b4d08f68cab6a4174d0",
"assets/assets/fonts/WorkSans-Regular.ttf": "755318e35560b555cc25ac01888be02a",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "46250df8f22a63083a8f7db59efdb2cd",
"assets/assets/images/appLogo.png": "53d1d3f88a958317d408fd56322afd66",
"assets/assets/images/call.png": "ca8029564b0cf8757fadede59d266260",
"assets/assets/images/camera.png": "6abf9b0338d0ff968a71fa1781339b8e",
"assets/assets/images/celebrate.png": "a1063c620f568583fefcbbfc132d090e",
"assets/assets/images/demoAward1.png": "b74a6404702b39309e4d8e3e26f289d1",
"assets/assets/images/demoAward2.png": "672a60ae847807df279b262db4cfea10",
"assets/assets/images/demoAward3.png": "bea4e0bf76fd7daaafd20e5941e91335",
"assets/assets/images/demoAward4.png": "780ded8d8ddbe7f626a19cd6ecbca188",
"assets/assets/images/demoAward5.png": "6f7a2e60bc25389838d7d893403b99da",
"assets/assets/images/demoAwards6.png": "fb21c4e28479d5dbd9ba17edf463978e",
"assets/assets/images/demoNetwork1.png": "41464bc9605c3e12eddedc79171bc22e",
"assets/assets/images/demoNetwork2.png": "4a534053eed29beb17eaa7afb64faf52",
"assets/assets/images/demoNetwork3.png": "418423dcc01c25369d12e3022cdfdbd9",
"assets/assets/images/demoNetwork4.png": "c3faea232e3dc99b25ba19469d5b2dd5",
"assets/assets/images/dot.png": "f616b9d0442fdbdf6f54d6bcc7c6c0b4",
"assets/assets/images/edit.png": "83a4e1829b12af031036190768233c6e",
"assets/assets/images/elred_icon.png": "71be51204a5bb870c43eef969f6a93e8",
"assets/assets/images/email_verified.png": "26b19d09125fc2c91517b85794e6ee99",
"assets/assets/images/emoji_confetti.png": "44a8a1ece32ff142a63c2ff9451b3234",
"assets/assets/images/emoji_smiley.png": "16ca5acaf15e3ff4c86de2ae3af57618",
"assets/assets/images/emoji_super.png": "464b0063b6cd2aed062390f80f46ade0",
"assets/assets/images/emoji_victory.png": "c033b4700820784207a04a0dfc304b77",
"assets/assets/images/error_bg.png": "b6a56c6145db7b5c8048e14c3ceb87ea",
"assets/assets/images/error_icon.png": "363b956ae98eb7b5c309747fb5fdb8d2",
"assets/assets/images/frame1.png": "60fefc7a147136a4abb98294916281c1",
"assets/assets/images/gallery.png": "bdacd97f9b3d7e978cd5d5d913991b32",
"assets/assets/images/guard.png": "659e21a7e01f24a0222d1ea9f2f89aef",
"assets/assets/images/hidden.png": "603df76ba7d2d53eb3c9b4c2b2267154",
"assets/assets/images/home_help_icon.png": "0cc91b8d4ae0ef71409edad96cc7a8a4",
"assets/assets/images/home_info_icon.png": "1133bd087e86540a82f9ebfee145a23d",
"assets/assets/images/home_settings_icon.png": "ceaf327588e70c80e3602a6a27cce207",
"assets/assets/images/image_outlined.png": "80b223bb7c1b33fce66f1d82c4a83854",
"assets/assets/images/individual.jpg": "2a6c222b873de16da100a5fc60a820b1",
"assets/assets/images/laptop.png": "1e54b1848372cd8a70f679c70b85ecba",
"assets/assets/images/largeDevice.png": "501a1773a3cfe0533bdc59a9403883ae",
"assets/assets/images/location.png": "2c167074dad3b0471f9f7dc2fde73098",
"assets/assets/images/mail.png": "636bd93a0bccbd7dcf12981ff85cde34",
"assets/assets/images/mail_icon.png": "09a5107396eecbc77351b227c87d56ac",
"assets/assets/images/menu_icon.png": "8d6b6ac0ebcaff4d2a4ba2f7ee85e2c0",
"assets/assets/images/name_icon.png": "e298f3a6554aa230e9c363dac2bd6701",
"assets/assets/images/navigation_icon.png": "8b957c9f12a7f33998044881d41e25d7",
"assets/assets/images/networks.png": "5e5433cb3f13c839e9da3dd95b2ff01d",
"assets/assets/images/no_awards_added_image.png": "bc97e92d2d8a5ed20f62a2c8ecbd0a9d",
"assets/assets/images/no_networks.png": "62900225f6b1b8226e7b56a4d5688367",
"assets/assets/images/no_networks_added_image%2520-%2520Copy.png": "62900225f6b1b8226e7b56a4d5688367",
"assets/assets/images/no_networks_added_image.png": "62900225f6b1b8226e7b56a4d5688367",
"assets/assets/images/no_result.png": "701d8024a605ad9e2c1e692f2a9851bd",
"assets/assets/images/no_resume.png": "267787e85ce83421953c720239e45d2c",
"assets/assets/images/pdf_gen.png": "e4c65ee18ef1bc0f39cf5400dba62e31",
"assets/assets/images/pdf_icon.png": "afd4ca6e825db6859e06ebf574277571",
"assets/assets/images/pin.png": "80cb2a4013eeeceb638ab28fdc737a39",
"assets/assets/images/pin_black.png": "32e356e021c50a50be886c6d8195b1f2",
"assets/assets/images/pin_white.png": "3d035c84f5d0a9f2f050a8d1066738d0",
"assets/assets/images/pns_dd.png": "bf62dfd7722db3d32c63f6c6d654fbff",
"assets/assets/images/profileTick.png": "745249dc4d2c94b594095fd675e1dba1",
"assets/assets/images/profile_pic.png": "6baada01912537f27879fdf41377057c",
"assets/assets/images/resume.png": "6785f4e5b39b6c1ad62ea34bf9a8cfa9",
"assets/assets/images/S.png": "418bfa58aba1b2d504b9a24b1461c36d",
"assets/assets/images/smiley.png": "16ca5acaf15e3ff4c86de2ae3af57618",
"assets/assets/images/star.png": "6cc80b53d4e6e667d6df86663be20663",
"assets/assets/images/success_bg.png": "738ca09555c74d687af24273931b6fa0",
"assets/assets/images/success_icon.png": "a897502a371977b091a7fbf2fbd1dc1e",
"assets/assets/images/su_my.png": "39b228f5159cffd586547b6c03d4b131",
"assets/assets/images/trash.png": "6e7992e1791f08821bbad8e08c4252af",
"assets/assets/images/upload.png": "a96c239e99cdf9e9c9fa8483c9cf2bd1",
"assets/assets/images/upload_image.png": "3b39f00e28fc821cd3b9b1cb0c9d48a2",
"assets/assets/images/username_icon.png": "fc4695642f68db2fab0de0adc682c8df",
"assets/assets/images/Vector.png": "2fe70992c660363c08f9e97191d87d14",
"assets/assets/images/verified.png": "a25d2cb64c5012cfb713b8d933afe6d7",
"assets/assets/images/verify_2.png": "0acbd246c97d4d24f1c5ea532b53d3a0",
"assets/assets/images/verif_icon.png": "51e3843e2ae9e2648bdaffa183d0840c",
"assets/assets/images/warning_bg.png": "02262604d8c23067c8449b1c05272f08",
"assets/assets/images/warning_icon.png": "f9b31e741f43bc43287b7f2e7316dd08",
"assets/assets/images/web.png": "876ce9b0884d9f72933030109c5f53df",
"assets/assets/images/webIcon.png": "0c3edac6d338be28e0936fd5d33a4dd5",
"assets/assets/images/wira_icon.png": "1ed2377be5649175b696129439d12ead",
"assets/assets/svg/clap.svg": "2a57640e81f7e4b8604706caeefffea3",
"assets/assets/svg/crying_laughter.svg": "a862f08efa001c69b2a8262193312f5d",
"assets/assets/svg/emptyList.svg": "552203c9b9d19310438eaf135da58a62",
"assets/assets/svg/fire.svg": "bf061be9b811f1b8ccedd667aca14e81",
"assets/assets/svg/form_edit_icon.svg": "078845046bb89c647cc9fada1aaa620d",
"assets/assets/svg/heart.svg": "26386dc0ac7c65aa2fe18c253552bc59",
"assets/assets/svg/raise_hand.svg": "4fb80dcdb06201d6bbaf366395db8a71",
"assets/assets/svg/ratingstar.svg": "bdc1ee0014bc81f4bf9a2e7c6eadd517",
"assets/assets/svg/sad.svg": "a972e49aa9e083241c67884f4681b8dd",
"assets/assets/svg/smiling_heart.svg": "252784aa47ace8cdb60f00d581a7fcca",
"assets/assets/svg/testimonial_card_sign.svg": "a9f50d35a047caaa74bd708a757b597a",
"assets/assets/svg/wow.svg": "a5cbc7e3fa7a7030b0820684fcfcaf19",
"assets/FontManifest.json": "234fb98e522c8b1bbfa16fb1ef9ec129",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5575aa41324c3b96ac0650c992e92188",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "b2842560baf055ce5ebdd8f38ddcf4dd",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2eb09e05e6cc07b6fa13f44327623c68",
"/": "2eb09e05e6cc07b6fa13f44327623c68",
"main.dart.js": "48fe786990a9930151cfebc29c8bcd1c",
"manifest.json": "92785f102124921b78995029ae4c1819",
"styles.css": "587e115b10018329254a7e9fc7488d54",
"version.json": "3c195ac62b8012b621c449337aa9a1a5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
