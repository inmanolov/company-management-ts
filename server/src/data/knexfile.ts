// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import dotenv from 'dotenv';
dotenv.config();

const development = {
  client: 'pg',
  connection: process.env.DB_URL,
  migrations: {
    directory: './migrations',
  },
  seeds: { directory: './seeds' },
};
const testing = {
  client: 'pg',
  connection: process.env.DB_URL,
  migrations: {
    directory: './migrations',
  },
  seeds: { directory: './seeds' },
};
const production = {
  client: 'pg',
  connection: process.env.DB_URL,
  migrations: {
    directory: './migrations',
  },
  seeds: { directory: './seeds' },
};


export default {
  development,
  production,
  testing,
}

