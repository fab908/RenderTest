// Controller = routers
var express = require('express');
var router = express.Router();

/* GET home page. */
// GET handler for // < root of the site
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
// GET HANDLER FOR //about
// Considering About is a page part of Landing Section
router.get('/about', (req, res, next) =>{
  // first parameter is a view name
  // second is json object with data for the view
  res.render('about', {title: 'About Us'});
})*/
module.exports = router;
