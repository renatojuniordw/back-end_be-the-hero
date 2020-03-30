const app = require('./app');

let port = 3333 || process.env.PORT
app.listen(port);