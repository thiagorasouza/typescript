import "./module_e.ts";
import { MyDatabaseFunction } from "../db/my-database-function";

const db = MyDatabaseFunction;
db.add({ name: "Jack", age: 30 });
db.add({ name: "Daniels", age: 25 });
db.show();
