import { useState } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/booksData';

const BrowseBooks = () => {
    const books = useSelector((state) => state.books.books);
    const { category: categoryParam } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Active category derived from URL parameter or query parameter (defaults to "All")
  const catFromUrl = categoryParam || searchParams.get('category');
  const activeCategory = catFromUrl
    ? CATEGORIES.find(c => c.toLowerCase() === catFromUrl.toLowerCase()) || 'All'
    : 'All';

  // Filter books by both category and search query
    const filteredBooks = books.filter((book) => {
    const matchesCategory =
      activeCategory === 'All' ||
      book.category.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryName) => {
    if (categoryName === 'All') {
      navigate('/books');
    } else {
      navigate(`/books/${categoryName.toLowerCase()}`);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">Browse Books</h1>

      {/* 1. Search Bar */}
      <div className="row mb-4">
        <div className="col-md-8 col-lg-6">
          <div className="input-group input-group-lg shadow-sm">
            <span className="input-group-text bg-white border-end-0 text-muted">🔍</span>
            <input
              type="text"
              className="form-control border-start-0 ps-0"
              placeholder="Search books by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary"
                onClick={() => setSearchTerm('')}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Category Filter Pills */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`btn rounded-pill px-3 ${
              activeCategory.toLowerCase() === cat.toLowerCase()
                ? 'btn-primary'
                : 'btn-outline-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Results Count */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="text-muted mb-0">
          Showing <strong>{filteredBooks.length}</strong> {filteredBooks.length === 1 ? 'book' : 'books'}
          {activeCategory !== 'All' && <span> in <strong>{activeCategory}</strong></span>}
        </p>
      </div>

      {/* 4. Book Cards Grid */}
      {filteredBooks.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredBooks.map((book) => (
            <div key={book.id} className="col">
              <div className="card h-100 shadow-sm border-0 position-relative">
                <span className="badge bg-dark position-absolute top-0 end-0 m-2">
                  {book.category}
                </span>
                <img
                  src={book.cover}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="card-title h6 fw-bold mb-0 text-truncate">{book.title}</h5>
                    <span className="badge bg-warning text-dark">★ {book.rating}</span>
                  </div>
                  <p className="card-text text-muted small mb-2">By {book.author}</p>
                  <p className="card-text small text-secondary flex-grow-1">{book.summary}</p>
                  <Link
                    to={`/book/${book.id}`}
                    className="btn btn-outline-primary btn-sm w-100 mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-5 bg-light rounded-3 my-4">
          <div className="fs-1 text-muted mb-2">📚</div>
          <h3 className="h5 text-secondary">No books found</h3>
          <p className="text-muted small">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => { setSearchTerm(''); navigate('/books'); }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;