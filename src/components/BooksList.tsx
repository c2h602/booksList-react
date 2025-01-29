interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  image: string;
  description: string;
}

interface IBooksList {
  books: IBook[];
  onClick: (book: IBook) => void;
}

export default function BooksList({ books, onClick }: IBooksList) {
  return (
    <article className="list">
      {books.map((book) => (
        <article
          key={book.id}
          className="item"
          onClick={() => {
            onClick(book);
          }}
        >
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.image} alt="📖"></img>
        </article>
      ))}
    </article>
  );
}
