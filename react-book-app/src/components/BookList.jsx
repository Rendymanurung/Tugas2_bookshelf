function BookList({ books, onDeleteBook, darkMode }) {
  const containerStyle = {
    background: darkMode ? '#2d2d44' : 'white',
    borderRadius: '8px',
    boxShadow: darkMode 
      ? '0 10px 25px rgba(0, 0, 0, 0.5)' 
      : '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    transition: 'all 0.3s ease',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: darkMode ? '#e0e0e0' : '#1f2937',
    marginBottom: '24px',
  };

  const emptyStateStyle = {
    textAlign: 'center',
    paddingTop: '48px',
    paddingBottom: '48px',
  };

  const emptyTextStyle = {
    color: darkMode ? '#808080' : '#9ca3af',
    fontSize: '18px',
    marginBottom: '16px',
  };

  const emptySubtextStyle = {
    color: darkMode ? '#606060' : '#d1d5db',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
  };

  const cardStyle = {
    border: darkMode ? '1px solid #404050' : '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    background: darkMode ? '#1a1a2e' : 'white',
    transition: 'all 0.2s',
    cursor: 'default',
  };

  const cardHoverStyle = {
    ...cardStyle,
    boxShadow: darkMode 
      ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
      : '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderColor: '#93c5fd',
  };

  const bookTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: darkMode ? '#e0e0e0' : '#1f2937',
    marginBottom: '12px',
    wordBreak: 'break-word',
  };

  const authorStyle = {
    fontSize: '14px',
    color: darkMode ? '#b0b0b0' : '#4b5563',
    marginTop: '8px',
  };

  const publisherStyle = {
    fontSize: '14px',
    color: darkMode ? '#909090' : '#6b7280',
    marginBottom: '8px',
  };

  const dateStyle = {
    fontSize: '14px',
    color: darkMode ? '#909090' : '#6b7280',
    marginBottom: '16px',
  };

  const removeButtonStyle = {
    width: '100%',
    background: '#ef4444',
    color: 'white',
    fontWeight: '500',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px',
  };

  const footerStyle = {
    marginTop: '24px',
    paddingTop: '24px',
    borderTop: darkMode ? '1px solid #404050' : '1px solid #e5e7eb',
  };

  const counterStyle = {
    fontSize: '14px',
    color: darkMode ? '#b0b0b0' : '#4b5563',
  };

  const countBoldStyle = {
    fontWeight: 'bold',
    color: darkMode ? '#e0e0e0' : '#1f2937',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Koleksi Buku</h2>
      
      {books.length === 0 ? (
        <div style={emptyStateStyle}>
          <p style={emptyTextStyle}>Belum ada buku</p>
          <p style={emptySubtextStyle}>Tambahkan buku pertama Anda menggunakan formulir.</p>
        </div>
      ) : (
        <>
          <div style={gridStyle}>
            {books.map(book => (
              <div
                key={book.id}
                style={cardStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
              >
                <h3 style={bookTitleStyle}>
                  {book.title}
                </h3>
                <p style={authorStyle}>oleh {book.author}</p>

                {book.publisher && (
                  <p style={publisherStyle}>
                    Penerbit: {book.publisher}
                  </p>
                )}

                {book.publicationDate && (
                  <p style={dateStyle}>
                    Dipublikasikan: {new Date(book.publicationDate).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                )}

                <button
                  onClick={() => onDeleteBook(book.id)}
                  style={removeButtonStyle}
                  onMouseEnter={(e) => e.target.style.background = '#dc2626'}
                  onMouseLeave={(e) => e.target.style.background = '#ef4444'}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          {books.length > 0 && (
            <div style={footerStyle}>
              <p style={counterStyle}>
                Total buku: <span style={countBoldStyle}>{books.length}</span>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BookList;
