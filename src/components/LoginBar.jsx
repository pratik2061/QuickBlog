import React from 'react'
import { NavLink } from 'react-router-dom';

function LoginBar() {
  return (
    <>
      <div className="md:my-[10px] my-[5px] bg-[#ffe599]  px-[10px]  py-[10px]  rounded-md">
        <NavLink
          to={"/auth"}
          className={({ isActive }) =>
            ` ${
              isActive ? "bg-orange-600 rounded-r-full" : ""
            } md:px-[80px] px-[40px] md:py-[10px] py-[8px] hover:bg-orange-600 font-bold text-lg hover:rounded-r-full`
          }
        >
          Login
        </NavLink>
        <NavLink
          to={"/signup"}
          className={({ isActive }) =>
            `ml-[5px] ${
              isActive ? "bg-orange-600 rounded-l-full" : ""
            } md:px-[80px] px-[40px] md:py-[10px] py-[8px] hover:bg-orange-600 font-bold text-lg hover:rounded-l-full `
          }
        >
          Sign up
        </NavLink>
      </div>
    </>
  );
}

export default LoginBar