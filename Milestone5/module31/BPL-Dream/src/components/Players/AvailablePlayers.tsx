import type { IPlayerType } from "../types/type";
import PlayersCart from "./PlayersCart";

interface PlayerProps {
  Players: IPlayerType[];
}

const AvailablePlayers = ({ Players }: PlayerProps) => {
  // console.log(Players);
  return (
    <>
      {Players.map((Player) => {
        return <PlayersCart Player={Player} />;
      })}
    </>
  );
};

export default AvailablePlayers;
