const express = require( 'express' );
const cors = require( 'cors' );

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usrPath = '/api/users';

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use( cors() );
    
    // Body Parse
    this.app.use( express.json() );
    
    // Public
    this.app.use( express.static( 'public' ) );
  }
  
  routes() {
    this.app.use( this.usrPath, require( '../routes/users.route' ) );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( 'Listening on port:', this.port );
    });
  }
}

module.exports = Server;
