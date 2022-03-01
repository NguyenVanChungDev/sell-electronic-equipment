import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { laptopApi } from "../../../api/laptopApi";
import Skeleton from "../Skeleton/skeleton";
import { Link } from "react-router-dom";

export default function LaptopPage() {
    const [laptopData, setLaptopData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await laptopApi.getAll();
                setLaptopData(data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchApi();
    }, []);

    return (
        <Container className="mt-4">
            <h4 className="title"> Laptop nổi bật nhất </h4>

            {loading ? (
                <Skeleton />
            ) : (
                <Row className="rowPhone">
                    {laptopData.map((laptop) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="border mb-3 p-1"
                            key={laptop.id}
                        >
                            <Link
                                style={{ display: "block" }}
                                to={`${laptop.id}`}
                                key={laptop.id}
                                className="itemPhone"
                            >
                                <img
                                    src={laptop.imgUrl}
                                    style={{ width: "80%" }}
                                    className="img"
                                />
                                <p className="highlight">{laptop.laptopName}</p>
                                <p className="price">
                                    Giá chỉ từ: <b> {laptop.price} VNĐ</b>
                                </p>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}
