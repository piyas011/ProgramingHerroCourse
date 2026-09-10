import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../types/type";
import { MdDelete } from "react-icons/md";
import Players from "./Players";

interface selectedPlayerProps {
  Player: IPlayerType;
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
}

const SelectedPlayers = ({
  Player,
  selectedPlayers,
  setSelectedPlayers,
}: selectedPlayerProps) => {
  const handelRemovePlayer = (player: IPlayerType) => {
    const resPlayer = selectedPlayers.filter( (selectedPlayer) => {
      selectedPlayer.name !== player.name;
      setSelectedPlayers(resPl ayer);
    });
    console.log(resPlayer);
  };

  return (
    <div className="">
      {selectedPlayers.map((player) => (
        <div className=" rounded-3xl border flex justify-between items-center p-4 mb-5 ">
          <div className="flex items-center  border-gray-200">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="w-20 sm:w-40 rounded-2xl sm:rounded-3xl mr-4 "
            />
            <div>
              <h2 className="font-bold text-[18px] md:text-2xl">
                {player.name}
              </h2>
              <p>{player.battingStyle || player.position}</p>
            </div>
          </div>
          <div>
            <button
              className="btn text-4xl text-red-400 bg"
              type="button"
              title="remove player"
              onClick={() => handelRemovePlayer(Player)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
