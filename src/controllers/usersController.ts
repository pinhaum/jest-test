import { Request, Response } from 'express';
import { database as data } from '../database';

export class UsersController {
  createUser(req: Request, res: Response): Response {
    const { name } = req.body;

    if (name.length < 1) {
      return res
        .status(403)
        .json({ mensagem: `É preciso um 'nome' para enviar` });
    }

    data.push(name);
    return res.status(201).json({ mensagem: `User ${name} criado` });
  }

  getUser(req: Request, res: Response): Response {
    return res.status(200).json(data);
  }
}
