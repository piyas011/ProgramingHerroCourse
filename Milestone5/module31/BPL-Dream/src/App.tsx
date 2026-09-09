import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/Players/Players";
import type { IBalance, IPlayerType } from "./components/types/type";

const PlayersPromise = async (): Promise<IPlayerType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

const BalanceDataPromise = async (): Promise<IBalance> => {
  const res = await fetch("/myAccounBalance.json");
  const balance = await res.json();
  return balance;
};

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Nav BalanceDataPromise={BalanceDataPromise()} />
      </Suspense>
      <Banner />
      <Suspense
        fallback={<h1 className="text-blue-500 text-2xl">Loading...</h1>}
      >
        <Players
          PlayersPromise={PlayersPromise()}
          BalanceDataPromise={BalanceDataPromise()}
        />
      </Suspense>
    </>
  );
}

export default App;
