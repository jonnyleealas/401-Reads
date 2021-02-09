There is an application file that is like a .env inside of the play framework. That is where my username,password, localhost, and database name go. 
Then there is a model file inside of play. That model should mirror the table model in my database. 
There is also another file that makes the queries for get, delete, findAll. That file uses the models that connects to the database.
Finally we have the front end. The front end acts as a gui that calls its own methods to make request from the model to the database. 
The front end will make requests to the back end and the back end will make requests to the database. From the front end we would be able to make queries to be able manipulate the data in the database according to authentication and authorization.
