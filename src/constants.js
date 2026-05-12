import { loadEnvFile } from 'node:process';

try {
	loadEnvFile();
} catch (error) {
	console.error(error);
}

export const { DATABASE_URL, PORT = 3000 } = process.env;
