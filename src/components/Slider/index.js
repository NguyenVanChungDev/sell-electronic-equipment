import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./index.css";

export default function Slider() {
    return (
        <>
            <Container className="carousel mt-3 ">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block img1"
                            src="https://cdn.tgdd.vn/Products/Images/44/260045/asus-tuf-gaming-fx506hcb-i5-hn1138w-171121-030743-600x600.jpg"
                            alt="Asus TUF Gaming FX506HCB i5 11400H"
                        />
                        <Carousel.Caption>
                            <h3 className="xh3">
                                {" "}
                                Asus TUF Gaming FX506HCB i5 11400H{" "}
                            </h3>
                            <p>Giá chỉ từ: 6.990.000 đ </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img2"
                            src="https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-cream-1-600x600.jpg"
                            alt="Samsung Galaxy Z Flip3 5G"
                        />
                        <Carousel.Caption>
                            <h3> Samsung Galaxy Z Flip3 5G </h3>
                            <p>Giá chỉ từ: 6.990.000 đ </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img2"
                            src="https://cdn.tgdd.vn/Products/Images/42/251856/samsung-galaxy-a03-xanh-thumb-600x600.jpg"
                            alt="Samsung Galaxy A03"
                        />
                        <Carousel.Caption>
                            <h3> Samsung Galaxy A03 </h3>
                            <p>Giá chỉ từ: 6.990.000 đ </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img2"
                            src="https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-cream-1-600x600.jpg"
                            alt="Samsung Galaxy Z Flip3 5G"
                        />
                        <Carousel.Caption>
                            <h3> Samsung Galaxy Z Flip3 5G </h3>
                            <p>Giá chỉ từ: 6.990.000 đ </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img1"
                            src="https://cdn.tgdd.vn/Products/Images/44/260045/asus-tuf-gaming-fx506hcb-i5-hn1138w-171121-030743-600x600.jpg"
                            alt="Asus TUF Gaming FX506HCB i5 11400H"
                        />
                        <Carousel.Caption>
                            <h3 className="xh3">
                                {" "}
                                Asus TUF Gaming FX506HCB i5 11400H{" "}
                            </h3>
                            <p>Giá chỉ từ: 6.990.000 đ </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            {/* <LaptopPage /> */}
        </>
    );
}
