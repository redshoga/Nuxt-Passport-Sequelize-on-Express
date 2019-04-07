# nuxt-passport-sequelize-on-express

## 1. Create environment variable files

**.env**

Please create .env file in reference to .env.sample

**database.json**
  
Please create database.json file in reference to database.sample.json

## 2. DB Setup

```
npm install sequelize-cli -g
sequelize db:migrate
```

or

```
npx sequelize db:migrate
```

You can migrate db to use sequelize-cli.

http://docs.sequelizejs.com/manual/migrations.html


## 3. Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## How to debug on VSCode

Set `Debug Nuxt on Chrome` setting and exec(F5)

You can use `debugger` and breakpoint and debug your code.

**Attention:**
- If you use Chrome, you have to install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) to your VSCode.
- Note that the screen does not appear until build is complete.

## REPL with Sequelize

You can use REPL mode and check created model.

```bash
npm run db:shell
```

```javascript
// create user
db.User.create({name: "redshoga"})

// find all user name
db.User.findAll().then(userList => userList.forEach(user => console.log(user.name)))

// create todo
db.User.findOne({name: "redshoga"}).then(user => user.createTodo({'title': 'My first todo'})) 
db.User.findOne({name: "redshoga"}).then(user => user.createTodo({'title': 'My second todo'}))
db.User.findOne({name: "redshoga"}).then(user => user.createTodo({'title': 'My third todo'}))

// find all task title
db.Todo.findAll().then(todoList => todoList.forEach(todo => console.log(todo.title)))

// find user's task list
db.User.findOne({name: "redshoga"}).
  then(user => user.getTodos()).
  then(todoList => todoList.forEach(t => console.log(t.title)))

// delete user
db.User.findOne({name: "redshoga"}).then(user => user.destroy())
// or
// db.User.destroy({where: {name: "redshoga"}})

// All user's task.UserId should be null
db.Todo.findAll().then(todoList => todoList.forEach(todo => console.log(todo.UserId)))
```

## How to deploy on heroku

0. Preparation

```
npm install -g heroku
heroku plugins:install heroku-config
heroku login
heroku create
heroku addons:create heroku-postgresql:hobby-dev
```

1. Change production settings database.json for heroku Postgres

2. Exec script to set environment variables to heroku 

```
node set_heroku_config.js
```

1. Deploy

```
git push heroku master
```

## TODO

- [x] Create Nuxt project on Express
- [x] Add passport
- [x] Add sequelize
- [x] Add debug settings on VSCode
- [x] Add Sequelize REPL mode
- [x] Change to TODO Example
- [ ] Add sample deployed page link
- [ ] Add how to deploy on heroku
- [ ] Create cli tool like create-nuxt-app
- [ ] Typescript support
