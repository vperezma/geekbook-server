
'use strict';

var express = require('express'),
    router = express.Router(),
    _ = require('lodash'),
    userController = require('../../controllers/user');


router.route('/')
    .post(function(req, res){
        userController.create(req).then(function(user){
            res.json(user);
        }, function(err){
            res.json(err);
        })
    });


module.exports = router;