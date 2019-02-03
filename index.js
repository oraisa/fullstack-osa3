const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")

morgan.token("body", (request, response) => JSON.stringify(request.body))
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "045-1236543"
    },
    {
        id: 2,
        name: "Arto Järvinen",
        number: "041-21423123"
    },
    {
        id: 3,
        name: "Lea Kutvonen",
        number: "040-4323234"
    },
    {
        id: 4,
        name: "Martti Tienari",
        number: "09-784232"
    }
]

app.get("/info", (request, response) => {
    response.send(`
        <p>Puhelinluettelossa ${persons.length} henkilön tiedot</p>
        <p>${new Date().toString()}</p>
    `)
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if(person){
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post("/api/persons", (request, response) => {
    const id = Math.floor(Math.random() * 10000000)
    const body = request.body

    if(body.name === undefined){
        return response.status(400).json({error: "name missing"})
    } else if(body.number === undefined){
        return response.status(400).json({error: "number missing"})
    } else if(persons.find(person => person.name === body.name)){
        return response.status(400).json({error: `name ${body.name} is in the phonebook`})
    }

    const person = {
        id: id,
        name: body.name,
        number: body.number
    }
    person.id = id
    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
