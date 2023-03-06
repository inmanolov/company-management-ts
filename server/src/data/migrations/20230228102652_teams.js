/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('teams', (table) => {
        table.increments('id');
        
        table.integer('company_id').nullable();
        table.foreign('company_id').references('id').inTable('companies');

        table.string('name').notNullable();
        table.string('department').notNullable();
        table.string('description').notNullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  
}
