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
  IonItem,
  IonInput,
  IonLabel,
  IonCheckbox,
  IonCard,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./activity.css";
import React, { useEffect, useState } from "react";
import { text } from "ionicons/icons";

interface Actitem {
  text: String;
  time: String;
}

const Activity: React.FC = () => {
  const Add = () => {};

  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonInput value={text} placeholder="Enter new to-do"></IonInput>
        <IonCard color="favorite">
          <IonHeader>Time</IonHeader>
          <div className="timeinput">
            <IonInput placeholder="Hours"></IonInput>
            <IonInput placeholder="minuites"></IonInput>
          </div>
        </IonCard>
        <IonButton>ADD-ACTIVITY</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Activity;
