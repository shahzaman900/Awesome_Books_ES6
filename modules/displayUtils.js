export const displayList = () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('addnew');
  const contact = document.getElementById('contact');
  const bookSection = document.getElementById('books');
  const createBook = document.getElementById('createBook');
  const contactInfo = document.getElementById('contactinfo');
  createBook.style.display = 'none';
  bookSection.style.display = 'flex';
  contact.style.color = 'black';
  addNew.style.color = 'black';
  list.style.color = 'blue';
  contactInfo.style.display = 'none';
};

export const displayForm = () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('addnew');
  const contact = document.getElementById('contact');
  const bookSection = document.getElementById('books');
  const createBook = document.getElementById('createBook');
  const contactInfo = document.getElementById('contactinfo');
  const hr = document.getElementById('hr');
  createBook.style.display = 'flex';
  contact.style.color = 'black';
  addNew.style.color = 'blue';
  list.style.color = 'black';
  bookSection.style.display = 'none';
  contactInfo.style.display = 'none';
  hr.style.display = 'none';
};

export const displayContact = () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('addnew');
  const contact = document.getElementById('contact');
  const bookSection = document.getElementById('books');
  const createBook = document.getElementById('createBook');
  const contactInfo = document.getElementById('contactinfo');
  contact.style.color = 'blue';
  addNew.style.color = 'black';
  list.style.color = 'black';
  contactInfo.style.display = 'flex';
  createBook.style.display = 'none';
  bookSection.style.display = 'none';
};