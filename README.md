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

## TODO

- [x] Create Nuxt project on Express
- [x] Add passport
- [x] Add sequelize
- [x] Add debug settings on VSCode
- [ ] Add sample page
- [ ] Change default port number
- [ ] Fix linter settings
- [ ] Change to TODO Example
- [ ] Create cli tool like create-nuxt-app
- [ ] Typescript support
