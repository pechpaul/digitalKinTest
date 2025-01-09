const {
  StatusCodes
} = require('http-status-codes');
const express = require('express');
const router = express.Router();
const agentService = require('../../src/services/agentService');


router.get('/', async  (req, res, next) => {
  const agents = await agentService.getAgents()
  res.send(agents)
});

router.post('/', async  (req, res, next) => {
  await agentService.addAgent(req.body)
  res.sendStatus(StatusCodes.CREATED)
});

router.get('/:agentId', async  (req, res, next) => {
  const agent = await agentService.getAgent(req.params.agentId)
  res.send(agent)
});

router.put('/:agentId', async  (req, res, next) => {
  await agentService.updateAgent(req.params.agentId, agent)
  res.sendStatus(StatusCodes.OK)
});

router.delete('/:agentId', async  (req, res, next) => {
  await agentService.deleteAgent(req.params.agentId)
  res.sendStatus(StatusCodes.OK)
});

module.exports = router;
