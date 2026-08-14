import { createSlice } from '@reduxjs/toolkit';
import { BOOKS } from '../data/booksData';

const initialState = {
  books: BOOKS,
};
// Declare BookSlice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
