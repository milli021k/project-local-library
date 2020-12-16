function findAccountById(accounts, id) {

  return  accounts.find(account=> account.id === id);
  
}


function sortAccountsByLastName(accounts) {

return  accounts.sort((firstvalue,lastvalue)=>firstvalue.name.last>lastvalue.name.last?1:-1);
 
}


function numberOfBorrows(account, books) {
  const {id} = account;
let accumulator = 0;
let ans =books.forEach(book =>  
{
if(book.borrows.find(person => person.id === id))
{
accumulator++;
}
});
return  accumulator;
}




function getBooksPossessedByAccount({id}, books, authors) {


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
getBooksPossessedByAccount,
};
