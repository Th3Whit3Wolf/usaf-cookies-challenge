module.exports = function(app) {
    app
    .route("/login/:name")
    .get((request, response) => {
        let { name } = request.params;
        response
            .cookie('name', name)
            .status(200)
            .send("please visit login page")
    })
}