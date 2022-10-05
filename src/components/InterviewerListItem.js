import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";
function InterviewerListItem(props) {
   const constantClass = "interviewers__item"
   const classValue = classNames(constantClass, {"interviewers__item--selected":props.selected})
    console.log(classValue)
    const showingName = (props)=> {
        if(props.selected){
            return props.name
        }
    }

  return (
    <li className={classValue} onClick={props.setInterviewer}>
      <img
        className= "interviewers__item-image"  
        src={props.avatar}
        alt={props.name}
      />
      <h3>{showingName(props)}</h3>
    </li>
  );
}

export default InterviewerListItem;
