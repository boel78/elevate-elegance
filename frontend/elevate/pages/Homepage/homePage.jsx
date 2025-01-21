import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";
import { BlueButton } from "../../components/blueButton";
import { useProducts } from "../../hooks/useProducts";

export const HomePage = () => {
  const {filterProduct, products} = useProducts()
  const [topSellers, setTopSellers] = useState([])
  
  useEffect(() => {
    const filteredProducts = filterProduct("isTopSeller", true)
    setTopSellers(filteredProducts)
  },[products])


  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        window.scrollTo(0, document.body.scrollHeight)
      }
    }

  },[])


  const {
    focusingHomepageObject,
    setFocusedObject,
    setFocusingHomepageObject,
  } = useContext(MenuContext);

  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };

  const categoryLinkObjects = [
    {
      src: "/Effortless Charm.jpeg",
      link: "cataloge/Jewellery",
      btnText: "Shop Jewellery",
    },
    {
      src: "/Modern Classic.jpeg",
      link: "cataloge/Bags",
      btnText: "Shop Bags",
    },
    {
      src: "/Sculpted Sophistication.jpeg",
      link: "cataloge/Shoes",
      btnText: "Shop Shoes",
    },
    {
      src: "/Regal Splendor.jpeg",
      link: "cataloge/Clothing",
      btnText: "Shop Clothing",
    },
  ];

  const services = [
    {
      title: "Premium Quality",
      image: "/quality.jpeg",
      text: "At Elevate Elegance, we offer a carefully curated collection of premium quality products renowned for their exquisite             craftsmanship and timeless elegance. From luxurious leather handbags to designer jewelry and silk scarves each item is crafted with meticulous attention to detail and made from the finest materials. Discover the epitome of luxury with Elevate Elegance.",
    },
    {
      title: "Customer Service",
      image: "/customer.jpeg",
      text: `At Elevate Elegance, we're dedicated to delivering exceptional
      customer service. Our team is committed to providing personalized
      assistance and prompt responses to your inquiries. Experience
      unparalleled support with Elevate Elegance.`
    },
    {
      title: "Gift Wrapping",
      image:"/gift.jpeg",
      text: `At Elevate Elegance, we understand the importance of presentation,
      which is why we offer exquisite gift wrapping services. Elevate
      your gifting experience with our beautifully curated packaging,
      designed to add an extra touch of luxury to every purchase.
      Whether it's a special occasion or a thoughtful gesture, let us
      take care of the details with our premium gift wrapping options.
      Make every gift truly memorable with Elevate Elegance.`
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col w-screen gap-56">
        <div className="z-200 flex flex-col justify-center pb-60 text-white bg-hero bg-fixed bg-cover h-auto w-screen pt-24" id="hero">
          <div className="pl-12">
            <h1 className="sm:text-8xl text-6xl italic mb-5">Elevate Elegance</h1>
            <h3 className="sm:text-3xl text-2xl">"Sophistication Redefined,</h3>
            <h3 className="sm:text-3xl text-2xl mb-12">Style Elevated"</h3>
            <Link
              to="/cataloge"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <TanButton
                btnText={"To products"}
                className="z-200 bottom-1/3 left-12 "
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col pt-12 w-screen">
          <p className="text-5xl underline text-darkBlue text-center">
            Best Sellers
          </p>
          <div className="flex justify-center gap-7 pt-28 w-screen flex-wrap">
            {topSellers.map(
              (element) => (
                  <img
                    src={`data:image/jpeg;base64,${element.image}`}
                    key={element.id}
                    className="rounded-lg max-w-40 lg:max-w-64 shadow-md hover:scale-125 transition ease-in-out"
                    onClick={() => handleFocusObject(element)}
                  />)
                
            )}
          </div>
        </div>
  
        {/*    Kategori länkar */}
        <div className="flex flex-wrap 2xl:flex-nowrap w-screen">
          {categoryLinkObjects.map((obj, index) => (
            <div className="w-1/2 relative" key={index}>
              <img src={obj.src} className="h-full w-full" />
              <Link
                to={obj.link}
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <div className="absolute inset-0 flex w-40 h-12 m-auto justify-center items-center">
                  <TanButton btnText={obj.btnText} />
                </div>
              </Link>
            </div>
          ))}
        </div>
  
          {/*   Services  */ }
        <div className="flex-col items-center row-span-1 w-screen">
          <p className="text-5xl underline text-darkBlue text-center pb-[111px] pt-[54px] font-inter">
            Services
          </p>
          <div className="flex justify-center gap-52 flex-wrap text-center">
          {services.map((obj, index) => (
          <div className="flex flex-col items-center w-1/2 gap-4" key={index}>
            <p className="text-3xl text-darkBlue font-inter">
              {obj.title}
            </p>
            <img
                src={obj.image}
                className="h-40 w-auto rounded-full"
              />
              <p className="text-darkBlue font-inter pt-4">
                {obj.text}
              </p>
          </div>
        ))}
          </div>
        </div>
  
        
        {/* Newsletter */}
        <div className="w-screen bg-lightTan flex flex-col items-center gap-20 py-60 row-span-1">
          <h3 className="sm:text-6xl text-2xl text-darkBlue font-inter">
            Subscribe to our newsletter!
          </h3>
          <input
            type="text"
            placeholder="Email"
            className="w-1/3 h-8 border-solid border-2 border-black rounded"
          />
          <BlueButton btnText={"Subscribe"} />
        </div>
      </div>
    </Layout>

    
  );
};
