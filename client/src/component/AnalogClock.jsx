import { useEffect, useState } from "react";

const AnalogClock = () => {
  const [date, setDate] = useState(new Date());
  let hournow = date.getHours();
  let minutenow = date.getMinutes();
  let secsnow = date.getSeconds();
  const [hour, setHour] = useState((hournow / 12) * 360 - 90);
  const [minute, setMinute] = useState((minutenow / 60) * 360 - 90);
  const [secs, setSecs] = useState((secsnow / 60) * 360 - 90);

  
  if (hournow > 12 && hournow <= 24) {
    hournow -= 12;
  }
  
  if (secsnow < 10) {
    secsnow = "0" + secsnow;
  }

  useEffect(() => {
    let id = setInterval(() => {
      let newDate = new Date();
      setDate(newDate);
    }, 1000);

    setHour((hournow / 12) * 360 - 90);
    setMinute((minutenow / 60) * 360 - 90);
    setSecs((secsnow / 60) * 360 - 90);
    return () => clearInterval(id);
  }, [hournow, minutenow, secsnow]);

  return (
    <section className="clockFace">
      <section className="centerPoint">
        <section
          className="minuteHand"
          style={{ transform: `rotate(${minute}deg)` }}
        >
          <section className="indicator" id="hourInd"></section>
        </section>
        <section
          className="hourHand"
          style={{ transform: `rotate(${hour}deg)` }}
        >
          <section className="indicator" id="minutesInd"></section>
        </section>
        <section
          className="secsHand"
          style={{ transform: `rotate(${secs}deg)` }}
        >
            <span className="secs" style={{transform: `rotate(${360 - secs}deg)`}}>
            {secsnow} </span>
          <section className="indicator" id="secsInd"></section>
        </section>
      </section>
    </section>
  );
};

export default AnalogClock;
