import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Swapi API',
      version: '1.0.0',
      description: 'API for managing SWAPI',
      contact: {
        name: 'Pool Yurivilca'
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local server'
        }
      ]
    }
  }, 
  apis: ['./src/application/routes/*.ts']
};

const specs = swaggerJsdoc(options);
export default specs;