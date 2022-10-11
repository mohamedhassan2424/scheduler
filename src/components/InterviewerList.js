import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"
import PropTypes from 'prop-types';


function InterviewerList(props) {
    const interviewersListItem = props.interviewers.map((interviewObject) =>{
        return(
        <InterviewerListItem 
            key ={interviewObject.id}
            name ={interviewObject.name}
            avatar ={interviewObject.avatar}
            selected={interviewObject.id === props.value}
            setInterviewer = {()=>props.onChange(interviewObject.id)}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};
export default InterviewerList;
