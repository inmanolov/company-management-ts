export const getEmployees = (teamasAndEmployees) => {
    const teams = teamasAndEmployees.reduce((teamObject, employee) => {
        (teamObject[employee.name] = teamObject[employee.name] || []).push([employee.username, employee.first_name, employee.last_name]);

        return teamObject;
    }, {});
    return [teams];
};