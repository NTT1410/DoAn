import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import MySpinner from "../components/MySpinner";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const loadDpm = async () => {
      let res = await Apis.get(endpoints["departments"]);

      console.log(res.data);

      setDepartments(res.data);
    };
    loadDpm();
  }, []);

  if (departments.length === 0) return <MySpinner />;
  return (
    <>
      <div>
        <ListGroup>
          {departments.map((d) => {
            return (
              <ListGroup.Item key={d.departmentId} className="hover">
                {d.departmentname}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div id="q">
        <iframe
          src="https://quizizz.com/embed/quiz/64d6743504a4510008880a84"
          title="hoc tieng anh - Quizizz"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Departments;
