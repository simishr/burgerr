var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var port=  3000;

app.listen(port);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "burgerss_db"
});

connection.connect(function(err) {
	if(err) throw err;
	console.log("Connected as ID: " + connection.threadId);
});

app.get("/", function (req, res) {
	connection.query("SELECT * FROM burgers;" , function (err, data) {
		res.render("index", {burgers: data});
	})
})

app.post("/create", function (req, res) {
	connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);",[req.body.burger, false], function(err, result) {
		if(err) throw err;
		res.redirect("/");
	})
})

app.put("/:id", function (req, res) {
	connection.query("UPDATE burgers SET? WHERE?;", [{devoured:true}, {id:req.params.id}], function (err, results) {
		if(err) throw err;
		res.redirect("/");
	})
})