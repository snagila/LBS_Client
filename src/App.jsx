import { ToastContainer } from "react-toastify";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Routes>
        {/* auth route/ public route */}
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
