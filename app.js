const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const agentsRouter = require('./routes/agents');
const conversationsRouter = require('./routes/conversations');

const app = express();

app.use('/agents', agentsRouter);
app.use('/conversations', conversationsRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => console.log('app listening on port 3000'));


module.exports = app;
