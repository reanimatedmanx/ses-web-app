// ESM
import Fastify from 'fastify'

const env = process.env.NODE_ENV || 'development'

// Routes
import SystemRoutes from './src/routes/system.js'
import EmailRoutes from './src/routes/emails.js'

// Database & ORM
import Knex from 'knex'
import knexConfig from './knexfile.js'

const knex = Knex(knexConfig[env])

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
	logger: true,
})

fastify.register(SystemRoutes, EmailRoutes)

fastify.decorate('db', knex)

fastify.listen({ port: process.env.PORT }, function (err, address) {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
})
