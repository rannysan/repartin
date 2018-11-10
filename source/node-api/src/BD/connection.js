const mongoose = require('mongoose')
const uri = 'mongodb://tester:test123@ds157853.mlab.com:57853/repartinapp'
let db = mongoose.connection;


function test(res) {
    mongoose.connect(uri);
    res.send("Voce testou o banco com um GET")
}

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {


    let blue = {
        primary: "blue",
        onPrimary: "lightBlue",
        secondary: "darkBlue",
        onSecondary: "aqua"

    }

    // Create house schema 
    let houseSchema = mongoose.Schema({
        name: String,
        address: String,
        creation: Date,
        color: Object,
        adminID: Number,
        removed: Boolean
    });

    // Store house documents in a collection called "houses"
    let House = mongoose.model('houses', houseSchema);


    // Create seed data

    let viraCopos = new House({
        name: 'viraCopos',
        address: 'Rua Carlos Gomes, 763',
        creation: Date.now(),
        color: blue,
        adminID: 123,
        removed: false
    });

    let repLek = new House({
        name: 'repLek',
        address: 'Rua Carlos Gomes, 763',
        creation: Date.now(),
        color: blue,
        adminID: 132,
        removed: true
    });

    let brejaFlor = new House({
        name: 'brejaFlor',
        address: 'Rua Carlos Gomes, 763',
        creation: Date.now(),
        color: blue,
        adminID: 321,
        removed: false
    });

    /*
     * First we'll add a few creations. Nothing is required to create the
     * creations collection; it is created automatically when we insert.
     */

    let list = [viraCopos, repLek, brejaFlor]

    House.insertMany(list).then(() => {

        /*
         * Then we need to update address from repLek to 'travessa, 54'.
         */

        return House.updateOne({
            name: 'repLek'
        }, {
            $set: {
                address: 'travessa, 54'
            }
        })

    }).then(() => {

        /*
         * Finally we run a query which returns all the houses that has and adminID 132 
         */

        return House.find({
            adminID: 132
        }).sort({
            name: 1
        })

    }).then(docs => {

        docs.forEach(doc => {
            console.log(
                'A rep ' + doc['name'] + ', fica na ' + doc['address']
            );
        });
    // When finish testing, uncomment this lines and run it one more time, so it will clean the collection
    }).then(() => {
        // Since this is an example, we'll clean up after ourselves.
        return mongoose.connection.db.collection('houses').drop()

    }).then(() => {
        // Only close the connection when your app is terminating
        return mongoose.connection.close()
    }).then(() => {
        console.log("Connection closed")

    }).catch(err => {

        // Log any errors that are thrown in the Promise chain
        console.log(err)

    })
});
module.exports.test = test;