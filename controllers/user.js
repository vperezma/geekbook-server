// Import models.
var models = require('../models'),
    User = models.Users,
    q = require('q');

module.exports = {
    /**
     *
     * @param req
     * @param res
     * @returns {*|promise}
     */
    create: function(req, res){
        var defer = q.defer();
        var newUser = req.body;
        console.log(models.Users);
        User.create(newUser)
            .then(function(err, user) {
                if(err) defer.reject(err);
                defer.resolve(user);
            });
        return defer.promise;
    }
};