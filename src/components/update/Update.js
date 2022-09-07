import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";

const Update = () => {
  const [content, setContent] = useState("");
  const [ID, setID] = useState(null);

  const sendDataToAPI = async () => {
    const dataToApı = await axios
      .put(`https://63124190b466aa9b03873d95.mockapi.io/todos/${ID}`, {
        content,
      })
      .then(() => {});
    dataToApı();
  };

  useEffect(() => {
    setContent(localStorage.getItem("content"));

    setID(localStorage.getItem("ID"));
  }, []);
  return (
    <div>
      <Header />
      <h5>To Do Update</h5>
      <form className="InputForm updateForm">
        <TextField
          id="todoEntry"
          label="Enter Todo"
          variant="outlined"
          onChange={(e) => setContent(e.target.value)}
        />
        <Link to="/todo-app">
          <Button
            type="submit"
            className="mt-20"
            variant="contained"
            onClick={sendDataToAPI}
          >
            Add
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
