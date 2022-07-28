import React from 'react';

const HeaderPages = () => {
  return (
    <div>
      <p className="text-center bg-indigo-300 text-sm font-medium rounded-sm p-1 w-full mb-[50px]  max-w-[500px] mx-auto">
        Hello, I´m a full stack dev with main focus on frontend development!
      </p>
      {/*name and title container*/}
      <div className="flex items-center mb-[40px] max-w-[500px] mx-auto">
        <div className="flex-1">
          <h1 className=" text-indigo-200 poppins text-3xl">
            Enrique Alvarado
          </h1>
          <p className="text-white">
            Frontend Developer / UI Designer / Engineer
          </p>
        </div>
        <img
          src="/img/tite.jpg"
          alt="enrique alvarado portfolio"
          className="rounded-full w-[130px] border-2 border-blue-300"
        />
      </div>
    </div>
  );
};

export default HeaderPages;
