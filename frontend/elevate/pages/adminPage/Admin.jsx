import React, { useContext, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { BlueButton } from "../../components/blueButton";
import { TanButton } from "../../components/button";
import axios from "axios";

export const Admin = () => {
  const { currentUser } = useContext(MenuContext);
  const [topSellerChecked, setTopSellerChecked] = useState(false);

  const handleSaveProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.isTopSeller = topSellerChecked;
    const image = formData.get("file");

    switch(formData.get("size")){
      case "S,M,L":
        newProduct.size = ["Small", "Medium", "Large"];
        break;
      case "One fit":
        newProduct.size = ["One fit"];
        break;
    }
    const productFormData = new FormData();



    productFormData.append("file", image);
    delete newProduct.file;

    newProduct.price = parseFloat(newProduct.price);


    productFormData.append("product", JSON.stringify(newProduct));

    try {
      await axios.post("http://localhost:8080/api/product", productFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col pt-20 items-center">
        <h3>Add product</h3>
        <form className="flex flex-col w-1/3" onSubmit={handleSaveProduct}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Description" name="description" />
          <input type="text" placeholder="Price" name="price" />
          <label>
            Topseller
            <input
              type="checkbox"
              value={topSellerChecked}
              onChange={() => setTopSellerChecked(!topSellerChecked)}
            />
          </label>
          <label>
            Image
            <input type="file" name="file" />
          </label>
          <input type="text" placeholder="Category" name="category" />
          <select name="size">
            <option>Choose size</option>
            <option value="S,M,L">S, M, L</option>
            <option value="One fit">One fit</option>
          </select>
          <input type="text" placeholder="Fitting" name="fitting" />
          <input type="text" placeholder="Material" name="material" />
          <input type="text" placeholder="Care Advice" name="careAdvice" />
          <input type="text" placeholder="Date added" name="dateAdded" />
          <TanButton btnText={"Submit"} />
        </form>
      </div>

      

      {/*currentUser.admin ?
        

        :
        <div>No access</div>
*/}
    </>
  );
};
