export default async function SystemRoutes(fastify, options) {
	fastify.get('/health', async (request, reply) => {
		return { status: 'OK' }
	})
}
