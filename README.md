# node_express_tutorial

Run eslint-
$ ./node_modules/.bin/eslint yourfile.js
$ ./node_modules/.bin/eslint src/* to select all files under src
$ ./node_modules/.bin/eslint src/*.js to select all files with .js extenstions directly under src

To save our database URL in the system environment. Your Database URL should be in the following format.

-postgress://{db_username}:{db_password}@{host}:{port}/{db_name}
e.g >- postgres://postgres:PASSWORD@127.0.0.1:5432/reflection_db

To compile the ES-6 code to ES-5, on the run use either babel-watch/babel-register. In this instance, we are using babel-watch as that is what was recommended by the course [tutor](https://www.codementor.io/olawalealadeusi896/building-a-simple-api-with-nodejs-expressjs-and-postgresql-db-masuu56t7)
other babel dependencies were also installed, please check package.json to view them.

Use babel-polyfill npm package. This is needed so that node runtime will recognise async/await and Promise.

#### process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
When the TYPE specified in the .env file is db, the ReflectionWithDB will run else it will run ReflectionWithJsObject.
