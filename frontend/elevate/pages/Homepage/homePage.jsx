import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";
import { BlueButton } from "../../components/blueButton";

export const HomePage = () => {
  const [topProducts, setTopProducts] = useState([]);
  const {
    focusingHomepageObject,
    setFocusedObject,
    setFocusingHomepageObject,
  } = useContext(MenuContext);

  useEffect(() => {
    setTopProducts(PRODUCTS);
  }, []);

  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };

  const categoryLinkObjects = [
    {
      src: "/images/Effortless Charm.jpeg",
      link: "cataloge/Jewellery",
      btnText: "Shop Jewellery",
    },
    {
      src: "/images/Modern Classic.jpeg",
      link: "cataloge/Bags",
      btnText: "Shop Bags",
    },
    {
      src: "/images/Sculpted Sophistication.jpeg",
      link: "cataloge/Shoes",
      btnText: "Shop Shoes",
    },
    {
      src: "/images/Regal Splendor.jpeg",
      link: "cataloge/Clothing",
      btnText: "Shop Clothing",
    },
  ];

  const services = [
    {
      title: "Premium Quality",
      image: "/images/quality.jpeg",
      text: "At Elevate Elegance, we offer a carefully curated collection of premium quality products renowned for their exquisite             craftsmanship and timeless elegance. From luxurious leather handbags to designer jewelry and silk scarves each item is crafted with meticulous attention to detail and made from the finest materials. Discover the epitome of luxury with Elevate Elegance.",
    },
    {
      title: "Customer Service",
      image: "/images/customer.jpeg",
      text: `At Elevate Elegance, we're dedicated to delivering exceptional
      customer service. Our team is committed to providing personalized
      assistance and prompt responses to your inquiries. Experience
      unparalleled support with Elevate Elegance.`
    },
    {
      title: "Gift Wrapping",
      image:"/images/gift.jpeg",
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
      <div className="z-200 flex  flex-col justify-center pb-60 text-white bg-hero bg-fixed w-full h-[600px] xl:h-[950px] bg-cover">
        <div className="pl-12">
          <h1 className="text-8xl italic mb-5">Elevate Elegance</h1>
          <h3 className="text-3xl">"Sophistication Redefined,</h3>
          <h3 className="text-3xl mb-12">Style Elevated"</h3>
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
      <div className="flex-col pb-[284px]">
        <p className="text-5xl underline text-darkBlue text-center pb-[131px] pt-[54px]">
          Best Sellers
        </p>
        <div className="flex justify-center gap-7">
          {topProducts.map(
            (element) =>
              element.isTopSeller && (
                <img
                  src={element.image}
                  key={element.id}
                  className="rounded-lg max-w-44 lg:max-w-64 shadow-md"
                  onClick={() => handleFocusObject(element)}
                />
              )
          )}
        </div>
      </div>

      {/*    Kategori länkar */}
      <div className="flex flex-wrap 2xl:flex-nowrap w-full h-1/2">
        {categoryLinkObjects.map((obj, index) => (
          <div className="w-1/2 h-1/4 relative" key={index}>
            <img src={obj.src} className="h-full w-full" />
            <Link
              to={obj.link}
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <div className="absolute inset-0 w-40 h-12 m-auto justify-center items-center">
                <TanButton btnText={obj.btnText} />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex-col items-center pb-[220px]">
        <p className="text-5xl underline text-darkBlue text-center pb-[111px] pt-[54px] font-inter">
          Services
        </p>
        <div className="flex justify-center gap-[80px]">
        {services.map((obj, index) => (
        <div className="flex flex-col items-center w-1/4 gap-4" key={index}>
          <p className="text-3xl text-darkBlue font-inter text-nowrap">
            {obj.title}
          </p>
          <img
              src={obj.image}
              className="h-1/4 w-auto rounded-full"
            />
            <p className="text-darkBlue font-inter text-wrap pt-4">
              {obj.text}
            </p>
        </div>
      ))}
        </div>
      </div>

      

      <div className="w-full bg-lightTan flex flex-col items-center gap-20 py-60">
        <h3 className="text-6xl text-darkBlue font-inter">
          Subscribe to our newsletter!
        </h3>
        <input
          type="text"
          placeholder="Email"
          className="w-1/3 h-8 border-solid border-2 border-black rounded"
        />
        <BlueButton btnText={"Subscribe"} />
      </div>
    </Layout>

    
  );
};
