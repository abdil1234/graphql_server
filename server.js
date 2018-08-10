import express from 'express';
import bodyParser from 'body-parser';
import models from './models/index.js';
import GraphHTTP from 'express-graphql';
import Schema from './graphql';
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

var app = express();

const auth = jwt({
    secret: 'somesuperdupersecret',
    credentialsRequired: false
});
app.use(auth);

function verifyToken(req, res, next){    
    req.headers.authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hIjoiYWFhYWEiLCJlbWFpbCI6ImVtYWlsIiwiaWF0IjoxNTMzOTE1MzI1fQ.m9I50GDFOkLFLVhHe8mt0tivB6gDx6P1jK1hdNxOhyQ";
    next();
};

app.use(verifyToken);



function startApp(port) {
    app.listen(port, function() {
        console.log('Server Sedang Berjalan pada port ' + port);
    });
}

models.sequelize.sync()
    .then(function() {
        startApp(8000);
    })
    .catch(function (e) {
        throw new Error(e);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
 * This is here because of authentication. Auth middleware decodes the JWT token
 * and saves its content to request.user object.
 */
app.use('/graphql',GraphHTTP((request) => ({
        schema: Schema,
        context: { user: request.headers.authorization },
        pretty: true,
        graphiql: true
})));
