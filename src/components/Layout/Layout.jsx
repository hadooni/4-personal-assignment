import { useContext } from "react";
import { AuthContext } from "../../api/AuthContext";
import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <header className="bg-gray-800">
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
          <Link to="/" className="text-l text-white hover:text-yellow-400">
            홈
          </Link>
          {isAuthenticated ? <PrivateLayout /> : <PublicLayout />}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
