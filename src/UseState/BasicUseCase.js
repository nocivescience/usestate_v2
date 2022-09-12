import React, { useEffect, useState } from "react";
function BasicUseCase(props) {
  const [arr, setArr] = useState([]);
  const [vector,setVector]=useState([]);
  return (
    <div>
      <button onClick={() => setArr(["pilla esto bebe"])}>change arr state</button>
      <button onClick={()=>setVector(['cayao lacra'])}></button>
      <div>
        {arr?.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <h2>hola: {props.nombre}</h2>
    </div>
  );
}
export default BasicUseCase;
