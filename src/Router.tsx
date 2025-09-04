import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";

const MainPage = lazy(() => import("./pages/mainPage/MainPage"));
const Error404 = lazy(() => import("./pages/Error404/Error404"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const Impressum = lazy(() => import("./pages/Impressum/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB/AGB"));
const Barrierefreiheit = lazy(() => import("./pages/Barrierefreiheit/Barrierefreiheit"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/Impressum" element={<Impressum />} />
            <Route path="/Datenschutz" element={<Datenschutz />} />
            <Route path="/AGB" element={<AGB />} />
            <Route path="/Barrierefreiheit" element={<Barrierefreiheit />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
