const surreal = require('../utils/surreal')
const { RecordId } = require('surrealdb');

exports.getConversations = async ()=>{
    return await surreal.getDb.select("conversation")
}

exports.startConversation = async (agentId, userMessage) => {
    const conversation = surreal.getDb.create("conversation")
    await db.insert_relation('assign', {
        in: new RecordId('agent', agentId),
        out: new RecordId('conversation', conversation.id),
    });
    const message = surreal.getDb.create("message", {text: userMessage})
    await db.insert_relation('said', {
        in: new RecordId('conversation', conversation.id),
        out: new RecordId('message', message.id),
    });
}