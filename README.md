# Tienda Online
  This Api will be used to get products from another api(api Fake Store) and will be storage in a MySql database were an front end will show the products that exist in the api Tieneda Online and you will choose your products from the list that show you the front end.

## Installation

You should intall MySql to run the next scripts in the data base that will help you to test it.

CREATE DATABASE fake_store_db;


CREATE  TABLE IF NOT EXISTS `products` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `pname` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


INSERT INTO `fake_store_db`.`products` (`pname`, `created_at`) VALUES ('Jabon', '2019-11-19 03:30:30');

## Usage

# post
{
    "error": false,
    "message": "Product added successfully!",
    "data": 4
}

# get
{
        "id": 4,
        "pname": "Arroz",
        "created_at": "2022-05-23T04:51:35.000Z",
        "updated_at": "2022-05-23T04:51:35.000Z"
    }

# get:id
{
        "id": 2,
        "pname": "x",
        "created_at": "2022-05-17T02:23:21.000Z",
        "updated_at": "2022-05-17T05:09:29.000Z"
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