import { useEffect, useState } from "react";

function VariationOneCleanup() {
  const [count, setCount] = useState<number>(0);

  function handleCountClick() {
    setCount(count + 1);
  }

  //Case 1 [Empty dependency array]: This use-effect setup and its cleanup function will run only when component is mounted or un-mounted for the first time. So therefore, we can also call it as a component level use-effect.
  useEffect(() => {
    console.log("variation one component mounted successfully");

    return () => {
      console.log("variation one component un-mounted successfully");
    };
  }, []);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={handleCountClick} style={{ padding: "0.50rem" }}>
                Increment Count
              </button>
            </td>
            <td>
              <h1>Count is {count}</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default VariationOneCleanup;
