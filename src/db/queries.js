import { stringifyArray } from '#root/utils/arrays.js';

import { pool } from './pool.js';

const createTable = (name, columns) => `
	CREATE TABLE IF NOT EXISTS ${name} (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		${columns}
	)
`;

const dropTable = (name) => `DROP TABLE IF EXISTS ${name}`;

const insert = (table, columns, ...values) => {
	const parsedValues = values.map(stringifyArray).toString();
	return `INSERT INTO ${table} (${columns}) VALUES ${parsedValues}`;
};

const select = (columns, table, condition) => {
	const hasCondition = condition == null ? '' : `WHERE ${condition}`;
	return `SELECT ${columns} FROM ${table} ${hasCondition}`;
};

const update = (table, columns, condition) =>
	`UPDATE ${table} SET ${columns} WHERE ${condition}`;

const del = (table, condition) => `DELETE FROM ${table} WHERE ${condition}`;

const queryDb = async (command, ...parameters) =>
	await pool.query(command(...parameters));

export { createTable, del, dropTable, insert, queryDb, select, update };
