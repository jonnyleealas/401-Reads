SHOW DATABASES; = shows databases in mysql

USE database_name; = use a specific database

SELECT database(); = shows which database you are currently using

DROP DATABASE name_of_db = deletes db

SELECT database(); = if null it tells you that you are not using a database

SHOW TABLES; = Shows tables in the database you are in.

SHOW COLUMNS FROM table_name = shows you everything inside the table according to the name you choose to view. ----> DESC also does similar things to show columns.

DROP TABLE table_name = deletes table

INSERT INTO table_name = this is how you add data to a table. You can add multiple values at the same time EX: values(f,d,g,), (d,f,g,), (dk,d,s,);


SHOW WARNINGS = shows any warnings that are prompted in the terminal.

INT NOT NULL = means thats we are not permitting an int to be null. and int must be added to values when inserting values into a table. Doing so without an int will cause a warning in cli.

CREATE TABLE employees
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    age INT NOT NULL,
    current_status VARCHAR(100) NOT NULL DEFAULT 'employed'
);
INSERT INTO employees
(
    last_name,
    first_name,
    middle_name,
    age,
    current_status
)
VALUES('lee','jon','none',34,'unemployed'),('jason','alexander','none',12,'unemployed'), ('sandee','james','none',12,'unemployed');