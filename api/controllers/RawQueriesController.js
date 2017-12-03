/**
 * RawQueriesController
 *
 * @description :: Server-side logic for managing Rawqueries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getPeople: function (req, res) {
        People.getPeople(function (err, results) {
            if(err) {
                return res.send({
                    "success": false,
                    "message": (err.msg) ? err.msg : "Nothing found"
                });
            }

            return res.send({
                "success": true,
                "data": results
            });
        });
    },

    getMovies: function (req, res) {
        Movies.getMovies(function (err, results) {
            if(err) {
                return res.send({
                    "success": false,
                    "message": (err.msg) ? err.msg : "Nothing found"
                });
            }

            return res.send({
                "success": true,
                "data": results
            });
        });
    }

};

