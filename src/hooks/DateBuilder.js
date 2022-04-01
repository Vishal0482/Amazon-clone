
const DateBuilder = () => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let d = new Date();

    let date = d.getDate();
    let month = months[d.getMonth()];

    d.setDate(10);
    let newDate = d.getDate();
    let newMonth = months[d.getMonth()];

    let dateString = `${month} ${date}`;
    let newDateString = `${newMonth} ${newDate}`;

    return {dateString, newDateString} ;
}

export default DateBuilder;