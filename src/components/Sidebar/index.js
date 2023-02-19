import React, { useState } from "react";
import Style from "./style.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
const Sidebar = () => {
  const [clicked, setClicked] = useState({
    activeNumber: 1,
  });
  const sidebar = [
    {
      icon: <AiOutlineHome size={25} />,
      title: "Ana Sayfa",
      activeNumber: 1,
    },
    {
      icon: <MdOutlineSubscriptions size={25} />,
      title: "Abonelikler",
      activeNumber: 2,
    },
    {
      icon: <AiOutlineHome size={25} />,
      title: "Kitaplık",
      activeNumber: 3,
    },
    {
      icon: <TbPlayerPlay size={25} />,
      title: "Vidolarınız",
      activeNumber: 4,
    },
  ];
  return (
    <div className={Style.sidebar}>
      {sidebar.map((item) => (
        <div
          className={
            clicked.activeNumber === item.activeNumber
              ? Style.activeFlex
              : Style.flexStructure
          }
          onClick={() => setClicked({ activeNumber: item.activeNumber })}
        >
          {item.icon}
          <h4 className="ml-2">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
