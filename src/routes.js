const { createBookself, getBookselfById, updateBookself, deleteBookself } = require('./handler');
const getAllBooks = require('./getAllBooks');

const routes = [
    {
        method: "POST",
        path: "/books",
        handler: createBookself,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookselfById,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookself,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookself,
        options: {
            cors: {
                origin: ['*'],
            },
        },
    },
];

module.exports = routes;