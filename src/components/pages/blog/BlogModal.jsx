import { IoIosClose } from "react-icons/io";

function BlogModal(props) {
  const { children, modalOpen, setModalOpen} = props;

  if (!modalOpen ) {
    return null;
  } else {
    return (
      <>
        <div className="w-full h-[100vh] fixed inset-0 bg-neutral-700 bg-opacity-35 flex items-center justify-center z-50">
          <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.3)]">
            <button
              onClick={() =>( setModalOpen(false))}
              className="w-full flex justify-end"
            >
              <IoIosClose className="absolute top-4 right-4 text-gray-300 text-[50px]" />
            </button>
            {children}
          </div>
        </div>
      </>
    );
  }
}

export default BlogModal;
