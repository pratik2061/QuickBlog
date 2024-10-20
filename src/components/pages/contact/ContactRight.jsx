
function ContactRight() {
  return (
    <>
      <form className="bg-[#ffe599] py-[20px] px-[20px] flex justify-center items-center rounded-md ">
        <div className=" ">
          <div className=" flex w-full ">
            <input
              type="text"
              placeholder="Firstname"
              className=" md:w-[50%] mr-[10px] w-full md:text-lg text-md mb-[10px] outline-none border-[1px] border-orange-600 rounded-md md:py-[5px] py-[2px] px-[10px]"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="md:w-[50%] w-full md:text-lg text-md mb-[10px] outline-none border-[1px] border-orange-600 rounded-md md:py-[5px] py-[2px] px-[10px]"
            />
          </div>
          <div className="text-center">
            <input
              placeholder="Email"
              type="email"
              className=" w-full  mb-[10px] outline-none md:text-lg text-md px-[10px] py-[2px] md:py-[5px] border-[1px] border-orange-600 rounded-md "
            />
          </div>
          <div className="text-center">
            <textarea
              placeholder="What can we help you with ?"
              className=" w-full outline-none md:text-lg text-md px-[10px] py-[2px] md:py-[5px] border-[1px] border-orange-600 rounded-md"
            ></textarea>
          </div>
          <button
          onClick={(e)=>(
            e.preventDefault(),
            alert("Will be in touch soon")
          )}
          className="mt-[10px] md:px-[50px] px-[20px] py-[8px] md:py-[12px] bg-orange-600 font-semibold text-lg rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactRight