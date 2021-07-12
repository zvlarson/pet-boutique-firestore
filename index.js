// connect to firestore

const admin = require("firebase-admin")

const creds = require("./credentials.json")

admin.initializeApp({
  credential: admin.credential.cert(creds)
})

// now here we are connected to ALL of the services in our firebase project

const db = admin.firestore()

// create a customer
const newCustomer = {
    firstName: 'Zach',
    lastName: 'Larson',
    tel: '813-957-8397',
    email: 'zvlarson@gmail.com',
    dob: '1991-01-01',
    pets: [{
        name: 'Polly',
        type: 'dog',
        size: 'medium',
        age: 12

    }, {
        name: 'Hazel',
        type: 'dog',
        size: 'large',
        age: 18

    }]
}
db.collection('customers').add(newCustomer)
    .then(doc => console.log('Created customer', doc.id))
    .catch(err => console.error('Error Adding Customer: ', err))


// get all customers
db.collection('customers').get()
    .then(collection => {
        //console.log results
        const allCustomers = collection.docs.map(doc => doc.data())
        console.log(allCustomers)
    })
    .catch(err => console.error('Error getting customers: ', err))

//console.log results

