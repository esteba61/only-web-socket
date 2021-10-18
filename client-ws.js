const ws = new WebSocket('ws://localhost:8085/');

ws.onopen = function() {
    console.log('WebSocket Client Connected');
    ws.send('SALIR');
};

ws.onmessage = function(e) {
  console.log("Received: '" + e.data + "'");
};


