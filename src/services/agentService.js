const surreal = require('../utils/surreal')
const { RecordId } = require('surrealdb');

exports.getAgents = async ()=>{
    return await surreal.getDb.select("agent")
}

exports.addAgent = (newAgent)=>{
    return surreal.getDb.create('agent', newAgent)
}

exports.getAgent = (agentId)=>{
    return surreal.getDb.create(new RecordId('agent', agentId))
}

exports.updateAgent = (agentId, updatedAgent)=>{
    return surreal.getDb.update(new RecordId('agent', agentId), updatedAgent)
}

exports.deleteAgent = (agentId)=>{
    return surreal.getDb.delete(new RecordId('agent', agentId))

}