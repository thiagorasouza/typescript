import { MyDatabaseFunction } from "../db/my-database-function";

const db = MyDatabaseFunction;
db.add({ name: "John", age: 30 });
db.add({ name: "Doe", age: 25 });
// db.show();

export { db };
