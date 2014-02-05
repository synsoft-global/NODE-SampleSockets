 
var fs = require('fs'), http = require('http'), socketio = require('/Users/dev4/node_modules/socket.io/index.js');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(fs.readFile(__dirname + '/index.html'));	
	}).listen(1616, function () { 
});

 socketio = socketio.listen(server).on('connection', function (socket) 
 {
    socket.on('message', function (msg)
	{
	 var message = eval('(' + msg + ')');	 
        switch (message.Type) 
		{
			case 1:
			var sendmsg = {} ;		
			sendmsg.ans="connected";
			sendmsg.Type=message.Type;
			socket.emit('message', sendmsg);		
			socket.broadcast.emit('message', sendmsg);		
			break;
			case 2:
			var  SendMsg = {};		
			SendMsg.Type=message.Type;
			SendMsg.msg = message.value;
			socket.emit('message', SendMsg);
			socket.broadcast.emit('message', SendMsg);		
			break;
			case 3:
			var  SendMsg = {};		
			SendMsg.Type=message.Type;
			SendMsg.msg = message.value;		
			socket.broadcast.emit('message', SendMsg);		
			break;		
		}	
	})
})