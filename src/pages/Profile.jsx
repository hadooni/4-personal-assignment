import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../api/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newNickname, setNewNickname] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/signin");
    } else {
      const fetchUserInfo = async () => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = await axios.get(
            "https://moneyfulpublicpolicy.co.kr/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserInfo(response.data);
        } catch (error) {
          console.error("Failed to fetch user info :", error);
        }
      };
      fetchUserInfo();
    }
  }, [isAuthenticated, navigate]);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await axios.patch(
        "https://moneyfulpublicpolicy.co.kr/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        setUserInfo((pervState) => ({
          ...pervState,
          nickname: response.data.nickname,
        }));
        alert("닉네임이 변경되었습니다.");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.error("Failed to update nickname :", error);
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-slate-100 p-6 rounded-2xl">
        <h1 className="my-5 text-center text-2xl font-bold">프로필 수정</h1>
        <form onSubmit={handleNicknameChange}>
          <h3 className="mb-3 ml-2">닉네임</h3>
          <input
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            placeholder={userInfo.nickname}
            className="block w-full rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-3 mb-5"
          />
          <button
            type="submit"
            className="block w-full rounded-md py-3 bg-yellow-400 pl-3 mb-5"
          >
            닉네임 변경
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
