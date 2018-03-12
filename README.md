# Vue Study Store API

> Mini e-commerce study project. This projetc serves as API to my [another study project.](https://github.com/luizpaulofranz/vue-ecommerce-example). 
This is an Express JS Project, generated with the express CLI Tool. 
`npm install express-generator -g` to install express CLI tool, and `express --view=ejs api` to create our express project.

## Build Setup
You can use either, yarn or npm.

``` bash
# install dependencies
npm install
# or
yarn install

# serve hosted at localhost:3000
npm start
# or
node app.js
```

## Explanations
For this example, we use an hosted MongoDB, in [https://mlab.com](https://mlab.com).
To manage Mongo, we use mongoose dependency on our project.
Express will manage our rotes, requests and responses.
### Database Connections
You must have a Mongo database locally or hosted (like mlab for example), and the database configuration is setted on file **app.js**, with `mongoose.connect` statement.

This project was created following this [scotch.io course](https://scotch.io/courses/build-an-online-shop-with-vue).
