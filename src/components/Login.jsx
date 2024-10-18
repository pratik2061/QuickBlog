
function Login() {
  return (
    <>
      <form className=" text-center ">
        <span className="md:text-xl font-bold md:py-[10px] py-[5px]">
          Welcome Back
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
            type="password"
            placeholder="password"
            className="w-[100%] rounded-md outline-none border-[1px] border-orange-600 md:px-[15px] px-[10px] md:py-[5px] py-[3px] text-lg font-semibold "
          />
        </div>
        <button className="bg-orange-600 px-[50px] font-bold hover:cursor-pointer hover:bg-orange-500 md:px-[80px] py-[5px] md:py-[10px] rounded-[10px] mt-[5px]">
          Login
        </button>
        <p className="w-full  md:my-[10px] my-[6px]  bg-gradient-to-r from-slate-200 via-orange-600 to-slate-200 rounded-md py-[2px]"></p>
        <a
          href="#"
          className="md:text-[14px] text-[12px]  text-blue-900 hover:cursor-pointer hover:underline hover:text-violet-900"
        >
          Forget Password ?
        </a>
      </form>
    </>
  );
}

export default Login;
