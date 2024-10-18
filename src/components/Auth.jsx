import LoginBar from "./LoginBar";
import LoginModal from "./LoginModal";
import Login from "./Login";


function Auth() {

  return (
    <>
      <section className="w-full mx-auto px-[10px]">
        <div className="w-full grid justify-center py-[16px]">
          <LoginBar />
          <LoginModal>
            <Login/>
          </LoginModal>
        </div>
      </section>
    </>
  );
}

export default Auth;