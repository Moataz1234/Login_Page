import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Loader from "./components/Loader";
import { useLoader } from "./store";
import ProfilePage from "./pages/Profile";
import ErrorPage from "./pages/404";
export default function App() {
  const { index } = useLoader();
  return (
    <div className="App">
      {/* {index ? <Loader /> : null} */}
      {index && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
