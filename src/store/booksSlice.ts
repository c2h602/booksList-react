import { createSlice } from '@reduxjs/toolkit';
import { books } from "../books";

interface IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    image: string;
    description: string;
}

  interface BooksState {
    books: IBook[];
    filteredBooks: IBook[];
    selectedBook: IBook | null;
    showModal: boolean;
}

  const initialState: BooksState = {
    books: books,
    filteredBooks: books,
    selectedBook: null,
    showModal: false,
}

const booksSlice = createSlice({ 
    name: 'books',
    initialState,
    reducers: {
        filterBooks(state, action) {
            state.filteredBooks = state.books.filter(
                (book) => book.genre === action.payload
            );
        },
        disableFilter(state) {
            state.filteredBooks = state.books;
        },
        openDescriptionBook(state, action) {
            state.selectedBook = action.payload;
            state.showModal = true;
        },
        closeDescriptionBook(state) {
            state.selectedBook = null;
            state.showModal = false;
        }
    }
});

export const { filterBooks, disableFilter, openDescriptionBook, closeDescriptionBook } = booksSlice.actions

export default booksSlice.reducer