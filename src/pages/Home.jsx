import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleGoTest = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate("/signin");
    } else {
      navigate("/testpage");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold sm:text-4xl text-center mt-14">
        무료 성격 테스트
      </h1>
      <p className="text-center mt-5">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.
      </p>
      <div className="my-10 flex justify-center">
        <div className="w-80 bg-yellow-300 mx-14 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">성격 유형 검사</h3>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="w-80 bg-yellow-300 mx-14 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">성격 유형 이해</h3>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="w-80 bg-yellow-300 mx-14 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">팀 평가</h3>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoTest}
          className="bg-gray-800 text-white rounded-3xl p-5 hover:bg-yellow-400 hover:text-black"
        >
          내 성격 알아보러 가기
        </button>
      </div>
    </div>
  );
};

export default Home;
