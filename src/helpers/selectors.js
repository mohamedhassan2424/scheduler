/*function selectUserByName(state, name) {
    const filteredNames = state.users.filter(user => user.name === name);
    return filteredNames;
  }*/

function getAppointmentsForDay(state, day) {

    const sameDay = state.days.find(element => element.name === day)
    if (!sameDay) {
        return [];
    }

    const appotiments = sameDay.appointments.map((id) => {
        return state.appointments[id];
    })

    return appotiments;

}
//interview  is an object with student name and interviewer number
function getInterview(state, interview) {
    if(!interview){
        return null;
    }
    let interviewObject = state.interviewers[interview.interviewer]
    const interviewDataObject = {
        student:interview.student,
        interviewer:interviewObject
    }
    return interviewDataObject ;
}


module.exports = { getAppointmentsForDay, getInterview};