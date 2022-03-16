var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

app.use(express.static('public'));
app.use(cors());

//create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
        console.log(user);
        res.send(user);
    });
});

//login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email:      req.params.string,
        password: req.params.password
    });
});

//all accounts
app.get('/account/all', function (req, res){
    dal.all()
    .then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

//get balance
app.get('/balance/:email', function (req, res) {
    res.send({
        balance:    0
    })
})

//deposit
app.get('/deposit/:email/:amount', function (req, res) {
    dal.deposit(req.params.email, req.params.amount)
    .then((doc) => {
        console.log(doc);
        res.send(doc)
    })
})

//withdraw
app.get('/balance/:email/:amount', function (req, res) {
    res.send({
        balance:    req.params.amount
    })
})

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);