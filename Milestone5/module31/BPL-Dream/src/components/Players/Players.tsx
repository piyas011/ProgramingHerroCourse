import { use, useState } from "react";
import type { IPlayerType } from "../types/type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersPromiseProps {
  PlayersPromise: Promise<IPlayerType[]>;
}

const Players = ({ PlayersPromise }: PlayersPromiseProps) => {
  const Players = use(PlayersPromise);

  const [buttonType, setButtonType] = useState("Available");

  const handleUpdateButtonType = (type: "Available" | "Selected") => {
    setButtonType(type);
  };

  return (
    <div className="my-20">
      {/* top */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {buttonType === "Available"
            ? "Available Players"
            : `Selected Players ( 0 / 6)`}
        </h2>
        <div>
          <button
            onClick={() => handleUpdateButtonType("Available")}
            className={`btn border-r-0 rounded-r-none ${buttonType === "Available" ? "bg-[#E7FE2A]" : ""} `}
          >
            Available
          </button>
          <button
            onClick={() => handleUpdateButtonType("Selected")}
            className={`btn border-r-0 rounded-r-none ${buttonType === "Selected" ? "bg-[#E7FE2A]" : ""} `}
          >
            Selected ( 0 )
          </button>
        </div>
      </div>
      {/* Search Bar */}
      {/* <div> */}
      {/* <input type="text" placeholder="Search Player" /> */}
      {/* </div> */}

      {/* Players Card */}
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {buttonType === "Available" ? (
          <AvailablePlayers Players={Players} />
        ) : (
          <SelectedPlayers />
        )}
      </div>
    </div>
  );
};

export default Players;
