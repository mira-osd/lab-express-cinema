const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(films => {
    res.render('movies', {
      allmovies: films
    })
  })
  .catch(err => console.log(err))
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id})
    .then(theMovie => {
      res.render('movie-details', { movie: theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

module.exports = router;
