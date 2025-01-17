const listEndpoints = require('express-list-endpoints');
const app = require('./index.js');

const routes = listEndpoints(app);

console.table(routes);