import React from 'react';

const PortfolioCard = ({ title, children, imageSrc, imgAltTxt, clickUrl }) => {
  const handleClick = (clickUrl) => {
    window.open(clickUrl, '_blank');
  };

  return (
    <>
      <div
        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 cursor-pointer hover:outline hover:outline-2 hover:outline-gray-600"
        onClick={() => handleClick(clickUrl)}>
        <img src={`/${imageSrc}`} alt={imgAltTxt} className="mb-4 rounded-md object-cover w-full h-48" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{children}</p>
        <button
          onClick={() => handleClick(clickUrl)}
          className="bg-white text-gray-900 px-6 py-3 rounded hover:bg-lime-400 hover:text-black hover:font-bold font-bold cursor-pointer">
          View project
        </button>
      </div>
    </>
  );
};

export default PortfolioCard;
