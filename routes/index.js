module.exports = app => {
    app.get("/", (req, res) => {
        res.json({status: "Task Manager API"})
    });
};