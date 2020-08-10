Jonathon Lee
Class 401
Read 1

# Why would you want to run JavaScript code outside of a browser?
When working with back end development it is best to use a back end server instead of the browser. 
# What is the difference between a module and a package?
A module is a single file that can be imported and a package is multiple files that can be imported.

# What does the node package manager do?
Manages any packages that we want to install and use in node.js

# Provide code snippets showing 3 different ways to export a function from a node module
1. module.exports = Input; 

1. blah.js -- module.exports = {
    name: 'Jonny',
    lastName: 'Lee'
}
1. let names = require('./blah.js')
# 
console.log(names.name);
# 

- ecosystem: A collection of software packages, libraries, and resources that facilitate development as they integrate with each other. {https://www.altexsoft.com/blog/engineering/javascript-ecosystem-38-tools-for-front-and-back-end-development/}
- Node.js: Node.js is a runtime environment for js. Also known as a server environment for the building of applications.
- V8 Engine: An engine inside of node.js that parses and runs you js. Made by google as an open source engine. {stackoverflow.com}
- module: Modules are a set of functions we want included in an app. Same as js libraries. {w3school.com}
- package: One or more modules grouped together. {stackoverflow.com}
- node package manager(npm): This puts packages in place so that node can find them. {docs.npmjs.com}
- server: A server listens for requests made by an HTTP requests.
- Environment: The collection of bindings and their values that exist at a given time. {eloquent js}
- interpreter: The thing that reads the lines of code in js and then runs them.
- compiler: This translates code from one programming language to be used in another language.