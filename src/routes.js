import { Router } from 'express';

const routes = Router();

const data = [];

routes.get('/users', (req, res) => {
  return res.status(200).json(data);
});

routes.post('/users', (req, res) => {
  const { name } = req.body;

  if (name.length < 1) {
    return res
      .status(403)
      .json({ mensagem: `É preciso um 'nome' para enviar` });
  }

  data.push(name);
  return res.status(201).json({ mensagem: `User ${name} criado` });
});

export { routes };
