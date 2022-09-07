import { User, UserID  } from "./user.interface";
import { Users } from "./users.interface";

/* In-memory story */

let users: Users = {
  1: {
    id: 1,
    username: 'Igor',
    hobbies: 'footbal',
    age: 25,
  },
  2: {
    id: 2,
    username: 'Ivan',
    hobbies: 'games',
    age: 30,
  },
  3: {
    id: 3,
    username: 'Anton',
    hobbies: 'reading',
    age: 21,
  },
}

/* Service methods */

export const findAll = async (): Promise<UserID[]> => Object.values(users);
export const find = async (id: number): Promise<UserID> => users[id];

export const createUser = async (newUser: User): Promise<UserID> => {
  const id = new Date().valueOf();

  users[id] = {
    id,
    ...newUser
  };

  return users[id];
};

export const updateUser = async (id: number, userUpdate: User): Promise<UserID | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  users[id] = {
    id,
    ...userUpdate
  };

  return users[id];
};

export const deleteUser = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  delete users[id];
};