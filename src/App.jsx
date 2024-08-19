import { ToastContainer } from "react-toastify";
import Router from "./routes";
import { Suspense } from "react";
import AuthContextProvider from "./contexts/AuthContext";
import PostContextProvider from "./contexts/PostContext";
import Spinner from "./components/Spinner";

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <PostContextProvider>
          <Router />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </PostContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}
