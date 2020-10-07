var express = require("express");
var myParser = require("body-parser");
var app = express();
app.use(myParser.json({
    inflate: true
}));
app.post("/pay", function (request, response) {
    console.log(request.body);
    response.header("Content-Type", "application/json");
    response.send(request.body);
});
var port = 11010
app.listen(port);
console.log('Node.js web server at port 11010 is running..');