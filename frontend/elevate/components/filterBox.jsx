import { ArrowDown, Cat } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../src/menuContext";
import { useNavigate, useParams } from "react-router-dom";
import { FilterContext } from "../pages/Cataloge/Cataloge";
import { useProducts } from "../hooks/useProducts";

export const FilterBox = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("none");
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  const { Category } = useParams();

  const {setShownProducts, shownProducts} = useContext(FilterContext)

  const {filterProduct, products} = useProducts()


    /*useEffect(() => {
    console.log(currentFilter)
    console.log(shownProducts)
    },[currentFilter])*/



  /*const handleSetShowCategory = () => {
    setShowCategory(!showCategory);
  };*/

  const handleSetCategory = (category) => {
    if(Category === category){
        navigate(`/cataloge/`)
        setShownProducts(products)
    }
    else{
        navigate(`/cataloge/${category}`);
        
    }
    setShowCategory(false);
  };

  const handleSetShowFilters = () => {
    if (showFilters === false) {
      handleSetFilter("none");
      setShownProducts(products)
    }
    setShowFilters(!showFilters);
  };

  const handleSetFilterProducts = (option) => {
    if(currentFilter !== "none"){
    const filteredProducts = filterProduct(currentFilter, option)
    setShownProducts(filteredProducts)
    }
  }

  const handleSetFilter = (f) => {
    setCurrentFilter(f)
  }

  const filterOptions = 
  [
    {
        text: "fitting",
        name: "Fitting"
    },
    {
        text: "material",
        name: "Material"
    },
    {
        text: "careadvice",
        name: "Care Advice"
    }
  ]

  const filters = [
    {
        name: "material",
        options: [
            "Leather",
            "Silk"
        ]
    },
    {
        name: "careadvice",
        options: [
            "Brush with a brush",
            "Polish with oil"
        ]
    },
    {
        name: "fitting",
        options:[
            "Baggy",
            "Kind of loose"
        ]
    }
    ]


  useEffect(() => {
    /*Axios.get("http://localhost:8080/api/product").then((res) => {
            setProducts(res.data)
        })
    if (typeof Category === "undefined") {
      setProducts(PRODUCTS);
    } else {
      const newProducts = PRODUCTS.filter(
        (product) => product.category === Category
      );
      setProducts(newProducts);
    }*/
    if(Category){
    const filteredProducts = filterProduct("category", Category)
    setShownProducts(filteredProducts)
    }
  }, [Category]);


  return (
    <div className="flex pt-20 flex-col relative">
      {/* SIDOMENY */}
      <div className="flex">
        <span
          onClick={() => setShowCategory(!showCategory)}
          className="flex items-center justify-center"
        >
          <p>Category</p>
          <ArrowDown size="15" />
        </span>
        <span
          className="flex items-center justify-center"
          onClick={handleSetShowFilters}
        >
          <p>Filters</p>
          <ArrowDown size="15" />
        </span>
        <span className="flex items-center justify-center">
          <p>Sort by</p>
          <ArrowDown size="15" />
        </span>
      </div>
      {
        /* SHOW CATEGORY CODE */
        showCategory && (
          <ul className="absolute top-full left-0 mt-2 z-10 bg-slate-100">
            <li onClick={() => handleSetCategory("Clothing")}>Clothing</li>
            <li onClick={() => handleSetCategory("Jewellery")}>Jewellery</li>
            <li onClick={() => handleSetCategory("Bags")}>Bags</li>
            <li onClick={() => handleSetCategory("Shoes")}>Shoes</li>
          </ul>
        )
      }
      {
        //FILTER CODE
        showFilters && (
          <ul className="absolute top-full left-20 mt-2 z-10 bg-slate-100">
            {currentFilter !== "none" ? (
              <>
                <ul>
                    {filters.map((filter) => (
                        filter.name === currentFilter &&
                        filter.options.map((option, index) => (
                            <li key={index} onClick={() => handleSetFilterProducts(option)}>
                                <p>{option}</p>
                            </li>
                        ))
                    ))}
                </ul>
 
              </>
            ) : (
              //SHOW FILTER OPTIONS
              showFilters && (
                <ul>
                {filterOptions.map((filter) => (
                    <li key={filter.text} onClick={()=> handleSetFilter(filter.text)}>{filter.name}</li> 
                ))}
                </ul>
              )
            )}
          </ul>
        )
      }
    </div>
  );
};
