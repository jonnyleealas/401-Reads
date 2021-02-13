# What is a primary key?
Our data needs to be uniquely identifiable.
Working with databases we need to have things be identifiable.
We need to assign an id or a unique identifier.
Primary key- Unique Identifier.

# How to assign a primary key
CREATE TABLE unique_cats
  (
    cat_id INT NOT NULL,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
  );
EXAMPLE
INSERT INTO cats(id,name,age) VALUES(1, "fred", 23)





# EXAMPLE
CODE: A Primer on Primary Keys
CODE: Primary Keys
Define a table with a PRIMARY KEY constraint:

CREATE TABLE unique_cats
  (
    cat_id INT NOT NULL,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
  );
DESC unique_cats; 

Insert some new cats:

INSERT INTO unique_cats(cat_id, name, age) VALUES(1, 'Fred', 23);
 
INSERT INTO unique_cats(cat_id, name, age) VALUES(2, 'Louise', 3);
 
INSERT INTO unique_cats(cat_id, name, age) VALUES(1, 'James', 3);
Notice what happens:

SELECT * FROM unique_cats; 

Adding in AUTO_INCREMENT:

CREATE TABLE unique_cats2 (
    cat_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
);
INSERT a couple new cats:

INSERT INTO unique_cats2(name, age) VALUES('Skippy', 4);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);
INSERT INTO unique_cats2(name, age) VALUES('Skippy', 4);
Notice the difference:

SELECT * FROM unique_cats2; 