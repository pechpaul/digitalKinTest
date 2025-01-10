const { Surreal } = require('surrealdb');

const db = new Surreal();

// Define the default database configuration


// Define the function to get the database instance
exports.connectToDb = async () => {
    try {
        await db.connect('http://127.0.0.1:8000/rpc');
        await db.use({
            namespace: "test",
            database: "test"
        });

        await db.signin({
            username: "root",
            password: "root",
        });
    } catch (err) {
        console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
        await db.close();
        throw err;
    }
}

exports.getDb = ()=>{
    return db
}