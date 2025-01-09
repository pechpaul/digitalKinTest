const {
  StatusCodes
} = require('http-status-codes');
const express = require('express');
const router = express.Router();
const conversationService = require('../../src/services/conversationService');


router.post('/', async function (req, res, next) {
  const conversationId = await conversationService.startConversation(req.body.agentId, req.body.message)

  res.send({conversationId: conversationId, reponse: 'vous voulez vraiment ' + req.body.message + '?'})
});

router.post('/:conversationId', async function (req, res, next) {
  await conversationService.addMessage(req.params.conversationId, req.body.message)

  res.send('vous voulez vraiment ' + req.body.message + '?')
});

module.exports = router;
