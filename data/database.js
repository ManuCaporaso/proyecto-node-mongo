const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
  if (database) {
    console.log('Ya estamos conectados a la base de datos');
    return callback(null, database);
  }

  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
        callback(err);
    }); 
    }

const getDatabase = () => {
    if (!database) {
        throw Error('La base de datos no ha sido inicializada');
    }
    return database;
};

module.exports = { initDb, getDatabase };