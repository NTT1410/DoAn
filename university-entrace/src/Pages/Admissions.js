import React, { useCallback, useEffect, useState } from "react";
import {} from "../assets/styles/pages/Admissions.scss";

const Admissions = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({ username: "" });
  const [url] = useState({
    url: new URL("http://localhost:8080/backend-university-entrance/api/users"),
  });

  const searchUserByName = (event) => {
    setParams({ username: event.target.value });
  };
  useEffect(() => {
    url.url.search = new URLSearchParams(params).toString();
    fetch(url.url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url, params]);

  return (
    <>
      <div className="App-intro">
        <h2>User List</h2>
        <div className="search container mt-3 mb-3">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter your user name..."
              value={params.username}
              onChange={searchUserByName}
              aria-label="Search"
            />
          </form>
        </div>

        <div className="">
          <table className="table-hover container table-bordered border-dark">
            <thead>
              <th>Avatar</th>
              <th>User Id</th>
              <th>User Name</th>
              <th>Password</th>
            </thead>
            {data.map((post) => {
              return (
                <tbody key={post.userId}>
                  <td>
                    <img src={post.avatar} alt={post.username}></img>
                  </td>
                  <td>{post.userId}</td>
                  <td>{post.username}</td>
                  <td>{post.password}</td>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Admissions;
