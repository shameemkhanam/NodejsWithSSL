const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/', (req, res, next)=>{
    res.send('Hello from SSL server!')
});

//CREATE SSL SERVER
const sslServer = https.createServer({
    key:fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app);

sslServer.listen(4500, ()=>{
    console.log('Secure server on port 4500');
});