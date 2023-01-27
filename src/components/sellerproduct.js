import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../components/style2.css";

function Sellerproduct() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem([
      {
        img: "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-1.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img: "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-4.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img: "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-5_1.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img: "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-3_1.jpg",
        items: "(20 items)",
        shoppindtime: " shop now",
      },
      {
        img: "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-2.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img: "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-6.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
    ]);
  }, []);
  return (
    <>
      <Container>
        <div className=" full-featuredproduct">
          <div className=" rokan-featured-heading">
            {" "}
            <h3 className="product_heading"> featuredproduct</h3>
            <p class="description">Add hot products to weekly line up </p>
          </div>
        </div>
        {item.length > 0 && (
          <Row>
            {item.map((e, i) => {
              return (
                <Col sm={12} md={4} className="custumize_sellerproduct">
                  <span className="product_txp">
                    <div className="product_txh">
                      <img
                        src={e.img}
                        alt="productdetails"
                        className="product_txh"
                      />
                    </div>
                    <div className="text_card">
                      <h3>fresh vegetables</h3>
                      <p>(20 items)</p>

                      {/* <a href="#"> */}
                      <p className="circle_tx"> shop now</p>
                      <div className="circle_icon">
                        <ArrowRightIcon />
                      </div>
                      {/* </a> */}
                    </div>
                  </span>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
}
export default Sellerproduct;
