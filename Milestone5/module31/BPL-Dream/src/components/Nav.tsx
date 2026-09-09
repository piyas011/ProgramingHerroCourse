import Logo from "../assets/logo-footer.png";
import { IoMdAddCircle } from "react-icons/io";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import type { IBalance } from "./types/type";
import { use } from "react";

interface BalanceDataPromiseProps {
  BalanceDataPromise: Promise<IBalance>;
}

export default function Nav({ BalanceDataPromise }: BalanceDataPromiseProps) {
  const balance = use(BalanceDataPromise);
  // console.log(balance);

  return (
    <nav className="container mx-auto flex justify-between m-5">
      <a href="#">
        <img src={Logo} alt="BPL-DREAM" className="  w-20 sm:w-30" />
      </a>

      <div className="flex items-center gap-10 ">
        <ul className=" hidden  md:flex  gap-6 sm:text-[20px]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
        </ul>

        <strong className="btn cursor-default ">
          <FaBangladeshiTakaSign />
          {balance.Balance} TK
          <button
            className="ml-1 rounded-full p-2 bg-gray-100 font-bold
            text-2xl btn "
          >
            <IoMdAddCircle />
          </button>
        </strong>
      </div>
    </nav>
  );
}
