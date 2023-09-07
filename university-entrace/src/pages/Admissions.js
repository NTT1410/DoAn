import { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import { Card, Col, Row } from "react-bootstrap";
import MySpinner from "../components/MySpinner";

const Admissions = () => {

  const [admissions, setAdmissions] = useState(null);

  useEffect (() => {
    let loadAdmissions = async () => {
      let res = await Apis.get(endpoints["recruiments"]);

      console.log(res.data);

      setAdmissions(res.data);
    }
    loadAdmissions();
  }, []);


  if (admissions === null)
    return <MySpinner />

  return (
    <>
      <h1>Admissions</h1>
      <Row>
        {admissions.map(p => {
          // let url = `/products/${p.id}`;
          return <Col xs={12} md={3}>
            <Card>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.major} </Card.Text>
                <Card.Text>{p.socre} </Card.Text>
                {/* <Link to={url} className="btn btn-info" variant="primary">Xem chi tiết</Link> */}
              </Card.Body>
            </Card>
          </Col>

        })}

      </Row>
    </>
  );
};

export default Admissions;
