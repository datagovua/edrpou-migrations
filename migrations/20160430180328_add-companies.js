
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("companies", function (table) {
      table.increments(); // integer id
      table.timestamp("createdAt").defaultTo(knex.raw('now()')).notNullable();
      table.timestamp("updatedAt").defaultTo(knex.raw('now()')).notNullable();
      table.string("edrpou", 100);
      table.string("status", 255);
      table.string("officialName", 1024);
      table.string("name", 1024);
      table.string("mainPerson", 1024);
      table.string("occupation", 1024);
      table.string("address", 1024);
    })
  ]);  
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("companies")
  ]); 
};
