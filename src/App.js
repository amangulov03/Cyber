import { Route, Routes } from "react-router-dom";
import { Header, Footer } from './components';
import { Home, Catalog, About, Contact, Cart } from "./pages";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
