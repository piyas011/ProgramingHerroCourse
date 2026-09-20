import Image from "next/image";
import { IBookType } from "./type/type";
import Link from "next/link";

interface booksProps {
  book: IBookType;
}

const BooksCart = ({ book }: booksProps) => {
  return (
    <Link
      href={`/home/${book.bookId}`}
      className="border border-gray-300 p-5 rounded-2xl hover:scale-95 duration-300"
    >
      <div className="w-full h-50 hover:scale-103 duration-300 delay-100 ">
        <Image
          className="w-full h-full object-cover rounded-2xl "
          width={500}
          height={500}
          src={book.image}
          alt={book.bookName}
        />
      </div>
      <div className="w-full h-50">
        {book.tags.map((tag) => {
          return (
            <div key={tag} className="inline-block ">
              <p className="py-2   mt-3 mr-4 text-green-500 font-bold  ">
                {" "}
                {tag}
              </p>
            </div>
          );
        })}
        <h3 className="text-2xl font-semibold">{book.bookName}</h3>
        <p className="my-3">By : {book.author}</p>

        <div className="flex justify-between items-center pt-5 border-t-2 border-dashed border-gray-200">
          <p>{book.category}</p>
          <p>{book.rating} ⭐</p>
        </div>
      </div>
    </Link>
  );
};

export default BooksCart;
