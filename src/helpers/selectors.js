/*function selectUserByName(state, name) {
    const filteredNames = state.users.filter(user => user.name === name);
    return filteredNames;
  }*/

export function getAppointmentsForDay(state, day) {

    const sameDay = state.days.find(element => element.name === day)
    if (!sameDay) {
        return [];
    }

    return sameDay.appointments.map((id) => state.appointments[id]);

 

}