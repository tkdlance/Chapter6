var ntwitter = require("ntwitter"),
	credentials = require("./credentials.json"),
	twitter;
	
// set up the twitter object
twitter = ntwitter( credentials ); 

// set up our twitter stream
twitter.stream(
	//the first parameter is a string
	"statuses/filter",
	//the second parameter is the obejct that we are looking for
	{"track": ["awesome", "cool", "rad", "gnarly", "groovy"]}
	,
	function( stream ){
		stream.on("data", function( tweet) {
			console.log(tweet.text);
		});
	}); 
	
	//"awesome", "cool", "rad", "gnarly", "groovy"