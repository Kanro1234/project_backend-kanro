/* eslint-disable */
const { addNewBook, fetchAllBooks, fetchBookById, updateBookById, removeBookById } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNewBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: fetchAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: fetchBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: removeBookById,
  },
];

module.exports = routes;
