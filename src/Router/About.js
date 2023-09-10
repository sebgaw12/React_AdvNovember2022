import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Bio from "./Bio";

const About = () => (
    <div>
        <h1>About</h1>

        <Link to={`/about`}>About</Link> | 
        <Link to={`/about/contact`}>Contact</Link> | 
        <Link to={`/about/bio`}>Bio</Link>
        
         <Routes>
            <Route path={`/contact`} element={<Contact />} />
            <Route path={`/bio`} element={<Bio />} />
        </Routes>
    </div>
)

export default About;
