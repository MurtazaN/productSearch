GitHub repo - https://github.com/MurtazaN/productSearch

Run command from bash: 'bash build.sh'
    - file runs command 'node server.js' which starts the server locally and 'bash run.sh'.
    - run.sh runs command 'start localhost:10000' which open the said site in one's default browser.
    - In the browser, in the input box enter ID from 1000 to 1009 and click on get records button to get information about respective Book.
    - Any invalid input will result in undefined output.

As you can notice I have manually given id's to the products. Therefore, as the no. of products increase, manually assigning ID's will be ineffective. Using MongoDB will be effective in this scenario.

System currently runs on localhost so it cannot have multiple users. I would deploy it on heroku so multiple users can access the website.

I used mpm, express(npm i express --save), cors, open, start, etc. Documentation for different packages from npmjs. Documentations for displaying content on website came mostly from mozilla docs, figuring out displaying gif content and adding hyperlink was quite challenging. 

Unfortunately, due to medical emergencies I was not able to give the project more than a couple of days. I would have liked to add mongoDB for more effective data processing and deploy project on heroku to test code for multiple user support. I would have also used the existing products.json file to run the app instead of adding in the server.js file.