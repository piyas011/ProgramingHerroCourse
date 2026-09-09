import type { IPlayerType } from "../types/type";
import PlayersCart from "./PlayersCart";

interface PlayerProps {
  Players: IPlayerType[];
  taka: number;
  setTaka: React.Dispatch<React.SetStateAction<number>>;
}

const AvailablePlayers = ({ Players, taka, setTaka }: PlayerProps) => {
  return (
    <>
      {Players.map((Player) => {
        return (
          <PlayersCart
            key={Player.id}
            Player={Player}
            taka={taka}
            setTaka={setTaka}
          />
        );
      })}
    </>
  );
};

export default AvailablePlayers;
