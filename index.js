const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8085 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if (message == 'SALIR') {
      console.log('Hola: %s', message);
    }
  });
});

