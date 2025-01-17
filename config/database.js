const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

function connectWithRetry() {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Failed to connect to database, retrying...', err);
            // console.log(`Listening on port ${process.env.PO}`)
            setTimeout(connectWithRetry, 5000); // Coba lagi setelah 5 detik
        } else {
            console.log(`Connected to MySQL Database: ${process.env.DB_DATABASE}`);
            connection.release(); // Lepaskan koneksi setelah berhasil
        }
    })
}

connectWithRetry()

module.exports = db;