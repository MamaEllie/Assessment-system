import React, { useContext } from "react";
import { AppContext } from "./appContext";

function Recommendation() {
  const { state } = useContext(AppContext);
  return (
    <div>
      {state.recomendations.length > 0 ? (
        <div>
          <h3 className=" text-2xl font-bold mb-5">
            Based on your previous assessment score
            <span className=" text-red-600 ml-2">{state.score}%</span>
          </h3>
          <h3 className="text-1xl font-bold">
            The Recommendations Necessary for Assessment
          </h3>
          <ul className="list-disc pl-5">
            {state.recomendations.map((recomendation: any) => (
              <li key={recomendation} className="mt-4">
                {recomendation}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1 className="text-1xl font-bold">Recomendations will appear after you take an assessment</h1>
      )}
    </div>
  );
}
export default Recommendation;
