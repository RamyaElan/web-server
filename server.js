var express = require('express');
var app = express();
var port = process.env.PORT || 2000;



var middleware = require('./middleware.js')
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res){

    res.send('We are Awesome');


});
app.get('/about',function(req,res){

     res.send('We are Awesome');


 });

app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/project'));

app.listen(port,function(){

	console.log('Express server start at port' + port);
});
