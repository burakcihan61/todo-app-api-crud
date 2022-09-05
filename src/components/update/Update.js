import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <form className="todoEditInput">
        <div className="input-group mb-3 ">
          <span className="input-group-text " id="inputGroup-sizing-default">
            Edit To Do
          </span>
          <input
            name="fname"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="edit to do"
            type="text"
            className="form-control"
            aria-label="Sizing example input "
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <Link to="/read">
          <button
            type="submit"
            onClick={sendDataToAPI}
            className="btn btn-primary"
          >
            Update
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
