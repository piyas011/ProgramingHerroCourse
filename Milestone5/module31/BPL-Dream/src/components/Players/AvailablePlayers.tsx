import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../types/type";
import PlayersCart from "./PlayersCart";

interface PlayerProps {
  Players: IPlayerType[];
  taka: number;
  setTaka: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
}

const AvailablePlayers = ({
  Players,
  taka,
  setTaka,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 xl:grid-cols-3">
      {Players.map((Player) => {
        return (
          <PlayersCart
            key={Player.id}
            Player={Player}
            taka={taka}
            setTaka={setTaka}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
