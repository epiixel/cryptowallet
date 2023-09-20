import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';
import fs from 'fs';
import sqlinjection from  'sql-injection';

export const app = express();
export const PORT_HTTPS = 5001;
export const PORT_HTTP = 5002;

// export var options = {
//   key: fs.readFileSync('ssl/key.pem'),
//   cert: fs.readFileSync('ssl/cert.pem')
// };


app.use(express.static("public"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.options("*", cors())





const allowedDomains = ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://161.35.212.141:3000', 'http://161.35.212.141:4000', 'https://hticoin.com', 'https://admin.hticoin.com'];
app.use(cors({ origin: allowedDomains, credentials: true }));


// app.use(sqlinjection);  // add sql-injection middleware here


http.createServer(app).listen(PORT_HTTP, () => { console.log("Listening HTTP")});
// https.createServer(options, app).listen(PORT_HTTPS, () => { console.log("Listening SSL")});