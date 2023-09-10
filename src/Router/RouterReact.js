import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Search from "./Search";
import About from "./About";
const RouterReact = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about/*" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
)

export default RouterReact;
