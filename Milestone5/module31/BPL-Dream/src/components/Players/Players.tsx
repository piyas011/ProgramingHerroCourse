import { use, useState } from "react";
import type { IPlayerType } from "../types/type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersPromiseProps {
  PlayersPromise: Promise<IPlayerType[]>;
  taka: number;
  setTaka: React.Dispatch<React.SetStateAction<number>>;
}

const Players = ({ PlayersPromise, taka, setTaka }: PlayersPromiseProps) => {
  const Players = use(PlayersPromise);

  // console.log(balance);

  const [buttonType, setButtonType] = useState("Available");
  // Selected Players State
  const [selectedPlayers, setSelectedPlayers] = useState<IPlayerType[]>([]);

  const handleUpdateButtonType = (type: "Available" | "Selected") => {
    setButtonType(type);
  };

  return (
    <div className="my-20">
      {/* top */}
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <h2 className="text-[18px] sm:text-3xl md:text-4xl font-bold mb-3">
          {buttonType === "Available"
            ? "Available Players"
            : `Selected Players ( 0 / 6)`}
        </h2>
        <div>
          <button
            onClick={() => handleUpdateButtonType("Available")}
            className={`  sm:btn border-r-0 py-2 px-3 rounded-r-none rounded-[10px] border ${buttonType === "Available" ? "bg-[#2af0fe]" : ""} `}
          >
            Available
          </button>
          <button
            onClick={() => handleUpdateButtonType("Selected")}
            className={`sm:btn border-l-0 py-2 px-3 rounded-l-none rounded-[10px] border ${buttonType === "Selected" ? "bg-[#2af0fe]" : ""} `}
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
      <div className="mt-5">
        {buttonType === "Available" ? (
          <AvailablePlayers
            Players={Players}
            taka={taka}
            setTaka={setTaka}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ) : (
          <SelectedPlayers
            Player={Player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        )}
      </div>
    </div>
  );
};

export default Players;
