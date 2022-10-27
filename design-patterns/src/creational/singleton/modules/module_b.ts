import "./module_a.ts";
import { MyDatabaseClassic } from "../db/my-database-classic";

const db = MyDatabaseClassic.instance;
db.add({ name: "Jack", age: 30 });
db.add({ name: "Daniels", age: 25 });
db.show();
