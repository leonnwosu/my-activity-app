import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';


<<<<<<< HEAD
const Home: React.FC = () => {
    return (
      <IonPage>
        <IonContent fullscreen color='primary'>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
=======
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
          <div className="display-time text-5xl text-white">{time}</div>
          <div className="display-date text-white">
            <span id="day">{day}</span>, <span id="daynum">{daynum}</span>{" "}
            <span id="month">{month}</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
>>>>>>> 04a01e7 (complete date&time display)
