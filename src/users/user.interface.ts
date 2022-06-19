export interface User {
  username: string;
  hobbies: string;
  age: number;
}

export interface UserID extends User {
  id: number;
}