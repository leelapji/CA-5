import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Free</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
