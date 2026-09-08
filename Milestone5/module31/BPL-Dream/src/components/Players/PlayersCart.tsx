import { FaFlag, FaUser } from "react-icons/fa";
import type { IPlayerType } from "../types/type";
import { CiStar } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const PlayersCart = ({ Player }: { Player: IPlayerType }) => {
  return (
    <div className="border-3 border-gray-200 rounded-2xl flex flex-col justify-center items-center p-5 mt-10">
      <div className="w-full h-50 bg-amber-500 rounded-3xl">
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
          <p className="flex items-center gap-2 text-gray-400">
            <FaFlag /> {Player.country}
          </p>
          <div className="flex gap-2">
            <p className="border rounded-[5px] px-2">{Player.sport}</p>
            <p className="border rounded-[5px] px-2 ml-1">
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
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCart;
