import { Layout } from "../../components/layout";
import React, { useContext, useEffect } from "react";
import { MenuContext } from "../../src/menuContext";

export const AboutUs = () => {

  const {noMenus} = useContext(MenuContext)

  useEffect(() => {
        noMenus()
  },[])


  return (
    <Layout>
      <div className="flex flex-col items-center pt-20 gap-20 px-20">
        <h2 className="font-medium text-5xl">About us</h2>
        <div className="flex gap-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1674718916916-60f009b8e00c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-1/2"
          />
          <div className="w-1/3 flex flex-col gap-5"> 
            <h3 className="font-medium text-3xl">Elevate Elegance</h3>
            <p className="text-lg">
              Welcome to Elevate Elegance, your destination for sophisticated
              and timeless fashion accessories. Founded on the principles of
              quality and style, our boutique online store offers a curated
              collection of luxury handbags, designer jewelry, stylish scarves,
              and more. At Elevate Elegance, we believe in the power of
              accessories to transform and elevate any outfit. Our mission is to
              provide fashion-forward individuals with exquisite pieces that
              exude elegance and sophistication. Each item in our collection is
              handpicked for its exceptional craftsmanship, attention to detail,
              and unique design, ensuring that you receive only the best.
            </p>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="w-1/3 flex flex-col gap-5">
            <h3 className="font-medium text-2xl">Our Story</h3>
            <p className="text-lg">
              Elevate Elegance was born from a passion for fashion and a desire
              to offer unique, high-quality accessories that make a statement.
              Our founders, lifelong fashion enthusiasts, saw a gap in the
              market for an online store that caters to those who appreciate
              luxury and style. We started with a simple idea: to create a
              shopping experience that combines the convenience of online retail
              with the personalized touch of a boutique.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-1/2"
          />
        </div>
        <div className="flex gap-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1664304041357-9ee3070abe68?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-1/2"
          />
          <div className="w-1/3 flex flex-col gap-5">
            <h3 className="font-medium text-2xl">Quality and Craftmanship</h3>
            <p className="text-lg">
              We are committed to sourcing the finest materials and working with
              skilled artisans to create pieces that are not only beautiful but
              also durable. Our products are crafted with meticulous attention
              to detail, ensuring they meet the highest standards of quality.
              From the selection of premium leathers and fabrics to the
              precision of our jewelry designs, we strive for perfection in
              every piece.
            </p>
          </div>
        </div>
        <div className="flex gap-12">
          <div className="w-1/3 flex flex-col gap-5">
            <h3 className="font-medium text-2xl">Our Promise</h3>
            <p className="text-lg">
              At Elevate Elegance, customer satisfaction is our top priority. We
              are dedicated to providing exceptional service, from the moment
              you visit our site to the moment your order arrives at your
              doorstep. Our team is here to assist you with any questions or
              concerns, and we offer a seamless shopping experience, including
              secure payment options, reliable shipping, and a hassle-free
              return policy.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1611923973164-e0e5f7f69872?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-1/2"
          />
        </div>

        <div className="flex flex-col items-center w-1/2 gap-4 pb-20">
          <h3 className="text-2xl font-medium">Join our Community</h3>
          <p className="text-lg">
            We invite you to explore our collection and discover the perfect
            pieces to complement your style. Follow us on social media for the
            latest updates, exclusive offers, and fashion inspiration. Thank you
            for choosing Elevate Elegance – where sophistication meets style.
          </p>
          <p className="text-lg italic">Elevate your elegance with us.</p>
        </div>
      </div>
    </Layout>
  );
};
