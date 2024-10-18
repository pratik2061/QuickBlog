import { useState } from "react";
import blogHome from "../../assets/blogHome.jpg";
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

function MiddleItem() {
  const [firstElement,setFirstElement] =useState(false)
  const [secondElement, setSecondElement] = useState(false);
  const [thirdElement, setThirdElement] = useState(false);
  return (
    <>
      <div className="md:mx-[40px] mx-[10px] md:my-[40px] my-[25px] md:p-[20px] p-[10px] grid md:grid-cols-2 gap-2 grid-cols-1 ">
        <div className="space-y-1 ">
          <div
            onClick={() => (
              setFirstElement(!firstElement),
              setSecondElement(false),
              setThirdElement(false)
            )}
            className="  text-xl  border-t-[1px] space-x-2 border-orange-600 px-[10px] md:px-[14px] py-[20px] md:py-[30px]"
          >
            <div className="flex items-center cursor-pointer font-bold text-2xl">
              <span className="mx-[5px]">
                {firstElement ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </span>
              Blog beautifully
            </div>
            <p
              className={` ${
                firstElement ? "scale-y-100 h-full " : "scale-y-0 h-0 "
              } w-[90%] break-words pl-[10px] pt-[6px]`}
            >
              Customize your blog’s look and feel in a couple of clicks with
              beautifully designed themes. Bring your writing to life with
              magical drag-and-drop layouts. Or put your fingerprint on every
              font, color, and element on the page.
            </p>
          </div>
          <div
            onClick={() => (
              setFirstElement(false),
              setSecondElement(!secondElement),
              setThirdElement(false)
            )}
            className="  text-xl  border-t-[1px] space-x-2 border-orange-600 px-[10px] md:px-[14px] py-[20px] md:py-[30px]"
          >
            <div className="flex items-center cursor-pointer font-bold text-2xl">
              <span className="mx-[5px]">
                {secondElement ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </span>
              Edit easily
            </div>
            <p
              className={` ${
                secondElement ? "scale-y-100 h-full " : "scale-y-0 h-0 "
              } w-[90%] break-words pl-[10px] pt-[6px]`}
            >
              From simple and clean to glossy magazine – whatever your
              publishing style, the intuitive block editor adapts to you. Drag,
              drop, and easily swap out your menu, punch in a pull quote, or
              make your post pop with a beautiful gallery. Just like that
            </p>
          </div>
          <div
            onClick={() => (
              setFirstElement(false),
              setSecondElement(false),
              setThirdElement(!thirdElement)
            )}
            className="  text-xl  border-t-[1px] space-x-2 border-orange-600 px-[10px] md:px-[14px] py-[20px] md:py-[30px]"
          >
            <div className="flex items-center cursor-pointer font-bold text-2xl">
              <span className="mx-[5px]">
                {thirdElement ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </span>
              Blog beautifully
            </div>
            <p
              className={` ${
                thirdElement ? "scale-y-100 h-full " : "scale-y-0 h-0 "
              } w-[90%] break-words pl-[10px] pt-[6px]`}
            >
              Customize your blog’s look and feel in a couple of clicks with
              beautifully designed themes. Bring your writing to life with
              magical drag-and-drop layouts. Or put your fingerprint on every
              font, color, and element on the page.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={blogHome} className="w-[450px] w-[450px]" alt="" />
        </div>
      </div>
    </>
  );
}

export default MiddleItem