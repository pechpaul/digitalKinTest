const pg = require("pg");
const { Client } = pg

let client

exports.connectToDb = ()=> {
    client = new Client({
        user: "postgres",
        password: '1234',
        host: 'localhost',
        port: '5432',
        database: 'postgres'
    })
    client.connect().then(() => {
        console.log("Connected to DB")
        client.query('CREATE TABLE IF NOT EXISTS public.agents' +
            '(' +
            '    id serial NOT NULL PRIMARY KEY,' +
            '    nom character varying,' +
            '    description character varying,' +
            '    "systemPrompt" character varying,' +
            '    status character varying NOT NULL' +
            ');' +
            'CREATE TABLE IF NOT EXISTS public.conversations' +
            '(' +
            '    id serial  NOT NULL PRIMARY KEY,' +
            '    nom character varying,' +
            '    agent_id integer REFERENCES agents' +
            ');' +
            'CREATE TABLE IF NOT EXISTS public.messages' +
            '(' +
            '    id serial NOT NULL PRIMARY KEY,' +
            '    message character varying,' +
            '    conversation_id integer references conversations' +
            ');')
    })
}


exports.query = async (queryText) =>{
    return client.query(queryText)
}