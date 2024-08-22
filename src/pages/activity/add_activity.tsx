import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonCard,
} from "@ionic/react";
import "./activity.css";
import React, { useState } from "react";

interface Actitem {
  text: string;
  time: string;
}

const AddActivity: React.FC = () => {  // Renamed to adhere to React naming conventions
  const Add = () => {
    // Implement the function to handle adding activity
  };

  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonInput placeholder="Enter new to-do"></IonInput>
        <IonCard color="favorite">
          <IonHeader>Time</IonHeader>
          <div className="timeinput">
            <IonInput placeholder="Hours"></IonInput>
            <IonInput placeholder="Minutes"></IonInput>
          </div>
        </IonCard>
        <IonButton onClick={Add}>ADD ACTIVITY</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddActivity;  // Ensure correct export name