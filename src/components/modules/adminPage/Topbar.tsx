"use client";

import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="w-full h-16 bg-gray-900 border-b border-gray-400 px-3 sm:px-5 flex items-center justify-between text-white">
      {/* SEARCH */}
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
          <IoIosSearch className="absolute left-3 top-2.5 text-slate-400 text-xl" />
          <input
            type="text"
            placeholder="Search everything..."
            className="w-full bg-slate-700 text-white pl-10 pr-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-500 hover:bg-slate-600 transition"/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* MESSAGES */}
        <div className="relative cursor-pointer p-2 rounded-full hover:bg-slate-700 transition">
          <BiMessageRoundedDetail className="text-xl sm:text-2xl" />
          <span className="absolute -top-1 -right-1 bg-blue-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer p-2 rounded-full hover:bg-slate-700 transition">
          <IoIosNotifications className="text-xl sm:text-2xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        {/* QUICK ACTION */}
        <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-full transition">
          <FiPlus />
          <span className="text-sm hidden sm:inline">Quick</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;