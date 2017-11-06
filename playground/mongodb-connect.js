const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(`the object id is ${obj} and the timestamp is ${obj.getTimestamp()}`);

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server. ' + err);
        return;
    }

    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

db
    db.collection('Users')
    .insertOne({
        name: 'Paula Riviera',
        age: 24,
        location: 'Los Angeles'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
