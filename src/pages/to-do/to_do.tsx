import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonList,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./to_do.css";
import React, { useEffect, useState } from "react";

const ToDo: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const handleDateChange = (e: CustomEvent) => {
    setSelectedDate(e.detail.value);
  };

  const Addtolist = () => {};
  const complete = () => {};
  const not_complete = () => {};
  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <div className="datetime-button-wrapper">
          <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
        </div>

        <IonModal keepContentsMounted={true}>
          <IonDatetime
            id="datetime"
            presentation="date"
            onIonChange={handleDateChange}
          ></IonDatetime>
        </IonModal>
        <div className="showbutton">
          <IonButton
            onClick={complete} color="favorite"  className="completebutton">
            complete
          </IonButton>

          <IonButton onClick={not_complete} color="favorite" className="notcomplete" >
            not complete
          </IonButton>
        </div>
        <IonList></IonList>
        <IonButton onClick={Addtolist} expand="block" color="dark">
          ADD TO-DO
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ToDo;
