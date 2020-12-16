function findAuthorById(authors, id) {

  return  authors.find(author => author.id===id);
  
}

function findBookById(books, id) {
  
  return books.find(book => book.id===id);
   
}

function partitionBooksByBorrowedStatus(books) {
  
  let availableBooks = books.filter(book => book.borrows.every(borrow => (borrow.returned ===true )));
  
  let borrowedBooks = books.filter(book => book.borrows.some(borrow => (borrow.returned === false)));
  
  return [borrowedBooks,availableBooks];
  
}

function getBorrowersForBook(book, accounts) {
 
let borrowersInfo = book.borrows;
let result = accounts.filter(account=> borrowersInfo.some(info => info.id ===account.id));

let updatedAccount = result.forEach(account=>
  account["returned"] = true);

  return result ;
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
