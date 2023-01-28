import React from "react";
import Product from "./pages/fresh";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import NotFound from "./pages/pagenotfound";
import AppBar from "./components/appBar";
import Footer from "./components/footer";
// react local css
import "./css/style.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <div>
          <Link to="/">Home</Link>
          <Link to="/home">Home</Link>
          <Link to="/product">product</Link>
        </div> */}
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sign_in" element={<Signin />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Carousel />  */}
      {/* <Breadcrumbs /> */}
      {/* <Product /> */}

      {/* <Header /> */}
    </React.Fragment>
  );
}

export default App;
