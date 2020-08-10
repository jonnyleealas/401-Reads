#!/usr/bin/env node
// refers to something that live in your environments
//this is saying look in this users env and run node

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();

HTTP.fetch(options);

//side note: we always capitalize constructors

// module.exports = Input; lets another page use this file. I would be able to use what ever is on the right side of the mdule.export = "Inputs"
// this makes it available somewhere else.

// I need to make sure my git remote upstream is set up properly