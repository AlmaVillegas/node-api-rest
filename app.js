var express= require("express"),
    app= express(),
    bodyParser=require("body-parser"),
    methodOverride=require("method-override");
    mongoose= require("mongoose");
    
    //connection data base
    const mongodb_conn_module = require('./Connection/MongoConnection');
    var db = mongodb_conn_module.connect();

    //Middlewares
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    //import Models and Controllers
    var models= require('./models/TVShow')(app, mongoose);
    var TVShowCtrl= require('./controllers/tvshows');
    
    var router = express.Router();
    router.get('/', function(req, res){
        res.send("Hello World!");
    });
    app.use(router);

    var tvshows= express.Router();

    tvshows.route('/tvshows')
        .get(TVShowCtrl.findAllTVShow)
        .post(TVShowCtrl.addTVShow);
         
    tvshows.route('/tvshow/:id')
        .get(TVShowCtrl.findById)
        .put(TVShowCtrl.updateTVShow)
        .delete(TVShowCtrl.deleteTVShow);
    
    app.use('/api', tvshows);

 //start server
    app.listen(3000, function(){
        console.log("Node Server Running on http://172.16.214.82:3000");
    });
    
