import { useState } from "react";
import VariationOneCleanup from "./components/variations/variation_one.cleanup";
import VariationTwoCleanup from "./components/variations/variation_two.cleanup";
import VariationThreeCleanup from "./components/variations/variation_three.cleanup";
import Timer from "./components/usage/Timer.usage";
import Api from "./components/usage/Api.usage";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isV2CleanupVisible, setIsV2CleanupVisible] = useState<boolean>(false);
  const [isV3CleanupVisible, setIsV3CleanupVisible] = useState<boolean>(false);
  const [isCurrentTimeVisible, setIsCurrentTimeVisible] =
    useState<boolean>(false);
  const [isNwCallVisible, setIsNwCallVisible] = useState<boolean>(false);

  return (
    <>
      <h1>React use-effect hook.</h1>
      <p>Case I: Hook and its cleanup function usage </p>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td>
              <button
                onClick={() => setIsVisible((previous) => !previous)}
                style={{ padding: "0.50rem" }}
              >
                {!isVisible
                  ? "Show variation one cleanup component"
                  : "Hide variation one cleanup component"}
              </button>
            </td>

            <td>
              <button
                onClick={() => setIsV2CleanupVisible((previous) => !previous)}
                style={{ padding: "0.50rem" }}
              >
                {!isV2CleanupVisible
                  ? "Show variation two cleanup component"
                  : "Hide variation two cleanup component"}
              </button>
            </td>

            <td>
              <button
                onClick={() => setIsV3CleanupVisible((previous) => !previous)}
                style={{ padding: "0.50rem" }}
              >
                {!isV3CleanupVisible
                  ? "Show variation three cleanup component"
                  : "Hide variation three cleanup component"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p>Case II: A timer example</p>
      <button
        onClick={() => setIsCurrentTimeVisible((previous) => !previous)}
        style={{ padding: "0.50rem" }}
      >
        Show current time
      </button>

      <p>Case III: A network call</p>
      <button
        onClick={() => setIsNwCallVisible((previous) => !previous)}
        style={{ padding: "0.50rem" }}
      >
        Show n/w call
      </button>

      {isVisible && <VariationOneCleanup />}
      {isV2CleanupVisible && <VariationTwoCleanup />}
      {isV3CleanupVisible && <VariationThreeCleanup />}
      {isCurrentTimeVisible && <Timer />}
      {isNwCallVisible && <Api />}
    </>
  );
}

export default App;
