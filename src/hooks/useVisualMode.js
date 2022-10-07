import React , {useState}from "react";


const useVisualMode = () => {
    const [mode,setMode] = useState(0)

    const modeFunction = ()=>{
        setMode(prev => prev+1)
    }
    return {
        mode, modeFunction
    }
}