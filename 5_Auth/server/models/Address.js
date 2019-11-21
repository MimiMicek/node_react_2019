const { Model, snakeCaseMappers } = require("objection");

class Address extends Model {
    static tableName = "addresses";

    static get relationMappings() {
        const User = require('./User');
        return {
            addresses: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'addresses.userId',
                    to: 'users.id'
                }
            }
        }
    };
}

module.exports = Address;