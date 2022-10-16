import "../assets/styles/phonestyle.css";
import { Clock } from "./Clock";
import { PresentDate } from "./date";
import AppsContainer from "./AppsContainer";
import {  useState } from "react";
import AnalogClock from "./AnalogClock";

export function PhoneDesign() {
  const [isdark, setIsdark] = useState(false);
  const [bgcolor, setBgcolor] = useState("white");
  const [showTheme, setShowtheme] = useState("black");
  const [position, setPosition] = useState("0px");
  const [tooltip, setTooltip] = useState("Light mode");
  const [phonecolor, setPhonecolor] = useState("10px solid black");
  const [phoneup, setPhoneup] = useState("black");
  const [themeIcon, setThemeicon] = useState("/images/icons/day.png");
  const [isdisplay, setIsdisplay] = useState(false);

  const change = () => {

    if (!isdark) {
      setPosition("20px");
      setBgcolor("black");
      setShowtheme("white");
      setTooltip("Dark mode");
      setPhonecolor("10px solid blue");
      setThemeicon("/images/icons/night.png");
      setPhoneup("blue");
      setIsdark(true);
    } else if (isdark) {
      setPosition("0px");
      setBgcolor("white");
      setShowtheme("black");
      setTooltip("Light mode");
      setPhonecolor("10px solid black");
      setPhoneup("black");
      setThemeicon("/images/icons/day.png");
      setIsdark(false);
    }
  };

  const display = () => {
    let AnalogClock = document.querySelector(".clockFace");
    let AppsContainer = document.querySelector(".AppsContainer");
    let display = document.querySelector(".display");
    let show = document.querySelector(".showHidden");
    let back_icon = document.querySelector(".back_icon");

    if (!isdisplay) {
      AnalogClock.style.display = "none";
      AppsContainer.style.display = "flex";
      show.style.display = "none";
      back_icon.style.display = "block";
      display.style.cursor = "text";
      setIsdisplay(true);
    } else {
      AppsContainer.style.display = "none";
      AnalogClock.style.display = "flex";
      show.style.display = "flex";
      back_icon.style.display = "none";
      display.style.cursor = "pointer";
      setIsdisplay(false);
    }
  };

  return (
    <section
      className="phonedesign"
      style={{
        backgroundColor: `${bgcolor}`,
        color: `${showTheme}`,
        outline: `${phonecolor}`,
      }}
    >
      <section
        className="left"
        style={{ backgroundColor: `${phoneup}` }}
      ></section>

      <section className="circle"></section>
      <section
        className="right"
        style={{ backgroundColor: `${phoneup}` }}
      ></section>
      <section
        className="btnLike"
        onClick={() => {
          change();
        }}
        style={{ backgroundColor: `${bgcolor}` }}
        title={`${tooltip}`}
      >
        <section
          className="changeTheme"
          style={{ backgroundColor: `${showTheme}`, left: `${position}` }}
        >
          <img src={themeIcon} alt="daylight" />
        </section>
      </section>

      <section className="DateTime">
        <Clock />
        <PresentDate />
      </section>

      <AppsContainer />

      <AnalogClock />

      <section className="display" onClick={display}>
        <section
          className="back_icon"
          style={{ borderRight: `40px solid ${showTheme}` }}
          title={"Back"}
        ></section>
        <section className="showHidden">
          <section className="upSign">
            <section className="firstS" style={{backgroundColor: `${showTheme}`}}></section>
            <section className="secondS" style={{backgroundColor: `${showTheme}`}}></section>
          </section>
          <span>Click here to view my works.</span>
        </section>
      </section>
    </section>
  );
}