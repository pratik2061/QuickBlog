import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  return (
    <>
      <div className="w-full  bg-[url('./assets/main_bg.jpg')] ">
        <div className="w-full  bg-[rgba(0,0,0,0.3)] px-1 py-4">
          <p className="w-full   bg-gradient-to-r from-orange-200 via-orange-600 px-[20px] to-orange-200 rounded-lg py-[2px]"></p>
          <div className="w-full lg:flex lg:justify-between gap-4 items-center lg:py-[30px] py-[6px] lg:px-[20px] px-[10px]">
            <div className="lg:w-[35%] text-center  lg:text-start lg:px-[15px]">
              <p className="lg:text-[40px] text-2xl font-bold lg:my-[10px]">
                Quick Blog
              </p>
              <p className="  lg:px-0 px-[50px] text-lg ">
                A quick blog is a short, informal post that delivers concise
                insights or updates on a specific topic. It’s designed for
                readers looking for fast, digestible content, often featuring
                bullet points, images, or brief paragraphs to keep engagement
                high.
              </p>
            </div>
            <div className="lg:mx-[70px] text-center lg:my-[0px] my-[20px]">
              <ul>
                <li className="text-xl lg:text-2xl lg:mb-[30px] mb-[5px]  font-bold lg:border-b-2 border-orange-500">
                  <Link
                    to={"/"}
                    className="border-b-2 lg:border-b-0 border-orange-500"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl lg:mb-[20px] mb-[5px]  font-bold lg:border-b-2 border-orange-500">
                  <Link
                    to="/blog"
                    className="border-b-2 lg:border-b-0 border-orange-500"
                  >
                    Blog
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl lg:mb-[20px] mb-[5px]  font-bold lg:border-b-2 border-orange-500">
                  <Link
                    className="border-b-2 lg:border-b-0 border-orange-500"
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-rows-2">
              <div className="text-center">
                <input
                  type="email"
                  placeholder="email here"
                  className="lg:px-[20px] px-[10px] lg:py-[7px] py-[5px] rounded-l-lg outline-none text-lg"
                />
                <button className="lg:px-[20px] px-[10px] lg:py-[7px] text-lg py-[5px] rounded-r-lg bg-orange-600 font-semibold">
                  SEND
                </button>
              </div>
              <div className="mt-[20px] lg:mt-[30px] text-center">
                <span className="text-lg ">Copyright &copy; {date.getFullYear()} Quick Blog | All rights reserved  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
