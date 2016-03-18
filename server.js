var express = require('express');
var app = express();
var PORT = 3000;

var middelware={
	requireAuthentication:function(req,res,next){
		console.log('private route hit!');
		next();
	},
	logger: function(req,res,next){
		var ladate = new Date().toString();
		console.log('Request : '+req.method+' '+req.originalUrl+' '+ ladate);
		next();
	}
};

 app.use(middelware.logger);

app.get('/about',middelware.requireAuthentication, function(req,res){
	res.send('About us!');
});

  app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started on '+ PORT+'!');
});