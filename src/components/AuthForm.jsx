import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id: formData.id,
          password: formData.password,
          nickname: formData.nickname,
        }
      );
      const data = response.data;

      if (data.success) {
        navigate("/signin");
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 에러 :", error);
      alert("회원가입 실패");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="my-10 text-center text-2xl font-bold">회원가입</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="id"
            type="text"
            placeholder="아이디"
            value={formData.id}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3 mb-5"
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3 mb-5"
          />
          <input
            name="nickname"
            type="text"
            placeholder="닉네임"
            value={formData.nickname}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3 mb-5"
          />
          <button
            type="submit"
            className="block w-full rounded-md py-3 bg-yellow-400 pl-3 mb-5"
          >
            회원가입
          </button>
        </form>
        <div className="flex space-x-2 justify-center">
          <p>이미 계정이 있으신가요?</p>
          <button
            onClick={() => navigate("/signin")}
            className="text-red-500 font-bold"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
