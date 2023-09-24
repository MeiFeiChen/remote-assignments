// get the client
import mysql from 'mysql2';


import dotenv from 'dotenv';
dotenv.config()

// create the connection to database
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, 
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUser(email) {
    const [user] = await pool.query(`
    SELECT *
    FROM user
    WHERE email= ?  
    `, [email]) 
    return user[0] 
}

// create 
export async function createUser(email, password) {
    await pool.query(`
    INSERT INTO user (email, password)
    VALUES(?, ?)
    `, [email, password])
}