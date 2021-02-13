# CREATE, READ , UPDATE, DELETE
CREATE = INSERT INTO db (blah) VALUES(blah)
READ = 
UPDATE = 
DELETE =


# Dummy data
CREATE TABLE cats
(
    cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    breed VARCHAR(100),
    age INT
)

INSERT INTO cats
(
    name,
    breed,
    age
)
VALUES
('ringo', 'tabby', 4),
('cindy', 'maine coon', 10),
('dumbledore', 'maine coon', 11),
('egg', 'persian', 4),
('misty', 'tabby', 13),
('george michael', 'ragdoll', 9),
('jackson', 'spynx', 7);

# READ = SELECT 
How to we retrieve and search data from the database?
- SELECT * FROM cats;
- * means all the columns in cats table.

SELECT name FROM cats; = Will give us only the names from the cats table. This will give us one thing.

To get more than one piece of data.
SELECT name, age FROM cats; The comma allows us to add other things. New thing? Add a comma. Order matters. The order in which we ask for the data is how it will be viewed in the table.

Various Simple SELECT statements:
SELECT * FROM cats; 

SELECT name FROM cats; 

SELECT age FROM cats; 

SELECT cat_id FROM cats; 

SELECT name, age FROM cats; 

SELECT cat_id, name, age FROM cats; 

SELECT age, breed, name, cat_id FROM cats; 

SELECT cat_id, name, age, breed FROM cats; 

## WHERE
The WHERE clause let us get specific.
This keyword will be used often to be more specific.

SELECT * FROM cats WHERE age=4

SELECT cat_id FROM cats = will get only one column for us.
SELECT name, cat_id FROM cats = Will give us name and cat_id 

# As = ALIASES  
SELECT cat_id AS id, name FROM cats;
The AS allows us to name how we are viewing the data we get back from our query. SELECT cat_id AS banana will give us all the id's in the column banana.

CODE: Introduction to Aliases

SELECT cat_id AS id, name FROM cats;
 
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;
 
DESC cats;

# UPDATE
HOW DO WE ALTER EXISTING DATA?

UPDATE cats SET breed='shorthair'
WHERE breed='tabby';

- Set is how we set what we are changing. SET name='jon' where name='tabby'; will set tabbys name to jon.

# DELETE
Destroy data in a table or database.

DELETE FROM cats WHERE name='egg';

DELETE FROM cats; THIS COMMAND WILL DELETE EVERYTHING IN CATS EXCEPT THE TABLE STRUCTURE. 