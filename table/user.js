const USER_TABLE = 'user';

const ID_FIELD = 'id';

const NAME_FIELD = 'name';
const AGE_FIELD = 'age';
const ADDRESS_FIELD = 'address';
const TEAM_FIELD = 'team';

var db = require('mysql');

module.exports = {

    TABLE_NAME: USER_TABLE,

    FIELD: {
        ID: ID_FIELD,
        NAME: NAME_FIELD,
        AGE: AGE_FIELD,
        ADDRESS: ADDRESS_FIELD,
        TEAM: TEAM_FIELD
    },

    getAll: function () {

    },

    findBy: function (criteria) {

    }
};
