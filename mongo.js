const mongoose = require("mongoose")

if(process.argv.length < 3) {
    console.log("give password as argument")
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb://osa3:${password}@ds239177.mlab.com:39177/oraisa-fullstack`

mongoose.connect(url, { useNewUrlParser: true })


const Person = mongoose.model('Person', personSchema)

const addPerson = (name, number) => {
    const person = new Person({
        name: name,
        number: number,
    })
    person.save().then(response => {
        console.log(`lisätään ${name} numero ${number} tietokantaan`);
        mongoose.connection.close();
    })
}

const printDatabase = () => {
    Person.find({}).then(result => {
        console.log("puhelinluettelo:")
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}

if(process.argv.length < 5){
    printDatabase()
} else {
    addPerson(process.argv[3], process.argv[4])
}
