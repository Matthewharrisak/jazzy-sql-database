const express = require('express');
const router = express.Router();
const pg = require('pg');

// static content. this will be replaced with a database table
const Pool = pg.Pool;

const pool = new Pool({
    database: 'jazzy_ajax', // name of our database
    host: 'localhost', // where is your database?
    port: 5432, // this is the default port
    max: 10, // number of connections
    idleTimeoutMillis: 10000 // 10 seconds
});


router.get('/', (req, res) => {
    console.log(`In /songs GET`);

    let quertyText = `SELECT * FROM "song";`;
    pool.query(quertyText).then((result) =>{
        res.send(result.rows); 
    }).catch((error) =>{
        console.log(`error in GET / song ${error}`);
        res.sendStatus(500);
    });
});



pool.on('connect', () => {
    console.log("Postgresql Connected");
} );
router.post('/', (req, res) => {
    
    res.sendStatus(201);
});


module.exports = router;