import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeBlog } from "../../../redux/slice/blogSlice";
import BlogModal from "./BlogModal";
import { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

function Blog() {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [add, setAdd] = useState(true);
  const [id,setId] = useState('')
  return (
    <>
      <section className="mx-auto">
        <div className="text-end md:mx-[40px] mx-[20px] ">
          <Link
            onClick={() => (setModalOpen(true), setAdd(true))}
            className=" md:px-[40px] px-[20px] md:py-[10px] rounded-lg py-[7px] font-bold md:text-lg hover:cursor-pointer hover:bg-orange-500  bg-orange-600"
          >
            Add a blog
          </Link>
        </div>
        <div className=" text-center md:pt-[20px] md:mt-[20px] pt-[10px] mt-[10px]">
          <h1 className="text-2xl font-bold">Blogs</h1>
        </div>
        <section className="w-full  bg-[url('./assets/main_bg.jpg')] font-[serif] relative">
          <div className="w-full  bg-[rgba(0,0,0,0.3)]">
            <div className=" md:mx-[30px] mx-[15px] p-[15px] flex md:justify-evenly flex-wrap">
              {blogs.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#ffe599] shadow-2xl md:px-[20px] px-[10px] md:py-[15px] py-[10px] mx-[10px] my-[10px] lg:w-[45%] w-[100%] rounded-lg "
                >
                  <div className="grid grid-cols-2 md:mb-[20px] mb-[10px]">
                    <p className="font-bold md:text-xl md:px-[20px] px-[10px] text-lg">
                      {item.title}
                    </p>
                    <span className="flex justify-end md:pl-[20px] md:space-x-8 space-x-4 text-[20px]">
                      <Link
                        onClick={() => (
                          setModalOpen(true), setAdd(false), setId(item.id)
                        )}
                        className=""
                      >
                        <FaEdit className="text-yellow-700 hover:text-yellow-600  " />
                      </Link>
                      <Link className="">
                        <MdDelete
                          onClick={() => dispatch(removeBlog(item.id))}
                          className="text-red-700 hover:text-red-600"
                        />
                      </Link>
                    </span>
                  </div>
                  <div className="md:px-[20px] px-[10px]">
                    <p className="text-lg w-[80%] py-[10px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <BlogModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {add ? (
          <Add modalOpen={modalOpen} setModalOpen={setModalOpen} />
        ) : (
          <Edit
            blog_id={id}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </BlogModal>
    </>
  );
}

export default Blog;
