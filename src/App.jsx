import { ToastContainer } from "react-toastify";
import Router from "./routes";
import { Suspense } from "react";
import AuthContextProvider from "./contexts/AuthContext";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContextProvider>
        <Router />
        <ToastContainer position="top-right" autoClose={2000} />
      </AuthContextProvider>
    </Suspense>
  );
}
