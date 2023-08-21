import { Container } from "@mui/material";
import DepartmentList from "../components/Departments";
import Table from "../components/Table";
import { Navigate } from "react-router-dom";

export default function Home() {
  if (!localStorage.getItem("user"))
    return Navigate({
      to: "/sign-up",
    });

  return (
    <Container sx={{ paddingY: "5rem" }}>
      <Table />
      <DepartmentList />
    </Container>
  );
}
