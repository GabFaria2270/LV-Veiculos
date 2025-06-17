import mysql from 'mysql2/promise';
import { db } from '../config/config.js';

const pool = mysql.createPool({
    host: db.host,
    user: db.user,
    database: db.name,
    password: db.password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 50,
    connectTimeout: 10000
});

export default pool;