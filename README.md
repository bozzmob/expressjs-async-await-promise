#Express JS REST API using Async,Await & Promises

A simple rest api code that displays a random number and a randomly generated JSON by using Async,Await and Promises with some aid of Babel("presets": ["stage-3"])

### Install all dependencies

`npm install`

### To transpile ES7/ES6 code-

`babel routes/compute.orig.js --preset > routes/compute.js`

### Run the project

`DEBUG=expressjs-async-await-promise:* npm start`

### Random Number - API Endpoint and Response

`http://localhost:3000/randomNumber`

`Random Number 89`

### Random JSON - API Endpoint and Response

`http://localhost:3000/randomJSON`

`{"randomData":[{"key":0,"val":"Car data 0"},{"key":1,"val":"Car data 1"},{"key":2,"val":"Car data 2"},{"key":3,"val":"Car data 3"},{"key":4,"val":"Car data 4"},{"key":5,"val":"Car data 5"},{"key":6,"val":"Car data 6"},{"key":7,"val":"Car data 7"},{"key":8,"val":"Car data 8"},{"key":9,"val":"Car data 9"},{"key":10,"val":"Car data 10"},{"key":11,"val":"Car data 11"},{"key":12,"val":"Car data 12"},{"key":13,"val":"Car data 13"},{"key":14,"val":"Car data 14"},{"key":15,"val":"Car data 15"},{"key":16,"val":"Car data 16"},{"key":17,"val":"Car data 17"},{"key":18,"val":"Car data 18"},{"key":19,"val":"Car data 19"},{"key":20,"val":"Car data 20"},{"key":21,"val":"Car data 21"},{"key":22,"val":"Car data 22"},{"key":23,"val":"Car data 23"}]}`