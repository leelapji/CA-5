import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://reactnd-books-api.udacity.com/books', {
      headers: { 'Authorization': 'whatever-you-want' }
    })
      .then((response) => response.json())
      .then((data) => setBooks(data.books));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Kalvium Books</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={() => navigate('/register')}>Register</button>
      </header>
      <main>
        <BookList books={filteredBooks} />
      </main>
    </div>
  );
};

export default Home;
