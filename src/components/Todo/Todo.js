import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = () => {
  const [apiData, setApiData] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const getDataByFetch = async () => {
      const dataBy = await axios
        .get(`https://63124190b466aa9b03873d95.mockapi.io/todos`)
        .then((getData) => {
          setApiData(getData.data);
        });
      dataBy();
    };
    getDataByFetch();
  }, [apiData]);

  const setData = (id, content) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("content", content);
  };

  const getData = () => {
    axios
      .get(`https://63124190b466aa9b03873d95.mockapi.io/todos`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63124190b466aa9b03873d95.mockapi.io/todos/${id}`)
      .then(() => {
        getData();
      });
  };

  const completeHandler = async (id, data) => {
    const dataToApı = await axios
      .put(`https://63124190b466aa9b03873d95.mockapi.io/todos/${id}`, {
        isCompleted: !data.isCompleted,
      })
      .then(() => {});
    setApiData(
      apiData.map((t) =>
        t.id === data.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
    dataToApı();
  };
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
      <h5>To Do</h5>
      <form className="InputForm">
        <TextField
          id="todoEntry"
          label="Enter Todo"
          variant="outlined"
          onChange={handleOnChange}
        />
        <Button
          disabled={content.length < 3}
          type="submit"
          className="mt-20"
          variant="contained"
          onClick={sendDataToAPI}
        >
          Add
        </Button>
      </form>

      {apiData.map((data) => {
        return (
          <Paper className="InputForm taskBg">
            <div className={data.isCompleted ? "done" : ""}>
              <span className="taskNumber">{data.id}</span>
              <span className="taskText">{data.content}</span>
            </div>
            <div className="iconsWrap">
              <span
                title="Completed / Not Completed"
                onClick={() => completeHandler(data.id, data)}
              >
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <Link to="/update">
                <span
                  title="Edit"
                  onClick={() => setData(data.id, data.content)}
                >
                  <FontAwesomeIcon icon={faPen} />
                </span>
              </Link>
              <span title="Delete" onClick={() => onDelete(data.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </Paper>
        );
      })}
    </>
  );
};

export default Todo;
