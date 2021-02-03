# Rangga's Express API Boilerplate

## Stacks
- Framework: Express JS
- ORM: TypeORM
- DB: PostgreSQL

## How to Install
0. Clone this repo
1. `cd <cloned_dir>`
2. `npm i`
3. `cp env.example .env`
4. fill your .env settings with these
```
PORT="3000"

DB_HOST="localhost"
DB_PORT="5432"
DB_USERNAME="<your postgres username>"
DB_PASSWORD="<your postgres password>"
DB_NAME="<your db name>"

JWT_SECRET="12asdj21312j3"
```
5. Create a PostgreSQL database with name that you specifies in .env
6. `npm run dev` -> running this first time will generate the tables
7. `Ctrl + c` -> Terminate current running server
8. `npm run migrate` -> to execute seed user & role data
9. `npm run dev` -> run the server again

## How to run
1. `npm run dev`
2. `npm run test`
