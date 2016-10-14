/**
 * Created by iMorice on 24.10.15.
 */
var express = require('express');
var router = express.Router();

var players = require('../controllers/PlayerController.js');

/* GET /players */
router.get('/', players.get);

/* GET /players/number */
router.get('/:number', players.show);

/* POST /players */
router.post('/', players.post)

/* POST /players/number */
router.put('/:number', players.put);

module.exports = router;
