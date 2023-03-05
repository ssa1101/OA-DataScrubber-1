import "./App.css";
import React, { useEffect, useState } from "react";
import axios, { formToJSON } from "axios";
import Header from "./Header.js";
import Users from "./Users.js";
function App() {
  // const [getMessage, setGetMessage] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/flask/hello")
  //     .then((response) => {
  //       console.log("SUCCESS", response);
  //       setGetMessage(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Users className="table" users={users} />
    </div>
  );
}

export default App;
