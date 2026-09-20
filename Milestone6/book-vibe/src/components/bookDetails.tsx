import Image from "next/image";
import { IBookType } from "./type";

interface BooksProps {
  book: IBookType;
}

const BookDetails = ({ book }: BooksProps) => {
  return (
    <section className="container mx-auto grid grid-cols-2 mt-5">
      <div className="h-200 bg-red-50 rounded-2xl mr-10 flex justify-center items-center">
        <Image
          className="rounded-2xl hover:scale-105 duration-300 cursor-pointer"
          src={book.image}
          alt={book.bookName}
          height={400}
          width={400}
        />
      </div>
      <div>
        <h1 className="text-4xl my-3 font-semibold">{book.bookName}</h1>
        <p className="my-3 text-2xl">By : {book.author}</p>
        <hr className="h-0.5 text-gray-300 my-3" />
        <p className="my-3">{book.category}</p>
        <p className="my-3 leading-8">
          <span className="font-bold">Review :</span> {book.review}
        </p>
        <div className="flex gap-5">
          <strong>Tag</strong>
          {book.tags.map((tag) => (
            <p className="text-green-500 font-bold" key={book.bookId}>
              {" "}
              #{tag}
            </p>
          ))}
        </div>
        <hr className="h-0.5 text-gray-300 my-8" />
        <div className="flex justify-between items-center w-1/2 my-3">
          <p>Number of Pages :</p>
          <p className="font-bold">{book.totalPages}</p>
        </div>
        <div className="flex justify-between items-center w-1/2 my-3">
          <p>Publisher :</p>
          <p className="font-bold">{book.publisher}</p>
        </div>
        <div className="flex justify-between items-center w-1/2 my-3">
          <p>Year of Publishing :</p>
          <p className="font-bold">{book.yearOfPublishing}</p>
        </div>
        <div className="flex justify-between items-center w-1/2 my-3">
          <p>Rating :</p>
          <p className="font-bold">{book.rating}</p>
        </div>
        <div className="flex gap-4">
          <button className="btn font-bold">Read</button>
          <button className=" btn bg-[#59C6D2] text-white">Wishlist</button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
