import React from "react";
import DayListItem from "./DayListItem";
function DayList(props){

    const listedItems = props.days.map((object)=>{
        return (<DayListItem 
            key={object.id}
            name={object.name} 
            spots={object.spots} 
            selected={object.name === props.value}
            setDay={props.onChange} 
/>
        );
    })
    return(
<ul>
    {listedItems}  
    </ul>

    );
}

export default DayList;