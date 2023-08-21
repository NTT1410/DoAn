import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Apis, { endpoints } from "../configs/Apis";
import MySpinner from "../components/MySpinner";
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
      <Container className="mb-5">
        <h1 className="text-center mt-2 mb-2 text-uppercase">User List</h1>
        <h2>{select}</h2>
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
        <Row xl={5} sm={3} xs={1}>
          {users.map((u) => {
            return (
              <Col className="mt-2">
                <Card>
                  <Card.Img variant="top" src={u.avatar} id="avatar-card" />
                  <Card.Body>
                    <Card.Title>{u.name}</Card.Title>
                    <Card.Text>{u.password}</Card.Text>
                    <Button variant="primary">Update</Button>
                    <Button variant="danger" className="m-2">
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default UserAdmin;
