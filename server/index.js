// const express = require('express')
// const cors = require('cors')

// const app = express()

// app.use(express.json())
// app.use(cors())

// const {
//     getBooks,
//     createBooks
// } = require('./controller')

// app.get("/api/books", getBooks);
// app.post("/api/books", createBooks)


// app.listen(4004, () => console.log(`running on 4004`))

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

app.get('../', (req, res) => {
    res.sendFile(path.join(__dirname, '../intro/intro.html'))
})
app.get('../css', (req, res) => {
    res.sendFile(path.join(__dirname, '../intro/intro.css'))
})
// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.js'))
// })

const {
    getAlbums,
    createAlbums
} = require('./controller')

app.get("/api/albums", getAlbums);
app.post("/api/albums", createAlbums)


app.listen(4004, () => console.log(`running on 4004`))