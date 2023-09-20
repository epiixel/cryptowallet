
import mysql from 'mysql';
import { app } from '../express/index.js';
import { query } from '../mysql/index.js';
import fs from 'fs-extra';
import { generateUUID, base64_encode, isEmpty } from '../lib/index.js';

app.get(`/`, async (req, res) => {
    res.send("Welcome!")
})
