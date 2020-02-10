const express = require("express"); // using express
const socketIO = require("socket.io");
const http = require("http");
const port = process.env.PORT || 4000; // setting the port
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

// make connection with user from server side
io.on("connection", socket => {
  console.log("New user connected");
  //emit message from server to user

  //   // listen for message from user
  socket.on("createMessage", newMessage => {
    if (newMessage.includes("Paras")) {
      socket.emit("newMessage", "nice guy");
    } else socket.emit("newMessage", "Sorry I am not trained for this!");
  });

  // when server disconnects from user

  socket.on("disconnect", () => {
    console.log("disconnected from user");
  });
});

server.listen(port, () => {
  console.log("server started!");
});
