import Link from "next/link";
import React from "react";

const TechnologyCard = ({ technology }) => {
  const { id, name, fullName, rating, price } = technology;
  return (
    <div className="m-5 bg-amber-200 p-3">
      <p>{id}</p>
      <p>{name}</p>
      <p>{fullName}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <Link href={`skill/${id}`}>
        <button className="bg-blue-400 p-3 rounded-md m-2 text-white">
          details
        </button>
      </Link>
    </div>
  );
};

export default TechnologyCard;
