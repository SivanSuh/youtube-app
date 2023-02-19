import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Style from "./style.module.css";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoNotificationsOffOutline } from "react-icons/io5";

const Search = ({ onSubmitProps }) => {
  const [term, setTerm] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onSubmitProps(term);
  };

  return (
    <form onSubmit={submitForm} className={Style.search}>
      <div className={Style.flexStructure}>
        <RxHamburgerMenu size={30} className="mr-3 text-black" />
        <div className={Style.flexStructure}>
          <IoLogoYoutube size={30} className="text-red-500" />
          <h3 className="text-black font-bold ml-2">Premium</h3>
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
        <AiOutlineVideoCameraAdd size={30} className="mr-3 text-black" />
        <IoNotificationsOffOutline size={30} className="text-black" />
      </div>
    </form>
  );
};
export default Search;
