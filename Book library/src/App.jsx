import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import BrowseBooks from './Components/BrowseBooks';
import AddBook from './Components/AddBook';
import BookDetail from './Components/BookDetail';
import NotFound from './Components/NotFound';

const MainLayout = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout with Header/Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* Dynamic routes for Browse Books */}
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Route>

        {/* 404 Page Not Found without Header */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;