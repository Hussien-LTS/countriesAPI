require('dotenv').config();
const http = require("http");

const app = require('./app')
const PORT  = process.env.PORT || 3040

const server = http.createServer(app);

server.listen(PORT ,()=>{
console.log(`server in PORT ${PORT} is running weeeeeeeeeeeee`);
})
