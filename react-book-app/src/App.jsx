import { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('form'); // 'form' or 'collection'

  const addBook = (book) => {
    const newBook = {
      id: Date.now(),
      ...book,
    };
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const appStyle = {
    minHeight: '100vh',
    background: darkMode 
      ? 'linear-gradient(to bottom right, #1a1a2e, #16213e)' 
      : 'linear-gradient(to bottom right, #f0f9ff, #e0e7ff)',
    padding: '32px 16px',
    transition: 'background 0.3s ease',
    fontFamily: "'Times New Roman', Times, serif",
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '48px',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: darkMode ? '#e0e0e0' : '#1f2937',
    marginBottom: '24px',
  };

  const subtitleStyle = {
    color: darkMode ? '#b0b0b0' : '#4b5563',
    fontSize: '18px',
    marginBottom: '24px',
  };

  const navStyle = {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '32px',
    flexWrap: 'wrap',
  };

  const navButtonStyle = (isActive) => ({
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Times New Roman', Times, serif",
    background: isActive ? '#2563eb' : (darkMode ? '#404050' : '#e5e7eb'),
    color: isActive ? 'white' : (darkMode ? '#e0e0e0' : '#1f2937'),
  });

  const toggleButtonStyle = {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    background: darkMode ? '#e3e4e3ff' : '#343433ff',
    color: darkMode ? '#000' : '#fff',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={toggleButtonStyle}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <h1 style={titleStyle}>Hogwarts Library</h1>
          <p style={subtitleStyle}>Kelola koleksi buku Anda</p>
        </div>

        <div style={navStyle}>
          <button
            onClick={() => setCurrentPage('form')}
            style={navButtonStyle(currentPage === 'form')}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            ➕ New
          </button>
          <button
            onClick={() => setCurrentPage('collection')}
            style={navButtonStyle(currentPage === 'collection')}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            📚 Koleksi
          </button>
        </div>

        {currentPage === 'form' ? (
          <BookForm onAddBook={addBook} darkMode={darkMode} />
        ) : (
          <BookList books={books} onDeleteBook={deleteBook} darkMode={darkMode} />
        )}
      </div>
    </div>
  );
}

export default App;
