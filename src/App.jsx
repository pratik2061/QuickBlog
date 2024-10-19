import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./Layouts";
import Auth from "./components/Auth";
import SignupModal from "./components/SignupModal";
import Home from './components/home/Home'
import Blog from './components/pages/blog/Blog'
import Contact from './components/pages/contact/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/authlogin" element={<Auth />} />
        <Route path="/authsignup" element={<SignupModal />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  );

  return (
    <section className="w-full h-[100%] bg-[url('./assets/main_bg.jpg')] font-[serif] relative">
      <div className="w-full h-[100vh] bg-[rgba(0,0,0,0.3)]">
        <RouterProvider router={router} />
      </div>
    </section>
  );
}

export default App;
