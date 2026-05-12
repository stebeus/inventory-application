const queryCreateTable = (name, columns) => `
	CREATE TABLE ${name} IF NOT EXISTS (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		${columns}
	)
`;

const queryDropTable = (name) => `DROP TABLE IF EXISTS ${name}`;

const queryInsert = (table, columns, values) =>
	`INSERT INTO ${table} ${columns} VALUES ${values}`;

const querySelect = (table, columns = '*', condition) => {
	const hasCondition = condition == null ? '' : `WHERE ${condition}`;
	return `SELECT FROM ${columns} FROM ${table} ${hasCondition}`;
};

const queryUpdate = (table, columns, condition) =>
	`UPDATE ${table} SET ${columns} WHERE ${condition}`;

const queryDelete = (table, condition) =>
	`DELETE FROM ${table} WHERE ${condition}`;

export {
	queryCreateTable,
	queryDelete,
	queryDropTable,
	queryInsert,
	querySelect,
	queryUpdate,
};
