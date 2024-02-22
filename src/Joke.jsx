import { useEffect, useState } from "react";

export default function(){
    
    const [joke ,setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let getJoke =async ()=>{
        let res = await fetch(URL);
        let jsonRes =await res.json();
        // console.log(jsonRes);
        setJoke({setup :jsonRes.setup,
                 punchline : jsonRes.punchline})

    }
    useEffect(()=>{
        async function getFirstJoke(){
        let res = await fetch(URL);
        let jsonRes =await res.json();
        // console.log(jsonRes);
        setJoke({setup :jsonRes.setup,
                 punchline : jsonRes.punchline})
        }
        getFirstJoke();
      },[]);

    return(
      <div>
        <h4>Joke!</h4>
        <h6>{joke.setup}</h6>
        <h6>{joke.punchline}</h6>
        <button onClick={getJoke}>Get New Joke</button>
      </div>
    );
}