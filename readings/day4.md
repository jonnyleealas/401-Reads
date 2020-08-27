Jonathon Lee
Class 401
Read 4

# Mongo/Mongoose

1. Why would a developer choose to make data models?
Explores what data needs to be stored. We can then organize data in a structured way.
- List relevant entities, Product, customer .
- Name, price, Qty.
- Relationship between entities.
- Create table to present entities.
- Create keys represent.

1. What purpose do CRUD operations serve?
 Crud: Create, Read, Update, Delete. These are the four basic operations in persistent storage. Each letter refers to the functions execute in relational db apps.


1. What kind of database is Postgres? What kind of database is MongoDB?
- Postgres is an object- relational database.
- MongoDb is a non-relational database management system.

1. What is Mongoose and why do we need it?
Mongoose is an ODM library. It manages relationships between data, provides schema validations, and is used to translate between objects in code and the representation of those objects in MongoDB. {freecodecamp.org}.

1. Describe how NoSQL Databases scale horizontally
They add more instances to handle the work load. SQl scaling adds more power to handle the work load.

1. Give one strong argument for and against NoSQL Databases
SQL databases are better for multi-row transactions, Nosql are better for unstructured data like documents or JSON.

1. Define three related pieces of data in a possible application. An example for a store application might be Product, Category and Department. Describe the constraints and rules on each piece of data and how you would relate these pieces to each other. For example, each Product has a Category and belongs in a Department.
## Restaurant Employees.
- Wait Staff: Anybody who is tasked with direct customer interactions, updating food orders, and food delivery.
- Cooks: Anyone who deals with food preparation.
- Bussers: Those who deal with front end restaurant custodial duties.  

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