import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Button from "./components/Button";
import { books } from "./books";
import Modal from "./components/Modal";

interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  image: string;
  description: string;
}

export default function App() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<IBook>();

  function handleFilter(genre: string) {
    const filtered = books.filter((book) => book.genre === genre);
    setFilteredBooks(filtered);
  }

  function handleDisableFilter() {
    setFilteredBooks(books);
  }

  function handleOpenDescriptionBook(book: IBook) {
    setSelectedBook(book);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <h1>Books List 📚</h1>

      <Button
        onClick={() => {
          handleFilter("фэнтези");
        }}
      >
        Фэнтези
      </Button>
      <Button
        onClick={() => {
          handleFilter("фантастика");
        }}
      >
        Фантастика
      </Button>
      <Button
        onClick={() => {
          handleFilter("видеоигры");
        }}
      >
        Видеоигры
      </Button>
      <Button
        onClick={() => {
          handleFilter("биография");
        }}
      >
        Биография
      </Button>
      <Button onClick={handleDisableFilter}>Все жанры</Button>

      <BooksList books={filteredBooks} onClick={handleOpenDescriptionBook} />
      {showModal && selectedBook && (
        <Modal
          onClick={handleCloseModal}
          book={selectedBook}
        ></Modal>
      )}
    </>
  );
}
