import { MyDatabaseModule } from "../db/my-database-module";

const db = MyDatabaseModule;
db.add({ name: "John", age: 30 });
db.add({ name: "Doe", age: 25 });
// db.show();

export { db };
