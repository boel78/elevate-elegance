import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { MenuContext } from "../../src/menuContext";
import toast from "react-hot-toast";
import axios from "axios";

export const AccountSettings = () => {
  const { noMenus, currentUser, setCurrentUser } = useContext(MenuContext);
  const [userInfoField, setUserInfoField] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(
    currentUser && {
      email: currentUser.email,
      gender: currentUser.gender,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      dateOfBirth: currentUser.dateofbirth,
      phone: currentUser.phone,
      addresses: currentUser.addresses,
    }
  );

  useEffect(() => {
    noMenus();
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUserInfoField([
        {
          text: "Email",
          value: currentUser.email,
          type: "email",
          name: "email",
        },
        {
          text: "Gender",
          value: currentUser.gender,
          type: "text",
          name: "gender",
        },
        {
          text: "First name",
          value: currentUser.firstName,
          type: "text",
          name: "firstName",
        },
        {
          text: "Last name",
          value: currentUser.lastName,
          type: "text",
          name: "lastName",
        },
        {
          text: "Date of Birth",
          value: currentUser.dateOfBirth,
          type: "date",
          name: "dateOfBirth",
        },
        {
          text: "Phone number",
          value: currentUser.phone,
          type: "text",
          name: "phone",
        },
      ]);
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const newUser = userInfo;
    
    try{
      const {data} = await axios.put("http://localhost:8080/api/customer", newUser)
      if(data.error){
        toast.error(data.error)
      }else{
        toast.success("Your details have now been updated")
        console.log("NEWUSER")
    console.log(newUser)
        setCurrentUser(newUser);
      }
    }
    catch(error){
      toast.error(error.response?.data || "ajaja")
    }
    
    
  };

  const handleInputChangeAddress = (index, event, name) => {
    const { value } = event.target;
    const newAddresses = userInfo.addresses.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      addresses: newAddresses,
    }));
  };

  return (
    <Layout>
      {currentUser ? (
        <div className="pt-14">
          <p>breadcrumbs</p>
          <div className="flex flex-col items-center gap-20">
            <div className="bg-lightTan w-1/2 px-6 pb-6 flex flex-col self-center ">
              <div className="flex justify-between">
                <h2 className="font-medium text-xl">My Details</h2>
                <a
                  className="underline cursor-pointer"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  Edit
                </a>
              </div>
              <div className="grid grid-cols-2">
                {userInfoField &&
                  userInfoField.map((obj, index) => (
                    <div key={index}>
                      <h3>{obj.text}</h3>
                      <input
                        type={obj.type}
                        name={obj.name}
                        value={userInfo[obj.name]}
                        readOnly={!isEditing}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
              </div>

              {isEditing && (
                <button className="self-end" onClick={handleSave}>
                  Save
                </button>
              )}
            </div>


            <div className="bg-lightTan w-1/2 px-6">
              <div className="flex justify-between">
                <h2 className="font-medium text-xl">Adress</h2>
                <a
                  className="underline cursor-pointer"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  Edit
                </a>
              </div>
              <p>You can also add and edit delivery address here</p>
              {userInfo.addresses == null || userInfo.addresses.length === 0 ? (
                <p>No home address saved</p>
              ) : (
                <div className="flex flex-col gap-6 w-1/4">
                  {userInfo.addresses.map((address, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <h3>Address: {index + 1}</h3>

                        <div className="flex flex-col">
                          <input
                            type="text"
                            value={address.address}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "address")
                            }
                            readOnly={!isEditing}
                          />
                          <input
                            type="text"
                            value={address.town}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "town")
                            }
                            readOnly={!isEditing}
                          />
                          <input
                            type="text"
                            value={address.zipcode}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "zipcode")
                            }
                            readOnly={!isEditing}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <button onClick={handleSave}>save</button>
            </div>
            <div className="bg-lightTan w-1/2 px-6">
              <div className="flex justify-between">
                <h2 className="font-medium text-xl">Newsletter Subscription</h2>
                <a className="underline cursor-pointer">Edit</a>
              </div>
              <p>Newsletter subscription</p>
              <p>Direct mail marketing</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-20">
          <p>Please login</p>
        </div>
      )}
    </Layout>
  );
};
