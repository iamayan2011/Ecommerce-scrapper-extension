
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getProductInfo") {
  
      const productName = document.querySelector("#js-product-name > div > h1").textContent;
      const productPrice = document.querySelector("#product-price > div > div > span").textContent;
      const productImageUrl = document.querySelector("#main-content > div.product.parbase > div.layout.pdp-wrapper.product-detail.sticky-footer-wrapper.js-reviews > div.module.product-description.sticky-wrapper.pdp-container > div.column1 > div > figure > div > img").src;
      
   
      sendResponse({
        name: productName,
        price: productPrice,
        imageUrl: productImageUrl
      });
    }

  });
  