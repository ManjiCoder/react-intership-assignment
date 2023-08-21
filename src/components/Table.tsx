import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserData } from "..";

export default function Table() {
  const [users, setUsers] = useState<UserData[]>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  const getUsers = async () => {
    // API Call
    try {
      const { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUsers(data);
      console.table(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <h1>Table</h1>
      <DataGrid rows={users} columns={columns} />
    </Container>
  );
}
