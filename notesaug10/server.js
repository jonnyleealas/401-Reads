'use strict';

const express = require('express');
const app = express();
const obj = { name: 'test person', age: 50 };
// key is name and age. Value is test person and 50
app.get('/', (req,res)=> res.status(200).json(obj));
// using express to make an ajax call to '/' route. responding in json. it isnt doing it yet.
// when a get request is made to server at the home route, run this function.
app.listen(3000);
// this is listening to your localhost server

//http :3000 in terminal will show you if the server is running and working. it should show the object above.
