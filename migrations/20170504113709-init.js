'use strict';

var user = require('../table/user');
var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {
    db.createTable(user.TABLE_NAME, {
        id: {type: 'int', primaryKey: true, autoIncrement: true},
        name: 'string',
        age: 'int',
        address: 'string',
        team: 'string'
    });
    return null;
};

exports.down = function (db) {
    db.dropTable(user.TABLE_NAME);
    return null;
};

exports._meta = {
    "version": 1
};
