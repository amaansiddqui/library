import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="container text-center py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="lead text-muted mb-4">
        The requested URL <code className="bg-light text-danger px-2 py-1 rounded">{location.pathname}</code> was not found.
      </p>
      <Link to="/" className="btn btn-primary btn-lg fw-semibold">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
