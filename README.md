# company-management-ts
Simple company teams and employees management app.

## To test the project live

https://company-employees-management.vercel.app/

Keep in mind backend is on render free version and it goes to sleep mode after 15 minutes of inactivity, so just wait for a few seconds!

## To run localy:

## Installation

```bash
npm install
```

To install dependancies you must be in root directory of client and server.

cd/client, 
cd/server

## Usage server

You have to replace your DB url in 'data/kenxfile.ts/ or in your local .env file create variable and name it 'DB_URL'

You can use this one just for the test: postgres://wawjatbn:UdJheMNpxa7rtOvZjeSlCnxFkk8qs_vc@mouse.db.elephantsql.com/wawjatbn

Seeds and migrations are already done in the provided database! If you use your own you have to seed and migrate your data, for referance use [Knex](https://knexjs.org/guide/migrations.html#migration-cli).
<br> To start the server.
```bash
npx ts-node src/index.ts
```

## Usage client

```bash
npm start
```

