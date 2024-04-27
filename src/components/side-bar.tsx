import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } sticky top-0 right-0 bg-white p-5 pt-8 duration-300`}
      >
        <img
          src="./src/assets/control.png"
          alt="Button to open menu"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#ECEDF0]
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            StrengthSync
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
