import { Link } from 'react-router-dom'
import logo from '../assets/quickBlogLogo.png'
import { CiLogin } from 'react-icons/ci';
import { useState } from 'react';


function NavBar() {
  const [status ,setStatus] = useState(false)
  return (
    <div className="lg:py-[12px] py-[10px] px-[12px] lg:px-[16px] flex w-full relative mx-auto">
      <Link onClick={() => setStatus(false)} to={"/"}>
        <img
          className="lg:w-[120px] w-[80px] h-[80px] lg:h-[120px] rounded-full"
          src={logo}
          alt="quickBlogLogo"
        />
      </Link>
      <ul></ul>
      {status ? (
        ""
      ) : (
        <Link
          onClick={() => setStatus((prev) => !prev)}
          to={"/auth"}
          className="hover:bg-orange-500 flex items-center lg:text-xl font-bold absolute lg:right-[80px] right-[20px] top-[30px] rounded-lg lg:top-[45px] bg-orange-600 lg:px-[20px] px-[10px] py-[5px] lg:py-[10px]"
        >
          Get Started
          <span className="mx-[5px]  font-bold text-2xl">
            <CiLogin />
          </span>
        </Link>
      )}
    </div>
  );
}

export default NavBar