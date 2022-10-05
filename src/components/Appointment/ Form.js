import React from "react";
import InterviewerList from "components/InterviewerList"
import Button from "components/Button"
import { useState } from "react";
import "./styles.scss";
function  Form(props){
    const [student, setStudent] = useState(props.student || "");
    const [interviewer, setInterviewer] = useState(props.interviewer || null);

    /*const rest = () => {
        setStudent("") 
        setInterviewer(null).
    };
    
    const cancel = () => {
        props.onCancel 
        rest();
    } */
    const formFunction =(props)=>{

    }
    return (
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSumbit={formFunction}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value= {student}
        onChange = {(event)=> {
            setStudent(event.target.name)
        }}
      />
    </form>
    <InterviewerList 
    interviewers={props.interviewers}
    value= {interviewer}
    onChange = {setInterviewer}
      /* your code goes here */
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={props.onCancel}>Cancel</Button>
      <Button confirm onClick={props.onSave}>Save</Button>
    </section>
  </section>
</main>
    );
}

export default  Form;