import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Style from "./style.module.css";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../store/slice/darkModeSlice";
import { BsSun, BsMoon } from "react-icons/bs";
import { changeNavbarHidden } from "../../store/slice/navbarHidden";

const Search = ({ onSubmitProps }) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const navbarHidden = useSelector((state) => state.navbarHidden.value);
  const dispatch = useDispatch();
  console.log("dark mode", darkMode);
  const [term, setTerm] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onSubmitProps(term);
  };

  return (
    <form
      onSubmit={submitForm}
      className={darkMode ? Style.darkMode : Style.search}
    >
      <div className={Style.flexStructure}>
        <RxHamburgerMenu
          size={30}
          className="mr-3 cursor-pointer"
          onClick={() => dispatch(changeNavbarHidden())}
        />
        <div className={Style.flexStructure}>
          <IoLogoYoutube size={30} className="text-red-500" />
          <h3 className=" font-bold ml-2">Premium</h3>
        </div>
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="search the video"
          className="p-2 border my-2 w-1/2 text-gray-400 outline-none"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>
      <div className={Style.flexStructure}>
        <button onClick={() => dispatch(changeDarkMode())}>
          {darkMode ? <BsSun size={30} /> : <BsMoon size={30} />}
        </button>
        <AiOutlineVideoCameraAdd size={30} className="mx-3 " />
        <IoNotificationsOffOutline size={30} />
      </div>
    </form>
  );
};
export default Search;
