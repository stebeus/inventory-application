import {
	queryCreateTable,
	queryDelete,
	queryInsert,
	querySelect,
	queryUpdate,
} from '#root/utils/queries.js';

import { pool } from './pool.js';

const createCategory = async (name, categoryId) => {
	const columns = `
		name VARCHAR (25),
		description VARCHAR (250),
		category_id INTEGER REFERENCES categories ${categoryId}
	`;

	const sql = queryCreateTable(name, columns);

	return await pool.query(sql);
};

const insertCategory = async (name) => {
	const sql = queryInsert('categories', '(name)', name);
	return await pool.query(sql);
};

const insertItem = async (tableName, name, description, categoryId) => {
	const sql = queryInsert(
		tableName,
		'(name, description, categoryId)',
		`(${name}, ${description}, ${categoryId})`,
	);

	return await pool.query(sql);
};

const getAllCategories = async () => {
	const sql = querySelect('categories');
	return await pool.query(sql);
};

const getItem = async (tableName, name) => {
	const sql = querySelect(tableName, `name = ${name}`);
	return await pool.query(sql);
};

const getAllItems = async (tableName) => {
	const sql = querySelect(tableName);
	return await pool.query(sql);
};

const updateCategory = async (name, id) => {
	const sql = queryUpdate('categories', `SET name = ${name}`, `id = ${id}`);
	return await pool.query(sql);
};

const updateItem = async (tableName, name, description, id) => {
	const sql = queryUpdate(
		tableName,
		`SET name = ${name}, description = ${description}`,
		`id = ${id}`,
	);

	return await pool.query(sql);
};

const deleteCategory = async (id) => {
	const sql = queryDelete('categories', `id = ${id}`);
	return await pool.query(sql);
};

const deleteItem = async (tableName, id) => {
	const sql = queryDelete(`${tableName}`, `id = ${id}`);
	return await pool.query(sql);
};

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
