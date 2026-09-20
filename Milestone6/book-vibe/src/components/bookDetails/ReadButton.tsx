"use client";

import { useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { IBookType } from "../type/type";
import { BookContext } from "@/context/bookProvider";

const ReadButton = ({ book }: { book: IBookType }) => {
  const { readBooks, setReadBooks } = useContext(BookContext) as {
    readBooks: IBookType[];
    setReadBooks: Dispatch<SetStateAction<IBookType[]>>;
  };
  // console.log("Read book button triggered", booksProvider);

  const handleReadBook = () => {
    // console.log("Read book button triggered", book);
    setReadBooks([...readBooks, book]);
    alert("readBooks added");
  };

  return (
    <div>
      <button onClick={() => handleReadBook()} className="btn font-bold">
        Read
      </button>
    </div>
  );
};

export default ReadButton;
