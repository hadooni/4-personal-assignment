import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { description } from "../data/mbtiDescriptions";

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
      description: description[result],
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
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800 text-white p-4 rounded-2xl">
            <h1 className="mb-4">
              {result.nickname}님의 테스트 결과 :{" "}
              <span className="text-yellow-400">{result.result}</span>
            </h1>
            <p className="mb-4">{result.description.title}</p>
            <p>{result.description.contents}</p>
            <button
              onClick={() => navigate("/resultlist")}
              className="block w-full rounded-md py-3 bg-yellow-400 pl-3 text-black mt-6 mb-2"
            >
              결과 페이지로 이동하기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Test;
