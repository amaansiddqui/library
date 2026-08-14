
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, BOOKS } from '../data/booksData';

const AddBook = () => {
  const navigate = useNavigate();

  // Filter out 'All' option for category selection
  const categoryOptions = CATEGORIES.filter((cat) => cat !== 'All');

  // Form input state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    rating: '',
    summary: '',
    cover: '',
  });

  // Validation error messages
  const [errors, setErrors] = useState({});

  // Handle controlled input changes & clear field-specific error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Book title is required.';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required.';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a book category.';
    }

    if (!formData.rating) {
      newErrors.rating = 'Rating is required.';
    } else {
      const numRating = parseFloat(formData.rating);
      if (isNaN(numRating) || numRating < 1 || numRating > 5) {
        newErrors.rating = 'Rating must be a number between 1.0 and 5.0.';
      }
    }

    if (!formData.summary.trim()) {
      newErrors.summary = 'Description is required.';
    } else if (formData.summary.trim().length < 15) {
      newErrors.summary = 'Description must be at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newBook = {
        id: String(Date.now()), // Unique ID generator for dummy data
        title: formData.title.trim(),
        author: formData.author.trim(),
        category: formData.category,
        rating: parseFloat(formData.rating).toFixed(1),
        summary: formData.summary.trim(),
        cover: formData.cover.trim() || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=600&auto=format&fit=crop',
      };

      // Push to dummy dataset
      BOOKS.unshift(newBook);

      // Redirect to Browse Books page
      navigate('/books');
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-7">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4 p-md-5">

              <h1 className="fw-bold h3 mb-1">Add New Book</h1>
              <p className="text-muted small mb-4">
                Fill out the form below to add a new book to the store collection.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Title Input */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-semibold">
                    Book Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    placeholder="e.g. The Great Gatsby"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>

                {/* 2. Author Input */}
                <div className="mb-3">
                  <label htmlFor="author" className="form-label fw-semibold">
                    Author Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                    placeholder="e.g. F. Scott Fitzgerald"
                    value={formData.author}
                    onChange={handleChange}
                  />
                  {errors.author && <div className="invalid-feedback">{errors.author}</div>}
                </div>

                {/* 3. Category & Rating Row */}
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label fw-semibold">
                      Category <span className="text-danger">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select category...</option>
                      {categoryOptions.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <div className="invalid-feedback">{errors.category}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="rating" className="form-label fw-semibold">
                      Rating (1.0 to 5.0) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      step="0.1"
                      min="1"
                      max="5"
                      className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
                      placeholder="e.g. 4.5"
                      value={formData.rating}
                      onChange={handleChange}
                    />
                    {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
                  </div>
                </div>

                {/* 4. Cover Image URL (Optional) */}
                <div className="mb-3">
                  <label htmlFor="cover" className="form-label fw-semibold">
                    Cover Image URL <span className="text-muted fw-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="cover"
                    name="cover"
                    className="form-control"
                    placeholder="https://example.com/cover.jpg"
                    value={formData.cover}
                    onChange={handleChange}
                  />
                  <div className="form-text">Leaves blank to use a default book cover image.</div>
                </div>

                {/* 5. Description Textarea */}
                <div className="mb-4">
                  <label htmlFor="summary" className="form-label fw-semibold">
                    Description / Summary <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="summary"
                    name="summary"
                    rows="4"
                    className={`form-control ${errors.summary ? 'is-invalid' : ''}`}
                    placeholder="Provide a brief summary of the book..."
                    value={formData.summary}
                    onChange={handleChange}
                  ></textarea>
                  {errors.summary && <div className="invalid-feedback">{errors.summary}</div>}
                </div>

                {/* Submit Buttons */}
                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={() => navigate('/books')}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary px-4 fw-semibold">
                    Add Book
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;