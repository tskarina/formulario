import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormHome from "./Pages/FormHome/FormHome";
import TotalProducts from "./Pages/TotalProducts/TotalProducts";
import FormSent from "./Pages/FormSent/FormSent";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormHome />} />
          <Route path="/total/:formId" element={<TotalProducts />} />
          <Route path="/concluido" element={<FormSent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
