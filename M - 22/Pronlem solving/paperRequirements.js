/* 
1st book = 100 pages
2nd book = 200 pages
3rd book = 250 pages
*/

function paperRequirements (firstBook, secondBook, thirdBook) {
    const firstBookQuantity = firstBook;
    const secondBookQuantity = secondBook;
    const thirdBookQuantity = thirdBook;
    
    let firstBookPages = firstBookQuantity * 100;
    let secondBookPages = secondBookQuantity * 200;
    let thirdBookPages = thirdBookQuantity * 250;

    const totalPages = firstBookPages + secondBookPages + thirdBookPages;

    return totalPages;
}


const bookToPages = paperRequirements(5,3,20);

console.log(bookToPages);