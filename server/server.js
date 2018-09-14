const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "adi@kosh.com",
    text: "You are awesome !",
    createdAt: 1234
  });

  socket.on("createMessage", message => {
    console.log("createMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

server.listen(port, () => console.log(`Server is up on port ${port}...`));
