import Home from "./pages/Home/Home.components";
import Navbar from "./components/Navbar/Navbar.component";
import BlogDetails from "./pages/BlogDetails/BlogDetails.components";
import WriteBlog from "./pages/WriteBlog/WriteBlog.components";
import Setting from "./pages/setting/Setting.component";
import Register from "./pages/Register/Register.component";
import Login from "./pages/Login/Login.component";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = false;
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <WriteBlog /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

