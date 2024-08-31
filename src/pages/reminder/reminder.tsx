import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./reminder.css";
import { Link } from "react-router-dom";

const Reminder: React.FC = () => {
  const Add = () => {};
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <Link to="/reminder_add.tsx">
          <IonButton expand="block" color="dark"> 
            ADD
          </IonButton>
        </Link>
        
      </IonContent>
    </IonPage>
  );
};

export default Reminder;
