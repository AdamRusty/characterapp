let http = require('http'),
    opn = require('opn'),
    express = require('express'),
    path = require('path'),
    router = require('router'),
    app = express(),
    user = express(),
    admin = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/build/templates"));


opn('localhost:3000/', {app: 'firefox'});


app.get("/", (req, res) => {
    console.log('here');
    res.render("index", {title: 'D&Dapp', message: "First pug bootup successful! :D" });
});


app.listen(3000, () => {
    console.log("locate homepage.");
});

