import { Link } from 'react-router-dom'
import logo from '../assets/quickBlogLogo.png'


function NavBar() {
  return (
    <>
      <div className="lg:py-[12px] py-[20px] px-[12px] lg:px-[16px] flex w-full relative mx-auto">
        <Link to={"/"}>
          <img
            className="lg:w-[120px] w-[60px] h-[60px] lg:h-[120px] rounded-full"
            src={logo}
            alt="quickBlogLogo"
          />
        </Link>
        <div className='flex  absolute md:left-[190px] md:top-[35px] lg:left-[310px] lg:top-[60px] left-[82px] top-[38px]'>
          <ul className='flex space-x-12 font-bold lg:space-x-56 md:space-x-36 md:text-xl lg:text-2xl text-lg '>
            <Link to={'/'} className='border-b-2 border-orange-600 hover:cursor-pointer hover:border-orange-400  hover:animate-pulse'>Home</Link>
            <Link to={'/blog'} className='border-b-2 border-orange-600 hover:cursor-pointer hover:border-orange-400  hover:animate-pulse'>Blog</Link>
            <Link to={'/contact'} className='border-b-2 border-orange-600 hover:cursor-pointer hover:border-orange-400  hover:animate-pulse'>Contact</Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar