import "./module_c.ts";
import { MyDatabaseModule } from "../db/my-database-module";

const db = MyDatabaseModule;
db.add({ name: "Jack", age: 30 });
db.add({ name: "Daniels", age: 25 });
db.show();
