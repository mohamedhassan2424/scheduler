import React from "react";
import "components/Appointment/index"
import "./styles.scss"
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./ Form"
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING"
  const DELETE ="DELETE"
  const CANCEL = "CANCEL"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
console.log("props.interviewers",props.interviewers)

const save= (name, interviewer) =>{
  const interview = {
    student: name,
    interviewer
  };
  transition(SAVING)
  
  props.bookInterview(props.id, interview)
  .then(()=>{
    
    transition(SHOW)
  })
  
  const cancelingPageLoading = () =>{
    transition(CANCEL)
  }
}

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty  onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={cancelingPageLoading}
        />)}
    {mode === CREATE && < Form interviewers={props.interviewers} onCancel={back} onSave={save} />}
    {mode === SAVING && <Status />}
    {mode === CANCEL && }
    </article>
  );
}

export default Appointment;
