'use strict'

const Model = use('Model')

class Contact extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  emails () {
    return this.hasMany('App/Models/Email')
  }

  phones () {
    return this.hasMany('App/Models/Phone')
  }

  addresses () {
    return this.hasMany('App/Models/Address')
  }
}

module.exports = Contact
