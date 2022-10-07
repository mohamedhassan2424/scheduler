import React, { useState } from "react";


const useVisualMode = (initial) => {
    const [mode, setMode] = useState(initial)
    const [history, setHistory] = useState([initial]);

    const transition = (currentMode, replace = false) => {
        if (replace) {
            setMode(currentMode)
            let newHistoryArray = [...history]
            newHistoryArray.pop()
            newHistoryArray.push(currentMode)
            setHistory(newHistoryArray)
        } else {
            setMode(currentMode)
            let newHistoryArray = [...history, currentMode]
            setHistory(newHistoryArray)
        }

    }
    const back = () => {
        if (history.length >=2) {
            let newHistoryArray = [...history]
            newHistoryArray.pop()
            setHistory(newHistoryArray)
            setMode(newHistoryArray[newHistoryArray.length-1])
            //setHistory(prev=>prev-1)
        }
    }


    return { mode, transition, back };

}

export default useVisualMode;