import { truncate } from '../utils/strings.js'

const SUBJECT_PREVIEW_SIZE = 20;
const BODY_PREVIEW_SIZE = 30;

export default async function EmailRoutes(fastify, options) {
    fastify.post('/emails', async (request, reply) => {
        const email = await fastify.db('emails').insert(request.body).returning('*');
        reply.send(email);
    });

    fastify.get('/emails', async (request, reply) => {
        const { page = 1, pageSize = 10 } = request.query;
        const limit = parseInt(pageSize, 10);
        const offset = (parseInt(page, 10) - 1) * limit;

        // Get total count of emails
        const itemsTotal = await fastify.db('emails').count('* as count').first();

        // Get paginated emails result.
        const results = await fastify.db('emails')
            .select('*')
            .limit(limit).offset(offset);

        const items = results.map(item => ({
            ...item,
            from_name: item.from.split('@')[0] || item.from,
            subject_preview: truncate(item.body, SUBJECT_PREVIEW_SIZE),
            body_preview: truncate(item.body, BODY_PREVIEW_SIZE),
        }))

        reply.send({
            items,
            itemsTotal,
            pagination: {
                page: parseInt(page, 10),
                pageSize: limit
            }
        });
    });

    fastify.get('/emails/:id', async (request, reply) => {
        const email = await fastify.db('emails').where({ id: request.params.id }).first();
        if (!email) return reply.code(404).send({ error: 'Not Found' });
        reply.send(email);
    });

    fastify.put('/emails/:id', async (request, reply) => {
        const updatedEmail = await fastify.db('emails').where({ id: request.params.id }).update(request.body).returning('*');
        reply.send(updatedEmail);
    });

    fastify.delete('/emails/:id', async (request, reply) => {
        await fastify.db('emails').where({ id: request.params.id }).del();
        reply.send({ message: 'Deleted' });
    });
}
