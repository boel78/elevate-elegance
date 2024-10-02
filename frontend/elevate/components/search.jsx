import React, { useContext } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useProducts } from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../src/menuContext";

export const Search = () => {


    const navigate = useNavigate()

    const {setSearchMenuActive} = useContext(MenuContext)

    const handleSearch = (searchWord) => {
        
        navigate(`/cataloge/search${searchWord}`)
        setSearchMenuActive(false)
    }

  return (
    <div className="flex flex-col fixed right-0 top-12 w-1/4 bg-white h-2/6 border-l-2 border-b-2 border-black font-inter">
      <div className="flex flex-col">
        <h3>What are you searching for?</h3>
        <input
          type="text"
          className="border-solid border-y-2 border-grey shadow-md rounded-sm p-1 outline-none"
          onKeyDown={(e) => {
            e.key === "Enter" &&
            handleSearch(e.target.value);
            
          }}
        ></input>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex flex-col items-start">
          <h3 className="font-semibold">Trending searches</h3>
          <ul>
            <li className="flex content-center gap-2">
              <MagnifyingGlass size="15" />
              <p>Bags</p>
            </li>
            <li className="flex content-center gap-2">
              <MagnifyingGlass size="15" />
              <p>Gold</p>
            </li>
            <li className="flex content-center gap-2">
              <MagnifyingGlass size="15" />
              <p>Shoes</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold">Whats new</h3>
          <a>
            <p>Clothing</p>
          </a>
          <a>
            <p>Accesories</p>
          </a>
        </div>
      </div>
    </div>
  );
};
