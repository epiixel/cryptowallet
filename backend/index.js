import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import util  from 'util';
import mysql from 'mysql';
import https from 'https';
import http from 'http';
import './express/index.js';
import './mysql/index.js';
import './post/index.js'
import './ipfs/index.js' 
import './stripe/index.js'

dotenv.config();


