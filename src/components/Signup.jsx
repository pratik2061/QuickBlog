import React from 'react'

function Signup() {
  return (
    <>
      <form className=" text-center ">
        <span className="md:text-xl font-bold md:py-[10px] py-[5px]">
          Start Your Journey
        </span>
        <div className="my-[5px] md:my-[12px]">
          <input
            type="text"
            placeholder="username"
            className="w-[100%] rounded-md outline-none border-[1px] border-orange-600 md:px-[15px] px-[10px] md:py-[5px] py-[3px] text-lg font-semibold "
          />
        </div>
        <div className="my-[5px] md:my-[12px]">
          <input
            type="email"
            placeholder="email"
            className="w-[100%] rounded-md outline-none border-[1px] border-orange-600 md:px-[15px] px-[10px] md:py-[5px] py-[3px] text-lg font-semibold "
          />
        </div>
        <div className="my-[5px] md:my-[12px]">
          <input
            type="password"
            placeholder="password"
            className="w-[100%] rounded-md outline-none border-[1px] border-orange-600 md:px-[15px] px-[10px] md:py-[5px] py-[3px] text-lg font-semibold "
          />
        </div>
        <button className="bg-orange-600 font-bold hover:cursor-pointer hover:bg-orange-500 px-[50px] md:px-[80px] py-[5px] md:py-[10px] rounded-[10px] mt-[5px]">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default Signup