import React from "react";
import {
    Form,
    Button,
    Container,
    Card,
    Placeholder,
    Row,
    Col,
} from "react-bootstrap";
import "./index.css";

export default function Register() {
    return (
        <Container className="regis">
            <h3 style={{ textAlign: "center", color: "blue" }}>
                Đăng ký thành viên
            </h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Fullname: </Form.Label>
                    <Form.Control type="text" placeholder="Text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    style={{
                        display: "block",
                        margin: "0 auto",
                        width: "100%",
                    }}
                >
                    Register
                </Button>
            </Form>
        </Container>
    );
}
