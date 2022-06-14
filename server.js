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
  "1002":
  {
    "title": "Pass Along Scripture Card Variety Pack of 60, Assortment 9",
    "isbn13": "",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/820657.gif",
    "id": "820657",
    "link": "https://www.christianbook.com/apps/product?item_no=820657",
    "customer_rating": 4.67
  },
  "1003":
  {
    "title": "LEGO &reg; City Police Patrol Car",
    "isbn13": "",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/6259422.gif",
    "id": "6259422",
    "link": "https://www.christianbook.com/apps/product?item_no=6259422",
    "customer_rating": null
  },
  "1004":
  {
    "title": "Scientific Facts in the Bible: 100 Reasons to Believe the Bible",
    "isbn13": "9780882708799",
    "isbn": "0882708791",
    "image": "https://g.christianbook.com/dg/product/web/b70/08790.gif",
    "id": "08790",
    "link": "https://www.christianbook.com/apps/product?item_no=08790",
    "customer_rating": 4.4
  },
  "1005":
  {
    "title": "LEGO &reg; City Ocean Mini-Submarine",
    "isbn13": "",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/319317.gif",
    "id": "319317",
    "link": "https://www.christianbook.com/apps/product?item_no=319317",
    "customer_rating": null
  },
  "1006":
  {
    "title": "LEGO &reg; DOTS Creative Picture Frames",
    "isbn13": "",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/322364.gif",
    "id": "322364",
    "link": "https://www.christianbook.com/apps/product?item_no=322364",
    "customer_rating": null
  },
  "1007":
  {
    "title": "Lego Gadgets",
    "isbn13": "9781338219630",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/219635.gif",
    "id": "219635",
    "link": "https://www.christianbook.com/apps/product?item_no=219635",
    "customer_rating": 4.59
  },
  "1008":
  {
    "title": "1 Year Bible Reading Plan",
    "isbn13": "",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/71578X.gif",
    "id": "71578X",
    "link": "https://www.christianbook.com/apps/product?item_no=71578X",
    "customer_rating": 5
  },
  "1009":
  {
    "title": "100 Assorted Favorite Bible Verses Bookmarks, Pack of 100",
    "isbn13": "",
    "isbn": "",
    "image": "https://g.christianbook.com/dg/product/web/b70/823662.gif",
    "id": "823662",
    "link": "https://www.christianbook.com/apps/product?item_no=823662",
    "customer_rating": 5
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