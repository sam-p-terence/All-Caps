
// const booksContainer = document.querySelector('#books-container')
// const form = document.querySelector('form')

// const baseURL = `http://localhost:4004/api/books`

// const booksCallback = ({ data: books }) => displayBooks(books)
// const errCallback = err => console.log(err)

// const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
// const createBooks = body => axios.post(baseURL, body).then(booksCallback).catch(errCallback)

// // const hover = document.getElementById("hover");
// // const hoverTitle = document.getElementById("hoverTitle");


// // text.onmouseover = function () {
// //   text.innerHTML =
// //     "He probably failed in the end.";
// //   title.innerHTML = "Spoiler Alert";
// // };

// // text.onmouseout = function () {
// //   text.innerHTML = "NaZaMa's Album Shop started in July of 2022 when student Terence Sam was forced to create the werbsite in order to pass his Capstone Project Assessment.";
// //   title.innerHTML = "What is NaZaMa's Album Shop?";
// // };


// function submitHandler(e) {
//     e.preventDefault()

//     let address = document.querySelector('#address')
//     let imageURL = document.querySelector('#img')
//     let bodyObj = {
//         address: address.value,
//         imageURL: imageURL.value
//     }
//     createBooks(bodyObj)
//     address.value = ''
//     imageURL.value = ''
// }

// function createBooksCard(books) {
//     const booksCard = document.createElement('div')
//     booksCard.classList.add('books-card')
//     booksCard.innerHTML = `<img alt='book image' src=${books.imageURL} class="books-cover-image"/>
//     <p class="address">${books.address}</p>`
//     booksContainer.appendChild(booksCard)
// }

// function displayBooks(arr) {
//     booksContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createBooksCard(arr[i])
//     }
// }



// form.addEventListener('submit', submitHandler) 
// getAllBooks()







const albumsContainer = document.querySelector('#albums-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/albums`

const albumsCallback = ({ data: albums }) => displayAlbums(albums)
const errCallback = err => console.log(err)

const getAllAlbums = () => axios.get(baseURL).then(albumsCallback).catch(errCallback)
const createAlbums = body => axios.post(baseURL, body).then(albumsCallback).catch(errCallback)



function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')
    let description = document.querySelector('#description')
    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value,
        description: description.value
    }
    createAlbums(bodyObj)
    title.value = ''
    imageURL.value = ''
    description.value = ''
}

function createAlbumsCard(albums) {
    const albumsCard = document.createElement('div')
    albumsCard.classList.add('albums-card')
    albumsCard.innerHTML = `<img alt='album image' src=${albums.imageURL} class="albums-cover-image"/>
    <p class="title"><p>${albums.title}</p>
    <p class="description"><p>Artist: ${albums.description}</p>`
    albumsContainer.appendChild(albumsCard)
}


function displayAlbums(arr) {
    albumsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createAlbumsCard(arr[i])
        // return displayAlbums[(Math.random() * arr.length)]

    }
}



form.addEventListener('submit', submitHandler) 
getAllAlbums()


