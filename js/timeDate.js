document.addEventListener('DOMContentLoaded', () => {
    TimeDate.init();
});

class TimeDate {
    static init() {
        TimeDate.setEvents();

    }

    static setEvents() {
        setInterval(TimeDate.updateTime);
    }

    static updateTime() {
        let timeDate = document.querySelector('.timeDate .time');

        if (timeDate) {
            let date = new Date();

            let hour = date.getHours();
            let minute = date.getMinutes();

            hour = TimeDate.format(hour);
            minute = TimeDate.format(minute);

            timeDate.innerHTML = `${hour}:${minute}`;


        }
    }


    static format(number) {
        if (number < 10) {
            return '0' + number;
        }

        return number;
    }
}