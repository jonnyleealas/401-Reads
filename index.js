'use strict';
require('dotenv').config();

let server= require('./lib/server');

server.start(process.env.PORT);
