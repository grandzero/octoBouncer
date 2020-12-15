
console.log("welcome chatjs2");
var socket = io("http://localhost:40000");
console.log("Connection is okay");
console.log(socket);
// Query Dom
var btn = document.getElementById('bounce'),
    stop = document.getElementById('stop');

window.onload = function() {
  socket.emit('data',{position:0});
}
// Emit Events
btn.addEventListener('click',function(){
  //Emit Message
  try {
    console.log("Trying emmiting");
    socket.emit('data',{position : 1});
  }
  catch(err) {
  console.log(err);
  }

});
stop.addEventListener('click',function(){
  //Emit Message
  try {
    console.log("Trying emmiting");
    socket.emit('data',{position : 0});
  }
  catch(err) {
  console.log(err);
  }

});

socket.on('data',function(data){
  document.getElementById("circle").setAttribute("r",data.R);
});
