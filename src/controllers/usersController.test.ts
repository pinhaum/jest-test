import { Request } from 'express';
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from './usersController';

describe('Users Controller', () => {
  const usersController = new UsersController();

  const mockRequest = {} as Request;
  const mockResponse = makeMockResponse();

  it('deve listar os usuários', () => {
    usersController.getUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toHaveLength(0);
  });

  it('deve criar um novo usuário', () => {
    mockRequest.body = {
      name: 'user',
    };

    usersController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      mensagem: `User user criado`,
    });
  });

  it('não deve criar usuário em branco', () => {
    mockRequest.body = {
      name: '',
    };

    usersController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(403);
    expect(mockResponse.state.json).toMatchObject({
      mensagem: `É preciso um 'nome' para enviar`,
    });
  });
});
