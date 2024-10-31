const swaggerJsdoc = require('swagger-jsdoc')

const option = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API RESTfull',
            version: '1.0.0',
            description: 'API RESTful',
            contact: {
                name: 'Sandra Abril'

            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./network/routes.js']
};

const specs = swaggerJsdoc(option);

module.exports = specs;