# nuxt-passport-sequelize-on-express

## 1. Create environment variable files

**.env**

Please create .env file in reference to .env.sample

**database.json**
  
Please database.json file in reference to database.sample.json

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

## TODO

- [x] Create Nuxt project on Express
- [x] Add passport
- [x] Add sequelize
- [ ] Change default port number
- [ ] Fix linter settings
- [ ] Change to TODO Example
- [ ] Add debug settings on VSCode
- [ ] Create cli tool like create-nuxt-app
- [ ] Typescript support
