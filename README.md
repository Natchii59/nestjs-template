# Nestjs Template

This repository is the beginning of a Nestjs project with a database that is initialized (in postgreSQL, editable later). As well as husky for git hooks, a github actions, and typeorm migrations.

# Summary

- [Installation](#installation)
- [API](#api)
- [Database](#database)
  - [How change Database](#how-change-database)
  - [Migrations](#migrations)
- [Git Hooks](#git-hooks)
- [Github Actions](#github-actions)
- [Eslint / Prettier](#eslint--prettier)
- [Maintenance](#maintenance)

## Installation

To install the template, you will need to clone it with git on your local machine.

```
git clone https://github.com/Natchii59/nestjs-template.git
```

Then you just have to install the dependencies with this command.
After this, husky will also settle on its own.

**NPM**

```
npm install
```

**YARN**

```
yarn
```

## API

The services and controllers are the same as those created when the nest project was initialized.
It is therefore a REST API, which you can transform as you wish (into GraphQL for example).

## Database

The database is integrated thanks to [Typeorm](https://typeorm.io). I created one locally using [Docker](https://www.docker.com), and this one is in PostgreSQL. You can change the database type just below. The information concerning the database is to be changed in the environment files ([.env](/.env), [database.env](database.env)).

You also have the source of the database in the [data-source.ts](/src/database/data-source.ts) file which takes about the same parameters as for the TypeormModule in the [app.module.ts](/src/app.module.ts). This is used for the Typeorm cli.

## How change Database

To change the database, you must first uninstall the 'pg' dependency which is that of PostgreSQL.

**NPM**

```

npm uninstall pg

```

**YARN**

```

yarn remove pg

```

Then you will need to install the dependency corresponding to your type of database (for example for mysql it will be 'mysql2').

**NPM**

```

npm install mysql2

```

**YARN**

```

yarn add mysql2

```

Then in the file app.module.ts it will be necessary to modify the type of database in the [TypeormModule](/src/app.module.ts#L18).

## Migrations

I created all the scripts needed to perform migrations in the database.

You can automatically generate tables in migration files using the `migration:generate` script. Migrations will be created in the [/src/database/migrations](/src/database/migrations) folder.

To run them you will first need to build the application, where the content will be in the `dist` folder. Then it will be necessary to execute the `migration:run` script which will execute the migration files in the `dist` folder.

You can also revert to the previous database state with the `migration:revert` script.

## Git hooks

I installed [husky](https://typicode.github.io/husky) for pre-commit which is very useful for running commands before committing.
Here I installed [lint-staged](https://github.com/okonet/lint-staged) to run commands only on files that are staged. I put the script I created from [eslint](https://eslint.org) which refuses the commit if at least 1 warning is detected.

## Github Actions

I created a single action for Github that runs eslint, and verifies unitaur tests.

## Eslint / Prettier

You can change your preferences for eslint and prettier in the [.eslintrc.js](/.eslintrc.js) and [.prettierrc](.prettierrc) files. I put the basic ones for a Typescript project.

# Maintenance

- Author - [Nathan Caron](mailto:caron.nathan@hotmail.com)
- My website - [natchi.dev](https://natchi.dev)

# License

This template is [MIT licensed](/LICENSE).
