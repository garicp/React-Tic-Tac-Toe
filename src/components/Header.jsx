import React from "react";

const Header = ({ topicTitle }) => {
  const today = new Date();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const amPm = today.getHours() >= 12 ? "pm" : "am";

  const hour = today.getHours() % 12 || 12;

  const minutesNow = today.getMinutes();

  const minutes = minutesNow < 10 ? `0${minutesNow}` : minutesNow;

  const date = `${day[today.getDay()]}, ${today.getDate()} ${
    month[today.getMonth()]
  } ${today.getFullYear()} ${hour}:${minutes} ${amPm}`;

  return (
    <div className="header-container">
      <h1 className="header">{topicTitle}</h1>
      <p className="date">{date}</p>
    </div>
  );
};
export default Header;
