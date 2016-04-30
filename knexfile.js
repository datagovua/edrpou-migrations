// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    host:     'postgres',
    database: 'postgres',
    user:     'postgres',
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
