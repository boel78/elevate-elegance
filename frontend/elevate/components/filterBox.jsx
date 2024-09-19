import { ArrowDown} from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilterContext } from "../pages/Cataloge/Cataloge";
import { useProducts } from "../hooks/useProducts";

export const FilterBox = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("none");

  const navigate = useNavigate();

  const { Category } = useParams();

  const {setShownProducts} = useContext(FilterContext)

  const {filterProduct, products} = useProducts()



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

  const handleSetFilter = (f) => {
    setCurrentFilter(f)
  }


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

  useEffect(() => {
    if(Category){
    const filteredProducts = filterProduct("category", Category)
    setShownProducts(filteredProducts)
    }
  }, [Category]);


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

    const categories = [
        "Clothing",
        "Jewellery",
        "Bags",
        "Shoes"
    ]





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
            {categories.map((category) => (
                <li key={category} onClick={() => handleSetCategory(category)}>{category}</li>
            ))}
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
