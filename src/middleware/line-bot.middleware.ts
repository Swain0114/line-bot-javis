import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LineBotMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('line events :>> ', JSON.stringify(req.body.events));

    next();
  }
}
