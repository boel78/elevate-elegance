CREATE DATABASE ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_sv_0900_ai_ci;
USE ecommerce;

CREATE USER ecommerceadmin@localhost IDENTIFIED BY 'Elevate123';
GRANT ALL PRIVILEGES ON ecommerce.* TO ecommerceadmin@localhost;

create table test(
  id int not null primary key,
  name varchar(50) null,
  writer varchar(50) null,
  genre varchar(60) null
);
