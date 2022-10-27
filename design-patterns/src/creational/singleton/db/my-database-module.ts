import { User } from "../interfaces/user";

const users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    users.map((user) => console.log(user));
  },
};
