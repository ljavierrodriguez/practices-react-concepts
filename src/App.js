import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import DarkModeContext from "./contexts/DarkModeContext";
import About from "./views/about";
import Home from "./views/home";
import NotFound from "./views/notfound";

import './App.css';
import injectAuthContext from "./contexts/UserContext";
import injectContext from "./store/appContext";

function App() {

  return (
    <>
        <DarkModeContext>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DarkModeContext>
    </>
  );
}

export default injectContext(injectAuthContext(App));
