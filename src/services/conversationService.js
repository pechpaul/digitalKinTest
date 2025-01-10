const surreal = require('../utils/surreal')
const { RecordId } = require('surrealdb');

exports.getConversations = async ()=>{
    return await surreal.getDb.select("conversation")
}

exports.startConversation = async (agentId, message) => {
    const conversationId = (await databaseService.query(`INSERT INTO conversations (agent_id)
                                 VALUES (${agentId}) RETURNING id;`
        )).rows[0].id
    await databaseService.query(`INSERT INTO messages (conversation_id, message)
                                 VALUES (${conversationId}, '${message}');`
    )
    return conversationId
}