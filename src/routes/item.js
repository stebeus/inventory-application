import { Router } from 'express';

import { getItem } from '#root/controllers/item.js';

const router = Router();

router.get('/:categoryId/:itemId', getItem);

export { router as item };
