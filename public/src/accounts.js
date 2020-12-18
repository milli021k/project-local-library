const findAccountById = (accounts, id)=>accounts.find(account=> account.id === id);


const sortAccountsByLastName = (accounts)=>accounts.sort((accountA,accountB)=>accountA.name.last>accountB.name.last?1:-1);


function numberOfBorrows(account, books) {
  const {id} = account;
  let accumulator = 0;
   
  books.forEach(book =>  
  {
  if(book.borrows.find(transaction => transaction.id === id))
   {
  accumulator++;
   }
  });
 
  return  accumulator;
  
}




function booksInPossession({id}, books, authors) {


let borrowedBooks = books.filter(book => book.borrows.some(borrow => (borrow.id === id && borrow.returned === false)));

 return borrowedBooks.reduce((acc, book) => { 
    book.author = authors.find(author => author.id === book.authorId); 
     acc.push(book);
 return acc;  }, []);
}




module.exports = {
findAccountById,
sortAccountsByLastName,
numberOfBorrows,
booksInPossession,
};
