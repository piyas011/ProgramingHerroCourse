import HomePage from "./components/homePage";

export default function Home() {
  return (
    <div className="grid grid-cols-12  h-dvh ">
      <aside className="col-span-3 bg-amber-300 text-4xl   ">Side Bar</aside>
      <main className="col-span-9 bg-amber-900">
        <HomePage />
      </main>
    </div>
  );
}
