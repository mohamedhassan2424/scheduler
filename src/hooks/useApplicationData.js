import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const useApplicationData = () => {
    const setDay = day => setState({ ...state, day });
    const [state, setState] = useState({
        day: "Monday",
        days: [],
        appointments: {},
        interviewers: {}
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
          setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
        });
      }, []);

      const updateSpots = (id,appotiments)=>{
        const appointmentDay = state.days.find(specficDay => specficDay.appointments.includes(id))
        let defaultSpots = appointmentDay.appointments.length
        const spotsRemainging = appointmentDay.appointments.map((appointmentId) =>{
            if(appotiments[appointmentId] && appotiments[appointmentId].interview){
                defaultSpots-=1;
                //{[...state.days,  ]}
            }
        })
        const newDays = state.days.map((day)=>{
            if(day.name === appointmentDay.name ){
                return {...day, spots:defaultSpots}
            }else{
                return {...day}
            }
           
        })
        return newDays;
        
      }

      const bookInterview = (id, interview) => {
        console.log(id, interview);
        const appointment = {
          ...state.appointments[id],
          interview: { ...interview }
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
        return axios.put(`/api/appointments/${id}`, { interview })
          .then(() => {
            setState({...state, appointments, days:updateSpots(id,appointments)});
          })
      }


      const cancelInterview = (id) => {
        const appointment = {
          ...state.appointments[id],
          interview: null
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment
        };
    
        return axios.delete(`/api/appointments/${id}`)
          .then(() => {
            setState({ ...state, appointments, days:updateSpots(id,appointments) });
          })
      }
return {setDay, state, bookInterview, cancelInterview }
};


export default useApplicationData;