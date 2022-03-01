import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailLaptop(props) {
    const { laptopId } = useParams();
    const [dataLaptopItem, setDataLaptopItem] = useState({});
    useEffect(() => {
        fetch(`https://json-server-shop.herokuapp.com/laptops/${laptopId}`)
            .then((res) => res.json())
            .then((data) => setDataLaptopItem(data));
    }, [laptopId]);

    console.log(laptopId);
    return (
        <Container style={{ marginTop: "20px" }}>
            <h4>Chi tiết sản phẩm: </h4>

            <Row>
                <Col sm={12} md={4} className="border ">
                    <img
                        src={dataLaptopItem.imgUrl}
                        alt={dataLaptopItem.laptopName}
                        style={{
                            width: "80%",
                            padding: "12px",
                            display: "block",
                            margin: "0 auto",
                        }}
                    />
                </Col>
                <Col sm={12} md={8} className="border detailInfo">
                    <p className="phoneName">{dataLaptopItem.laptopName}</p>
                    <p className="phonePrice">
                        Giá chỉ từ: {dataLaptopItem.price} VNĐ
                    </p>
                    <Button className="btnPay"> Mua ngay </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailLaptop;
