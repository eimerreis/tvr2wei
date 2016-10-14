/**
 * Created by iMorice on 24.10.15.
 */
require('../models/player');
var mongoose = require('mongoose');
var Player = mongoose.model("Player");
var _ = require('underscore');

exports.post = function(req, res){
    var player = new Player(req.body);
    player.save();
    res.jsonp(player);
}


exports.get = function(req, res){
    Player.find().exec(function(err, players){
        res.jsonp(players);
    });
}

exports.show = function(req, res){
    Player.load(req.params.number, function(err, player){
        res.jsonp(player);
    });
}

exports.put = function(req, res){
    Player.load(req.params.number, function(err, player){
        player = _.extend(player, req.body);
        player.save(function(err){
           res.jsonp(player);
        });
    });
}