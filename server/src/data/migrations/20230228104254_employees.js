/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('employees', (table) => {
        table.increments('id');

        table.integer('team_id').nullable();
        table.foreign('team_id').references('id').inTable('teams');

        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('position').notNullable();
        table.integer('salary', 7).notNullable();
        table.date('startDate').notNullable();
        table.string('endDate');
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTableIfExists('employees');
}
