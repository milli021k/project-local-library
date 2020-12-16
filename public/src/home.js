function totalBooksCount(books) {
  return  books.reduce((acc, value) => acc +=1, 0);
  
   
}

function totalAccountsCount(accounts) {
  
  return accounts.reduce ((acc,val)=> acc+1,0) 
}



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
return final.sort((a,b)=>b.count-a.count).slice(0,5);
  
}

function mostPopularBooks(books) {
  
  let result =[];
  books.forEach(book=>
  {
 let   value=  { name : book.title, count: book.borrows.length} 
   result.push(value)
  });


 return result.sort((a,b)=>b.count-a.count).slice(0,5);

}



function mostPopularAuthors(books, authors) {
  let result = [];
authors.forEach (author=>
  {
 let value ={name:`${author.name.first} ${author.name.last}`, count: books.filter(book => author.id ===book.authorId ).reduce((acc,val)=>acc+=val.borrows.length,0)};

result.push(value);
});

return result.sort((a,b)=>b.count-a.count).slice(0,5);
  
  }

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
