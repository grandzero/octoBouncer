var express = require("express");
var socket = require("socket.io");
//var PORT = process.env.PORT || 4000;
var PORT = 40000;
// App Setup
var app = express();
var server = app.listen(PORT,function(){
  console.log("Listening the port 40000");
});

//static files
app.use(express.static('public'));

//socket
var io = socket(server);
var s;
var c;
/**** NET module ************/
var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('Qtclient connected');
	c = connection; 
      connection.on('data',function(data){
	    console.log("data is : ",data.toString());
		var jsonObj = JSON.parse(data);
		console.log("JSON Object");
		console.log(jsonObj);
		
		s.sockets.emit('data',jsonObj);
	   
   });
	
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   

   connection.pipe(connection);
});
server.listen(9000, function() { 
   console.log('server is listening');
});
/******************* Socket io module *********************/
io.on('connection',function(socket){
	console.log("React native connected !!! ");
	
	s = io;
	socket.on('signal',function(data){
    console.log("signal : ",data);
	// Burada qt soketine write yapılacak
	if(data == "1"){
		c.write("1");
	}else{
		c.write("0");
	}
	});


});


