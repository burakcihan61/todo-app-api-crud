import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState("");

  function handleFormSubmit(username) {
    localStorage.setItem("username", username);
  }

  return (
    <div>
      <form className="userMain" onSubmit={handleFormSubmit(username)}>
        <div className="mb-3">
          <label className="form-label"></label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <Link to="/read">
          <button type="submit" className="btn btn-primary userButtons">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;
