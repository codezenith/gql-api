const mongoose = require('mongoose')

const connection = "localhost/db"

mongoose
	.connect(connection)
	.then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))
    
module.exports = mongoose;