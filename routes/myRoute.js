module.exports = app => {

    app.get('/test', (req, res) => {
        res.send("This came from back end");
    });


};