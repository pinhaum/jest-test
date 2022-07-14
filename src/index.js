import express from 'express';
import { routes } from './routes.js';

const server = express();
server.use(express.json());
server.use(routes);

server.listen(5000, () => {
  console.log('Server init!!!');
});
