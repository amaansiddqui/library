# Online Book Library Application

An interactive Online Book Library web application built with **React**, **React Router DOM**, **Redux Toolkit**, **Bootstrap**, and **Vite**.

---

## Features

- **Home Page**:
  - Welcome banner with navigation to explore all books.
  - Interactive book categories (Fiction, Non-Fiction, Sci-Fi, Mystery, Fantasy, Biography).
  - List of popular featured books.
- **Browse Books**:
  - Filter books by category via URL parameters or navigation tabs.
  - Search books by title or author in real time.
  - View list of books stored in Redux state.
- **Book Details**:
  - Detailed view of selected book including title, author, category, rating, description, and cover image.
  - Back navigation button to return to the book list.
- **Add Book**:
  - Form to add new books to the library with validation.
  - Redux action dispatches new book directly into state and redirects user to Browse Books.
- **404 Not Found Page**:
  - Custom page for unmatched routes with a button to return home.

---

## 🛠️ Tech Stack

- **Frontend Library**: React
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Routing**: React Router v7 (`react-router-dom`)
- **Styling**: Bootstrap 5
- **Build Tool**: Vite

---

## 📋 Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (installed automatically with Node.js)

---

## 🏃 How to Run the Application

Follow these steps to set up and run the project locally:

### 1. Navigate to Project Directory
```bash
cd "Book library"
```

### 2. Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

### 3. Start the Development Server
Launch the local Vite development server:
```bash
npm run dev
```

### 4. Open in Browser
Once the development server starts, open your web browser and navigate to the local URL provided in the terminal (typically):
```
http://localhost:5173
```

---

## Github Repo

[Repo link](https://github.com/amaansiddqui/library)