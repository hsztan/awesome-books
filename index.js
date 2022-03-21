import elem from './modules/domElements.js';
import displayTime from './modules/displayTime.js';
import addNavListeners from './modules/addNavListeners.js';
import addBooksListener from './modules/addBooksListener.js';
import displayAllBooksListener from './modules/displayAllBooksListener.js';
// show bookList
elem.bookListSection.classList.add('show');

displayTime();
// Add eventlisteners to nav buttons
addNavListeners();
// Event lister to add books and save them
addBooksListener();
// Event listener to display all saved books and add event listeners to each remove button
displayAllBooksListener();
