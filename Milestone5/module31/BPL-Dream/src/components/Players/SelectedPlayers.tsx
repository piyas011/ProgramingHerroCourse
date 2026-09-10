import type { Dispatch, SetStateAction } from "react";
import type { IPlayerType } from "../types/type";
import { MdDelete } from "react-icons/md";

interface selectedPlayerProps {
  Player: IPlayerType[];
  taka: number;
  setTaka: React.Dispatch<React.SetStateAction<number>>;
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  taka,
  setTaka,
}: selectedPlayerProps) => {
  const handelRemovePlayer = (player: IPlayerType) => {
    const resPlayer = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name !== player.name,
    );

    setSelectedPlayers(resPlayer);
    setTaka(taka + player.basePrice);
  };

  if (selectedPlayers.length === 0) {
    return (
      <div className="h-50 flex justify-center items-center bg-gray-100 rounded-3xl mt-5 d">
        <h1 className="text-2xl font-bold">No Select Player</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className="rounded-3xl border flex justify-between items-center p-4 mb-5"
        >
          <div className="flex items-center border-gray-200">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="w-20 sm:w-40 rounded-2xl sm:rounded-3xl mr-4"
            />

            <div>
              <h2 className="font-bold text-[18px] md:text-2xl">
                {player.name}
              </h2>

              <p>
                <b>Bowiling</b> : {player.bowlingStyle || player.position}
                <br />
                <b>Batting</b> : {player.battingStyle}
              </p>
            </div>
          </div>

          <div>
            <button
              className="btn text-4xl text-red-400 bg"
              type="button"
              title="remove player"
              onClick={() => handelRemovePlayer(player)}
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
