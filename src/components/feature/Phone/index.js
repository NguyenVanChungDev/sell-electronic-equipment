import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    // Button,
    Col,
    Container,
    Row,
    Card,
    Placeholder,
} from "react-bootstrap";
import { phoneApi } from "../../../api/phoneApi";
import "./index.css";
import Skeleton from "../Skeleton/skeleton";

export default function PhonePage() {
    const [phoneData, setPhoneData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await phoneApi.getAll();
                setPhoneData(data);
            } catch (error) {
                console.log("Failer: ", error);
            }
            setLoading(false);
        };
        fetchApi();
    }, []);
    console.log(phoneData);

    return (
        <Container className="mt-4">
            <h4 className="title">Điện thoại nổi bật nhất</h4>
            {loading ? (
                <Skeleton />
            ) : (
                <Row className="rowPhone">
                    {phoneData.map((phone) => (
                        <Col
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="border mb-3 p-1"
                        >
                            <Link
                                style={{ display: "block" }}
                                to={`${phone.id}`}
                                key={phone.id}
                                className="itemPhone"
                            >
                                <img
                                    src={phone.imgUrl}
                                    style={{ width: "80%" }}
                                    className="img"
                                />
                                <p className="highlight"> {phone.phoneName} </p>
                                <p className="price">
                                    Giá: <b> {phone.price} </b>
                                </p>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}
