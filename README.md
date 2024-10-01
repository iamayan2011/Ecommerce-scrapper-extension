
# E-Commerce Scrapper : Chrome Extension

E-Commerce Scrapper is a chrome extension built using Javascript, NodeJS, ExpressJS & [SerpAPI](https://serpapi.com/google-shopping-api). This chrome extension is compatible with H&M (https://www2.hm.com/en_in/index.html)

![Extension Screenshot](https://github.com/iamayan2011/Ecommerce-scrapper-extension/blob/main/screenshots/ss2.png)
![Extension Screenshot](https://github.com/iamayan2011/Ecommerce-scrapper-extension/blob/main/screenshots/1.png)

The extension has following features:

* **Product Overview:** Easily view essential product details such as the image, name, and price in a simplified interface within the extension.
* **Similar Product Recommendations:** Get 3 recommended products based on the currently viewed product, along with additional details like image, name, price, and the source website (e.g., Amazon, eBay, or other shopping platforms).
* **Powered by SerpAPI:** Recommendations are fetched using the SerpAPI (Google Shopping API) ([API Documentation](https://serpapi.com/google-shopping-api)).
* **Quick Navigation:** Click on any recommended product to quickly navigate to its source website and explore further details.



## Tech Stack

**Client:** 
* HTML
* CSS
* Javascript

**Server:** 
* Node
* Express

**API**
* [SerpAPI - Google Shopping API](https://serpapi.com/google-shopping-api)




## Usage
To run this project locally, follow these steps:
1. **Clone the repository:** Run the following command in terminal to clone the repository locally
```
git clone https://github.com/your-username/repo-name.git
```
2. **Install server dependencies:** Navigate to the folder where all the files are present and run the following command to install the necessary Node.js packages.
```
npm install
```
3.  **Add your API Key in .env file:** In the .env file, replace "PASTE_YOUR_API_KEY_HERE" with your SerpAPI key.
    * **Disclaimer:** ServAPI is a paid API and free tier can handle limited requests, so please add your own API key.
    * You can get the ServAPI key by visiting [ServAPI Website](https://serpapi.com/dashboard).
    * Verify your email and phone number to unlock the free teir.
    * Copy the API key from "Your Private API Key".
    * Paste it in the .env file as instructed earlier.
  ```
    API_KEY = "PASTE_YOUR_API_KEY_HERE"
  ```

4. **Start the server:** Start the Express server that acts as a proxy for the SerpAPI.
```
node server.js
```
The server will run on http://localhost:3000

![Terminal Screenshot](https://github.com/iamayan2011/Ecommerce-scrapper-extension/blob/main/screenshots/ss3.png)

5. **Load the Chrome Extension:**
    * Open Chrome and navigate to chrome://extensions/.
    * Enable "Developer mode" (toggle in the top right corner).
    * Click "Load unpacked" and select the project directory.

6. **Test the extension:**
    * Navigate to a supported product page (e.g., [an H&M product](https://www2.hm.com/en_in/productpage.1211281001.html)).
    * Please note that this extension is only compatible with products available on H&M website.
    * Click the extension icon to see the product info and recommendations.

7. **View product recommendations:** The extension will display:
    * The product's image, name, and price.
    * Three recommended products (fetched from SerpAPI), including their image, name, price, and source.
    * Clicking on a recommended product will redirect you to the source shopping website.



## Contributing

If you want to contribute to this project, please follow these steps:

* Fork this repository.
* Create a new branch (git checkout -b feature/your-feature-name).
* Make changes and commit them (git commit -m "Add your commit message").
* Push your changes to your forked repository (git push origin feature/your-feature-name).
* Open a pull request.



## 🚀 About Me
I am a fourth year undergraduate (Batch 2021-2025) at Indian Institute of Information Technology, Sri City. 
I'm a passionate full stack developer with focus on MERN Stack.
Apart from this, I am interested in Graphic Designing and UI/UX Designing. I am open to Internship opportunities with in the domain of Web Development.

Let's connect on LinkedIn.

[Ayan Raza - LinkedIn](https://www.linkedin.com/in/iamayan2011/)

[Ayan Raza - GitHub](https://github.com/iamayan2011)




