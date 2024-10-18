import MiddleItem from './MiddleItem';
import TopItem from './TopItem'

function Home() {
  return (
    <>
      <div className="w-full mt-[20px] space-y-3  ">
        <TopItem/>
        <div className="w-full max-h-full bg-[url('./assets/main_bg.jpg')]">
          <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.3)]">
            <MiddleItem/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;