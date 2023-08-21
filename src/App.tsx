import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<IsUser />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

function IsUser(): JSX.Element {
  if (localStorage.getItem("user")) {
    return <Outlet />;
  }
  return <Signup />;
}
