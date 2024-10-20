import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

function Blog() {
  const blogs = useSelector((state)=>state.blogs)  
  
  return (
    <>
      <section className="mx-auto">
        <div className="text-end md:mx-[40px] mx-[20px] ">
          <Link
            to={"/blog/add"}
            className=" md:px-[40px] px-[20px] md:py-[10px] rounded-lg py-[7px] font-bold md:text-lg hover:cursor-pointer hover:bg-orange-500  bg-orange-600"
          >
            Add a blog
          </Link>
        </div>
        <div className=" text-center md:pt-[20px] md:mt-[20px] pt-[10px] mt-[10px]">
          <h1 className="text-2xl font-bold">Blogs</h1>
        </div>
        <div className="md:my-[20px] my-[10px] md:mx-[30px] mx-[15px] p-[15px] flex md:justify-evenly flex-wrap">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffe599] md:px-[20px] px-[10px] md:py-[15px] py-[10px] mx-[10px] my-[10px] lg:w-[45%] w-[100%] rounded-lg "
            >
              <div className="grid grid-cols-2 md:mb-[20px] mb-[10px]">
                <p className="font-bold md:text-xl md:px-[20px] px-[10px] text-lg">
                  {item.title}
                </p>
                <span className="flex justify-end md:pl-[20px] md:space-x-8 space-x-4 text-[20px]">
                  <Link className="">
                    <FaEdit className="text-yellow-700 hover:text-yellow-600  "/>
                  </Link>
                  <Link className="">
                    <MdDelete  className="text-red-700 hover:text-red-600"/>
                  </Link>
                </span>
              </div>
              <div className="md:px-[20px] px-[10px]">
                <p className="">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog