import React, { useContext } from "react";
import { AppContext } from "./appContext";

function Recommendation() {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h3 className="text-1xl font-bold">
        The Recommendations Necessary for Assessment
      </h3>
      <ul className="list-disc pl-5">
        {state.recomendations.map((recomendation: any) => (
          <li key={recomendation}>{recomendation}</li>
        ))}
      </ul>
    </div>
  );
}
export default Recommendation;
