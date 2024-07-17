import { ToastContainer } from "react-toastify";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AdminPrivateRoute from "./components/adminComponents/AdminPrivateRoute";
import AdminLayout from "./components/adminComponents/AdminLayout";
import BooksPage from "./components/adminComponents/BooksPage";

function App() {
  return (
    <>
      <Routes>
        {/* auth route/ public route */}
        <Route path="/auth" element={<AuthPage />} />

        {/* ADMIN ROUTES => private routes */}
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminLayout />
            </AdminPrivateRoute>
          }
        >
          <Route path="books" element={<BooksPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
