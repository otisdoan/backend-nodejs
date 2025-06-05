require('dotenv').config();
const express = require('express');
const app = express();
const configViewEngine = require('./configs/viewEngine')
const webRouter = require('./routes/web')
const apiRouter = require('./routes/api');
const userRouter = require('./routes/user');
const methodOverride = require('method-override');
const connectDB = require('./configs/database')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

const port = process.env.PORT;

configViewEngine(app);
connectDB();

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', webRouter);
app.use('/api/v1', apiRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/user', userRouter);

app.listen(port, () => {
  console.log('Port: ', port)
})