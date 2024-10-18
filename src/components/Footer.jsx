import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full  bg-[url('./assets/main_bg.jpg')] ">
        <div className="w-full  bg-[rgba(0,0,0,0.3)] px-1 py-4">
          <p className="w-full   bg-gradient-to-r from-orange-200 via-orange-600 px-[20px] to-orange-200 rounded-md py-[2px]"></p>
          <div className="w-full md:flex md:justify-between gap-4 items-center md:py-[30px] py-[6px] md:px-[20px] px-[10px]">
            <div className="md:w-[35%] text-center  md:text-start md:px-[15px]">
              <p className="md:text-[40px] text-2xl font-bold md:my-[10px]">
                Quick Blog
              </p>
              <p className="  md:px-0 px-[50px] text-md ">
                A quick blog is a short, informal post that delivers concise
                insights or updates on a specific topic. It’s designed for
                readers looking for fast, digestible content, often featuring
                bullet points, images, or brief paragraphs to keep engagement
                high.
              </p>
            </div>
            <div className="md:mx-[90px] text-center md:my-[0px] my-[20px]">
              <ul>
                <li className="text-xl md:text-2xl md:mb-[30px] mb-[5px]  font-bold md:border-b-2 border-orange-500">
                  <Link
                    to={"/"}
                    className="border-b-2 md:border-b-0 border-orange-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-xl md:text-2xl md:mb-[20px] mb-[5px]  font-bold md:border-b-2 border-orange-500">
                  <Link
                    to="/blog"
                    className="border-b-2 md:border-b-0 border-orange-500"
                  >
                    Blog
                  </Link>
                </li>
                <li className="text-xl md:text-2xl md:mb-[20px] mb-[5px]  font-bold md:border-b-2 border-orange-500">
                  <Link
                    className="border-b-2 md:border-b-0 border-orange-500"
                    to={"/contact"}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-rows-2">
              <div className="text-center">
                <input
                  type="email"
                  placeholder="email here"
                  className="md:px-[20px] px-[10px] md:py-[7px] py-[5px] rounded-l-md outline-none text-lg"
                />
                <button className="md:px-[20px] px-[10px] md:py-[7px] text-lg py-[5px] rounded-r-md bg-orange-600 font-semibold">
                  SEND
                </button>
              </div>
              <div className="mt-[20px] md:mt-[50px]">
                <span className="text-md ">Copyright &copy; 2024 Quick Blog | All rights reserved  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
