import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
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
import { Link } from "react-router-dom";
import AddActivity from "./add_activity"; // Rename and import correctly

interface ActItem {
  text: string;
  time: string;
}

const Activity: React.FC = () => {
  const addActivity = () => {
    // Use backticks for string interpolation
  };

  const countdown = () => {};

  return (
    <IonPage>
      <IonContent fullscreen color="primary">
        <Link to="/add_activity">
          <IonButton color="dark" expand="block" onClick={addActivity}>
            ADD
          </IonButton>
        </Link>

        <IonList color="primary">{/* Add your list items here */}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Activity;
