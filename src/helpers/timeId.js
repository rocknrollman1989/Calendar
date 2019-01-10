export const timeId = () => {
    let timerId = `${new Date().getMinutes()}-${new Date().getSeconds()}`;
     return timerId;
    };
