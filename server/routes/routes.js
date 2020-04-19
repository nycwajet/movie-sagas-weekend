const express = require ('express');
const pool = require ('../modules/pool');
const router = express.Router();

//router to get all the movies from database
router.get('/', (req, res)=>{
    let queryText = 'SELECT * FROM "movies";';
    console.log('Gettin all the movies', req.res);
    pool.query(queryText).then(result =>{
        console.log(result.row);
        res.send(result.row);
    }).catch(error=>{
        console.log('issue getting all movies', error);
        res.sendStatus(500);
    })
})

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies" WHERE "id"=$1;`
    console.log('in router.get', req.params.id)
    pool.query(queryText, [req.params.id])
    .then( result => {
      console.log(result.rows)
        res.send(result.rows)
    }).catch( error => {
        console.log('error in  GET', error)
        res.sendStatus(500);
    })
  })

module.exports = router;