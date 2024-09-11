import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import Layout from "../components/Layout/Layout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import TestResultList from "../pages/TestResultList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route element={<PublicRoute />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/testpage" element={<TestPage />} />
            <Route path="/resultlist" element={<TestResultList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
