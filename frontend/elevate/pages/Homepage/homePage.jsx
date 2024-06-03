

export const HomePage = () => {
  return (
    <div className="flex-col ">
      <div className="w-full h-790">
        <img src="/images/Heropic.png" className=" w-full h-[790px]"/>
      </div>
      <div className="flex-col pb-[284px]">
        <p className="text-[80px] underline text-darkBlue text-center pb-[131px] pt-[54px]">Best Sellers</p>
        <div className="flex justify-center gap-3 w-full">
          <img src="/images/ClassicSophistication.jpeg" className="w-1/4 h-auto rounded-xl"/>
          <img src="/images/EternalGrace.jpeg" className="w-1/4 h-auto rounded-xl"/>
          <img src="/images/Timeless Chic.jpeg" className="w-1/4 h-auto rounded-xl"/>
          <img src="/images/Graceful Glamour.jpeg" className="w-1/4 h-auto rounded-xl"/>
        </div>
      </div>
      <div className="flex flex-wrap h-[1924px] w-full">
        <div>
          <img src="/images/Effortless Charm.jpeg" className="w-50% h-auto"/>
        </div>
        <div>
          <img src="/images/Modern Classic.jpeg" className="w-50% h-auto"/>
        </div>
        <div>
          <img src="/images/Sculpted Sophistication.jpeg" className="w-50% h-auto"/>
        </div>
        <div>
          <img src="/images/Regal Splendor.jpeg" className="w-50% h-auto"/>
        </div>
      </div>

      <div className="flex-col items-center pb-[220px]">
      <p className="text-[80px] underline text-darkBlue text-center pb-[111px] pt-[54px] font-inter">Services</p>
      <div className="flex justify-center gap-[80px]">
        <div className="flex flex-col items-center w-1/4 gap-4">
          <p className="text-[61px] text-darkBlue font-inter text-nowrap">Premium Quality</p>
          <img src="/images/quality.jpeg" className="h-[201px] w-auto rounded-full"/>
          <p className="text-darkBlue font-inter text-wrap pt-4">At Elevate Elegance, we offer a carefully curated collection
of premium quality products renowned for their exquisite 
craftsmanship and timeless elegance. 
From luxurious leather handbags to designer jewelry and silk scarves 
each item is crafted with meticulous attention to detail and made from the finest materials. 
Discover the epitome of luxury with Elevate Elegance.</p>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-4">
          <p className="text-[61px] text-darkBlue font-inter text-nowrap">Customer Service</p>
          <img src="/images/customer.jpeg" className="h-[201px] w-auto rounded-full"/>
          <p className="text-darkBlue font-inter text-wrap pt-4">At Elevate Elegance, we're dedicated to delivering exceptional
customer service. Our team is committed to providing 
personalized assistance and prompt responses to your inquiries. 
Experience unparalleled support with Elevate Elegance.</p>
        </div>
        <div className="flex flex-col items-center w-1/4 gap-4">
          <p className="text-[61px] text-darkBlue font-inter text-nowrap">Gift Wrapping</p>
          <img src="/images/gift.jpeg" className="h-[201px] w-auto rounded-full"/>
          <p className="text-darkBlue font-inter text-wrap pt-4">At Elevate Elegance, we understand the importance of presentation, which is why we offer exquisite gift wrapping services. Elevate your gifting experience with our beautifully curated packaging, designed to add an extra touch of luxury to every purchase. Whether it's a special occasion or a thoughtful gesture, let us take care of the details with our premium gift wrapping options. Make every gift truly memorable with Elevate Elegance.</p>
        </div>
      </div>

      </div>

      <div className="w-full h-[1055px] bg-lightTan">

      </div>
    </div>
  )
}
