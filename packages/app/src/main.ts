import * as http from 'http';
import { spaHandler } from './spaHandler';
import {join} from 'path';

function bootstrap() {
  const port = 3000;
  http.createServer(spaHandler(join(process.cwd(), 'public')))
    .listen(port)
    .on('listening', err => {
      if (err) {
        throw new Error(err)
      }
      console.log(`listen on http://127.0.0.1:${port} …`);
    })
}

bootstrap();
