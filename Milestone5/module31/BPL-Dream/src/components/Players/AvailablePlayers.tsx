import type { IPlayerType } from "../types/type";
import PlayersCart from "./PlayersCart";

const AvailablePlayers = ({ Players }: { Players: IPlayerType[] }) => {
  return Players.map((Player: IPlayerType) => {
    return <PlayersCart key={Player.id} Player={Player} />;
  });
};

export default AvailablePlayers;
