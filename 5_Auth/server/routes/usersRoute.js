const router = require('express').Router();
const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/users', async (req, res) => {
    const users = await User.query()/* .column('first_name', 'username') */.select().eager('addresses');
    res.json(users);
});

router.post('/users/login', async(req, res) => {
    // todo get username and get from mysql
    const users = await User.query().select().where({ username: req.body.username }).limit(1);
    const user = users[0];
 
    if (user) {
        bcrypt.compare(req.body.password, user.password, (error, response) => {
            if (error) {
                res.status(500).json({ response: "Problem hashing the password" });
            }
            if (response === true) {
                res.status(200).json({"response ": "Nice"});
            } else {
                res.status(400).json({"response ": "User missing"});
            }
        });
    } else {
        res.status(401).json({"response": "User missing"});
    }
});

router.post('/users/signup', (req, res) => {
    // todo validate the input
    if (req.body.username && req.body.password) {
        bcrypt.hash(req.body.password, saltRounds, async (error, hash) => {
            if (error) {
                res.status(500).json({ response: "Problem hashing the password" });
            }
            const newUser = { ...req.body, password: hash };
            const { username} = await User.query().insert(newUser);
            res.status(200).send({ });
        });
    } else {
        res.status(400).json({ response: "Missing password" });
    }
});

router.put('/users', async (req, res) => {
    res.send();
})

router.delete('/users', async (req, res) => {
    res.send();
})

module.exports = router;