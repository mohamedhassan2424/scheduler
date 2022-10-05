import React from "react";
import "components/Appointment/index"
import "./styles.scss"
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
function Appointment(props) {
  const appointmentShowing = () =>{
    if(props.interview){
      return <Show student={props.interview.student} interviewer={props.interview.interviewer}/>
    }
    return <Empty id={props.id}/>
  }
  return <article className="appointment">
<Header time ={props.time}/>
{appointmentShowing()}
  </article>;
}

export default Appointment;
