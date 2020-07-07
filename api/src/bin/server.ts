import UserController from '@user/user.controller';
import FileController from '@file/file.controller';
import App from '../app';

const app = new App(
  [
    new UserController(),
    new FileController(),
  ],
  3000,
);

app.listen();
