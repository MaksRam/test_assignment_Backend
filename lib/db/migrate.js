const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'tobaksvara.2019',
        database: 'users'
    }
});

async function migrate() {

    await knex.schema.createTable("persons", (table) => {
      table.increments("id").primary();
      table.string("UserName").notNullable();
      table.string("UserEmail").notNullable();
      table.string("Password").notNullable();
    });
  
    console.log("\n✅ database migrated!");
    await knex.destroy();
  }
  
  migrate();