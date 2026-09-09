export interface IPlayerType {
  id: string;
  name: string;
  sport: string;
  country: string;
  role: string;
  position: string;
  battingStyle: string;
  bowlingStyle: string;
  budget: number;
  basePrice: number;
  rating: number;
  status: "available" | "not available";
  imageUrl: string;
}

export interface IBalance {
  Balance: number;
}
