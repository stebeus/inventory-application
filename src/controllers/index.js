import { queryDb, select } from '#root/db/queries.js';
import { formatToKebabCase } from '#root/utils/formatters.js';

const getIndex = async (req, res) => {
	const categories = await queryDb(select, '*', 'categories');

	const {
		params: { categoryId = 'Blocks' },
	} = req;
	const items = await queryDb(select, '*', categoryId);

	res.render('index', {
		title: categoryId,
		categories,
		items,
		formatToKebabCase,
	});
};

export { getIndex };
