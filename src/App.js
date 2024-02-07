import Lottie from "lottie-react";
import lot1 from "./images/lot1.json";
import lot2 from "./images/lot2.json";
import lot3 from "./images/lot3.json";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [yes, setYes] = useState(false);

  let response = [
    "No",
    "Are you sure?",
    "Really sure about that?",
    "Pick again",
    "Now you are breaking my heart",
  ];
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col items-center">
        {yes ? (
          <>
            <Lottie animationData={lot2} className="w-[200px] -mt-[100px]" />
            <Lottie animationData={lot3} loop={true} className="w-[200px]" />
            <h1 className="text-3xl font ">YAY!!</h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl text-center">To my World Class Designer</h1>
            <Lottie animationData={lot1} loop={true} className="w-[200px]" />
            <h1 className="text-3xl text-center">Will you be my Valentine?</h1>

            <div className="flex gap-3 mt-10">
              <button
                className={`px-[100px] py-3 bg-[#8adb9d] text-[#fff] font-[700] `}
                onClick={() => setYes(!yes)}
              >
                Yes
              </button>
              <button
                className="px-5 py-3 bg-[#ff9eb0] text-[#fff] font-[700]
          
          "
                onClick={() => {
                  if (count < 4) {
                    setCount(count + 1);
                  }
                }}
              >
                {response[count]}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
