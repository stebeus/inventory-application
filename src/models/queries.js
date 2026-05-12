import { pool } from './pool.js';

const insertCategory = async (name) =>
	await pool.query(`INSERT INTO categories (name) VALUES (${name})`);

const createCategory = async (name, categoryId) =>
	await pool.query(`
		CREATE TABLE ${name} (
			id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(25),
			description VARCHAR (250),
			category_id INTEGER REFERENCES categories (${categoryId})
		)
	`);

const insertItem = async (tableName, name, description, categoryId) =>
	await pool.query(`
		INSERT INTO ${tableName} (name, description, categoryId)
		VALUES (${name}, ${description}, ${categoryId})
	`);

async function getAllCategories() {
	const { rows } = await pool.query('SELECT * FROM categories');
	return rows;
}

async function getItem(tableName, name) {
	const { rows } = await pool.query(
		`SELECT * FROM ${tableName} WHERE ${categoryName}.name = ${name}`,
	);

	return rows;
}

async function getAllItems(name) {
	const { rows } = await pool.query(`SELECT * FROM ${name}`);
	return rows;
}

const updateCategory = async (name, id) =>
	await pool.query(`UPDATE categories SET name = ${name} WHERE id = ${id}`);

const updateItem = async (tableName, name, description, id) =>
	await pool.query(
		`UPDATE ${tableName} SET name = ${name}, description = ${description} WHERE id = ${id}`,
	);

const deleteCategory = async (id) =>
	await pool.query(`DELETE FROM categories WHERE categories.id = ${id}`);

const deleteItem = async (id) => await pool.query(`DELETE FROM items WHERE items.id = ${id}`);

export {
	createCategory,
	deleteCategory,
	deleteItem,
	getAllCategories,
	getAllItems,
	getItem,
	insertCategory,
	insertItem,
	updateCategory,
	updateItem,
};
