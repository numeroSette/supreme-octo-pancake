import { Router, Request, Response } from 'express';

class UserController {
  public path = '/';

  public router = Router();

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

  getAllUsers = (request: Request, response: Response) => {
    response.send(this.users);
  }
}

export default UserController;
