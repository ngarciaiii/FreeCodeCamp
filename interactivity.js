var booksTimeline = document.getElementById('books-timeline');

books = ['Batman Year One', 'Batman Shaman', 'Batman and The Long Halloween', 'Batman Dark Victory', 'book example 5'];

for (var book = 0; book < books.length; book++) {
	// create li element
	var li = document.createElement('li');
	// assign innerText of li element this value: books[i]
	li.innerText = books[book];
	// append li element to booksTimeLine (look at appendChild function)
	booksTimeline.appendChild(li);
}

