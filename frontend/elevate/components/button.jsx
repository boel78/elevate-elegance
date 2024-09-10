import React from "react";

export const TanButton = ({ btnText, onClick }) => {
  return (
    <button className="bg-lightTan px-5 py-2 rounded text-black font-inter hover:bg-darkBlue hover:text-white transition ease-in-out duration-200 shadow-xl" onClick={onClick}>
      {btnText}
    </button>
  );
};
