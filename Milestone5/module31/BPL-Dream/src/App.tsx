import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/Players/Players";
import type { IPlayerType } from "./components/types/type";

const PlayersPromise = async (): Promise<IPlayerType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={<h1 className="text-blue-500 text-2xl">Loading...</h1>}
      >
        <Players PlayersPromise={PlayersPromise()} />
      </Suspense>
    </>
  );
}

export default App;
