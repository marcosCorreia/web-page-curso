module.exports = {  
  
    client: 'postgresql',
    connection: {
      database: 'knowledge_vers',
      user:     'postgres',
      password: '02171924'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    } 

};
