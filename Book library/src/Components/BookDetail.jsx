
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BOOKS } from '../data/booksData';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find book in mock data by route parameter ID
  const book = BOOKS.find((b) => b.id === id);

  // Fallback view if book ID is invalid or not found
  if (!book) {
    return (
      <div className="container py-5 text-center">
        <div className="card shadow-sm border-0 p-5 bg-white mx-auto" style={{ maxWidth: '600px' }}>
          <div className="fs-1 text-warning mb-3">⚠️</div>
          <h2 className="h4 fw-bold text-dark mb-2">Book Not Found</h2>
          <p className="text-muted mb-4">
            The book you are looking for does not exist or may have been removed.
          </p>
          <div>
            <Link to="/books" className="btn btn-primary px-4">
              ← Back to Browse Books
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* 1. Navigation Header / Back Button */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-secondary d-flex align-items-center gap-2 shadow-sm"
        >
          <span>←</span> Back
        </button>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/books">Books</Link></li>
            <li className="breadcrumb-item active text-truncate" style={{ maxWidth: '150px' }}>
              {book.title}
            </li>
          </ol>
        </nav>
      </div>

      {/* 2. Main Book Details Card */}
      <div className="card border-0 shadow-sm p-4 bg-white rounded-3">
        <div className="row g-4 align-items-center">
          
          {/* Cover Image */}
          <div className="col-12 col-md-4 text-center">
            <img
              src={book.cover}
              alt={book.title}
              className="img-fluid rounded shadow"
              style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Book Information */}
          <div className="col-12 col-md-8">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge bg-primary fs-6">{book.category}</span>
              <span className="badge bg-warning text-dark fs-6">
                ★ {book.rating} / 5.0
              </span>
            </div>

            <h1 className="fw-bold display-6 mb-2">{book.title}</h1>
            <h5 className="text-muted mb-4">
              By <span className="text-dark fw-semibold">{book.author}</span>
            </h5>

            <hr className="my-3 text-muted" />

            {/* Description / Summary */}
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase text-secondary small">Description</h6>
              <p className="lead fs-6 text-dark lh-base">
                {book.summary}
              </p>
            </div>

            {/* Author & Book Metadata Grid */}
            <div className="row g-3 bg-light p-3 rounded-3 mb-4">
              <div className="col-6 col-sm-4">
                <span className="d-block text-muted small">Author</span>
                <strong className="text-dark">{book.author}</strong>
              </div>
              <div className="col-6 col-sm-4">
                <span className="d-block text-muted small">Category</span>
                <strong className="text-dark">{book.category}</strong>
              </div>
              <div className="col-6 col-sm-4">
                <span className="d-block text-muted small">Rating</span>
                <strong className="text-dark">{book.rating} Stars</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-primary btn-lg px-4 shadow-sm">
                📖 Want to Read
              </button>
              <Link to="/books" className="btn btn-outline-dark btn-lg px-4">
                Explore More Books
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;