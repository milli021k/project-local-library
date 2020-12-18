const totalBooksCount = books=>
   books.reduce((acc) => acc +=1, 0);


const totalAccountsCount =accounts=>
   accounts.reduce ((acc)=> acc+1,0) 



function booksBorrowedCount(books) {
    
  
   return  books.filter(book => book.borrows.some(borrow => borrow.returned === false)).reduce((acc, value) => acc +=1, 0);
 
}
// 
function mostCommonGenres(books) {
  

  const geners = books.map(book=> book.genre)
const answer =[];
let temp =[];
for(i=0;i<geners.length;i++)
{
let res =  { name : geners[i], count: books.filter(book=> 
 book.genre===geners[i]).reduce((acc,val)=>acc+1,0)}
 
 answer.push(res);

}
 
// remove duplicates  

let final =[];
if(final.length==0)
{
  final.push(answer[0])
}
for(let i=1;i<answer.length;i++)
{
  let res =final.some(val => val.name ===answer[i].name)
  if(!res)
  {
 final.push(answer[i]);   
  }
}
  // sorts arry
return  sortHelper(final);

}

function mostPopularBooks(books) {
  
  let result =[];
  books.reduce((acc,book)=>
  {
    let name = book.title
    let count = book.borrows.length;
    // object shorthand
 let   value=  { name , count} 
   result.push(value)
  },result);


 return  sortHelper(result);

}





function mostPopularAuthors(books, authors) {

  let result = [];
authors.forEach (author=>
  {
    const {name:{first,last}} = author;
    let name = `${first} ${last}`;

    count =books.filter(book => author.id ===book.authorId ).reduce((acc,val)=>acc+=val.borrows.length,0);

    let value ={name, count}
    // object shorthand
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
