document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["content.js"],
      },
      () => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "getProductInfo" },
          (response) => {
            if (response) {
              const productInfo = document.getElementById("product-info");
              productInfo.innerHTML = `
          <div style="display: flex; align-items: center; gap:15px">
            <img src="${response.imageUrl}" alt="Product Image" style="width: 80px;">
            <div style="display: container">
            <p><strong>Name:</strong> ${response.name}</p>
            <p><strong>Price:</strong> ${response.price}</p>
            </div>
            
          </div>
            
          `;

              const query = encodeURIComponent(response.name);
              fetch(`http://localhost:3000/search?q=${query}`)
                .then((res) => res.json())
                .then((data) => {
                  const searchResults =
                    document.getElementById("search-results");
                  searchResults.innerHTML = "<h2>Similar Products:</h2>";

                  const topProducts = data.shopping_results.slice(0, 3);

                  topProducts.forEach((product) => {
                    const productElement = document.createElement("div");

                    productElement.innerHTML = `
                 

                
                  <a href="${product.product_link}" target="_blank" class="card" style="color: black; text-decoration: none;">
                    <img src="${product.thumbnail}" alt="${product.title}" style="width: 80px;">
            <div style="display: container">
            <p><strong>Name:</strong> ${product.title}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Source: </strong> ${product.source}</p>
            </div>
                  </a>
            
      
                `;
                    searchResults.appendChild(productElement);
                  });
                })
                .catch((err) => {
                  console.error("Error fetching search results:", err);
                  document.getElementById("search-results").textContent =
                    "No similar products found.";
                });
            }
          }
        );
      }
    );
  });
});
