const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const agentsRouter = require('./src/routes/agents');
const conversationsRouter = require('./src/routes/conversations');
const databaseService = require('./src/services/databaseService')

databaseService.connectToDb()
const app = express();
app.use(express.json());
app.use('/agents', agentsRouter);
app.use('/conversations',conversationsRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('app listening on port 3000'));

module.exports = app;
