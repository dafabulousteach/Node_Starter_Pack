var Hapi = require('hapi'); // You'll need this to get Hapi running
var path = require('path'); // used to make your file paths easier to find
/*REQUIRE STATEMENTS GO HERE*/
/*
var fileName = require(path.resolve('/folder/subfolder'));
*/

var server = new Hapi.Server();

server.connection({
  port: 3000 || PROCESS.ENV,
  host: 'localhost'
});

// This will serve up a page at your root path
server.route({
  path: '/',
  method: 'GET',
  //handler: /*define if youre gonna serve up a static page to display your home page or a method to get your homepage*/
});

// This route is needed to load your CSS, bootstrap, or other assets for your front end page
// This requirement in Hapi frustrates devs like me
server.route({
  path: '/assets/{path*}',
  method: 'GET',
  handler: {
    directory: '/assets'
  }
});

// Get that Hapi server running or throw an error
server.start(function(err){
  if(err){
    return console.log('The error with your server is: ', err);
  } else {
    console.log('Listening on ', server.info.uri);
  }
});
