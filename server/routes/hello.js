module.exports = function(app) {
    app
    .route("/hello")
    .get((request, response) => {
        let { name } = request.cookies;
        response
            .status(200)
            .send(`Welcome ${name}!`)
    })
}