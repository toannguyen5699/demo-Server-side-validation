var express = require('express');

var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();



router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', validate.postCreate, controller.create);

router.get('/:id', controller.get);


router.post('/create', controller.postCreate);

module.exports = router;