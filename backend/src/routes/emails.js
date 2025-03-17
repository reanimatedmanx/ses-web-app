import { truncate } from '../utils/strings.js'

const SUBJECT_PREVIEW_SIZE = 20;
const BODY_PREVIEW_SIZE = 30;
const SEARCHEABLE_COLUMNS = ['from', 'to', 'cc', 'bcc', 'subject', 'body'];

export default async function EmailRoutes(fastify, options) {
    fastify.post('/emails', async (request, reply) => {
        const email = await fastify.db('emails').insert(request.body).returning('*');
        reply.send(email);
    });

    fastify.get('/emails', async (request, reply) => {
        const { page = 1, pageSize = 10, query = '' } = request.query;
        const limit = parseInt(pageSize, 10);
        const offset = (parseInt(page, 10) - 1) * limit;

        // Get total count of emails
        const itemsTotal = await fastify.db('emails').count('* as count').first();

        // Get paginated emails result.
        const results = await fastify.db('emails')
            .select('*')
            .where((builder) => {
                if (!query) {
                    return
                }

                SEARCHEABLE_COLUMNS.forEach((col, index) => {
                  if (index === 0) {
                    builder.where(col, 'like', `%${query}%`);
                  } else {
                    builder.orWhere(col, 'like', `%${query}%`);
                  }
                });
              })
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
