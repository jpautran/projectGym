const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const img = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/66528086?s=460&u=423575da73790cb2dd0eb04378754ab211d0a276&v=4",
        name: "João Paulo Autran",
        role: "Programador Full-stack junior",
        descriptions: 'Aluno <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/jpautran/"},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/jpautran-dev/"}
        ]
    }
    return res.render("about", { about });
});

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: img });
});

server.get("/video", function(req, res){
    const id = req.query.id;
    res.send(id);
});

server.listen(5000, function() {
    console.log();
    console.log("Server is running");
    console.log("http://localhost:5000");
});