# digitalKinTest

Ce programme requiert d'installer postgresQL en local
la config pour la connection est trouvable dans ./src/services/databseService ou est par default
{
        user: "postgres",
        password: '1234',
        host: 'localhost',
        port: '5432',
        database: 'postgres'
}

pour demarer:
```bash
npm i && npm start 
```

lapplication peut etre testé directment sur swagger http://localhost:3000/api-docs/
ou par postman
