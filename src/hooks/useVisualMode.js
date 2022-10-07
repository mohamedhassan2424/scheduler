import React , {useState} from "react";


const useVisualMode = (initial) => {
    const [mode,setMode] = useState(initial)
    const [history, setHistory] = useState([initial]);

    const transition= (mode, replace = false) => {
        setMode(mode)
        setHistory(mode)
      }
  const back=() => { 
    history.pop()
    setHistory(history[history.length -1])
    //setHistory(prev=>prev-1)
  }
  

  return { mode, transition, back };
  
}

export default useVisualMode;