import { Header } from "./comonents /Header";
import Footer from "./comonents /Footer";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
