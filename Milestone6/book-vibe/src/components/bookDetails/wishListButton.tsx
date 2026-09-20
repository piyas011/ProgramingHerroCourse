"use client";
import React, { useContext } from "react";
import { IBookType } from "../type/type";
import { BookContext } from "@/context/bookProvider";

const WishListButton = ({ book }: { book: IBookType }) => {
  const { wishlist, setWishlist } = useContext(BookContext) as {
    wishlist: IBookType[];
    setWishlist: React.Dispatch<React.SetStateAction<IBookType[]>>;
  };

  const handleWishListButton = () => {
    // console.log("Read book button triggered", book);
    setWishlist([...wishlist, book]);
    alert("wish list added");
  };
  return (
    <div>
      <button
        onClick={() => {
          handleWishListButton();
        }}
        className=" btn bg-[#59C6D2] text-white"
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
