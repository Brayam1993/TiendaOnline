# TiendaOnline
Tienda Online Fake


CREATE DATABASE fake_store_db;


CREATE  TABLE IF NOT EXISTS `products` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `pname` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


INSERT INTO `fake_store_db`.`products` (`pname`, `created_at`) VALUES ('Jabon', '2019-11-19 03:30:30');