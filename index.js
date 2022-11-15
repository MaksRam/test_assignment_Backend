require('dotenv').config()
const Koa = require('koa')
const app = new Koa();

const PORT = process.env.PORT

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());


const mainRouter = require('./lib/routes/main-router');
app.use(mainRouter.middleware());

app.listen(PORT, () => {
    console.log(`Service is running on PORT 3002`);
  });

  