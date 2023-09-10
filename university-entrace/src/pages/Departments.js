import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import MySpinner from "../components/MySpinner";

const Departments = () => {

  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    let loadDpm = async () => {
      let res = await Apis.get(endpoints["departments"]);

      // console.log(res.data);

      setDepartments(res.data);
    }
    loadDpm();
  }, []);


  if (departments === null)
    return <MySpinner />

  // if (departments.length === 0) return <MySpinner />;


  return (
    <>
      <div>
        <ListGroup>
          {departments.map((d) => {
            return (
              <ListGroup.Item key={d.departmentId} className="hover">
                {d.name}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      
    </>
  );
};

export default Departments;
