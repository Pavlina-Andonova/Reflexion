var express = require('express');
var router = express.Router();

var indexData = require('../database/homepage.json');
var aboutUsData = require('../database/aboutUsData.json');
var bandData = require('../database/band.json');
var videosData = require('../database/videosData.json');
var galleryData = require('../database/galleryData.json');
var awardsData = require('../database/awardsData.json');
var contactsData = require('../database/contactsData.json');

/* GET Home page. */
router.get('/', function (req, res, next) {
    res.render('pages/index', indexData);
});

/* GET About Us page. */
router.get('/about-us', function (req, res, next) {
    res.render('pages/about-us', aboutUsData);
});

/* GET Band page. */
router.get('/band', function (req, res, next) {
    res.render('pages/band', bandData);
});

/* GET Videos page. */
router.get('/videos', function (req, res, next) {
    res.render('pages/videos', videosData);
});

/* GET Gallery page. */
router.get('/gallery', function (req, res, next) {
    res.render('pages/gallery', galleryData);
});

/* GET Awards page. */
router.get('/awards', function (req, res, next) {
    res.render('pages/awards', awardsData);
});

/* GET Contact page. */
router.get('/contacts', function (req, res, next) {
    res.render('pages/contacts', contactsData);
});

module.exports = router;