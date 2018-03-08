'use strict'

const Schema = use('Schema')

class ContactsSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name_prefix', 40)
      table.string('first_name', 80)
      table.string('middle_name', 80)
      table.string('last_name', 80)
      table.string('nick', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactsSchema
