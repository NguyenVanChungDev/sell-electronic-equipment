import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailPhone(props) {
    const { phoneId } = useParams();
    const [dataPhoneItem, setDataPhoneItem] = useState({});
    useEffect(() => {
        if (Number(phoneId) < 17) {
            fetch(`https://json-server-shop.herokuapp.com/phones/${phoneId}`)
                .then((res) => res.json())
                .then((data) => setDataPhoneItem(data));
        } else {
            fetch(`https://json-server-shop.herokuapp.com/laptops/${phoneId}`)
                .then((res) => res.json())
                .then((data) => setDataPhoneItem(data));
        }
    }, [phoneId]);
    console.log("dataPhoneItem: ", dataPhoneItem);
    return (
        <Container style={{ marginTop: "20px" }}>
            <h4>Chi tiết sản phẩm: </h4>

            <Row>
                <Col sm={12} md={4} className="border ">
                    <img
                        src={dataPhoneItem.imgUrl}
                        alt={dataPhoneItem.phoneName}
                        style={{
                            width: "80%",
                            padding: "12px",
                            display: "block",
                            margin: "0 auto",
                        }}
                    />
                </Col>
                <Col sm={12} md={8} className="border detailInfo">
                    <p className="phoneName">
                        {dataPhoneItem.phoneName
                            ? dataPhoneItem.phoneName
                            : dataPhoneItem.laptopName}
                    </p>
                    <p className="phonePrice">
                        Giá chỉ từ: {dataPhoneItem.price} VNĐ
                    </p>
                    <Button className="btnPay"> Mua ngay </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailPhone;
