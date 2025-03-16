export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: { directory: './seeds' },
    useNullAsDefault: true
  },
  production: {},
};
