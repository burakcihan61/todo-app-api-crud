import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {
  const [username, setUsername] = useState("");

  function handleFormSubmit(username) {
    localStorage.setItem("username", username);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit(username)}>
        <div className="userLoginScreen">
          <h1>Username</h1>
          <Paper className="InputForm">
            <TextField
              className="userInput"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username add"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <Link to="todo-app">
              <Button variant="contained">Login</Button>
            </Link>
          </Paper>
        </div>
      </form>
    </>
  );
};

export default User;
