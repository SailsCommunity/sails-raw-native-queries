/**
 * Movies.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    connection: "mongoDB",
    tableName: "movies",
    autoPK: true,
    attributes: {
        movie_name: {
            type: "string"
        },
        image: {
            type: "string"
        },
        rating: {
            type: "float"
        },
        release_year: {
            type: "integer"
        },
        genre: {
            type: "string"
        },
        running_time: {
            type: 'integer'
        }
    },

    /**
     * Native find query for mongo
     * Collection will support all the mongo native queries
     * @param cb
     */
    getMovies: function (cb) {
        Movies.native(function(err, collection){
            if(err || !collection){
                cb({msg: "nothing found"}, null);
                return;
            }

            collection.find().toArray(function (err, results) {
                if(err || !results || results.length == 0) {
                    cb({msg: "Nothing found"}, null);
                    return;
                }
                cb(null, results);
            });

        });
    },
};

