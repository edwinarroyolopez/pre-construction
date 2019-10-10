'use strict'
const { Pool } = require('pg')
const {
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

const posgresUrl = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
const pool = new Pool({connectionString: posgresUrl})

/*
const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
  })
  */


//  pool.connect((err, client, release) => {
//     if (err) {
//       return console.error('Error acquiring client', err.stack)
//     }



// let connection 


//     try {
//         client = await client.connect(mongoUrl, {
//             useNewUrlParser: true
//         })

//         client.connect(err => {
//             if (err) {
//               console.error('connection error', err.stack)
//             } else {
//               console.log('connected')
//             }
//           })

//         connection = client
//     } catch (error) {
//         console.error('Could not connect to db', mongoUrl, error)
//         process.exit(1)
//     }
    
//     return connection
// } 

module.exports = pool