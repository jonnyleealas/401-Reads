# Tables
Db is just a bunch of tables.  
Tables hold the data.
Collection of related data held in structured form in a database.

# Columns
The headers on the table
# Rows 
The data in the table

# Data Types
Very important when constructing a table.
We have to tell mysql if something is a string, int etc.
Mysql will enforce data types so we must give them the data types to avoid mess ups.
Numeric, String, Date Types: There are many of these in each category.

INT = whole number no decimals.
Varchar = Represents strings an its variable length. It allows for 1-255 characters. We have to specify a maximum length when creating a varchar(255);

# insert data into tables
Which table are we inserting data into?
What type of data are we inserting into its parameters?
What values according to its parameters are we inserting?
INSERT INTO name_of_tables(name, age,)
VALUE ('jon', 7)