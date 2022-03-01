import React from "react";
import { Placeholder, Card, Col, Row, Container } from "react-bootstrap";

function Skeleton(props) {
    return (
        <Container>
            <div className="regis">
                <Row>
                    {Array.from(new Array(8)).map((index) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="border mb-3 p-1 d-flex justify-content-center"
                        >
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://tangthienlac.vn/uploads/images/products/big/ae68ef6744a3a39be87d1236c7241ef9.jpg"
                                    style={{ width: "220px", height: "150px" }}
                                />
                                <Card.Body>
                                    <Placeholder
                                        as={Card.Title}
                                        animation="glow"
                                    >
                                        <Placeholder xs={12} />
                                    </Placeholder>
                                    <Placeholder
                                        as={Card.Title}
                                        animation="glow"
                                    >
                                        <Placeholder
                                            xs={8}
                                            className="text-center"
                                        />
                                    </Placeholder>
                                    <Placeholder.Button
                                        variant="secondary"
                                        xs={6}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Skeleton;
