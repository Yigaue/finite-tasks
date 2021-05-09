module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Get some books from the store"},
                {title: "Fix the kitchen sink"}
            ]);
        }
    };
};