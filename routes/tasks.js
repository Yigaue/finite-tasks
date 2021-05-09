module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.json({
            tasks: [
                {title: "Learn as fast as possible"},
                {title: "Code as quickly as possible"}
            ]
        });
    });
};