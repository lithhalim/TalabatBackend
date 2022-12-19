require('dotenv').config();
import { Client } from 'pg';
const connectionString = process.env.DATABASE_URL;


const Database = new Client({
  connectionString
})


Database.connect()


export default Database;
