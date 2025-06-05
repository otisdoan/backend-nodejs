const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Express API',
      version: '1.0.0',
      description: 'Tài liệu API được sinh tự động với Swagger',
    },
    servers: [
      {
        url: 'http://localhost:' + process.env.PORT,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/docs/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;