#! /usr/bin/env node

import { Client } from 'pg';

import { DATABASE_URL } from '#root/constants.js';

import { createTable } from './queries.js';

const SQL = createTable(
	'categories',
	`name VARCHAR (25) NOT NULL,
	timestamp TIMESTAMPTZ DEFAULT NOW()`,
);

async function populateModel(databaseUrl, sql) {
	console.log('Seeding...');

	const client = new Client({ connectionString: databaseUrl });

	await client.connect();
	await client.query(sql);
	await client.end();

	console.log('Done');
}

populateModel(DATABASE_URL, SQL);
