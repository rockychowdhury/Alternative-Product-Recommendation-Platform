import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Bounce, ToastContainer } from "react-toastify";
import UIProvider from "./contexts/UIProvider";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Routes from './routes/Routes';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ToastContainer
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={true}
      pauseOnHover
      transition={Bounce}
    />
    <UIProvider>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </UIProvider>
  </StrictMode>
);
