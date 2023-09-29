import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";

// deixa legível
sqlite3.verbose();

const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
// cria a database
const Database = new sqlite3.Database(filePath);

export default Database;