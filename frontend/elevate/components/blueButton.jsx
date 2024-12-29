import React from "react";

export const BlueButton = ({ btnText, onClick }) => {
  return (
    <button className="bg-darkBlue px-5 py-2 rounded text-white font-inter hover:bg-superLightTan hover:text-black transition ease-in-out duration-200 shadow-xl" onClick={onClick}>
      {btnText}
    </button>
  );
};
