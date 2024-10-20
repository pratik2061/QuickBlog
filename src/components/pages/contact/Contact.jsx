import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

function Contact() {
  return (
    <div className="w-full  grid  grid-rows-[30%_auto] lg:grid-cols-[43%_auto] px-[20px] lg:py-[50px] py-[20px] lg:gap-4 gap-2">
      <div className=" flex justify-center items-center lg:h-[40vh]">
        <ContactLeft />
      </div>
      <div className=" ">
        <ContactRight/>
      </div>
    </div>
  );
}

export default Contact