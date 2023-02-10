import Head from "next/head";
import React, { useEffect } from "react";

function Web(props) {
  const { data } = props;

  useEffect(() => {
    window.addEventListener("load", function (ev) {
      _flutter.loader
        .loadEntrypoint({
          serviceWorker: {
            serviceWorkerVersion: serviceWorkerVersion,
          },
        })
        .then(function (engineInitializer) {
          return engineInitializer.initializeEngine();
        })
        .then(function (appRunner) {
          var element = document.getElementById("loader");
          element.parentNode.removeChild(element);

          return appRunner.runApp();
        });
    });
  }, []);

  if (!_flutter) {
    var _flutter = {};
  }
  _flutter.loader = null;
  (function () {
    "use strict";
    class FlutterLoader {
      /**
       * Creates a FlutterLoader, and initializes its instance methods.
       */
      constructor() {
        // TODO: Move the below methods to "#private" once supported by all the browsers
        // we support. In the meantime, we use the "revealing module" pattern.

        // Watchdog to prevent injecting the main entrypoint multiple times.
        this._scriptLoaded = null;

        // Resolver for the pending promise returned by loadEntrypoint.
        this._didCreateEngineInitializerResolve = null;

        // Called by Flutter web.
        // Bound to `this` now, so "this" is preserved across JS <-> Flutter jumps.
        this.didCreateEngineInitializer =
          this._didCreateEngineInitializer.bind(this);
      }

      /**
       * Initializes the main.dart.js with/without serviceWorker.
       * @param {*} options
       * @returns a Promise that will eventually resolve with an EngineInitializer,
       * or will be rejected with the error caused by the loader.
       */
      loadEntrypoint(options) {
        const { entrypointUrl = "main.dart.js", serviceWorker } = options || {};
        return this._loadWithServiceWorker(entrypointUrl, serviceWorker);
      }

      /**
       * Resolves the promise created by loadEntrypoint.
       * Called by Flutter through the public `didCreateEngineInitializer` method,
       * which is bound to the correct instance of the FlutterLoader on the page.
       * @param {*} engineInitializer
       */
      _didCreateEngineInitializer(engineInitializer) {
        if (typeof this._didCreateEngineInitializerResolve != "function") {
          console.warn(
            "Do not call didCreateEngineInitializer by hand. Start with loadEntrypoint instead."
          );
        }
        this._didCreateEngineInitializerResolve(engineInitializer);
        // Remove the public method after it's done, so Flutter Web can hot restart.
        delete this.didCreateEngineInitializer;
      }

      _loadEntrypoint(entrypointUrl) {
        if (!this._scriptLoaded) {
          console.debug("Injecting <script> tag.");
          this._scriptLoaded = new Promise((resolve, reject) => {
            let scriptTag = document.createElement("script");
            scriptTag.src = entrypointUrl;
            scriptTag.type = "application/javascript";
            // Cache the resolve, so it can be called from Flutter.
            // Note: Flutter hot restart doesn't re-create this promise, so this
            // can only be called once. Instead, we need to model this as a stream
            // of `engineCreated` events coming from Flutter that are handled by JS.
            this._didCreateEngineInitializerResolve = resolve;
            scriptTag.addEventListener("error", reject);
            document.body.append(scriptTag);
          });
        }

        return this._scriptLoaded;
      }

      _waitForServiceWorkerActivation(serviceWorker, entrypointUrl) {
        if (!serviceWorker || serviceWorker.state == "activated") {
          if (!serviceWorker) {
            console.warn("Cannot activate a null service worker.");
          } else {
            console.debug("Service worker already active.");
          }
          return this._loadEntrypoint(entrypointUrl);
        }
        return new Promise((resolve, _) => {
          serviceWorker.addEventListener("statechange", () => {
            if (serviceWorker.state == "activated") {
              console.debug("Installed new service worker.");
              resolve(this._loadEntrypoint(entrypointUrl));
            }
          });
        });
      }

      _loadWithServiceWorker(entrypointUrl, serviceWorkerOptions) {
        if (!("serviceWorker" in navigator) || serviceWorkerOptions == null) {
          console.warn(
            "Service worker not supported (or configured).",
            serviceWorkerOptions
          );
          return this._loadEntrypoint(entrypointUrl);
        }

        const { serviceWorkerVersion, timeoutMillis = 4000 } =
          serviceWorkerOptions;

        let serviceWorkerUrl =
          "flutter_service_worker.js?v=" + serviceWorkerVersion;
        let loader = navigator.serviceWorker
          .register(serviceWorkerUrl)
          .then((reg) => {
            if (!reg.active && (reg.installing || reg.waiting)) {
              // No active web worker and we have installed or are installing
              // one for the first time. Simply wait for it to activate.
              let sw = reg.installing || reg.waiting;
              return this._waitForServiceWorkerActivation(sw, entrypointUrl);
            } else if (!reg.active.scriptURL.endsWith(serviceWorkerVersion)) {
              // When the app updates the serviceWorkerVersion changes, so we
              // need to ask the service worker to update.
              console.debug("New service worker available.");
              return reg.update().then((reg) => {
                console.debug("Service worker updated.");
                let sw = reg.installing || reg.waiting || reg.active;
                return this._waitForServiceWorkerActivation(sw, entrypointUrl);
              });
            } else {
              // Existing service worker is still good.
              console.debug("Loading app from service worker.");
              return this._loadEntrypoint(entrypointUrl);
            }
          })
          .catch((error) => {
            // Some exception happened while registering/activating the service worker.
            console.warn(
              "Failed to register or activate service worker:",
              error
            );
            return this._loadEntrypoint(entrypointUrl);
          });

        // Timeout race promise
        let timeout;
        if (timeoutMillis > 0) {
          timeout = new Promise((resolve, _) => {
            setTimeout(() => {
              if (!this._scriptLoaded) {
                console.warn(
                  "Loading from service worker timed out after",
                  timeoutMillis,
                  "milliseconds."
                );
                resolve(this._loadEntrypoint(entrypointUrl));
              }
            }, timeoutMillis);
          });
        }

        return Promise.race([loader, timeout]);
      }
    }

    _flutter.loader = new FlutterLoader();
  })();

  return (
    <>
      <Head>
        <base href="/" />

        <meta charSet="UTF-8" />
        <meta property="og:title" content={data?.name ?? ""} key="title" />
        <meta
          property="og:image"
          content={data?.image?.medium ?? ""}
          key="image"
        />
        <meta property="og:description" content={data?.summary ?? ""} />
        <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
        <meta name="description" content="A new Flutter project." />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="elred_profile_web" />
        <link rel="apple-touch-icon" href="icons/Icon-192.png" />

        {/* <link rel="stylesheet" type="text/css" href="styles.css" /> */}
        <link rel="icon" type="image/png" href="favicon.png" />

        <title>elred_profile_web</title>
        {/* <link rel='manifest' href='./manifest.json' /> */}

        {/* <script src='./flutter.js' defer></script> */}
      </Head>

      <div className="loader" id="loader">
        Loading...
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const { query } = context;

  const res = await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=220411`);
  const data = await res.json();

  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Web;
