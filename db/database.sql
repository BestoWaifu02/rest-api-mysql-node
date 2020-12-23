CREATE DATABASE IF NOT exists company;
USE company;

create TABLE employes(
id int not null auto_increment,
name varchar(45) default null,
salary int default null,
primary key(id)
);

describe employes; 

insert into employes values
(1,'Test1',3000),
(2,'Test2',4000),
(3,'Test3',5000);

select	* from employes;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor'





