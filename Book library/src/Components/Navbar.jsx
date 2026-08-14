import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          📚 Book Library
        </Link>

        <div className="navbar-nav ms-auto flex-row gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link px-2 ${isActive ? 'active fw-bold text-primary' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              `nav-link px-2 ${isActive ? 'active fw-bold text-primary' : ''}`
            }
          >
            Browse Books
          </NavLink>
          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              `nav-link px-2 ${isActive ? 'active fw-bold text-primary' : ''}`
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;