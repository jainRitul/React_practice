import { useEffect, useState } from "react";

export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);
    let incCountx = ()=>{
        setCountx(currCount =>currCount+1);
    }
    let incCounty = ()=>{
        setCounty(currCount =>currCount+1);
    }
    useEffect(function printSomethin(){
        console.log("this is a side-effect");
    },[])
    return(
      <div>
          <h4>Count : {countx}</h4>
          <button onClick={incCountx}>+1</button>
          <h4>Count : {county}</h4>
          <button onClick={incCounty}>+1</button>
      </div>
    );
}