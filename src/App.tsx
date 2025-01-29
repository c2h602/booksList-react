// import { useState } from "react";
// import { books } from "./books";
import "./App.css";
import BooksList from "./components/BooksList";
import Button from "./components/Button";
import Modal from "./components/Modal";

import { useSelector, useDispatch } from "react-redux";
import {
  filterBooks,
  disableFilter,
  openDescriptionBook,
  closeDescriptionBook,
} from "./store/booksSlice";


export default function App() {
  // Вытаскиваем данные из хранилища
  // Здесь state — это все состояние
  const { filteredBooks, selectedBook, showModal } = useSelector((state) => state.books);

  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  // const [filteredBooks, setFilteredBooks] = useState(books);
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [selectedBook, setSelectedBook] = useState<IBook>();

  // function handleFilter(genre: string) {
  //   const filtered = books.filter((book) => book.genre === genre);
  //   setFilteredBooks(filtered);
  // }

  // function handleDisableFilter() {
  //   setFilteredBooks(books);
  // }

  // function handleOpenDescriptionBook(book: IBook) {
  //   setSelectedBook(book);
  //   setShowModal(true);
  // }

  // function handleCloseModal() {
  //   setShowModal(false);
  // }

  return (
    <>
      <h1>Books List 📚</h1>

      <Button onClick={() => dispatch(filterBooks("фэнтези"))}>
        Фэнтези</Button>
      <Button onClick={() => dispatch(filterBooks("фантастика"))}>
        Фантастика
      </Button>
      <Button onClick={() => dispatch(filterBooks("видеоигры"))}>
        Видеоигры
      </Button>
      <Button onClick={() => dispatch(filterBooks("биография"))}>
        Биография
      </Button>
      <Button onClick={() => dispatch(disableFilter())}>
        Все жанры
      </Button>

      <BooksList books={filteredBooks} onClick={(book) => dispatch(openDescriptionBook(book))} />
      {showModal && selectedBook && (
        <Modal onClick={() => dispatch(closeDescriptionBook())} book={selectedBook}></Modal>
      )}
    </>
  );
}
