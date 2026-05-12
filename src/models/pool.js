import { Pool } from 'pg';

import { DATABASE_URL } from '#root/constants.js';

export const pool = new Pool({ connectionString: DATABASE_URL });
