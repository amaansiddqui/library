import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 1, name: 'Fiction', icon: '📖' },
  { id: 2, name: 'Non-Fiction', icon: '🧠' },
  { id: 3, name: 'Sci-Fi', icon: '🚀' },
  { id: 4, name: 'Mystery', icon: '🔍' },
  { id: 5, name: 'Fantasy', icon: '🐉' },
  { id: 6, name: 'Biography', icon: '✍️' },
];

const POPULAR_BOOKS = [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    rating: '4.8',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    summary: 'A mythic hero’s journey set on the desert planet Arrakis.',
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Non-Fiction',
    rating: '4.9',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    summary: 'An easy & proven way to build good habits & break bad ones.',
  },
  {
    id: '3',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    rating: '4.7',
    cover: 'https://cdn.pixabay.com/photo/2024/06/28/05/57/book-8858593_1280.jpg',
    summary: 'Bilbo Baggins embarks on an epic quest to reclaim the lost kingdom.',
  },
  {
    id: '4',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    category: 'Mystery',
    rating: '4.5',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop',
    summary: 'A shocking psychological thriller about a woman’s act of violence.',
  },
];

const Home = () => {
  return (
    <div className="container py-4">
      {/* Hero Welcome Section */}
      <section className="p-5 mb-5 bg-primary bg-gradient text-white rounded-3 shadow text-center">
        <h1 className="display-5 fw-bold">Welcome to Book Library</h1>
        <p className="col-md-8 fs-5 mx-auto opacity-90">
          Discover your next great read, explore diverse genres, and manage your personal collection.
        </p>
        <Link to="/books" className="btn btn-light btn-lg fw-semibold mt-2">
          Explore All Books
        </Link>
      </section>

      {/* Categories Section */}
      <section className="mb-5">
        <h2 className="h3 fw-bold mb-4">Book Categories</h2>
        <div className="row g-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="col-6 col-sm-4 col-md-2">
              <Link
                to={`/books/${cat.name.toLowerCase()}`}
                className="card h-100 text-center text-decoration-none shadow-sm border-0 py-3 bg-light hover-shadow"
              >
                <div className="fs-1 mb-1">{cat.icon}</div>
                <span className="fw-semibold text-dark">{cat.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 fw-bold mb-0">Popular Books</h2>
          <Link to="/books" className="text-decoration-none fw-semibold">
            View All →
          </Link>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {POPULAR_BOOKS.map((book) => (
            <div key={book.id} className="col">
              <div className="card h-100 shadow-sm border-0 position-relative">
                <span className="badge bg-dark position-absolute top-0 end-0 m-2">
                  {book.category}
                </span>
                <img
                  src={book.cover}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h5 className="card-title h6 fw-bold mb-0 text-truncate">{book.title}</h5>
                    <span className="badge bg-warning text-dark">★ {book.rating}</span>
                  </div>
                  <p className="card-text text-muted small mb-2">By {book.author}</p>
                  <p className="card-text small text-secondary flex-grow-1">{book.summary}</p>
                  <Link to={`/book/${book.id}`} className="btn btn-outline-primary btn-sm w-100 mt-2">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;