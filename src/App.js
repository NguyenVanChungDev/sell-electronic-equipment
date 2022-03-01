import { Route, Routes } from "react-router-dom";
import LaptopPage from "./components/feature/Laptop";
import DetailLaptop from "./components/feature/Laptop/DetailLaptop";
import Login from "./components/feature/Login";
import PhonePage from "./components/feature/Phone";
import DetailPhone from "./components/feature/Phone/DetailPhone";
import Register from "./components/feature/Register";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/homepage/HomePage";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="phone" element={<PhonePage />} />
                <Route path="phone/:phoneId" element={<DetailPhone />} />
                <Route path="/:phoneId" element={<DetailPhone />} />

                <Route path="laptop" element={<LaptopPage />} />
                <Route path="laptop/:laptopId" element={<DetailLaptop />} />

                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<HomePage />}>
                    <Route path=":laptopId" element={<DetailLaptop />} />
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
