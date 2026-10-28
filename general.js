const axios = require('axios');
const BASE = 'http://localhost:5000';

// Tous les livres
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE}/`);
    console.log(res.data);
  } catch (err) { console.error(err.message); }
}

// Par ISBN (promesses)
function getByISBN(isbn) {
  return axios.get(`${BASE}/isbn/${isbn}`)
    .then(res => console.log(res.data))
    .catch(err => console.error(err.message));
}

// Par auteur
async function getByAuthor(author) {
  try {
    const res = await axios.get(`${BASE}/author/${encodeURIComponent(author)}`);
    console.log(res.data);
  } catch (err) { console.error(err.message); }
}

// Par titre
async function getByTitle(title) {
  try {
    const res = await axios.get(`${BASE}/title/${encodeURIComponent(title)}`);
    console.log(res.data);
  } catch (err) { console.error(err.message); }
}

module.exports = { getAllBooks, getByISBN, getByAuthor, getByTitle };