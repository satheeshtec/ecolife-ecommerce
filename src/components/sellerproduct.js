import { Details } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image1 from "../img/thumb-1.jpg";
import "../components/style2.css";
function Sellerproduct() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem([
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-1.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-4.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-5_1.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-3_1.jpg",
        items: "(20 items)",
        shoppindtime: " shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-2.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
      {
        img:
          "https://blueskytechmage.com/ecolife/media/catalog/category/thumb-6.jpg",
        items: "(20 items)",
        shoppindtime: "shop now",
      },
    ]);
  }, []);
  return (
    <>
      {item.length > 0 && (
        <Container>
          <Row>
            {item.map((e, i) => {
              return (
                <Col sm={12} md={4}>
                  <span className="product_txp">
                    <div className="product_txh">
                      <img src={e.img} alt="productdetails" />
                    </div>
                    <div className="text_card">
                      <h3>fresh vegetables</h3>
                      <p>(20 items)</p>

                      <a>
                        <p className="circle_tx"> shop now</p>
                        <div className="circle_icon">
                          <ArrowRightIcon />
                        </div>
                      </a>
                    </div>
                  </span>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
}
export default Sellerproduct;