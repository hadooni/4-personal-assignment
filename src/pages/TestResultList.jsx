import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";

const TestResultList = () => {
  const [testResult, setTestResult] = useState({});

  useEffect(() => {
    const getResult = async () => {
      const result = await getTestResults();
      setTestResult(result);
    };
    getResult();
  }, []);
  console.log("testResult :>> ", testResult);

  if (testResult.length === 0) {
    return <div>테스트 데이터가 없습니다.</div>;
  }

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
