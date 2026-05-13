import { Router } from 'express';

import { getIndex } from '#root/controllers/index.js';

const router = Router();

router.get('/', getIndex);
router.get('/:categoryId/', getIndex);

export { router as index };
