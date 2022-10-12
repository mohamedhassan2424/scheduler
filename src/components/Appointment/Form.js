import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import { useState } from "react";
import "./styles.scss";
function Form(props) {
    const [error, setError] = useState("");
    const [student, setStudent] = useState(props.student || "");
    const [interviewer, setInterviewer] = useState(props.interviewer || null);

    const reset = () => {
        setStudent("");
        setInterviewer(null);
        setError('');
    };

    const cancel = () => {
        reset();
        props.onCancel();
    };

    const onChange = (event) => {
        setStudent(event.target.value)
        
    }
 const validate = () =>{
    //console.log("HELLO WORLDDDD")
        if (student === "") {
          setError("Student name cannot be blank");
          return;
        }
        if (interviewer === null) {
            setError("Please select an interviewer");
            return;
        }
            setError("")
            props.onSave(student, interviewer);
        
        
      }

    return (
        <main className="appointment__card appointment__card--create">
            <section className="appointment__card-left">
                <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
                    <input
                        className="appointment__create-input text--semi-bold"
                        type="text"
                        placeholder="Enter Student Name"
                        value={student}
                        onChange= {onChange}
                        data-testid="student-name-input"
                    />
                </form>
                <section className="appointment__validation">
                {error}
                </section>
    
                <InterviewerList
                    interviewers={props.interviewers}
                    value={interviewer}
                    onChange={setInterviewer}
                /* your code goes here */
                />
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                    <Button danger onClick={cancel}>
                        Cancel
                    </Button>
                    <Button confirm onClick={()=>validate() }>
                        Save
                    </Button>
                </section>
            </section>
        </main>
    );
}

export default Form;
