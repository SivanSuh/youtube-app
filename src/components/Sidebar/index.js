import React, { useState } from "react";
import Style from "./style.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navbarHidden = useSelector((state) => state.navbarHidden.value);
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
    <div className={navbarHidden ? Style.sidebar : Style.active}>
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
          {navbarHidden ? <h4 className="ml-2">{item.title}</h4> : null}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
