import { useEffect, useState } from "react";

const Clock = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let amRpm = "AM";
  const [time, setTime] = useState(date);

  if (hour > 12 && hour <= 24) {
    hour -= 12;
    amRpm = "PM";
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (hour === 0) {
    hour = 12;
  }

  useEffect(() => {
    let id = setInterval(() => {
      let newDate = new Date();
      setTime(newDate);
    }, 1000);

    return () => clearInterval(id);
  }, [time]);

  return (
    <section className="clock">
      <span>
        {hour}:{minute} {amRpm}
      </span>
    </section>
  );
};

export { Clock };
