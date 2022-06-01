# Tienda Online
  This Api will be used to get products from another api(api Fake Store) and will be storage in a MySql database were an front end will show the products that exist in the api Tieneda Online and you will choose your products from the list that show you the front end.

## Installation

You should intall MySql to run the next scripts in the data base that will help you to test it.

CREATE DATABASE fake_store_db;


CREATE  TABLE IF NOT EXISTS `products` (
  `id` bigint unsigned unique,
  `title` VARCHAR(255) NOT NULL,
  `price` decimal(11,2) unsigned DEFAULT '0.00',
  `description` VARCHAR(1100) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `rating` VARCHAR(255) ,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `fake_store_db`.`products` (`id`,`title`,`price`,`description`,`category`,`image`,`rating`) VALUES ('22', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', '109.95', 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', 'men s clothing', '"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', '{
"rate": 3.9,
"count": 120
}');

## Usage
precentation of knowledge adquisition by the teacher jon

# post
{
    "error": false,
    "message": "Product added successfully!",
    "data": 0
}

# get
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": "[object Object]"
    },
    {
        "id": 21,
        "title": "Plancha - Inoxidable",
        "price": 90.3,
        "description": "Plancha de acero inoxidable 316",
        "category": "electronics",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8DE_xvNnH9oukpo9aDqEzFFed64fKavy-jb2p0fLKvNApT7JYfXsDqh2Qykjzl8nxUWB4FX2MHw&usqp=CAc",
        "rating": "2.1"
    }

# get:id
    {
        "id": 21,
        "title": "Plancha - Inoxidable",
        "price": 90.3,
        "description": "Plancha de acero inoxidable 316",
        "category": "electronics",
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8DE_xvNnH9oukpo9aDqEzFFed64fKavy-jb2p0fLKvNApT7JYfXsDqh2Qykjzl8nxUWB4FX2MHw&usqp=CAc",
        "rating": "2.1"
    }
# put
{
    "error": false,
    "message": "Producto agregado"
}
# del
{
    "error": false,
    "message": "Producto borrado"
}

## Authors and acknowledgment

brayam mendez
jonatan carrillo