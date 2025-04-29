create table usuario (
id serial primary key not null,
nome varchar(100) not null,
data_nascimento date,
email varchar(100) not null,
numero varchar(45) not null
)