import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../api/AuthContext";

const PrivateLayout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return (
    <div className="flex space-x-4">
      <Link
        to="/profile"
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        프로필
      </Link>
      <Link
        to="/testpage"
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        테스트
      </Link>
      <Link
        to="/resultlist"
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        결과보기
      </Link>
      <button
        onClick={handleLogout}
        className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-medium"
      >
        로그아웃
      </button>
    </div>
  );
};

export default PrivateLayout;
4;
