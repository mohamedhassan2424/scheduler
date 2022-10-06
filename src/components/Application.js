import React from "react";
import { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import DayListItem from "./DayListItem";
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors"

export default function Application(props) {
  const setDay = day => setState({ ...state, day });
  //const setDays = days => setState(prev => ({ ...prev, days }));
  /*const [days, setDays] = useState([]);
  const [day, setDay] = useState("Monday");*/
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers : {}
  });
  

  useEffect(() => {
    /*axios.get("/api/days").then((response) => {
      console.log(response.data);
      setDays(response.data);
    });*/
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);
  const dailyAppointments = getAppointmentsForDay(state, state.day)
  const appointmentsArray = dailyAppointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={appointment.interview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentsArray}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
