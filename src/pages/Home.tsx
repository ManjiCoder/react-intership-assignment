import { Container } from "@mui/material";
import DepartmentList from "../components/Departments";
import Table from "../components/Table";

export default function Home() {
  return (
    <Container sx={{ paddingY: "5rem" }}>
      <Table />
      <DepartmentList />
    </Container>
  );
}
