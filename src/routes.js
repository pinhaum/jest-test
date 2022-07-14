import { response, Router } from 'express';

const routes = Router();

const data = [];

routes.get('/users', (req, res) => {
  return res.status(200).json(data);
});

routes.post('/users', (req, res) => {
  const { name } = req.body;
  data.push(name);
  return res.status(201).json({ mensagem: `User ${name} created` });
});

export { routes };
