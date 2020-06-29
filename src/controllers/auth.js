const express = require('express');
const bcrypt = require('bcrypt');

const {Account} = require('../models');

const router = express.Router();

const saltRounds = 10;

router.get('/signin', (req, res)=> {
    return res.json('sign In')
});

router.get('/signup', async (req, res)=> {
    const email ='heitormaveiro@yahoo.com.br';
    const password = '123456';

    const hash = bcrypt.hashSync(password, saltRounds);

    const result = await Account.create({email, password: hash});
    return res.json(result);
});

module.exports = router;