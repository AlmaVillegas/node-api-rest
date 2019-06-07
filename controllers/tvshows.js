var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');

// find all
exports.findAllTVShow = function(req, res){
    TVShow.find(function(err, tvshow){
        if(err) res.send(500, err.message);

        console.log('GET/tvshows')
          res.status(200).json(tvshow);
    });
};
// find by Id
exports.findById= function(req, res){
    TVShow.findById(req.params.id, function(err, tvshow){
        if(err) return res.send(500, err.message);
        console.log('GET/tvshow' + req.params.id);
        res.status(200).json(tvshow);
    });
};

//insert 
exports.addTVShow= function(req, res){
    console.log('POST');
    console.log(req.body);
    var tvshow = new TVShow({
        title: req.body.title,
        year: req.body.year,
        country: req.body.genre
    });

    tvshow.save(function(err, tvshow){
        if(err) return res.status(500).send(err.message);
        res.status(200).json(tvshow);
    });
};

//update 
exports.updateTVShow= function(req,res){
    TVShow.findById(req.params.id, function(err, tvshow){
        tvshow.title= req.body.petId;
        tvshow.year = req.body.year;
        tvshow.country= req.body.country;
        tvshow.genre= req.body.genre;

        tvshow.save(function(err){
            if(err) return res.status(500).send(err.message);
            res.status(200).json(tvshow);
        });
    });
};

//delete 
exports.deleteTVShow = function(req, res ){
    TVShow.findById(req.params.id, function(err, tvshow){
        tvshow.remove(function(err){
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    })
}

