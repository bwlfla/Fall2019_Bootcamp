/* Add all the required libraries*/
var mongoose=require('mongoose'),
    Listing=require('./ListingSchema'),
    config=require('./config');

mongoose.set('useCreateIndex',true);
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri,{useNewUrlParser:true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name:'Library West'}, function(err, library){
    if(err) return handleError(err);
    console.log(library);
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndDelete({code:'CABL'},function(err,cable){
    console.log(cable);
    if(cable)
      console.log("Found CABL and deleted");
    else
      console.log("Code CABL not found");
   })
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
//updatePhelpsMemorial();
//retrieveAllListings();
