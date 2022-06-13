const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 10000
//const products = require('/products.js')

app.use(cors())

let products = {
    "1000":
    {
    "title": "NKJV Evidence Bible, Hardcover",
    "isbn13": "9780882705255",
    "isbn": "0882705253",
    "image": "https://g.christianbook.com/dg/product/cbd/b70/705255.gif",
    "id": "705255",
    "link": "https://www.christianbook.com/apps/product?item_no=705255",
    "customer_rating": 4.87
  },
  "1001":
  {
    "title": "NKJV Evidence Bible, Duo-Tone Brown/Beige",
    "isbn13": "9780882705071",
    "isbn": "0882705075",
    "image": "https://g.christianbook.com/dg/product/web/b70/705071.gif",
    "id": "705071",
    "link": "https://www.christianbook.com/apps/product?item_no=705071",
    "customer_rating": 4.87
  },
  unknown:
  {
    "message": "Product not found"
  }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //searches directory to find index.html
}) 

app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:_id', (request, response) => {
    const _id = request.params._id
    console.log(_id)
    if(products[_id]){
        response.json(products[_id])
    }else{
        response.json(products['unknown'])
    }
})

app.get('/api', (request, response) => {
    response.json(products)
})

app.listen(process.env.PORT || PORT, () => { //use either heroku port or port specified
    console.log(`The server is running on ${PORT}`)
})