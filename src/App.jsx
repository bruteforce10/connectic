import About from "./components/About";

import Hero from "./components/Hero";
import JobsSlider from "./components/JobsSlider";
import "./App.scss";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { GlobalProvider } from "./context/GlobalContext";

import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LayoutDashboard from "./components/LayoutDashboard";
import DetailJob from "./components/DetailJob";
import TableJob from "./components/TableJob";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ChangePasPage from "./components/ChangePasPage";
import LoginRoute from "./components/LoginRoute";
import FormData from "./components/FormData";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Hero />
                  <About />
                  <JobsSlider />
                  <Testimonial />
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <LoginRoute>
                  <LayoutDashboard>
                    <Dashboard />
                  </LayoutDashboard>
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/:IdData"
              element={
                <LoginRoute>
                  <LayoutDashboard>
                    <DetailJob />
                  </LayoutDashboard>
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <LoginRoute>
                  <LayoutDashboard>
                    <TableJob />
                  </LayoutDashboard>
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <LoginRoute>
                  <LayoutDashboard>
                    <FormData />
                  </LayoutDashboard>
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/:IdData"
              element={
                <LoginRoute>
                  <LayoutDashboard>
                    <FormData />
                  </LayoutDashboard>
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/login"
              element={
                <Layout>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/register"
              element={
                <Layout>
                  <RegisterPage />
                </Layout>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <Layout>
                  <ChangePasPage />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
