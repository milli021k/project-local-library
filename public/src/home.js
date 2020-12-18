const totalBooksCount = books=>books.reduce((accumilator) => accumilator +=1, 0);

const totalAccountsCount =accounts=>accounts.reduce ((accumilator)=> accumilator+1,0) 

function booksBorrowedCount(books)   
{  let booksBorrowed= books.filter(book => book.borrows.some(borrow => borrow.returned === false));
   let borowedCount= booksBorrowed.reduce((acc, value) => acc +=1, 0)
   return borowedCount;
}


function mostCommonGenres(books) 
 {   
    let genre = {}
    const result = [];
    for (const book of books) 
      {
        genre[book.genre] ? genre[book.genre] += 1 : genre[book.genre] = 1;
      }
    for (key in genre) 
      {
        result.push({ name: key, count: genre [key]});
      }
    return  sortHelper(result);
}


function mostPopularBooks(books) {  
  let result =[];
  books.reduce((acc,book)=>
  {
    let name = book.title
    let count = book.borrows.length;
    let   value=  { name , count} 
    result.push(value)
  },result);
  return  sortHelper(result);
}


function mostPopularAuthors(books, authors) 
{
      let result = [];
      authors.forEach (author=>
      {
        const {name:{first,last}} = author;
        let name = `${first} ${last}`;
        count =books.filter(book => author.id ===book.authorId ).reduce((acc,val)=>acc+=val.borrows.length,0);
        let value ={name, count}
        result.push(value);
      });
      return  sortHelper(result);
}

function sortHelper(input)
{
  return  input.sort((firstvalue,nextvalue)=>nextvalue.count-firstvalue.count).slice(0,5);
}



module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
  sortHelper
};
