import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from './layout/MainLayout';
import Add from './pages/Add';
import Basket from './pages/Basket';
import Details from './pages/Details';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import AdminLayout from "./layout/AdminLayout";
import {HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <>
      <HelmetProvider>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="/admin/add" element={<Add />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
