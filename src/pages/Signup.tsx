import { Navigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

export default function Signup() {
  if (localStorage.getItem("user"))
    return Navigate({
      to: "/",
    });
  return <SignUpForm />;
}
