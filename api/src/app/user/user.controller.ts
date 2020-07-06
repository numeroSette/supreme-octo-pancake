import { Router, Request, Response } from 'express';
// import UserClient from './user.service';

class UserController {
  public path = '/user';

  public router = Router();

  private users: string[] = [
    'leonardo',
    'grandi',
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(`${this.path}/:id`, this.show);
  }

  show = async (request: Request, response: Response) => {
    // const res = await UserClient.getUserById({ id: '23' });
    response.send(this.users);
  }
}

export default UserController;
