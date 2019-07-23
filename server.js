const express = require('express');
const app = express()
const path = require('path');
const secure = require('ssl-express-www');
const compression = require('compression');
const helmet = require('helmet');

if(!process.env.environment) {
    require('dotenv').config();
}

// Uncommented this when ssl is setup for your app
// app.use(secure);

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            objectSrc: [
                "'none'",
            ],
            baseUri: [
                "'self'",
            ],
            formAction: [
                "'none'",
            ],
            frameAncestors: [
                "'none'",
            ]
        }
    }
}));

app.use(compression());

app.use(express.static(__dirname + '/dist/browser'));

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);

app.get('/getEnvironment', (req, res) => {
    const environment = process.env.environment;
    res.status(200).json({environment});
});

app.get('/getEnvironment', (req, res) => {
    const environment = process.env.environment;
    res.status(200).json({ environment });
});


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/angular-starterpack/index.html'));
});

console.log("listing on port:", PORT);
