const express = require("express");

const cors = require("cors");

const app = express();

/* Middleware */

app.use(cors());

app.use(express.json());

/* Test Route */

app.get("/", (req, res) => {

    res.send("Kirana API Running");
});

/* Product Route */

app.get("/products", (req, res) => {

    res.json([

        {
    id:1,
    name:"Rice",
    pricePerKg:50,
    image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
    quantities:["500g","1kg","2kg","5kg"]
},

{
    id:2,
    name:"Atta",
    pricePerKg:40,
    image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400",
    quantities:["500g","1kg","2kg"]
},

{
    id:3,
    name:"Biscuit",
    pricePerPiece:10,
    image:"https://images.unsplash.com/photo-1622405207562-735fa49ff7f7?w=400",
    quantities:["1","2","3","5"]
},

{
    id:4,
    name:"Haldi Powder",
    pricePerKg:200,
    image:"https://images.unsplash.com/photo-1622405207562-735fa49ff7f7?w=400",
    quantities:["100g","200g","500g","1kg"]
}

    ]);
});

/* Server */

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        "Server Running on Port " + PORT
    );
});