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
        .deleteMany({
            name: 'Bret Hart'
        })
        .then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs.result, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    db
        .collection('Users')
        .findOneAndDelete({
            _id: new ObjectID("5a002a39d3455334e403a008")
        })
        .then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });


    //db.close();
});