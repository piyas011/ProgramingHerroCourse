import BooksCart from "./booksCart";
import { IBookType } from "./type";

const getBookData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = res.json();
  return data;
};

const AllBooks = async () => {
  const bookData = await getBookData();
  console.log(bookData);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold m-15">All Books</h2>
      <div className=" grid grid-cols-3 gap-5">
        {bookData.map((book: IBookType) => {
          return <BooksCart key={book.bookId} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
