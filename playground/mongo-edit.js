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
        .findOneAndUpdate({
            _id: new ObjectID("5a01a13fd3455334e403a0a3")
        }, {
            $set: {
                name: 'Yosef Korkidy'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        })
        .then((doc) => {
            console.log('Users');
            console.log(JSON.stringify(doc, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    // db
    //     .collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID("5a01a188d3455334e403a0ae")
    //     }, {
    //         $set: {completed: true}
    //     }, { returnOriginal: false })
    //     .then((doc) => {
    //         console.log('Users');
    //         console.log(JSON.stringify(doc, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch users', err);
    //     });


    //db.close();
});