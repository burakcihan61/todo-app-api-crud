import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [content, setContent] = useState("");

  const sendDataToAPI = async () => {
    const dataFetch = await axios
      .post(`https://63124190b466aa9b03873d95.mockapi.io/todos`, {
        content,
      })
      .then(() => {});
    dataFetch();
  };

  const handleOnChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            name="Todoname"
            onChange={handleOnChange}
            placeholder="add to do"
          />
        </div>
        <div className="col-auto">
          <button
            disabled={content.length < 3}
            className="btn btn-lg btn-success"
            type="submit"
            onClick={sendDataToAPI}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
