import './assets/styles/App.css';
import "./assets/styles/slider.scss";
import Layout from './components/layout/Layout';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
