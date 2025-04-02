
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/polyfills.BY6Gt89J.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/app.B5fS3Boq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/page-OnePage.CXHZEQVu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/DeliveryMethodSelectorSection.BPCra7v7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/useEditorShopPayNavigation.BKN42Fyo.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/VaultedPayment.DiITM7Bg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/LocalizationExtensionField.DBq30WwT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/ShopPayOptInDisclaimer.CiByGt93.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/UnavailableInBuyerLocationBanner.Cymr1pZT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/ShipmentBreakdown.CiQEvF6c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/MerchandiseModal.BifRpFJl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/StackedMerchandisePreview.DKpHoIm1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/PayButtonSection.wfoCmfO0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/component-ShopPayVerificationSwitch.CYvky28v.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/useSubscribeMessenger.Da8-ldfE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/index.C8J3XfFD.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/app.DJaMqivG.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.da/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/1557/0991/files/gastrotools_logo_small_left_positive_rgb30072_x320.png?v=1656063000"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  