import { promises } from 'fs';
import { join } from 'path';
import { IncomingMessage, ServerResponse } from 'http';

function normalizeUrl (url: string) {
  const endWithNoExt = /^(.*\/)?[^.]+$/.test(url)
  if (endWithNoExt) {
    return '/index.html'
  } else {
    return url
  }
}

export function spaHandler(direction: string) {
  return async function (req: IncomingMessage, res: ServerResponse) {
    let buf: Buffer;
    try {
      const url = normalizeUrl(req.url || '');
      buf = await promises.readFile(join(direction, url));
    } catch (err) {
      res.writeHead(404);
      console.error(err.message);
      return;
    }

    res.writeHead(200);
    res.end(buf);
  }
}