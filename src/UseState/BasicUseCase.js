import React, { useEffect, useState } from "react";
function BasicUseCase() {
  const [arr, setArr] = useState([]);
  const [vector,setVector]=useState([])
  return (
    <div>
      <button onClick={() => setArr(["pilla esto bebe"])}>change arr state</button>
      <div>
        {arr?.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}
export default BasicUseCase;
