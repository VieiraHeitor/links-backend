const express = require('express');

const router = express.Router();

router.get('/signin', (req, res)=> {
    return res.json('sign In')
});

router.get('/signup', (req, res)=> {
    return res.json('sign up')
});

module.exports = router;