/*function selectUserByName(state, name) {
    const filteredNames = state.users.filter(user => user.name === name);
    return filteredNames;
  }*/

export function getAppointmentsForDay(state, day) {

    const sameDay = state.days.find(element => element.name === day)
    if (!sameDay) {
        return [];
    }

    const appotiments = sameDay.appointments.map((id) => {
        return state.appointments[id];
    })

    return appotiments;

}