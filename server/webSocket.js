const ws = require("ws");

const wss = new ws.Server(
  {
    port: 5000,
  },
  () => console.log(`Server started on 5000`)
);

wss.on("connection", function connection(ws) {
  //   ws.send("New user connected");
  ws.on("message", function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case "message":
        broadcastMessage(message);
        break;
      case "connection":
        broadcastMessage(message);
        break;
    }
  });
});

function broadcastMessage(message, id) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}

// Private chat rooms

// function broadcastMessage(message, id) {
//   wss.clients.forEach((client) => {
//     if (client.id === id) {
//       client.send(JSON.stringify(message));
//     }
//   });
// }

// Message structure

// const message = {
//   event: "message/connection",
//   id: 123,
//   date: "30.05.2023",
//   username: "Master",
//   message: "Hello in chat",
// };
