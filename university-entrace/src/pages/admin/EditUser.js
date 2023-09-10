import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Apis, { endpoints } from "../../configs/Apis";

const EditUser = () => {
  const { userId } = useParams();
  const [user, setBanner] = useState(null);
  const [checked, setChecked] = useState(false);

  const enable = (evt) => {
    setChecked(!checked);
  };

  useEffect(() => {
    const loadDpm = async () => {
      if (userId !== undefined) {
        let e = endpoints["users"];
        e = `${e}?userid=${userId}`;
        let res = await Apis.get(e);
        setBanner(res.data[0]);
        setChecked(Boolean(res.data[0].active));
      }
    };
    loadDpm();
  }, [userId]);
  return (
    <>
      <main className="main-container sm">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              defaultValue={user ? user.username : ""}
            />
          </div>
          <div class="mb-3">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              defaultValue={user ? user.firstName : ""}
            />
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              defaultValue={user ? user.lastName : ""}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              defaultValue={user ? user.email : ""}
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="Phone"
              class="form-control"
              id="firstName"
              name="firstName"
              defaultValue={user ? user.phone : ""}
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="password"
              name="password"
              defaultValue={user ? user.password : ""}
            />
          </div>
          <div class="mb-3">
            <label for="avatar" class="form-label">
              Avatar
            </label>
            <input
              type="file"
              class="form-control"
              id="avatar"
              name="avatar"
              src={user ? user.avatar : ""}
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="active"
              name="active"
              onClick={enable}
              checked={checked}
            />
            <label class="form-check-label" for="status">
              Active
            </label>
          </div>
          <div>
            <Link to="/useradmin">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default EditUser;
