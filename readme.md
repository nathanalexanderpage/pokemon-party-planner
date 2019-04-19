# Node/Express/PostgreSQL Boilerplate

This is a bare-bones Node/Express app with basic user authentication and authorization. It has local auth on the `master` branch and additionally Facebook auth on the `with-facebook` branch. This boilerplate exists so I don't need to create a new project from scratch every time I need a project with working auth.

## What it includes

* Sequelize is set up for PostgreSQL
* Sequelize model and migration(s) for user
* Passport, Express-Session, and Connect-Flash modules
* Error/Success message alerts
* BCrypt for hashing passwords

### User Schema

| Column | Data Type | Description |
| ------------ | -------- | ------------------------------------------ |
| id | Integer  | Primary Key |
| firstname | String | required field |
| lastname | String | - |
| email | String | usernameField for login - required field |
| password | String | hashed with BCrypt before creation of new row |
| birthdate | Date | Might want to use moment module to format this |
| admin | Boolean | Set default value to false |
| image | Text | A URL to an image of the user - required field |
| bio | Text | - |

Additional fields from `with-facebook`:

| Column | Data Type | Description |
| ------------ | -------- | ------------------------------------------ |
| facebookId | String  | Facebook Profile Id |
| facebookToken | String | Facebook login token |

This is the default schema provided. Add additional migrations as needed for more data. Example shown below.

### Default Routes Table

By default, the following routes are provided

| Method | Path | Location | Purpose |
| ---- | ------------ | ------------------ | ---------------------------- |
| GET  | /            | index.js           | Home Page |
| GET  | /profile     | controllers/profile.js | User Profile Page |
| GET  | /profile/admin | controllers/profile.js | Admin Dashboard Page |
| GET  | /auth/login  | controllers/auth.js | Renders Login Form |
| POST | /auth/login  | controllers/auth.js | Handles Login Auth |
| GET  | /auth/signup | controllers/auth.js | Renders Signup Form |
| POST | /auth/signup | controllers/auth.js | Handles New User Signup |
| GET  | /auth/logout | controllers/auth.js | Removes User Session Data |

Additional routes from `with-facebook` branch if using oAuth:

| Method | Path | Location | Purpose |
| ---- | ------------ | ------------------ | ---------------------------- |
| GET  | /auth/facebook | controllers/auth.js | Outgoing Request to Facebook |
| GET  | /auth/callback/facebook | controllers/auth.js | Incoming Data from Facebook |

## User Model Set Up

#### Adding Migrations

Here is an example of adding an `age` field to the user table

* STEP 1: Create a migration file via sequelize command line
    * `sequelize migration:create --name add-age`
* STEP 2: Write the up and down functions of the migration
    * Refer to other migrations for how this looks
    * The part to add looks like: `return queryInterface.addColumn('users', 'age', Sequelize.INTEGER)`
* STEP 3: Add the column into the user model
    * `user.js` - located in the models folder

## Usage

TBD - Directions on how to use this boilerplate code in a future project
