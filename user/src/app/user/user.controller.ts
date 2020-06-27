import express from 'express';

class UserController {
  public path = '/';

  public router = express.Router();

  private users: string[] = [
    'leonardo',
    'grandi',
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
  }

  getAllUsers = (request: express.Request, response: express.Response) => {
    response.send(this.users);
  }
}

export default UserController;
