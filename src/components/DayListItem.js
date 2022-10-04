import React from "react";
import "./DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
    const dayClass ="day-list__item"
    const dayListStyle = classNames(dayClass, {[dayClass +"--selected"]:props.selected,
    [dayClass+"--full"]:props.spots===0})
    return (
      <li className={dayListStyle} onClick={() => props.setDay(props.name)}>
        <h2 className="text--regular">{props.name}</h2>
        <h3 className="text--light">{props.spots} spots remaining</h3>
      </li>
    );
  }