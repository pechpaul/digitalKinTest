const databaseService = require('./databaseService')

exports.getAgents = async ()=>{
    const response = await databaseService.query("SELECT * from agents")
    return response.rows
}

exports.addAgent = (newAgent)=>{
    return databaseService.query(`INSERT INTO agents (nom, description, "systemPrompt", status) VALUES 
                       ('${newAgent.nom}', '${newAgent.description}', '${newAgent.systemPrompt}', 'actif')`
    )
}

exports.getAgent = (agentId)=>{
    return  databaseService.query(`SELECT
        1
        FROM agents
    WHERE
        agents.id = ${agentId}
    `)
}

exports.updateAgent = (agentId, updatedAgent)=>{
    return  databaseService.query(`UPDATE agents
    SET (
        '${updatedAgent.nom}', 
        '${updatedAgent.description}', 
        '${updatedAgent.systemPrompt}', 
        '${updatedAgent.status}'
        )
    WHERE
        agents.id = ${agentId}
    `)
}

exports.deleteAgent = (agentId)=>{return  databaseService.query(
    `DELETE FROM agents
    WHERE
        agents.id = ${agentId}
    `)
}