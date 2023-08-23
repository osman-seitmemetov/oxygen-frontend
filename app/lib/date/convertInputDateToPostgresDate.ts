export const convertInputDateToPostgresDate = (date: Date) => {
    let year = `${date.getFullYear()}`;
    let month = `${date.getMonth() + 1}`;
    let day = `${date.getDate()}`;
    let hours = `${date.getHours()}`;
    let minutes = `${date.getMinutes()}`;
    let seconds = `${date.getSeconds()}`;
    let milliseconds = `${date.getMilliseconds()}`;

    if(date.getFullYear() < 10) year = `000${date.getFullYear()}`;
    if(date.getFullYear() < 100 && date.getFullYear() > 10) year = `00${date.getFullYear()}`;
    if(date.getFullYear() < 1000 && date.getFullYear() > 100) year = `0${date.getFullYear()}`;
    if(date.getMonth() < 10) month = `0${date.getMonth() + 1}`;
    if(date.getDate() < 10) day = `0${date.getDate()}`;
    if(date.getHours() < 10) hours = `0${date.getHours()}`;
    if(date.getMinutes() < 10) minutes = `0${date.getMinutes()}`;
    if(date.getSeconds() < 10) seconds = `0${date.getSeconds()}`;
    if(date.getMilliseconds() < 10) milliseconds = `00${date.getMilliseconds()}`;
    if(date.getMilliseconds() < 100 && date.getMilliseconds() > 10) milliseconds = `0${date.getMilliseconds()}`;

    if(date) return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
}