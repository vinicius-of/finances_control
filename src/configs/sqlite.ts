import Database from 'better-sqlite3';
import '@dotenvx/dotenvx/config';
import path from 'path';

const pathDbDir = path.resolve(
  process.cwd(),
  `db/${process.env.SQLITE_DATABASE_DIR}`,
);

const database = new Database(pathDbDir);

console.log('Saving database at ', pathDbDir);
