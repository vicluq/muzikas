import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SupplierLayout from "./components/SupplierLayout";
import LoginSuppliers from "./pages/LoginSuppliers/LoginSuppliers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<h1>Home Page</h1>}>
        {/* Home Layout related */}
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/product/:id" element={<h1>Product</h1>} />
        <Route path="/search" element={<h1>Search Listing</h1>} />
        <Route path="/supplier/login" element={<LoginSuppliers />}/>
      </Route>
      <Route
        path="/supplier"
        element={
          <ProtectedRoute shouldBeSupplier>
            <SupplierLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/supplier/dashboard" element={<h1>Dashboard Page</h1>}/>
      </Route>
    </Route>
  )
);

export default router;
