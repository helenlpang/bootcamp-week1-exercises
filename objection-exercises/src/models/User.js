const {ManyToManyRelation, HasManyRelation} = require('objection')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get virtualAttributes() {
    return ['fullName', 'isAdult']
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }
  get isAdult(){
    return this.age >=18
  }


  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    const Relation = require('./Relation')
    
    return {
      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id'

        } 
      },
      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id'

        }  
      },
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'

        } 

      }
    }
  }
}

module.exports = User
