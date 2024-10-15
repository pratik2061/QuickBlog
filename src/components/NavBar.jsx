import { Link } from 'react-router-dom'
import logo from '../assets/quickBlogLogo.png'
import { FaArrowRight } from 'react-icons/fa';

function NavBar() {
  return (
    <div className="md:py-[12px] py-[10px] px-[12px] md:px-[16px] flex w-full relative mx-auto">
      <img
        className="md:w-[120px] w-[80px] h-[80px] md:h-[120px] rounded-full"
        src={logo}
        alt="quickBlogLogo"
      />
      <ul>
      </ul>
      <Link
        to={"/auth"}
        className="hover:bg-orange-500 flex items-center md:text-xl font-bold absolute md:right-[80px] right-[20px] top-[30px] rounded-lg md:top-[45px] bg-orange-600 md:px-[20px] px-[10px] py-[5px] md:py-[10px]"
      >
        Get Started
        <span className='mx-[5px]'>
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
}

export default NavBar