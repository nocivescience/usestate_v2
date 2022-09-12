import React, { useState } from "react";
function BasicUseCase(props) {
  const [arr, setArr] = useState([]);
  const [vector,setVector]=useState([]);
  const [count,setCount]=useState(['o'])
  const [conteo,setConteo]=useState(0)
  const [silaba,setSilaba]=useState([])
  return (
    <div>
      <button onClick={() => setArr(["pilla esto bebe"])}>change arr state</button>
      <button onClick={()=>setVector(['cayao lacra'])}>y ahora esto</button>
      <button onClick={()=>{setCount(count+'o')}}>click me</button>
      <button onClick={()=>{setConteo(conteo+1)}}>clickeame</button>
      <button onClick={()=>setSilaba(['le'])}>Pinche aca</button>
      <div>
        {arr?.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      <div>
        {vector?.map((item)=>{
          return <div>{item}</div>
        })}
      </div>
      <p>here is {count}</p>
      <p>ahora acá {conteo}</p>
      <div>
        {silaba?.map((sil)=>{
          return <h1>{sil}</h1>
        })}
      </div>
      <h2>hola: {props.nombre}</h2>
    </div>
  );
}
export default BasicUseCase;
