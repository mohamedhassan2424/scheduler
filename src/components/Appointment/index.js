import React from "react";
import "components/Appointment/index";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETE";
  const CANCEL = "CANCEL";
  const EDIT = "EDIT"
  const ERROR_SAVE= "ERROR_SAVE"
  const ERROR_DELETE= "ERROR_DELETE"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  //console.log("props.interviewers", props.interviewers);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);

    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW);
    })
    .catch((error)=>{ 
      console.log(error)
      transition(ERROR_SAVE,true)
    });
  };

  const cancel = () => {
    transition(DELETING, true);
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
    .catch((error)=>{ 
      console.log(error)
      transition(ERROR_DELETE,true)
    });
  };

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CANCEL)}
          onEdit={()=> transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === CANCEL && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={cancel}
          onCancel={back}
        />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === EDIT && <Form  
      student={props.interview.student}
      interviewer={props.interview.interviewer.id}
      interviewers={props.interviewers}
      onCancel={back} 
      onSave={save}
      />}
       {mode === ERROR_SAVE && <Error message ="Could not save the appointment" onClose={back} />}
      {mode === ERROR_DELETE && <Error message ="Could not cancel the appointment" onClose={back} />}
    </article>
  );
}

export default Appointment;
