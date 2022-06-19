import express, { Request, Response } from "express";
import * as UserService from './users.service';
import { User, UserID } from './user.interface';

/* Router Definition */
export const usersRouter = express.Router();

/**
 * Controller Definitions
 */

// GET users
usersRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users: User[] = await UserService.findAll();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET users/:userId

usersRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  
  try {
    const user: UserID = await UserService.find(id);
    if (user) {
      return res.status(200).send(user);
    }
    res.status(404).send('User not found');
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST users

usersRouter.post('/', async (req: Request, res: Response) => {
  try {
    const user: User = req.body;

    const newUser = await UserService.createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

// PUT users/:userId

usersRouter.put('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const userUpdate: UserID = req.body;

    const existingUser: UserID = await UserService.find(id);

    if (existingUser) {
      const updateUser = await UserService.updateUser(id, userUpdate);
      return res.status(200).json(updateUser);
    }

    const newUser = await UserService.createUser(userUpdate);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE users/:userId

usersRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await UserService.deleteUser(id);

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error);
  }
});
