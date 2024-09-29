import { useEffect, useState } from "react";

function VariationThreeCleanup() {
  const [count, setCount] = useState<number>(0);

  function handleCountClick() {
    setCount(count + 1);
  }

  //Case 3 [State dependency array]: This use-effect setup and its cleanup function will run on 1st render and every time the elements of dependency array changes its value. So therefore this use-effect will trigger whenever there's a change in the elements of dependency array.
  useEffect(() => {
    console.log("variation three component mounted successfully");

    return () => {
      console.log("variation three component un-mounted successfully");
    };
  }, [count]);

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

export default VariationThreeCleanup;
