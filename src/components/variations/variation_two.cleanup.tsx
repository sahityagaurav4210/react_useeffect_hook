import { useEffect, useState } from "react";

function VariationTwoCleanup() {
  const [count, setCount] = useState<number>(0);

  function handleCountClick() {
    setCount(count + 1);
  }

  //Case 2 [No dependency array]: This use-effect setup and its cleanup function will run each time when component is mounted or un-mounted. So therefore this use-effect will trigger whenever there's a change in a component.
  useEffect(() => {
    console.log("variation two component mounted successfully");

    return () => {
      console.log("variation two component un-mounted successfully");
    };
  });

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

export default VariationTwoCleanup;
