// import mysql from 'mysql2';
// import { app } from '../express/index.js';
// import { query } from '../mysql/index.js';
// import ipfsAPI from 'ipfs-api';
// import { create } from 'ipfs-http-client'

// const client = create()

// import fs from 'fs';
// import path from 'path';

// const ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'http'})
// // const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });


// const __dirname = path.resolve()
// let testFile = fs.readFileSync("assets/logo.png");
// let testBuffer = new Buffer.from(testFile);

// app.get('/addfile/', async (req, res) => {

// const { cid } = await client.add('Hello world!')
//     try{
//         // const added = await ipfs.add(file);
//         const file = fs.readFileSync("assets/logo.png");
//         const add = await ipfs.add({path: "assets/logo.png", content:file});
//         // const file = await ipfs.add("hello world");
//         console.log(add)
//         res.send({status: add})
//     }catch(err){
//         console.log(err)
//         res.send({
//             status:err
//         })
//     }

// })
// //Getting the uploaded file via hash code.
// app.get('/getfile', function(req, res) {
    
//     //This hash is returned hash of addFile router.
//     const validCID = 'HASH_CODE'

//     ipfs.files.get(validCID, function (err, files) {
//         files.forEach((file) => {
//           console.log(file.path)
//           console.log(file.content.toString('utf8'))
//         })
//       })

// })