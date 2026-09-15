import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

export default function Studentd() {
  const [students, setStudents] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5400/user")
      .then((res) => {
        setStudents(res.data.length);
      });
  }, []);

  return (
    <Dashboard totalStudents={students} />
  );
}