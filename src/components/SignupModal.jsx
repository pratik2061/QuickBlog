import LoginBar from './LoginBar'
import LoginModal from './LoginModal';
import Signup from './Signup';

function SignupModal() {
  return (
    <>
      <section className="w-full mx-auto">
        <div className="w-full grid justify-center py-[16px]">
          <LoginBar />
          <LoginModal>
            <Signup/>
          </LoginModal>
        </div>
      </section>
    </>
  );
}

export default SignupModal;