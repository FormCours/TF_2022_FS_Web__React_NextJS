import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'

// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'data.json')

const defaultData = { books: [] }
const db = new LowSync(new JSONFileSync(file), defaultData);

export default db;