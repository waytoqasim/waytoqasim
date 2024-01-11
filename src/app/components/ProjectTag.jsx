import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <div className=" rounded-full bg-gradient-to-br from-[#8C52FF] to-[#00BF63] p-1">
    <button
      className={`${buttonStyles} rounded-full bg-black bg-opacity-75 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
    </div>
  );
};

export default ProjectTag;
