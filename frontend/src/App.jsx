import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./routes/SignIn";
import Root from "./routes/Root";
import Protected from "./routes/Protected";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
