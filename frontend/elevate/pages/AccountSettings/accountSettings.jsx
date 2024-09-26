import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { MenuContext } from "../../src/menuContext";
import { useAddress } from "../../hooks/useAddress";
import { useUser } from "../../hooks/useUser";
import { X } from "@phosphor-icons/react";

export const AccountSettings = () => {
  const { noMenus, currentUser } = useContext(MenuContext);
  const [userInfoField, setUserInfoField] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [addressObjects, setAddressObjects] = useState([])
  const [showPasswordError, setShowPasswordError] = useState(false)
  const [userInfo, setUserInfo] = useState(
    currentUser && {
      email: currentUser.email,
      gender: currentUser.gender,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      dateOfBirth: currentUser.dateOfBirth,
      phone: currentUser.phone,
      addresses: currentUser.addresses,
      password: currentUser.password
      
    }
  );

  const {fetchAddresses} = useAddress()
  const {handleSave} = useUser()

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
        {
          text: "Password",
          value: currentUser.password,
          type: "password",
          name: "password",
        },
        {
          text: "Confirm Password",
          value: "",
          type: "password",
          name: "cnfPassword",
        },
      ]);
      
    }
    fetchAddresses().then(
      addresses => { setAddressObjects(addresses); 
      }
    ) 
}, [currentUser]);


  const handleSaveConfirm = () => {
    if(userInfo.cnfPassword === userInfo.password){
      handleSave(userInfo)
    }
    else {
      setShowPasswordError(true)
    }
  }

  
  const handleInputChange = (e) => {
    setShowPasswordError(false)
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleRemoveAddress = (id) => {
    const newUserInfoAddresses = userInfo.addresses.filter((address) => address !== id)
    userInfo.addresses = newUserInfoAddresses
    handleSave(userInfo)
    
    //LÄGG TILL KOD FÖR ATT TA BORT ADDRESSEN FRÅN DB OM ADDRESSEN INTE HAR NÅGON ANVÄNDARE
  }

  

  const handleInputChangeAddress = (index, event, name) => {
    const { value } = event.target;
    const newAddresses = userInfo.addressObjects.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      addressObjects: newAddresses,
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
                      {(obj.name === "cnfPassword" && showPasswordError) &&
                       <p className="text-red-600">Password does not match</p>}
                    </div>
                    
                  ))}
              </div>

              {isEditing && (
                <button className="self-end" onClick={handleSaveConfirm}>
                  Save
                </button>
              )}
            </div>


              {/*ADDRESS*/}
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
              {addressObjects === null || addressObjects === undefined || addressObjects.length === 0 ? (
                <p>No home address saved</p>
              ) : (
                <div className="flex flex-col gap-6 w-1/4">
                  {addressObjects.map((address, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <h3 className="flex items-center justify-between font-semibold">Address: {index + 1} <X size={25} color="#eb0000" weight="duotone" onClick={() => handleRemoveAddress(address.id)}/></h3>
                          
                        {/*<div className="flex flex-col">
                          <input
                            type="text"
                            value={address.address || ""}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "address")
                            }
                            readOnly={!isEditing}
                          />
                          <input
                            type="text"
                            value={address.town || ""}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "town")
                            }
                            readOnly={!isEditing}
                          />
                          <input
                            type="text"
                            value={address.zipcode || ""}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "zipcode")
                            }
                            readOnly={!isEditing}
                          />
                        </div>*/}
                        {Object.entries(address).map(([key, value]) => (
                          
                          key !== "id" &&
                            <div key={key}>
                            
                            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                            <input type="text"
                            value={value}
                            onChange={(event) =>
                              handleInputChangeAddress(index, event, "zipcode")
                            }
                            readOnly={!isEditing}
                            />
                          </div>
                          
                          
                        ))
                          
                          }
                      </div>
                    );
                  })}
                </div>
              )}

              <button>save</button>
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
