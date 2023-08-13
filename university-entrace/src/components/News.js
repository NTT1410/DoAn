import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import MySpinner from "./MySpinner";
import Moment from "react-moment";

const News = () => {
  let max = [];
  for (let i = 0; i < 3; i++) {
    max.push(i);
  }
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      let res = await Apis.get(endpoints["news"]);
      setNews(res.data);
    };
    loadNews();
  }, []);
  if (news.length === 0) return <MySpinner />;
  return (
    <>
      <Row className="mb-3">
        <Col md={2}>Advertisement</Col>
        <Col md={8}>
          <h3 className="">Related News</h3>
          {news.map((n) => {
            return (
              <Row className="mt-2" key={n.newId}>
                <Card className="p-2">
                  <Card.Header className="bg-info-subtle">
                    <Card.Title>{n.title}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{n.content}</Card.Text>
                    <Card.Text>
                      <Moment format="DD/MM/YYYY">{n.createdAt}</Moment>
                    </Card.Text>
                    <hr />
                    <div className="text-end">
                      <Button variant="success">See details</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            );
          })}
        </Col>
        <Col md={2}>Advertisement</Col>
      </Row>
    </>
  );
};

export default News;
