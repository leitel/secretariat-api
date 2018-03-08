'use strict'

const Schema = use('Schema')

class AddressesSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('contact_id').unsigned().references('id').inTable('contacts')
      table.string('first_line', 254)
      table.string('second_line', 254)
      table.string('postal_code', 48)
      table.string('district', 64)
      table.string('country', 64)
      table.string('label', 80).defaultTo('Home')
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressesSchema
