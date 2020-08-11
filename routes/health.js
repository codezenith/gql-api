const healthController = require('../controllers/healthController');

const routes = [
    {
        method: 'GET',
        url: '/api/health',
        handler: healthController.getHealthCheck
    }
]

module.exports = routes;