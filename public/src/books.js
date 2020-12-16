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
  let borrowers=[]; 
  let borrowersInfo = book.borrows;
  accounts.forEach(account=>
   {
  borrowersInfo.forEach(transaction =>{
    if(account.id===transaction.id)
      {
       let result={...account}
       result["returned"]=transaction.returned ;
      borrowers.push(result);
      }
  })
  });                     
                       
          return borrowers.slice(0,10);
  }
  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
