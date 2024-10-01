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

    newProduct.size = [newProduct.size];

    // Skapa en ny FormData för att hantera multipart-formulär
    const productFormData = new FormData();

    // Lägg till bilden
    productFormData.append("file", image);
    delete newProduct.file;
    newProduct.price = parseFloat(newProduct.price);

    // Lägg till produktinformationen som en JSON-sträng
    productFormData.append("product", JSON.stringify(newProduct));

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Loggar alla fält i formData
    }

    try {
      await axios.post("http://localhost:8080/api/product", productFormData, {
        headers: {
          "Content-Type": "multipart/form-data", // Valfritt, men bra att specificera
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ImageDisplay = ({ base64String }) => {
    // Sätt den korrekta mediatypen (t.ex. image/jpeg eller image/png)
    const imageSrc = `data:image/jpeg;base64,${base64String}`;

    return (
        <div>
            <h2>Bildvisning</h2>
            <img src={imageSrc} alt="My Base64 Image" />
        </div>
    );
};

  return (
    <>
      <div className="flex flex-col pt-20 items-center">
        <h3>Admin Page</h3>
        <form className="flex flex-col w-1/4" onSubmit={handleSaveProduct}>
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
          <input type="text" placeholder="Size" name="size" />
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
