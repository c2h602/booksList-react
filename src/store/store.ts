import { configureStore } from '@reduxjs/toolkit';

import booksReducer from '../store/booksSlice';

const store = configureStore({
    reducer: {
      books: booksReducer
    }
  })
  
  export default store