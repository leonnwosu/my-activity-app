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
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./activity.css";
import React, { useEffect, useState } from "react";

interface Actitem{
  text : String;
  time : String;
}

const Activity: React.FC = () => {
  const Add_activity =()=>{};
  const countdown = ()=>{};

   

  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <IonButton color="dark" expand="block" onClick={Add_activity}>
          ADD
        </IonButton>
        <IonList color="primary">

        </IonList>

        
      </IonContent>
    </IonPage>
  );
};

export default Activity;
