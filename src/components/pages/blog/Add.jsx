import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../../../redux/slice/blogSlice";

function Add({ modalOpen, setModalOpen }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handelAdd = (e) => {
    if(title == '' && description == ''){
      return (
        alert('title or description field cannot be empty.')
      )
    }else{
          e.preventDefault(),
           dispatch(addBlog({
            title:title,
            description:description
           }));  
          setModalOpen(false);
    }
  };
  if (!modalOpen) {
    return null;
  } else {
    return (
      <>
        <div className="w-full h-[100vh] flex items-center justify-center px-[20px]">
          <form className="bg-[#ffe599] py-[20px] px-[20px]   items-center rounded-md  lg:w-[40%] md:w-[60%] w-[80%] ">
            <div className="text-center">
              <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
                className=" w-full  mb-[10px] outline-none md:text-lg text-md px-[10px] py-[2px] md:py-[5px] border-[1px] border-orange-600 rounded-md "
              />
            </div>
            <div className="text-center">
              <textarea
                  onChange={(e) => setDescription(e.target.value)}
                placeholder="description"
                className=" w-full outline-none md:text-lg text-md px-[10px] py-[2px] md:py-[5px] border-[1px] border-orange-600 rounded-md"
              ></textarea>
            </div>
            <button
              onClick={handelAdd}
              className="mt-[10px] text-center w-full md:px-[50px] px-[20px] py-[8px] md:py-[12px] bg-orange-600 font-semibold text-lg rounded-md"
            >
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Add;
