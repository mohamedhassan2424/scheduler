import React from "react";
import "./DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {

   
    const dayClass ="day-list__item"
    const dayListStyle = classNames(dayClass, {[dayClass +"--selected"]:props.selected,
    [dayClass+"--full"]:props.spots===0})
    const formatSpots = (spot)=>{
        if(spot === 1){
            return '1 spot'
        }
        return `${spot === 0 ? 'no' : spot} spots`
    }
    
    return (
      <li className={dayListStyle} data-testid="day" onClick={() => props.setDay(props.name)} selected={props.selected}>
        <h2 className="text--regular">{props.name}</h2>
        <h3 className="text--light">{formatSpots(props.spots)} remaining </h3>
      </li>
    );
  }