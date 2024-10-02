import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Exemplo',
      version: '1.0.0',
      description: 'Documentação da API de Exemplo utilizando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
