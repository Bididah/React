import { Header } from "./comonents /Header";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./comonents /Footer";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import { Routes } from "react-router";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:_id" element={<ProductScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
