import React from 'react';

const Contact = () => {
  return (
    <div>
      <a href="mailto:enrique_alvarado95@hotmail.com">
        <div className="flex space-x-4 items-center cursor-pointer mb-4 group  hover:bg-indigo-200/40  transition-all rounded-md max-w-fit">
          <img src="/img/email_dark.svg" className="w-[30px]" />
          <p className=" group-hover:underline decoration-indigo-200  ">
            enrique_alvarado95@hotmail.com
          </p>
        </div>
      </a>
      <a href="https://wa.me/5218441753173">
        <div className="flex space-x-4 items-center cursor-pointer mb-4 group  hover:bg-indigo-200/40  transition-all rounded-md max-w-fit">
          <img src="/img/whats_dark.svg" className="w-[30px]" />
          <p className=" group-hover:underline decoration-indigo-200">
            +52 1 844-175-31-73
          </p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
