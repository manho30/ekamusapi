const path = require('path');
const fs = require('fs');

const express = require('express');

function logger(req, res, next) {
    console.log('Request from: ' + req.ip + ' For: ' + req.path);
    next();
}


async function constructEkamusApiServer() {
    const app = express()
    const { CORS_ALLOW_ORIGIN } = process.env
    app.set('trust proxy', true)
    app.use(logger)

    /**
     * CORS & Preflight request
     */
    app.use((req, res, next) => {
        if (req.path !== '/' && !req.path.includes('.')) {
            res.set({
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin':
                    CORS_ALLOW_ORIGIN || req.headers.origin || '*',
                'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
                'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
                'Content-Type': 'application/json; charset=utf-8',
            })
        }
        req.method === 'OPTIONS' ? res.status(204).end() : next()
    })

    /**
     * Body Parser
     */
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    const apiDir = path.join(__dirname, 'api');
    fs.readdirSync(apiDir).forEach(file => {
        if (file.endsWith('.js')) {
            const routeName = file.replace('.js', '');
            const routeModule = require(path.join(apiDir, file));
            app.get(`/${routeName}`, routeModule);
        }
    });

    return app

}

async function serveEkamusApi() {
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'localhost';

    const app = await constructEkamusApiServer();
    app.listen(port, host, () => {
        console.log(`Server listening on http://${host}:${port}`);
    })
}


module.exports = {
    serveEkamusApi
}