import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../api/authContext";
import { UserContext } from "../context/UserContext";

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );

      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        setUser(data);
        navigate("/");
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("Login error :", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="my-10 text-center text-2xl font-bold">로그인</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={id}
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
            className="block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3 mb-5"
          />
          <input
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3 mb-5"
          />
          <button
            type="submit"
            className="block w-full rounded-md py-3 bg-yellow-400 pl-3 mb-5"
          >
            로그인
          </button>
        </form>
        <div className="flex space-x-2 justify-center">
          <p>계정이 없으신가요? </p>
          <button
            onClick={() => navigate("/signup")}
            className="text-red-500 font-bold"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
