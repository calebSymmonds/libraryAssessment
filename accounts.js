function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.localeCompare(b.name.last));
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  return books.reduce((total, book) => {
    const borrowCount = book.borrows.reduce(
      (count, borrow) => count + (borrow.id === accountId),
      0
    );
    return total + borrowCount;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  return books.filter(book => book.borrows.some(borrow => borrow.id === accountId && !borrow.returned)).map(book => {
      const author = authors.find(author => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
