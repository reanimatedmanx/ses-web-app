const faker = require('@faker-js/faker').faker

const CURRENT_USER = {
  name: 'Jon Doe',
  email: 'jon.doe@example.com'
}

const getRandomEmails = () => {
  const emails = faker.helpers.arrayElements(
    Array.from({ length: 3 }, () => faker.internet.email()),
    faker.number.int({ min: 0, max: 3 })
  );

  return emails.length > 0 ? emails.join(', ') : null;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Delete ALL existing entries
  await knex('emails').del();

  // Seeds sample data
  const samples = Array.from({ length: 300 }).map(() => ({
    from: faker.internet.email(),
    to: CURRENT_USER.email,
    cc: getRandomEmails(),
    bcc: getRandomEmails(),
    subject: faker.lorem.sentence(),
    body: faker.lorem.paragraph({
      min: 100,
      max: 1000,
    }),
    created_at: knex.fn.now(),
  }));

  await knex('emails').insert(samples);
};
