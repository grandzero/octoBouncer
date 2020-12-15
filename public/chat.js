//Make connection
//var PORT = process.env.PORT || 40000;
//var socket = io.connect("http://localhost:"+PORT);
console.log("welcome chatjs");
var socket = io("http://localhost:40000");
console.log("Connection is okay");
console.log(socket);
// Query Dom
var btn = document.getElementById('bounce'),
    stop = document.getElementById('stop');

window.onload = function() {
  socket.emit('chat',{position:0});
}
// Emit Events
btn.addEventListener('click',function(){
  //Emit Message
  try {
    console.log("Trying emmiting");
    socket.emit('chat',{position : 1});
  }
  catch(err) {
  console.log(err);
  }

});
stop.addEventListener('click',function(){
  //Emit Message
  try {
    console.log("Trying emmiting");
    socket.emit('chat',{position : 0});
  }
  catch(err) {
  console.log(err);
  }

});



// Listen for Events
socket.on('chat',function(data){
  output.innerHTML += "X : "+data.X + " Y:" + data.Y + " Z:" + data.Z + " R:" + data.R;
});
