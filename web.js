var express = require('express');
var buff = fs.readFileSync("index.html");
var app = express.createServer(express.logger());
var buffer = new Buffer(buff);
var content = buffer.toString();

app.get('/', function(request, response) {
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
