/**
 * People.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: "mysqlDB",
    tableName: "people",
    attributes: {
        id: {
            type: "integer",
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: "string"
        },
        age: {
            type: "integer"
        },
        country: {
            type: "integer"
        }
    },
    getPeople: function (cb) {
        People.query("SELECT * FROM people", [], function (err, results) {
            if(err || !results || results.length == 0) {
                cb({msg: "Nothing found"}, null);
                return;
            }
            cb(null, results);
        });
    }
};

