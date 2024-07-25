import {
  IonContent,
  IonPage,
} from "@ionic/react";
import "./Home.css";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
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
    "December",
  ];

  const day = dayNames[currentTime.getDay()];
  const daynum = currentTime.getDate();
  const month = monthNames[currentTime.getMonth()];
  const time = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
      <div className="container">
          <div className="display-time text-5xl text-red-500">{time}</div>
          <div className="display-date text-white">
            <span id="day">{day}</span>, <span id="daynum" className="font-sm">{daynum}</span>{" "}
            <span id="month">{month}</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
