import { FaFlag, FaUser } from "react-icons/fa";
import type { IPlayerType } from "../types/type";
import { CiStar } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useState } from "react";

interface IPlayerProps {
  Player: IPlayerType;
  taka: number;
  setTaka: React.Dispatch<React.SetStateAction<number>>;
}

const PlayersCart = ({ Player, taka, setTaka }: IPlayerProps) => {
  const [isSelected, setIsSelected] = useState(false);

  // console.log(setTaka, taka);

  const handelSelectedPlayer = () => {
    setIsSelected(true);
    setTaka(taka - Player.basePrice);
  };

  return (
    <div className="border-3 border-gray-200 rounded-2xl flex flex-col justify-center items-center p-5 col-span-1  ">
      <div className="w-full  md:h-36 lg:h-50 aspect-auto object-cover bg-amber-500 rounded-3xl">
        <img
          src={Player.imageUrl}
          alt={Player.name}
          className="w-full h-full rounded-3xl bg-cover bg-center"
        />
      </div>
      <div className="w-full">
        <h2 className="flex items-center gap-2 text-2xl font-bold my-3 ">
          <FaUser /> {Player.name}
        </h2>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-0 sm:gap-1 text-gray-400 text-[12px] sm:text-[20px] ">
            <FaFlag /> {Player.country}
          </p>
          <div className="flex gap-2 justify-center items-center">
            <p className="border rounded-[5px] px-0.5 sm:px-2 text-[12px] sm:text-[15px] 2xl:text-[20px]  ">
              {Player.sport}
            </p>
            <p className="border rounded-[5px] px-0.5 sm:px-2 text-[12px] sm:text-[15px] 2xl:text-[20px] ">
              {Player.role}
              {Player.position}
            </p>
          </div>
        </div>
        <hr className=" bg-gray-300 my-2 " />
        <div className="flex justify-between items-center ">
          {" "}
          <strong>Rating </strong>{" "}
          <strong className="flex justify-center items-center gap-1">
            {Player.rating} <CiStar />
          </strong>
        </div>
        <div className="flex justify-between items-center text-gray-500 my-2">
          <p>{`${Player.sport === "cricket" ? "Bowling Style" : "position"}`}</p>

          <p>
            {Player.sport === "cricket" ? Player.bowlingStyle : Player.position}
          </p>
        </div>

        <div className="flex justify-between items-center text-gray-500 my-2">
          <p>{`${Player.sport === "cricket" ? "Batting Style" : ""}`}</p>

          <p>{Player.sport === "cricket" && Player.battingStyle}</p>
        </div>

        <div className="flex justify-between items-center text-gray-500 my-2">
          <p className="flex flex-nowrap ">
            Match Fee :{" "}
            <span className="font-bold flex items-center">
              {Player.basePrice}
              <FaBangladeshiTakaSign />{" "}
            </span>
          </p>

          {/*Button  */}
          <button
            className={`btn ${isSelected ? "" : "bg-[#2af0fe]"}`}
            disabled={isSelected}
            onClick={() => handelSelectedPlayer()}
          >
            {isSelected ? "Selected " : "Choose Player "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCart;
