import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Create from "./pages/Create";
import Update from "./pages/Update";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/update-user/:id" element={<Update />} />
          <Route path="/create-user" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
