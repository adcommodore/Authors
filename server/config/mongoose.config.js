const mongoose = require('mongoose');
const dbName = 'Author';

mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Successfully connected to ' + dbName + ' database.')
    })
    .catch(err => {
        console.log('Error occurred when connecting to ' + dbName + ' database.')
        console.log(err)
    })