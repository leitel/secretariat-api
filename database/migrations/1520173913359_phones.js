'use strict'

const Schema = use('Schema')

class PhonesSchema extends Schema {
  up () {
    this.create('phones', (table) => {
      table.increments()
      table.integer('contact_id').unsigned().references('id').inTable('contacts')
      table.string('phone_number', 64).notNullable()
      table.string('label', 80).defaultTo('Personal')
      table.timestamps()
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhonesSchema
