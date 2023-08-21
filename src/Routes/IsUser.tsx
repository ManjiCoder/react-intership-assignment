import { Outlet } from "react-router-dom";
import Signup from "../pages/Signup";

export default function IsUser(): JSX.Element {
  if (localStorage.getItem("user")) {
    return <Outlet />;
  }
  return <Signup />;
}
