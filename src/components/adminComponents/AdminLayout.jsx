import React from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { BsPersonCheck } from "react-icons/bs";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.user);
  const { first_name, last_name } = user;
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            xs={3}
            className="vh-100 bg-info-subtle p-2 shadow position-fixed top-0 left-0"
          >
            <Stack className="h-100">
              <Card className="text-center fw-bold">
                <Card.Header>
                  <BsPersonCheck size={100} />
                </Card.Header>
                <Card.Body>{first_name + " " + last_name}</Card.Body>
              </Card>

              {/* Menu Items */}
              <Stack></Stack>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
