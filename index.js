const app = require('./app');

const RUNNING_PORT = require("./secret");

app.listen( RUNNING_PORT, async () => {
    console.log(`Server is Running Successfully at http://localhost:${RUNNING_PORT}`);
   
});