import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserAdmin = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({ username: "", userId: "" });
  const [selectedOption, setSelectedOption] = useState("username");
  const [test, setTest] = useState("");
  const [url] = useState({
    url: new URL("http://localhost:8080/backend-university-entrance/api/users"),
  });

  const searchUserByName = (event) => {
    setParams({ [selectedOption]: event.target.value });
  };
  const searchSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlClick = () => {
    setTest("test");
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
        <h1>{test}</h1>
        <h1 className="text-center mt-2 mb-2">User List</h1>
        <div className="search container mt-3 mb-3">
          <form class="d-flex">
            <select
              id="s"
              onChange={searchSelect}
              value={selectedOption}
              class="form-select w-auto"
            >
              <option selected value="username">
                Name
              </option>
              <option value="userid">Id</option>
            </select>
            <input
              class="form-control me-2 w-auto"
              type="search"
              placeholder="Enter your user name..."
              value={params.username}
              onChange={searchUserByName}
              aria-label="Search"
            />
          </form>
        </div>

        <div className="">
          <table className="container table-bordered text-center">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Password</th>
                <th colSpan={2}>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((post) => {
                return (
                  <tr key={post.userId}>
                    <td>
                      <img src={post.avatar} alt={post.username}></img>
                    </td>
                    <td>{post.userId}</td>
                    <td>{post.username}</td>
                    <td>{post.password}</td>
                    <td className="text-lg-center">
                      <button
                        type="button"
                        class="btn btn-info btn-primary w-auto"
                      >
                        Update
                      </button>
                    </td>
                    <td className="text-lg-center">
                      <button
                        onClick={handlClick}
                        type="button"
                        class="btn btn-danger btn-primary w-auto"
                      >
                        <Link className="text-decoration-none" to=".">
                          Delete
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
