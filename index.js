const express = require("express");
const { engine } = require("express-handlebars");
const app = express();
const serverless = require('serverless-http');
const router = express.Router();
app.use(express.static("public"));
// app.use(body.urlencoded({
//     extended: true,
//     limit: '50mb',
//     parameterLimit: 100000,
//     extended: true
// }));
// app.use(body.json({ limit: '50mb' }));
app.engine(
    "handlebars",
    engine({ layoutsDir: "views/layouts", defaultLayout: "main" })
);
app.set("view engine", "handlebars");

app.get('/id/:id', (req, res) => {
    res.render('index', { id: req.params.id });
})
app.get('/done/:id', (req, res) => {
    var id = req.params.id;
    res.render('success', { id });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});

// app.use('./netlify/functions/api', router);

// module.exports.handler = serverless(app);