import { displayList, displayForm, displayContact } from './displayUtils.js';

export default class BookManager {
  constructor() {
    this.books = [];
    this.id = 0;
    this.form = document.getElementById('form');
    this.bookSection = document.getElementById('books');
    this.list = document.getElementById('list');
    this.addNew = document.getElementById('addnew');
    this.contact = document.getElementById('contact');
    this.initialize();
  }

  initialize() {
    this.list.addEventListener('click', displayList);
    this.addNew.addEventListener('click', displayForm);
    this.contact.addEventListener('click', displayContact);
    this.form.addEventListener('submit', this.callbackFunction);
    this.displayData();
  }

  displayData() {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks) : [];
    this.bookSection.innerHTML = '';

    this.books.forEach((book, index) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');

      const titleElement = document.createElement('p');
      titleElement.id = 'title';
      titleElement.textContent = `"${book.title}" by ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.classList.add('btn');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => this.removeBook(index));

      bookElement.appendChild(titleElement);
      bookElement.appendChild(removeButton);
      this.bookSection.appendChild(bookElement);
    });
  }

  callbackFunction = (event) => {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    this.books.push(formDataObj);
    const storedBook = JSON.stringify(this.books);
    localStorage.setItem('books', storedBook);
    this.displayData();
  }

  removeBook = (index) => {
    this.books.splice(index, 1);
    const storedBook = JSON.stringify(this.books);
    localStorage.setItem('books', storedBook);
    this.displayData();
  }
}
