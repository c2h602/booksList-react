import Button from "./Button";

interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  image: string;
  description: string;
}

interface IModal {
  onClick: () => void;
  book: IBook;
}

export default function Modal({ onClick, book }: IModal) {
  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <div className="modalBtn">
          <Button onClick={onClick} >
            ✖
          </Button>
          </div>
          <h2 className="modal__title">О книге</h2>
          <p className="modal__description">{book.description}</p>
        </div>
      </div>
    </>
  );
}
