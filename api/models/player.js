/**
 * Created by iMorice on 24.10.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    name: String,
    position: String,
    height: String,
    age: Number,
    number: Number,
    ranger: String,
    volleyballSince: Number,
    tvrSince: Number,
    image: String,
    active: Boolean
});

PlayerSchema.statics = {
    load: function(number, cb){
        this.findOne({number: number}).exec(cb);
    }
};

mongoose.model('Player', PlayerSchema);