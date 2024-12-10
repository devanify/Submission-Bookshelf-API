const {
  simpanBukuHandler, tampilSemuaBukuHandler, detailBukuHandler, editBukuHandler, hapusBukuHandler,
} = require('./handler.js');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: simpanBukuHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: tampilSemuaBukuHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: detailBukuHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBukuHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusBukuHandler,
  },
];

module.exports = routes;
