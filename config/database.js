const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:8090@menuplaning-cluster.n3bob.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err))