import path from 'node:path';

const globalPath = path.join(process.cwd());

export const PATH_DB = path.join(globalPath, 'src', 'db', 'db.json');
