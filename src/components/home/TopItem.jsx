import { Link } from 'react-router-dom';

function TopItem() {
  return (
    <>
      <div className=" md:mx-[40px]  mx-[20px] md:p-[20px] p-[12px] ">
        <h1 className="font-bold md:text-[40px] text-[32px] tracking-wide break-words ">
          Simple, meet flexible.
        </h1>
        <p className=" lg:w-[50%] w-[83%] font-thin  break-words md:mt-[10px] mt-[6px] md:mb-[25px] mb-[20px] md:text-[19px] text-[18px] tracking-tight">
          Whatever you’re publishing. Whoever your audience is. QuickBlog makes
          it simple to get started. And easy to expand your site as your
          audience grows.
        </p>
        <Link
          to={"/authlogin"}
          className=" px-[15px] py-[12px] rounded-md font-bold text-lg bg-orange-600"
        >
          Start a blog
        </Link>
      </div>
    </>
  );
}

export default TopItem