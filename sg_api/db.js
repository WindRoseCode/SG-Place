import mysql from 'mysql';

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Boba$36523652",
  database: "sg_bd"
})