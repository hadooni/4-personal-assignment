import { Link } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Link
        to="/signin"
        className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-medium"
      >
        로그인
      </Link>
    </>
  );
};

export default PublicLayout;
