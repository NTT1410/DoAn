import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Apis, { endpoints } from "../configs/Apis";
import MySpinner from "../components/MySpinner";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ username: "" });
  const [q] = useSearchParams();
  const nav = useNavigate();

  useEffect(() => {
    const loadDpm = async () => {
      let e = endpoints["users"];
      console.log(e);
      let kw = q.get("username");
      if (kw !== null) {
        e = `${e}?username=${kw}`;
      }
      console.log(kw);
      let res = await Apis.get(e);

      setUsers(res.data);
    };
    loadDpm();
  }, [q]);

  const search = (evt) => {
    evt.preventDefault();
    nav(`/useradmin?username=${params.username}`);
  };

  if (users.length === 0) return <MySpinner />;
  return (
    <>
      <Container className="App-intro mb-5">
        <h1 className="text-center mt-2 mb-2 text-uppercase">User List</h1>
        <Form onSubmit={search} inline className="mb-3">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search..."
                className=" mr-sm-2"
                onChange={(e) => setParams({ username: e.target.value })}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Row xl={5} sm={3}>
          {users.map((u) => {
            return (
              <Col className="mt-2">
                <Card>
                  <Card.Img variant="top" src={u.avatar} id="avatar-card" />
                  <Card.Body>
                    <Card.Title>{u.username}</Card.Title>
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
