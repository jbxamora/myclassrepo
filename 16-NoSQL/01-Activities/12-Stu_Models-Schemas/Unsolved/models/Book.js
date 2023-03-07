const mongoose = require('mongoose');

// TODO: Add a comment describing the functionality of the code below
// Sets schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
// Creates the book model based on the book schema
const Book = mongoose.model('Book', bookSchema);

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
// Creates a new book document
Book.create(
  {
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
// only has the first two fields, one of them being required (title)
Book.create(
  { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
// only has the title field, which is required
Book.create({ title: 'Harold and the Purple Crayon',lastAccessed: Date.now }, (err) =>
  err ? handleError(err) : console.log('Created new document')
);

module.exports = Book;
