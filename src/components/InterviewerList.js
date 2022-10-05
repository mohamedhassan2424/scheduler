import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"



function InterviewerList(props) {
    const interviewersListItem = props.interviewers.map((object) =>{
        return(
        <InterviewerListItem 
            key ={object.id}
            name ={object.name}
            avatar ={object.avatar}
            selected={object.id === props.value}
            setInterviewer = {()=>props.onChange(object.id)}
        />
        );
    })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewersListItem}
      </ul>
    </section>
  );
}

export default InterviewerList;
