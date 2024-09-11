import { useContext, useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import { description } from "../data/mbtiDescriptions";
import { UserContext } from "../context/UserContext";

const TestResultList = () => {
  const [testResult, setTestResult] = useState({});
  const { user } = useContext(UserContext);
  console.log("testResult :>> ", testResult);
  console.log("user :>> ", user);

  const getResult = async () => {
    const result = await getTestResults();

    setTestResult(
      result.map((item) => ({
        ...item,
        description: description[item.result],
      }))
    );
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div className="flex flex-col min-h-full items-center py-12">
      {testResult.length > 0 ? (
        testResult.map((obj) => {
          return (
            <div
              key={obj.id}
              className="bg-gray-800 text-white w-2/6 p-5 m-5 rounded-2xl"
            >
              <div className="flex justify-between">
                <p>{obj.nickname}</p>
                <p>{obj.date}</p>
              </div>
              <p className="text-yellow-400">{obj.result}</p>
              <p className="my-2">{obj.description?.title}</p>
              <p>{obj.description?.contents}</p>
            </div>
          );
        })
      ) : (
        <div>테스트 데이터가 없습니다.</div>
      )}
    </div>
  );
};

export default TestResultList;
