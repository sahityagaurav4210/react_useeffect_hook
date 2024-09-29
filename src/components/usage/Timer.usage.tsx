import React, { useEffect, useState } from "react";

function Timer(): React.ReactNode {
  const [currentTime, setCurrentTime] = useState<number>(Date.now());

  useEffect(() => {
    const currentTimeHandler = setInterval(() => {
      console.log("updating time...");

      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(currentTimeHandler);
  }, []);

  return <p>Current Time is {new Date(currentTime).toLocaleString("hi-In")}</p>;
}

export default Timer;
