import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MenuContext } from "../../src/menuContext";
import { Layout } from "../../components/layout";
import { ArrowDown, Heart, ArrowUp } from "@phosphor-icons/react";
import { useProducts } from "../../hooks/useProducts";

export const ProductPage = () => {
  const { id } = useParams();

  const location = useLocation()

  const [product, setProduct] = useState();

  const [topSellers, setTopSellers] = useState([])

  const [sizeBarOpen, setSizeBarOpen] = useState(false);

  const [selectedSize, setSelectedSize] = useState("");

  const [showInfo, setShowInfo] = useState(true);

  const [extraInfo, setExtraInfo] = useState([]);

  const [extraInfoTitle, setExtraInfoTitle] = useState("");

  const {handleLikeProduct, filterProduct} = useProducts();

  const {
    cart,
    setCart,
    noMenus,
    setFocusingHomepageObject,
    focusingHomepageObject,
    setFocusedObject,
    currentUser
  } = useContext(MenuContext);

  useEffect(() => {
    noMenus();
   
    
  }, []);

  

  useEffect(() => {
    const product = location.state?.theproduct
    setProduct(product);
    setSelectedSize("");
    setSizeBarOpen(false);
    const filteredProducts = filterProduct("isTopSeller", true)
    setTopSellers(filteredProducts)
  }, [id]);

  const addToCart = (p) => {
    console.log(cart);
    let foundMatchingProduct = false;

    const tempCart = [...cart];

    tempCart.forEach((produkt) => {
      if (produkt.product.id === p.id && produkt.size === selectedSize) {
        produkt.quantity++;
        foundMatchingProduct = true;
      }
    });
    if (!foundMatchingProduct) {
      tempCart.push({
        id: cart.length,
        product: p,
        size: selectedSize,
        quantity: 1,
      });
    }

    setCart(tempCart);
  };

  if (!product) {
    return <p>Laddar produkt...</p>;
  }

  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };

  const handleSizeBarToggle = () => {
    setSizeBarOpen(!sizeBarOpen);
  };

  const handleSetSize = (s) => {
    setSelectedSize(s);
    setSizeBarOpen(false);
  };

  const handleShowExtraInfo = (type) => {
    if (type === "Description and Fitting") {
      setExtraInfo([product.description, product.fitting]);
      setExtraInfoTitle("Description and Fitting");
    } else if (type === "Material") {
      setExtraInfo(product.material);
      setExtraInfoTitle("Material");
    } else {
      setExtraInfo(product.careAdvice);
      setExtraInfoTitle("Care Advice");
    }
    setShowInfo(false);
    console.log(extraInfo);
  };

  return (
    <Layout>
      <div className="flex flex-col gap-12">
        <div className="flex justify-around sm:gap-80 mt-24">
            <img src={`data:image/jpeg;base64,${product.image}`} className="rounded-lg w-1/2 h-1/2" />
          <div className="flex">
            {showInfo ? (
              /* Ifall show info är true */
              <div className="flex flex-col gap-16 sm:min-w-72">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-medium">{product.name}</h2>
                  <p>{product.price} SEK</p>
                </div>
                <div className="flex flex-col gap-3 ">
                  <div className="flex gap-5">
                    <p>Size: {selectedSize && !sizeBarOpen && selectedSize}</p>
                    {product.size.length === 1 ? (
                      <p>One size</p>
                    ) : sizeBarOpen ? (
                      <ul>
                        {product.size.map((s, index) => (
                          <p key={index} onClick={() => handleSetSize(s)}>
                            {s}
                          </p>
                        ))}
                      </ul>
                    ) : (
                      <ArrowDown
                        onClick={handleSizeBarToggle}
                        className="self-center"
                      />
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-black font-bold bg-lightTan sm:py-4 px-3 py-2 sm:px-6 rounded-xl hover:bg-darkBlue hover:text-white transition ease-in-out duration-200 shadow-xl"
                  >
                    Add to cart
                  </button>
                </div>
                <ul>
                  <li>
                    <button
                      className="flex items-center"
                      onClick={() =>
                        handleShowExtraInfo("Description and Fitting")
                      }
                    >
                      <p>Description and fitting</p>
                      <ArrowUp />
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center"
                      onClick={() => handleShowExtraInfo("Material")}
                    >
                      <p>Material</p>
                      <ArrowUp />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleShowExtraInfo("Care Advice")}
                      className="flex items-center"
                    >
                      <p>Care Advice</p>
                      <ArrowUp />
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              /* Ifall show info är false */
              <div className="flex flex-col gap-16 sm:min-w-72">
                <li className="flex items-center flex-col gap-7">
                  <button
                    className="flex items-center text-2xl font-medium"
                    onClick={() => setShowInfo(true)}
                  >
                    <p>{extraInfoTitle}</p>
                    <ArrowDown />
                  </button>
                  <div className="flex flex-col gap-4">
                    {extraInfoTitle === "Description and Fitting" ? (
                      extraInfo.map((s, index) => <p key={index}>{s}</p>)
                    ) : (
                      <p>{extraInfo}</p>
                    )}
                  </div>
                </li>
              </div>
            )}
            {currentUser && <Heart
                          size={35}
                          onClick={() => handleLikeProduct(product.id)}
                          weight={
                            currentUser.likedProducts.includes(product.id) ? "fill" : "thin"
                          }
                          color={
                            currentUser.likedProducts.includes(product.id)
                              ? "#be3c3c"
                              : "#000"
                          }
                          
                        />}
          </div>
        </div>
        <div className="flex flex-col items-center mt-44">
          <p className="font-medium text-lg">You may also like</p>
          <div className="flex justify-center py-10 gap-7 sm:gap-11">
            {topSellers && topSellers.map(
              (element) =>
                element.isTopSeller && (
                  <img
                    src={`data:image/jpeg;base64,${element.image}`}
                    key={element.id}
                    className="rounded-lg w-1/4 sm:max-w-64"
                    onClick={() => handleFocusObject(element)}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
