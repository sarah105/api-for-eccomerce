const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/products', (req,res)=>{
    res.json(products)
})
app.get('/products/:id', (req,res)=>{
    res.json(products.filter(el => el.id === req.params.id))
})

app.post('/products',(req,res)=>{
    products.push(req.body);
    res.send(products);
})

app.get('/cart', (req,res)=>{
    res.json(cart)
})

app.post("/cart",(req,res)=>{
    cart.push(req.body)
    res.json(cart)
})

app.listen(3000,()=>{
    console.log("Server running")
})


let products = [
    {
        id:"2",
        name:"phone"
    },
    {
        id:"3",
        name:"lab"
    }
    
]

let cart = [];