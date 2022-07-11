// const books = require('./db.json')
// let globalId = 7

// module.exports = {
//     getBooks: (req, res) => res.status(200).send(books),
//     createBooks: (req, res) => {
//         let { address, price, imageURL } = req.body
//         let newBooks = {
//             id: globalId,
//             address, 
//             price,
//             imageURL
//         }
//         books.push(newBooks)
//         res.status(200).send(books)
//         globalId++
//     }
// }


const albums = require('./db.json')
let globalId = 15

module.exports = {
    getAlbums: (req, res) => res.status(200).send(albums),
    createAlbums: (req, res) => {
        let { title, imageURL, description } = req.body
        let newAlbums = {
            id: globalId,
            title, 
            imageURL, 
            description
        }
        albums.push(newAlbums)
        res.status(200).send(albums)
        globalId++
    }
}