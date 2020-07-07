import { Router, Request, Response } from 'express';
import multer from 'multer';
import configMulter from '@utils/multer';
import AWS from 'aws-sdk';
import crypto from 'crypto';

class FileController {
  public path = '/file';

  public router = Router();

  private uploadMiddleware = multer(configMulter);

  private s3 = new AWS.S3({
    region: 'us-east-1',
    accessKeyId: 'AKIA443QRMCUX6F5K6NY',
    secretAccessKey: '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',
  });

  private users: string[] = [
    'leonardo',
    'grandi',
  ];

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(`${this.path}/upload`, this.uploadMiddleware.single('file'), this.upload);
  }

  upload = async (request: Request, response: Response) => {
    // const res = await UserClient.getUserById({ id: '23' });

    try {
      const data = await this.s3.upload({
        Bucket: 'supreme-octo',
        ContentType: request.file.mimetype,
        Key: `${crypto.randomBytes(16).toString('hex')}`,
        ACL: 'private',
        Body: request.file.buffer,
      }).promise();

      response.send(data);
    } catch (error) {
      response.send(error);
    }
  }
}

export default FileController;
