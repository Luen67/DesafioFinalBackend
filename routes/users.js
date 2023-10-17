const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
router.use(express.json());
router.use(express.urlencoded({extended:true})); 

router.post('/login', usersController.login);
router.post('/', usersController.post);


module.exports = router;