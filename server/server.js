var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp', {
    useMongoClient: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    completed: {
        default: false,
        type: Boolean
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: '   Blast asteroids',
    completedAt: 1913330229
});

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

newTodo.save().then((doc) => {
    console.log('Saved -', JSON.stringify(doc, undefined, 2));
}).catch((e) => {
    console.log('Unable to save todo');
});

var newUser = new User({
    email: 'drdre@drefamily.com '
}).save().then((doc) => {
    console.log('Saved - ', JSON.stringify(doc, undefined, 2));
}).catch((e) => {
    console.log('Unable to save user');
});