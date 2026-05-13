import { Pool } from 'pg';

import { DATABASE_URL } from '#root/constants.js';

const pool = new Pool({ connectionString: DATABASE_URL });

export { pool };
