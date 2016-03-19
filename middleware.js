
var middleware={
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

module.exports = middleware;