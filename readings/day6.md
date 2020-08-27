Jonathon Lee
Class 401
Read 6

# Mongo/Mongoose

1. Why would a developer choose to make data models?
Data models help with quality of work. Making a sketch or a blueprint of the work that needs to be done.

1. What purpose do CRUD operations serve?
 Four functions that are considered necessary in persistent storage app.{sumologic.com}


1. What kind of database is Postgres? What kind of database is MongoDB?
Postgres is a Sql database; relational. Mongodb is a noSql database; not table based.

1. What is Mongoose and why do we need it?
Manages relationships between data, provides schema validation, and is used to translate between objects in code. {freecodecamp.org}

1. Describe how NoSQL Databases scale horizontally
They handle increase of traffic by adding more servers to the db. {bmc.com}

1. Give one strong argument for and against NoSQL Databases
Nosql does away with schema. Schemas are great for readers of the data. The users who generate value from the data. {memsql.com}

1. Define three related pieces of data in a possible application. An example for a store application might be Product, Category and Department. Describe the constraints and rules on each piece of data and how you would relate these pieces to each other. For example, each Product has a Category and belongs in a Department.
## Nike shoes
- Category mens , women, children: Who are the shoes for?
- Sports, life style, running: Defines what type of nike shoe to search for.
- sale: Only out of season and sale items.

1. Name 3 cloud based NoSQL Databases
1. Azure
1. AWS
1. MongoDB

# Vocabulary 
- database: Provides file creation, deletion, update, query and reporting functions.
- data model: Process of documenting software design as a diagram.
- CRUD: Create, Read, Update, Delete.
- schema: Organization structure in a database.
- sanitize: Protecting the system from malicious data.
- Structured Query Language (SQL): A relational based language used for updating, deleting and query.
- Non SQL (NoSQL): This is a non relational database language scaled horizontally.
- MongoDB: A noSQL object oriented database; does not use columns and rows to structure data.
- Mongoose: Object Data Modeling library.
- record: A group of related data items stored in fields, with its own datatype.
- document: A way to store data in a database.
- Object Relation Mapping (ORM): Programming technique for converting data between incompatible type systems using object-oriented programming languages.{wikipedia}.