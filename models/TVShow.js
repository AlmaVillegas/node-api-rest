var mongoose = require('mongoose');

module.exports=()=>{


const tvshowSchema= mongoose.Schema({
    title: {type:String },
    year: {type:Number},
    country: {type:String},
    genre: {type:String}
}); 
    return mongoose.model('TVShow', tvshowSchema);
}