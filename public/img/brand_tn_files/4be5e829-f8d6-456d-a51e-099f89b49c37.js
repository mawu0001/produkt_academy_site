(function(m,a,k,e,i,n,f) {
  m['MakeInfluenceObject']=i;m[i]=m[i]||{q:[]},
  m[i]=new Proxy(m[i],{get:function(t,p,r){return t.hasOwnProperty(p)
  ?t[p]:function(){m[i].q.push({n:p,a:arguments})}}}),n=a.createElement(k),
  f=a.getElementsByTagName(k)[0],n.async=1,n.src=e+'?'+Math.floor(new Date()
  /864e5);f.parentNode.insertBefore(n,f);
})(window,document,'script','//scripts.makeinfluence.com/a.js', 'MI');

MI.set('business_id', '4be5e829-f8d6-456d-a51e-099f89b49c37');
MI.send('pageview');

(function(shouldRun) {
  if (shouldRun) {
    const Shopify = window.Shopify || {};
    const MI = window.MI || {};

    if (Shopify && Shopify.checkout) {
      const orderPrefix = '#';
      const orderSuffix = '';

      const processOrderNumber = (orderNumber) => {
        const regex = new RegExp(`(${orderPrefix})([0-9]+)(${orderSuffix})`, 'g');
        const found = orderNumber.match(regex);

        return found[found.length-1].replace(orderPrefix, '').replace(orderSuffix, '');
      };

      const MICheckoutParams = {
        bid: '4be5e829-f8d6-456d-a51e-099f89b49c37',
        uid: processOrderNumber(document.querySelector('.os-order-number').innerHTML.trim()),
        value: Shopify.checkout.subtotal_price,
        currency: Shopify.checkout.currency,
      };
      
      if (Shopify.checkout.discount && parseFloat(Shopify.checkout.discount.amount) > 0) {
        MICheckoutParams.promotion_code = Shopify.checkout.discount.code;
      }

      const createdAt = new Date(Shopify.checkout.created_at);
      const timeThreshold = 1000 * 60 * 15;

      if (Math.abs(createdAt.getTime() - new Date().getTime()) >= timeThreshold) {
        return;
      }


      if (MI && MI.send) {
        MI.send('conversion', {
          unique_id: MICheckoutParams.uid,
          value: MICheckoutParams.value,
          currency: MICheckoutParams.currency,
          promotion_codes: MICheckoutParams.promotion_code,
        });
      }

      const params = new URLSearchParams(MICheckoutParams);
      const image = document.createElement('img');
      image.src = `https://system.makeinfluence.com/p?${params.toString()}`;

      document.body.appendChild(image);
    }
  }
})(true);
