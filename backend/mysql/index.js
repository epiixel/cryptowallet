import dotenv from 'dotenv';
import util  from 'util';
import mysql from 'mysql2';

dotenv.config();

var db_config = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  }; 


const connMysql = mysql.createConnection(db_config);
export const query = util.promisify(connMysql.query).bind(connMysql);