function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = [];
  const returned = [];
  
  books.reduce((acc, book) => {
    if (book.borrows[0].returned) {
      returned.push(book);
    } else {
      borrowed.push(book);
    }
  }, []);

  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id);
    return { ...borrow, ...account };
  });
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
