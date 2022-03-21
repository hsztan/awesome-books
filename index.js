import data from './modules/data.js';
import Book from './modules/Book.js';
import elem from './modules/domElements.js';
import displayTime from './modules/displayTime.js';
// show bookList
elem.bookListSection.classList.add('show');

displayTime();

// Helper to display text if no books in list
const checkAndDisplayEmptyList = () => {
  const messageEle = document.getElementById('empty-list');
  if (!data.length) {
    messageEle.classList.add('show');
  } else {
    messageEle.classList.remove('show');
  }
};

// Add eventlisteners to nav buttons
elem.listBtn.addEventListener('click', () => {
  elem.bookListSection.classList.add('show');
  elem.addBookSection.classList.remove('show');
  elem.contactSection.classList.remove('show');
  checkAndDisplayEmptyList();
});

elem.addBookBtn.addEventListener('click', () => {
  elem.addBookSection.classList.add('show');
  elem.bookListSection.classList.remove('show');
  elem.contactSection.classList.remove('show');
});

elem.contactBtn.addEventListener('click', () => {
  elem.contactSection.classList.add('show');
  elem.addBookSection.classList.remove('show');
  elem.bookListSection.classList.remove('show');
});

// Event lister to add books and save them
elem.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(elem.bookTitle.value, elem.bookAuthor.value);
  book.saveBookValues();
  book.displayBookValues();
  // Event listener to remove a book
  document
    .getElementById(`btn-rem-${book.index}`)
    .addEventListener('click', (e) => {
      book.deleteBookValues(e.target);
    });
  // Reset form values and inform successful save
  elem.bookTitle.value = '';
  elem.bookAuthor.value = '';
  const headerElem = document.querySelector('.add-book h2');
  headerElem.textContent = 'Book was successfully added to list!';
  setTimeout(() => {
    headerElem.textContent = 'Add a new book';
  }, 2000);
});

// Event listener to display all saved books and add event listeners to each remove button
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('books')) {
    new Book().displayAllBooksValues();
    const remBookBtns = document.querySelectorAll('.btn-remove');
    remBookBtns.forEach((btn, i) => {
      btn.dataset.index = i;
      btn.addEventListener('click', (e) => {
        new Book().deleteBookValues(e.target);
      });
    });
  }
  checkAndDisplayEmptyList();
});

elem.bookSection.addEventListener('click', checkAndDisplayEmptyList);
