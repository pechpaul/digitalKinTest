const databaseService = require('./databaseService')

exports.getConversations = async ()=>{
    const response = await databaseService.query("SELECT * from conversations")
    return response.rows
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