const WebSocket = require('ws');


const ws = new WebSocket('wss://ws.xtb.com/demo');
require('dotenv').config();


ws.on('error', console.error);

ws.on('open', function open() {
  console.log('connected');
  ws.send(`{
	"command": "login",
	"arguments": {
		"userId": "${process.env.USER_ID}",
		"password": "${process.env.PASSWORD}",
		"appId": "pro1",
		"appName": "pro1"
	}
}`);
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function message(data) {
  console.log(`message`, JSON.parse(data) );
});