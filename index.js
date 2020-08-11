const importModules = require('import-modules');

const fastify  = require('./server.js');
const database = require('./db');
const routes   = importModules('routes');
const swagger  = require('./config/swagger');



const port  = 3000;
const ip    = '0.0.0.0';



// add modules to fastify
fastify.register(gql, {
    schema,
    graphiql: true
});

fastify.register(require('fastify-swagger'), swagger.options);

// Set routes
routes.forEach((route, index) => {
	fastify.route(route);
});


const start = async () => {
	try {
		await fastify.listen(port, ip);
		fastify.swagger();
		fastify.log.info(`Server listening on ${fastify.server.address().port}`);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}
start()