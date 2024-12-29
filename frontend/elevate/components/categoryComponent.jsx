import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TanButton } from "./button";

export const CategoryComponent = (category) => {
    const [link, setLink] = useState("cataloge/Bags")
    const [src, setSrc] = useState("/images/Modern Classic.jpeg")
    const [btnText, setBtnText] = useState("Shop Bags")

  const categoryLinkObjects = [
    {
      key: "Jewellery",
      src: "/images/Effortless Charm.jpeg",
      link: "cataloge/Jewellery",
      btnText: "Shop Jewellery",
    },
    {
      key: "Bags",
      src: "/images/Modern Classic.jpeg",
      link: "cataloge/Bags",
      btnText: "Shop Bags",
    },
    {
      key: "Shoes",
      src: "/images/Sculpted Sophistication.jpeg",
      link: "cataloge/Shoes",
      btnText: "Shop Shoes",
    },
    {
      key: "Clothing",
      src: "/images/Regal Splendor.jpeg",
      link: "cataloge/Clothing",
      btnText: "Shop Clothing",
    },
  ];

  useEffect(() => {
    categoryLinkObjects.map((categoryObject) => {
        if(categoryObject.key == category){
            setLink(categoryObject.link)
            setSrc(categoryObject.src)
            setBtnText(categoryObject.btnText)
        }
    })
},[])


  return <div>
    <div className="w-1/2 relative">
                  <img src={src} className="h-full w-full" />
                  <Link
                    to={link}
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    <div className="absolute inset-0 w-40 flex h-12 m-auto justify-center items-center">
                      <TanButton btnText={btnText} />
                    </div>
                  </Link>
                </div>
  </div>;
};
