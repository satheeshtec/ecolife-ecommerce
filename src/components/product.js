import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useMedia } from "react-use";
import Offcontent from "../components/accordian";
import Offcanvas from "../components/offcanvas";
import "../css/style.css";
function Product() {
  const [productList, setProuductList] = useState([]);
  const [twoProduct, setTwoproduct] = useState(false);
  const [threeProduct, setThreeproduct] = useState(false);
  const [fourProduct, setFourproduct] = useState(true);
  useEffect(() => {
    setProuductList([
      {
        lable: "new",
        label_bg: "blue",
        product_name: "big tree farms",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        out_Of_Stock: "false",
      },
      {
        lable: "new",
        label_bg: "yellow",
        product_name: "cream-cremers",
        product_price: "$69.00",
        rating: 2,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/2/1/21_3.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        out_Of_Stock: "true",
      },
      {
        label_bg: "red",
        product_name: "mary's gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "false",
      },

      {
        label_bg: "blue",
        product_name: "365 everyday value",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "true",
      },
      {
        label_bg: "red",
        product_name: "greeen and blues",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "true",
      },
      {
        label_bg: "green",
        product_name: "butter margarine",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/8/18_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        heart: "1",
        out_Of_Stock: "false",
      },
      {
        lable: "new",
        product_name: "gone crackers",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        label_bg: "yellow",
        out_Of_Stock: "true",
      },
      {
        lable: "new",
        product_name: "cherry number on",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/0/10_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        catogery: "fresh vegetables",
        heart: "1",
        label_bg: "red",
        out_Of_Stock: "true",
      },
      {
        product_name: "organic newzealand",
        product_price: "$69.00",
        rating: 4,
        img_1:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/7/17_1_1.jpg",
        img_2:
          "https://blueskytechmage.com/ecolife/media/catalog/product/cache/aa113b67a170bed6206a590b0260c387/1/0/10_1_1.jpg",
        catogery: "fresh vegetables",
        lable: "new",
        label_bg: "red",
        heart: "0",
        out_Of_Stock: "false",
      },
    ]);
  }, []);
  const userScreenDevice = useMedia("(min-width: 992px)");
  const userScreenDeviceButton = useMedia("(min-width: 600px)");
  const FullButtonContent = useMedia("(min-width: 766px)");
  const userScreenFilter = useMedia("(max-width: 992px)");
  const captitalName = (e) => {
    // alert(e);
    const str = e;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
    return str2;
  };
  const handleshowtogrid = () => {
    setTwoproduct(true);
    setThreeproduct(false);
    setFourproduct(false);
  };
  const handleshowtofour = () => {
    setTwoproduct(false);
    setThreeproduct(true);
    setFourproduct(false);
  };
  const handleshowtofull = () => {
    setTwoproduct(false);
    setThreeproduct(false);
    setFourproduct(true);
  };
  return (
    <>
      <Container fluid>
        <div className="full_container">
          <Row>
            {userScreenDevice ? (
              <Col md={3} lg={3}>
                <Offcontent />
              </Col>
            ) : null}

            <Col xs={12} md={12} lg={9}>
              <div className="toolbar_products">
                {userScreenFilter ? <Offcanvas /> : null}
                <Col sm={4} md={5} lg={3}>
                  <p className="sorter-label ">
                    <label className="sorter_labeltext">sort by</label>
                    <select className="sorter-options ">
                      <option value="position">position</option>
                      <option value="position">position</option>
                      <option value="position">position</option>
                    </select>
                    <ArrowUpwardIcon />
                  </p>
                </Col>
                <Col sm={6} md={5} lg={6}>
                  {" "}
                  <div className="toolbar_product list_icon">
                    {FullButtonContent ? (
                      <div>
                        <Button
                          onClick={handleshowtogrid}
                          className={twoProduct === true ? "active_grid" : null}
                        >
                          <GridViewIcon />
                        </Button>
                        <Button
                          onClick={handleshowtofour}
                          className={
                            threeProduct === true ? "active_grid" : null
                          }
                        >
                          <DragIndicatorIcon />
                        </Button>
                      </div>
                    ) : null}
                    {userScreenDeviceButton ? (
                      <Button
                        onClick={handleshowtofull}
                        className={fourProduct === true ? "active_grid" : null}
                      >
                        <ViewModuleIcon />
                      </Button>
                    ) : null}
                  </div>
                </Col>
                {userScreenDevice ? (
                  <Col sm={3} md={2} lg={3}>
                    <div className="toolbar_amount">
                      no of producs: {productList.length}
                    </div>
                  </Col>
                ) : null}
              </div>

              {twoProduct === true && (
                <Row>
                  {productList.map((e, i) => {
                    return (
                      <Col xs={12} sm={6} md={6}>
                        <section className="product_bg twobg_grid">
                          <img
                            src={e.img_1}
                            alt="item_image"
                            className="item_image"
                          />
                          <img
                            src={e.img_2}
                            alt="item_image"
                            className="item_image1"
                          />
                          {e.lable !== (undefined || null) ? (
                            <Badge
                              bg={
                                e.label_bg === "blue"
                                  ? "primary"
                                  : e.label_bg === "yellow"
                                  ? "secondary"
                                  : e.label_bg === "red"
                                  ? "danger"
                                  : "warning"
                              }
                              className="item_badge"
                            >
                              new
                            </Badge>
                          ) : null}
                          {e.out_Of_Stock === "true" ? (
                            <Button variant="danger" className="ot_Stock">
                              out of stock
                            </Button>
                          ) : undefined}
                          {e.out_Of_Stock === "true" ? null : (
                            <span className="circle">
                              <SearchSharpIcon />
                            </span>
                          )}

                          <div className="item_text">
                            {/* {e.catogery.charAt(0).toUpperCase() + e.catogery.slice(1)} */}
                            <h4>{captitalName(e.catogery)}</h4>
                            <p>{e.product_name}</p>
                            <p className="star_icon">
                              <StarSharpIcon />
                              <StarSharpIcon />
                              <StarSharpIcon />
                              <StarSharpIcon />
                            </p>
                            <span className="price">$69.00</span>
                          </div>
                          <div className="overlay">
                            {e.out_Of_Stock === "true" ? null : (
                              <>
                                <div className="overlay_ho">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        add to cart
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      <div className="overlay_ho1">
                                        add to cart
                                      </div>
                                    </span>
                                  </OverlayTrigger>
                                </div>
                                <div className="overlay_ho">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        add to wishlist
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      {" "}
                                      {e.heart === 1 ? (
                                        <FavoriteIcon />
                                      ) : (
                                        <FavoriteBorderSharpIcon />
                                      )}
                                    </span>
                                  </OverlayTrigger>{" "}
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip
                                        id="tooltip-disabled"
                                        className="tooltipbottom"
                                      >
                                        add to compare
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      {" "}
                                      <CompareArrowsIcon />
                                    </span>
                                  </OverlayTrigger>
                                </div>
                              </>
                            )}
                          </div>
                        </section>
                      </Col>
                    );
                  })}
                </Row>
              )}

              {threeProduct === true && (
                <Row>
                  {productList.map((e, i) => {
                    return (
                      <Col sm={6} md={4}>
                        <section className="product_bg  threebg_grid">
                          <img
                            src={e.img_1}
                            alt="item_image"
                            className="item_image"
                          />
                          <img
                            src={e.img_2}
                            alt="item_image"
                            className="item_image1"
                          />
                          {e.lable !== (undefined || null) ? (
                            <Badge
                              bg={
                                e.label_bg === "blue"
                                  ? "primary"
                                  : e.label_bg === "yellow"
                                  ? "secondary"
                                  : e.label_bg === "red"
                                  ? "danger"
                                  : "warning"
                              }
                              className="item_badge"
                            >
                              new
                            </Badge>
                          ) : null}
                          {e.out_Of_Stock === "true" ? (
                            <Button variant="danger" className="ot_Stock">
                              out of stock
                            </Button>
                          ) : undefined}
                          {e.out_Of_Stock === "true" ? null : (
                            <span className="circle">
                              <SearchSharpIcon />
                            </span>
                          )}

                          <div className="item_text">
                            {/* {e.catogery.charAt(0).toUpperCase() + e.catogery.slice(1)} */}
                            <h4>{captitalName(e.catogery)}</h4>
                            <p>{captitalName(e.catogery)}</p>
                            <p className="star_icon">
                              <StarSharpIcon />
                              <StarSharpIcon />
                              <StarSharpIcon />
                              <StarSharpIcon />
                            </p>
                            <span className="price">$69.00</span>
                          </div>
                          <div className="overlay">
                            {e.out_Of_Stock === "true" ? null : (
                              <>
                                <div className="overlay_ho">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        add to cart
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      <div className="overlay_ho1">
                                        add to cart
                                      </div>
                                    </span>
                                  </OverlayTrigger>
                                </div>
                                <div className="overlay_ho">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        add to wishlist
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      {" "}
                                      {e.heart === 1 ? (
                                        <FavoriteIcon />
                                      ) : (
                                        <FavoriteBorderSharpIcon />
                                      )}
                                    </span>
                                  </OverlayTrigger>{" "}
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip
                                        id="tooltip-disabled"
                                        className="tooltipbottom"
                                      >
                                        add to compare
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      {" "}
                                      <CompareArrowsIcon />
                                    </span>
                                  </OverlayTrigger>
                                </div>
                              </>
                            )}
                          </div>
                        </section>
                      </Col>
                    );
                  })}
                </Row>
              )}
              {fourProduct === true && (
                <Row>
                  {productList.map((e, i) => {
                    return (
                      <Col xs={12} sm={4} md={3} lg={3}>
                        <section className="product_bg  fourbg_grid">
                          <img
                            src={e.img_1}
                            alt="item_image"
                            className="item_image"
                          />
                          <img
                            src={e.img_2}
                            alt="item_image"
                            className="item_image1"
                          />
                          {e.lable !== (undefined || null) ? (
                            <Badge
                              bg={
                                e.label_bg === "blue"
                                  ? "primary"
                                  : e.label_bg === "yellow"
                                  ? "secondary"
                                  : e.label_bg === "red"
                                  ? "danger"
                                  : "warning"
                              }
                              className="item_badge"
                            >
                              new
                            </Badge>
                          ) : null}
                          {e.out_Of_Stock === "true" ? (
                            <Button variant="danger" className="ot_Stock">
                              out of stock
                            </Button>
                          ) : undefined}
                          {e.out_Of_Stock === "true" ? null : (
                            <span className="circle">
                              <SearchSharpIcon />
                            </span>
                          )}

                          <div className="item_text">
                            {/* {e.catogery.charAt(0).toUpperCase() + e.catogery.slice(1)} */}
                            <h4>{captitalName(e.catogery)}</h4>
                            <p>{e.product_name}</p>
                            <p className="star_icon">
                              <StarSharpIcon />
                              <StarSharpIcon />
                              <StarSharpIcon />
                              <StarSharpIcon />
                            </p>
                            <span className="price">$69.00</span>
                          </div>
                          <div className="overlay">
                            {e.out_Of_Stock === "true" ? null : (
                              <>
                                <div className="overlay_ho">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        add to cart
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      <div className="overlay_ho1">
                                        add to cart
                                      </div>
                                    </span>
                                  </OverlayTrigger>
                                </div>
                                <div className="overlay_ho">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        add to wishlist
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      {" "}
                                      {e.heart === 1 ? (
                                        <FavoriteIcon />
                                      ) : (
                                        <FavoriteBorderSharpIcon />
                                      )}
                                    </span>
                                  </OverlayTrigger>{" "}
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip
                                        id="tooltip-disabled"
                                        className="tooltipbottom"
                                      >
                                        add to compare
                                      </Tooltip>
                                    }
                                  >
                                    <span className="d-inline-block">
                                      {" "}
                                      <CompareArrowsIcon />
                                    </span>
                                  </OverlayTrigger>
                                </div>
                              </>
                            )}
                          </div>
                        </section>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Product;
