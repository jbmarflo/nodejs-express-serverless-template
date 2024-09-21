import App from "./app";
import {createServer} from 'http';
require('dotenv').config();

const PORT = parseInt(process.env.PORT, 10) || 2000;
const cors = require('cors');

App.use(cors({origin: '*'}));


const isInLambda = !!process.env.LAMBDA_TASK_ROOT;

if (isInLambda) {
    const serverlessExpress = require('aws-serverless-express');
    const serverApp = serverlessExpress.createServer(App);
    module.exports.handler = (event, context) => serverlessExpress.proxy(serverApp, event, context)
    // ( async () => {
    //     await sequelize.databaseVersion();
    //
    // })();
} else {
    ( async () => {
        // await sequelize.databaseVersion();
        createServer(App)
            .listen(PORT, () => 
                console.info(`Server running on port ${PORT}`)
            );
    })();
}