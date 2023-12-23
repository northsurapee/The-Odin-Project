/* Constructor to make 'Book' object */
function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.info = () => {
        let phase = (isRead) ? 'already read.' : 'not read yet'
        return `${title} ${author}, ${pages} pages, ${phase}.`
    }
}

/* Sample usage */
const theHobbit = new Book('The Hobbit by J.R.R.', 'Tolkien', 295, false)
console.log(theHobbit.info())

console.log(String.prototype)
console.log(Book.prototype)