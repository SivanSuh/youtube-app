import React, { useState } from "react";
import Style from "./style.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      url: "/",
    },
    {
      icon: <MdOutlineSubscriptions size={25} />,
      title: "Abonelikler",
      activeNumber: 2,
      url: "/",
    },
    {
      icon: <AiOutlineHome size={25} />,
      title: "Kitaplık",
      activeNumber: 3,
      url: "/",
    },
    {
      icon: <TbPlayerPlay size={25} />,
      title: "Vidolarınız",
      activeNumber: 4,
      url: "/",
    },
  ];
  return (
    <div className={navbarHidden ? Style.sidebar : Style.active}>
      {sidebar.map((item) => (
        <Link
          to={item.url}
          className={
            clicked.activeNumber === item.activeNumber
              ? Style.activeFlex
              : Style.flexStructure
          }
          onClick={() => setClicked({ activeNumber: item.activeNumber })}
        >
          {item.icon}
          {navbarHidden ? <h4 className="ml-2">{item.title}</h4> : null}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
