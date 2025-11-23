import { useState } from 'react';

function BookForm({ onAddBook, darkMode }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publicationDate: '',
    publisher: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.author) {
      alert('Silakan isi bidang judul dan pengarang');
      return;
    }

    onAddBook(formData);
    setFormData({
      title: '',
      author: '',
      publicationDate: '',
      publisher: '',
    });
  };

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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: darkMode ? '#b0b0b0' : '#374151',
    marginBottom: '8px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 16px',
    border: darkMode ? '1px solid #404050' : '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: "'Times New Roman', Times, serif",
    background: darkMode ? '#1a1a2e' : 'white',
    color: darkMode ? '#e0e0e0' : '#1f2937',
    transition: 'all 0.2s',
    outline: 'none',
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  };

  const buttonStyle = {
    width: '100%',
    background: '#2563eb',
    color: 'white',
    fontWeight: '600',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Tambah Buku Baru</h2>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>
            Judul
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Judul buku"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>

        <div>
          <label style={labelStyle}>
            Pengarang
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Nama pengarang"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>

        <div>
          <label style={labelStyle}>
            Tanggal Publikasi (YYYY-MM-DD)
          </label>
          <input
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>

        <div>
          <label style={labelStyle}>
            Penerbit
          </label>
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Nama penerbit"
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
          onMouseLeave={(e) => e.target.style.background = '#2563eb'}
        >
          Tambah Buku
        </button>
      </form>
    </div>
  );
}

export default BookForm;
