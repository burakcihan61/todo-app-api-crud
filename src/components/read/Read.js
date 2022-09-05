import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Create from "../create/Create";

const Read = () => {
  const [apiData, setApiData] = useState([]);

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

  return (
    <>
      <div className="appUsername">
        <div className="avatarDiv">
          <img
            className="avatarImg"
            alt="avatar"
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
          />
        </div>
        <div className="userNameTitle"> {localStorage.getItem("username")}</div>
      </div>
      <Create />
      {apiData.map((data) => {
        return (
          <div className="col taskBg" key={data.id}>
            <div className={data.iscompleted ? "done" : ""}>
              <span className="taskNumber">{data.id}</span>
              <span className="taskText">{data.content}</span>
            </div>
            <div className="iconsWrap">
              <span title="Completed / Not Completed">
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
          </div>
        );
      })}
    </>
  );
};

export default Read;
