import MiddleItem from './MiddleItem';
import TopItem from './TopItem'

function Home() {
  return (
    <>
      <div className="w-full mt-[20px] space-y-3  ">
        <TopItem/>
        <div className=" max-h-full bg-[url('./assets/main_bg.jpg')]">
          <div className=" md:pb-[110px] pb-[40px] bg-[rgba(0,0,0,0.3)]">
            <MiddleItem/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;