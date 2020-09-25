Normally we can export a class by saying module.exports = classname;
however if we are exporting functions from a module what we can do is export an object.
Ex: module.exports = { function1, function2}

When we need to use the module we require
a const exportFunction = require('filepath')
and we can then call exportFunction.function1 to choose function1 from the module.
or we can call exportFunction.function2 to use the function2 from the module we imported.

The mongo uri path has a /auth on it or whatever you name the / after 27017. That is how you can look up whats in a specific data base. Ex: mongo class14warmup