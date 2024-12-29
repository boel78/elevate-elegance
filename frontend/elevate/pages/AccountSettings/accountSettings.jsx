import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { MenuContext } from "../../src/menuContext";
import { useAddress } from "../../hooks/useAddress";
import { useUser } from "../../hooks/useUser";
import { X } from "@phosphor-icons/react";
import { BlueButton } from "../../components/blueButton";

export const AccountSettings = () => {
  const { noMenus, currentUser } = useContext(MenuContext);
  const [userInfoField, setUserInfoField] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [addressObjects, setAddressObjects] = useState([]);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [userInfo, setUserInfo] = useState(
    currentUser && {
      email: currentUser.email,
      gender: currentUser.gender,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      dateOfBirth: currentUser.dateOfBirth,
      phone: currentUser.phone,
      addresses: currentUser.addresses,
      password: currentUser.password,
    }
  );

  const { fetchAddresses, addAddress } = useAddress();
  const { handleSave } = useUser();

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
    fetchAddresses().then((addresses) => {
      setAddressObjects(addresses);
    });
  }, [currentUser]);

  const handleSaveConfirm = () => {
    if (userInfo.cnfPassword === userInfo.password) {
      handleSave(userInfo);
    } else {
      setShowPasswordError(true);
    }
  };

  const handleInputChange = (e) => {
    setShowPasswordError(false);
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleRemoveAddress = (id) => {
    const newUserInfoAddresses = userInfo.addresses.filter(
      (address) => address !== id
    );
    userInfo.addresses = newUserInfoAddresses;
    handleSave(userInfo);
    setAddressObjects(userInfo.addresses);
  };

  const handleAddAddress = () => {
    addAddress;

    userInfo.addresses = currentUser.addresses;
    setAddressObjects(userInfo.addresses);
  };

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
          <span><a href="/">Home</a>/<a>Account settings</a></span>
          <div className="flex flex-col items-center gap-20">
            {/*userinfo */}
            <div className="bg-lightTan sm:w-1/2 px-6 py-5 flex flex-col self-center ">
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
                        className="sm:p-1 w-4/5"
                      />
                      {obj.name === "cnfPassword" && showPasswordError && (
                        <p className="text-red-600">Password does not match</p>
                      )}
                    </div>
                  ))}
              </div>

              {isEditing && (
                <span className="self-end">
                  <BlueButton btnText={"Save"} onClick={handleSaveConfirm} />
                </span>
              )}
            </div>

            {/*ADDRESS*/}
            <div className="bg-lightTan sm:w-1/2 px-6 flex flex-col py-5 mb-32">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-medium text-xl">Address</h2>
                  <p>You can also add and edit delivery address here</p>
                </div>
                <a
                  className="underline cursor-pointer"
                  onClick={() => setIsEditingAddress(!isEditingAddress)}
                >
                  Edit
                </a>
              </div>

              <div className="flex gap-36">
                {addressObjects === null ||
                addressObjects === undefined ||
                addressObjects.length === 0 ? (
                  <p>No home address saved</p>
                ) : (
                  <div className="flex flex-wrap w-2/3 gap-10">
                    {addressObjects.map((address, index) => {
                      return (
                        <div key={index} className="flex flex-col">
                          <h3 className="flex font-semibold justify-between">
                            Address {index + 1}{" "}
                            <span>
                              <X
                                size={25}
                                color="#eb0000"
                                weight="duotone"
                                onClick={() => handleRemoveAddress(address.id)}
                              />
                            </span>
                          </h3>

                          {/*itererar igenom addressobjekten och skapar input fields */}
                          {Object.entries(address).map(
                            ([key, value]) =>
                              key !== "id" && (
                                <div key={key}>
                                  <h3>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                  </h3>
                                  <input
                                    type="text"
                                    value={value}
                                    onChange={(event) =>
                                      handleInputChangeAddress(
                                        index,
                                        event,
                                        "zipcode"
                                      )
                                    }
                                    readOnly={!isEditing}
                                    className="p-1"
                                  />
                                </div>
                              )
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {isEditingAddress && (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={handleAddAddress}
                  >
                    <h3 className="font-semibold">New Address</h3>
                    <input placeholder="Address" name="address" id="address" />
                    <input placeholder="Town" name="town" id="town" />
                    <input placeholder="Zipcode" name="zipcode" id="zipcode" />
                    <BlueButton btnText={"Add address"} />
                  </form>
                )}
              </div>

              {isEditingAddress && (
                <span className="self-end mt-4">
                  <BlueButton btnText={"Save"} />
                </span>
              )}
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
