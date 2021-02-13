# adding default values 
create table cats 
(
    name varchar(100) DEFAULT 'unamed',
    age INT DEFAULT 99
);

# Adding not null
This combined with the above does not permit someone to add the string null in a value for a table. Doing so will result in an error and a warning in cli.