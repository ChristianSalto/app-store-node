const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.productPath = '/products'
    this.cartPath = '/cart'

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use( express.json() );

    this.app.use( express.static('public') ) ;
  }

  routes() {
    this.app.use(this.productPath, require('../routes/product'));
    this.app.use(this.cartPath, require('../routes/cart'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
