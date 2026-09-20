"use client";

import { BookContext } from "@/context/bookProvider";
import React, { useContext } from "react";

const ListedBookPage = () => {
  const { readBooks, wishlist } = useContext(BookContext) as {
    readBooks: unknown;
    wishlist: unknown;
  };
  console.log(readBooks, wishlist, "read Books");

  return (
    <div>
      <h1>Listed Book Page</h1>
    </div>
  );
};

export default ListedBookPage;
