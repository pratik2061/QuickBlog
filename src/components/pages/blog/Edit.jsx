import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBlog } from "../../../redux/slice/blogSlice";



function Edit({ blog_id, modalOpen ,setModalOpen}) {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const item = blogs.filter((item) => item.id === blog_id);
  const { id, title, description } = item[0];
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

 const handelUpdate = (e)=>{
    if (newTitle == "" && newDescription == "") {
      alert("title or description field cannot be empty");
    } else {
      e.preventDefault();
      dispatch(
        editBlog({
          id: id,
          title: newTitle,
          description: newDescription,
        })
      );
      setModalOpen(false)
    }
 }

  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center px-[20px]">
        <form className="bg-[#ffe599] py-[20px] px-[20px]   items-center rounded-md  lg:w-[40%] md:w-[60%] w-[80%] ">
          <div className="text-center">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              className=" w-full  mb-[10px] outline-none md:text-lg text-md px-[10px] py-[2px] md:py-[5px] border-[1px] border-orange-600 rounded-md "
            />
          </div>
          <div className="text-center">
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className=" w-full outline-none md:text-lg text-md px-[10px] py-[2px] md:py-[5px] border-[1px] border-orange-600 rounded-md"
            ></textarea>
          </div>
          <button
            onClick={handelUpdate}
            className="mt-[10px] text-center w-full md:px-[50px] px-[20px] py-[8px] md:py-[12px] bg-orange-600 font-semibold text-lg rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit
