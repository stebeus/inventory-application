import { queryDb, select } from '#root/db/queries.js';

const getIndex = async (req, res) => {
	const categories = await queryDb(select, '*', 'categories');

	const {
		params: { category = 'Blocks' },
	} = req;
	const items = await queryDb(select, '*', category);

	res.render('index', { title: category, categories, items });
};

export { getIndex };
