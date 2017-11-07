const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Couldn\'t connect to MongoDB.');
    }

    db
        .collection('Users')
        .find({
            name: 'Mitch Rappaport'
        })
        .toArray()
        .then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    db
        .collection('Users')
        .find().count()
        .then((num) => {
            console.log(`# of Users ${num}`);
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    //db.close();
});