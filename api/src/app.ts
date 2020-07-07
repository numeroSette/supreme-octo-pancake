import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
  public app: express.Application;

  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.controllers(controllers);
  }

  private middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private controllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
