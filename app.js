import data from './data.js'

const form = document.querySelector('#book-form')
const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookSection = document.querySelector('.books')
const removeBookBtns = document.querySelectorAll('.btn-remove')

const addBook = (author, title) => {
  data.push({ author, title })
  return data.findIndex((book) => book.author === author)
}

const displayBook = (author, title, indx) => {
  const bookCard = `
    <div class="book-card">
      <h2 class="book">${title}</h2>
      <h3 class="author">${author}</h3>
      <button class="btn-remove" id="btn-rem-${indx}" data-index="${indx}" type="button">Remove</button>
      <hr />
    </div>
  `
  bookSection.insertAdjacentHTML('beforeend', bookCard)
  return `btn-rem-${indx}`
}

const preserveBookData = () => {
  const booksData = JSON.stringify(data)
  window.localStorage.setItem('books', booksData)
}

// Remove book function helper
const removeBook = (event) => {
  console.log('in removeBook')
  console.log(event.target)
}

// Event lister to add books and save them
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = bookTitle.value
  const author = bookAuthor.value
  const bookIndex = addBook(title, author)
  preserveBookData()
  const btnRemId = displayBook(title, author, bookIndex)
  // Event listener to remove a book
  document.getElementById(btnRemId).addEventListener('click', removeBook)
})
