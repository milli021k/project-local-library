const findAuthorById = (authors, id)=>authors.find(author => author.id===id);
  


const findBookById=(books, id) =>books.find(book => book.id===id);
  

function partitionBooksByBorrowedStatus(books) {
  
  let availableBooks = books.filter(book => book.borrows.every(borrow => (borrow.returned ===true )));
  
  let borrowedBooks = books.filter(book => book.borrows.some(borrow => (borrow.returned === false)));
  
  let result = [borrowedBooks,availableBooks]
  
  // used ternary operators 
  // if the book never been rented return empty array
  return (result.length>0)?result:[]; 
  
}



function getBorrowersForBook(book, accounts) {
  let borrowers=[]; 
  let borrowersInfo = book.borrows;
  accounts.forEach(account=>
   { 
     const  {id } = account;
  borrowersInfo.forEach(transaction =>{
    if(id===transaction.id)
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
