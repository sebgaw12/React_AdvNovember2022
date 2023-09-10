import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Bio from "./Bio";

const About = () => (
    <div>
        <h1>About</h1>

        <Routes>
            <Route path={`/contact`} element={<Contact />} />
            <Route path={`/bio`} element={<Bio />} />
        </Routes>
    </div>
)

export default About;
