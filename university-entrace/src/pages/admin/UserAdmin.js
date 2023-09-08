import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Apis, { endpoints } from "../../configs/Apis";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ kw: "" });
  const [q] = useSearchParams();
  const [select, setSelect] = useState("username");
  const nav = useNavigate();

  useEffect(() => {
    const loadDpm = async () => {
      let selected = select;
      let e = endpoints["users"];
      let kw = q.get(selected);
      console.log(selected);
      if (kw !== null) {
        e = `${e}?${selected}=${kw}`;
      }
      console.log(kw);
      let res = await Apis.get(e);

      setUsers(res.data);
    };
    loadDpm();
  }, [q, select]);

  const search = (evt) => {
    evt.preventDefault();
    nav(`/useradmin?${select}=${params.kw}`);
  };

  return (
    <>
      <main className="main-container">
        <div className="d-flex">
          <Form.Select
            aria-label="Default select example"
            className="w-auto"
            onChange={(e) => setSelect(e.target.value)}
          >
            <option selected value="username">
              Name
            </option>
            <option value="userid">Id</option>
          </Form.Select>
          <Form onSubmit={search} inline className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search..."
              className=" mr-sm-2"
              onChange={(e) => setParams({ kw: e.target.value })}
            />
            <Button type="submit" className="ms-3">
              Submit
            </Button>
          </Form>
        </div>
        <div className="main-cards">
          {users.map((u) => {
            return (
              <Col className="mt-3">
                <Card style={{ width: "" }}>
                  <div className="text-center">
                    <Card.Img
                      style={{ width: "5rem" }}
                      variant="top"
                      src={u.avatar}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text>{u.firstName}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default UserAdmin;
