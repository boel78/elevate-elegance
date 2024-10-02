import React, { useContext } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useProducts } from "../hooks/useProducts";
import { Link, useNavigate } from "react-router-dom";
import { MenuContext } from "../src/menuContext";

export const Search = () => {


    const navigate = useNavigate()

    const {setSearchMenuActive} = useContext(MenuContext)

    const handleSearch = (searchWord) => {
        
        navigate(`/cataloge/search${searchWord}`)
        setSearchMenuActive(false)
    }

  return (
    <div className="flex flex-col fixed right-0 top-12 w-1/4 bg-white h-2/6 border-l-2 border-b-2 border-black font-inter shadow-md rounded-b-md">
      <div className="flex flex-col">
        <h3 className="text-center font-bold text-lg">What are you searching for?</h3>
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
            <Link to={"/cataloge/searchBags"}>
                <li className="flex content-center gap-2">
                  <MagnifyingGlass size="15" />
                  <p>Bags</p>
                </li>
            </Link>
            <Link to={"/cataloge/searchGold"}>
                <li className="flex content-center gap-2">
                  <MagnifyingGlass size="15" />
                  <p>Gold</p>
                </li>
            </Link>
            <Link to={"/cataloge/searchShoes"}>
                <li className="flex content-center gap-2">
                  <MagnifyingGlass size="15" />
                  <p>Shoes</p>
                </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold">Whats new</h3>
          
            <Link to={"/cataloge/Clothing"}><p>Clothing</p></Link>    
            <Link to={"/cataloge/Accessories"}><p>Accessories</p></Link>
          
        </div>
      </div>
    </div>
  );
};
