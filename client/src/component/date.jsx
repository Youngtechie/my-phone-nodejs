import { useEffect, useState } from "react";

export function PresentDate() {
  let date = new Date();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[date.getDay()];
  let dayM = date.getUTCDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  const [Pdate, setDate] = useState(date);

  useEffect(() => {
    let id = setInterval(() => {
      let newDate = new Date();
      setDate(newDate);
    }, 1000);

    return () => clearInterval(id);
  }, [Pdate]);

  return (
    <section className="date">
      <span>
        {day}, {month} {dayM}, {year}
      </span>
    </section>
  );
}
