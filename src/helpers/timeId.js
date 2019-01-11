export const timeId = () => {
    let timerId = `${new Date().getMinutes()}-${new Date().getSeconds()}`;
     return timerId;
    };

export const timeIdYear = () => {
    let timerIdYear = `${new Date().getFullYear()}`;
        return timerIdYear;
    };
