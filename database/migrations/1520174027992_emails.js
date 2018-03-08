'use strict'

const Schema = use('Schema')

class EmailsSchema extends Schema {
  up () {
    this.create('emails', (table) => {
      table.increments()
      table.integer('contact_id').unsigned().references('id').inTable('contacts')
      table.string('email', 254).notNullable()
      table.string('label', 80).defaultTo('Personal')
      table.timestamps()
    })
  }

  down () {
    this.drop('emails')
  }
}

module.exports = EmailsSchema
