#! /usr/bin/env node

import { Client } from 'pg';

import { DATABASE_URL } from '#root/constants.js';

const SQL = ``;

async function populateModel(databaseUrl, sql) {
	console.log('Seeding...');

	const client = new Client({ connectionString: databaseUrl });

	await client.connect();
	await client.query(sql);
	await client.end();

	console.log('Done');
}

populateModel(DATABASE_URL, SQL);
