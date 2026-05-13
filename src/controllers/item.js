import { queryDb, select } from '#root/db/queries.js';
import { formatToKebabCase } from '#root/utils/formatters.js';

const getItem = async (req, res) => {
	const {
		params: { categoryId, itemId },
	} = req;
	const [item] = await queryDb(select, '*', categoryId, `name = '${itemId}'`);

	res.render('item', { title: item.name, item, formatToKebabCase });
};

export { getItem };
