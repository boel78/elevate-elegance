import  Axios from "axios"
import { useContext, useEffect, useState } from "react"
import { HomePageProduct } from "../../components/homePageProduct"
import { Footer } from "../../components/footer"
import { Sidemenu } from "../../components/sidemenu"
import { MenuContext } from "../../src/menuContext" 
import { PRODUCTS } from "../../products"
import { Link } from "react-router-dom"
import { Cart } from "../../components/cart"

export const HomePage = () => {

  const [topProducts, setTopProducts] = useState([])
  const {sideMenuActive, setSideMenuActive, cartMenuActive} = useContext(MenuContext);


  useEffect(() => {
      setTopProducts(PRODUCTS)
  }, [])


  return (
    <div className="flex-col bg-superLightTan">
        <div className="z-200 flex  flex-col justify-center pb-60 text-white bg-hero w-full h-[790px]">
         <div className="pl-12">
            <h1 className="text-8xl italic mb-5">Elevate Elegance</h1>
            <h3 className="text-3xl">"Sophistication Redefined,</h3>
            <h3 className="text-3xl mb-12">Style Elevated"</h3>
            <Link to="/cataloge"><button type="button" className="z-200 bottom-1/3 left-12 bg-lightTan px-5 py-2 rounded text-black font-inter hover:bg-darkBlue hover:text-white">To Products</button></Link>
         </div>
      </div>
      <div className="flex-col pb-[284px]">
        <p className="text-[80px] underline text-darkBlue text-center pb-[131px] pt-[54px]">Best Sellers</p>
        <div className="flex justify-center gap-3 w-full">
          {topProducts.map((element) => (
            element.isTopSeller &&
            <HomePageProduct key={element.id} data={element}/>

          ))}
          {/*<img src="/images/ClassicSophistication.jpeg" className="w-1/5 h-auto rounded-xl border-solid border-2 border-black"/>
          <img src="/images/EternalGrace.jpeg" className="w-1/5 h-auto rounded-xl border-solid border-2 border-black"/>
          <img src="/images/Timeless Chic.jpeg" className="w-1/5 h-auto rounded-xl border-solid border-2 border-black"/>
          <img src="/images/Graceful Glamour.jpeg" className="w-1/5 h-auto rounded-xl border-solid border-2 border-black"/>*/}
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 h-1/4">
          <img src="/images/Effortless Charm.jpeg" className="h-full w-full"/>
        </div>
        <div className="w-1/2 h-1/4">
          <img src="/images/Modern Classic.jpeg" className="h-full w-full"/>
        </div>
        <div className="w-1/2 h-1/4">
          <img src="/images/Sculpted Sophistication.jpeg" className="h-full w-full"/>
        </div>
        <div className="w-1/2 h-1/4">
          <img src="/images/Regal Splendor.jpeg" className="h-full w-full"/>
        </div>
      </div>

      <div className="flex-col items-center pb-[220px]">
      <p className="text-[80px] underline text-darkBlue text-center pb-[111px] pt-[54px] font-inter">Services</p>
      <div className="flex justify-center gap-[80px]">
        <div className="flex flex-col items-center w-1/4 gap-4">
          <p className="text-5xl text-darkBlue font-inter text-nowrap">Premium Quality</p>
          <img src="/images/quality.jpeg" className="h-[201px] w-auto rounded-full"/>
          <p className="text-darkBlue font-inter text-wrap pt-4">At Elevate Elegance, we offer a carefully curated collection
of premium quality products renowned for their exquisite 
craftsmanship and timeless elegance. 
From luxurious leather handbags to designer jewelry and silk scarves 
each item is crafted with meticulous attention to detail and made from the finest materials. 
Discover the epitome of luxury with Elevate Elegance.</p>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-4">
          <p className="text-5xl text-darkBlue font-inter text-nowrap">Customer Service</p>
          <img src="/images/customer.jpeg" className="h-[201px] w-auto rounded-full"/>
          <p className="text-darkBlue font-inter text-wrap pt-4">At Elevate Elegance, we're dedicated to delivering exceptional
customer service. Our team is committed to providing 
personalized assistance and prompt responses to your inquiries. 
Experience unparalleled support with Elevate Elegance.</p>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-4">
          <p className="text-5xl text-darkBlue font-inter text-nowrap">Gift Wrapping</p>
          <img src="/images/gift.jpeg" className="h-[201px] w-auto rounded-full"/>
          <p className="text-darkBlue font-inter text-wrap pt-4">At Elevate Elegance, we understand the importance of presentation, which is why we offer exquisite gift wrapping services. Elevate your gifting experience with our beautifully curated packaging, designed to add an extra touch of luxury to every purchase. Whether it's a special occasion or a thoughtful gesture, let us take care of the details with our premium gift wrapping options. Make every gift truly memorable with Elevate Elegance.</p>
        </div>
      </div>

      </div>

      <div className="w-full bg-lightTan flex flex-col items-center gap-20 py-60">
        <h3 className="text-6xl text-darkBlue font-inter">Subscribe to our newsletter!</h3>
        <input type="text" placeholder="Email" className="w-1/3 h-8 border-solid border-2 border-black rounded"/>
        <button type="submit" className="text-white bg-darkBlue font-inter px-7 py-3 rounded-md">Subscribe</button>
      </div>

      <Footer />
      {sideMenuActive && <Sidemenu/>}
      {cartMenuActive && <Cart/>}
    </div>
  )
}
