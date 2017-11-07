var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp', {
    useMongoClient: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Eat noodles',
    completed: true,
    completedAt: 1913330229
});

newTodo.save().then((doc) => {
    console.log('Saved -', JSON.stringify(doc, undefined, 2));
}).catch((e) => {
    console.log('Unable to save todo');
});