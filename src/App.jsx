import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./Layouts";
import Auth from "./components/Auth";
import SignupModal from "./components/SignupModal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignupModal />} />
      </Route>
    )
  );

  return (
    <section className="w-full h-[100vh] bg-[url('./assets/main_bg.jpg')] font-serif">
      <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.3)]">
        <RouterProvider router={router} />
      </div>
    </section>
  );
}

export default App;
