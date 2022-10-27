import { MyDatabaseClassic } from "../db/my-database-classic";

const db = MyDatabaseClassic.instance;
db.add({ name: "John", age: 30 });
db.add({ name: "Doe", age: 25 });
// db.show();

export { db };
