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
function getInterviewersForDay (state,day){
    const fulInterviewList = []
const sameDay = state.days.find(element => element.name === day)
//console.log("SAMEDAY",sameDay)
    if (!sameDay) {
        return [];
    }
    console.log("SAMEDAY",sameDay)
    sameDay.interviewers.forEach((id) => {
        if(state.interviewers[id]){
        fulInterviewList.push(state.interviewers[id])
        //state.interviewers[interviewValue]
        }
    })
    console.log("fulInterviewList",fulInterviewList)
    return fulInterviewList;
}


module.exports = { getAppointmentsForDay, getInterview, getInterviewersForDay };