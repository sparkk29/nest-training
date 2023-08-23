import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  testing(): any {
    return { text: 'Hello test world!' };
  }
}
