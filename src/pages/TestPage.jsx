import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Test = () => {
  const navigate = useNavigate();
  const [isTestDone, setIsTestDone] = useState(false);
  const [result, setResult] = useState({});

  const getUser = async () => {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get(
      "https://moneyfulpublicpolicy.co.kr/user",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const handleTestSubmit = async (answers) => {
    const user = await getUser();
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toLocaleString(),
      visibility: true,
    };
    setResult(resultData);
    await createTestResult(resultData);
    setIsTestDone(true);
  };

  return (
    <>
      {isTestDone === false ? (
        <div>
          <TestForm onSubmit={handleTestSubmit} />
        </div>
      ) : (
        <div>
          <div className="flex min-h-full justify-center px-6 py-12">
            <div className="sm:mx-auto ">
              <h1>
                {result.nickname}님의 테스트 결과 : {result.result}
              </h1>
              <button
                onClick={() => navigate("/resultlist")}
                className="block w-full rounded-md py-3 bg-yellow-400 pl-3 mb-5"
              >
                결과 페이지로 이동하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
