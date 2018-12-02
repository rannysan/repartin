const mongoose = require('mongoose')
const uri = 'mongodb://tester:test123@ds157853.mlab.com:57853/repartinapp'


function connectionOpen() {
    mongoose.connect(uri, { useNewUrlParser: true });
}
function connectionClose(){
    mongoose.connection.close()
}

module.exports = {
    connectionOpen,
    connectionClose
}
