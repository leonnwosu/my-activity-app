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
interface ToDoItem {
  text: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [newToDo, setNewToDo] = useState<string>("");
  const [toDoItems, setToDoItems] = useState<{ [key: string]: ToDoItem[] }>({});
  const handleDateChange = (e: CustomEvent) => {
    setSelectedDate(e.detail.value);
  };

  const Addtolist = () => {
    if (newToDo.trim()) {
      setToDoItems((prevItems) => {
        const itemsForDate = prevItems[selectedDate] || [];
        return {
          ...prevItems,
          [selectedDate]: [
            ...itemsForDate,
            { text: newToDo, completed: false },
          ],
        };
      });
      setNewToDo("");
    }
  };
  const complete = () => {
    if (toDoItems[selectedDate]) {
      let complete = [];
      for (let x = 0; x < toDoItems[selectedDate].length; x++) {
        if (toDoItems[selectedDate][x].completed) {
          complete.push(toDoItems[selectedDate][x]);
        }
      }
      if (complete != null) {
        return complete;
      } else {
        return [];
      }
    }
  };
  const not_complete = () => {
    if (toDoItems[selectedDate]) {
      let notcomplete = [];
      for (let x = 0; x < toDoItems[selectedDate].length; x++) {
        if (!toDoItems[selectedDate][x].completed) {
          notcomplete.push(toDoItems[selectedDate][x]);
        }
      }
      if (complete != null) {
        return complete;
      } else {
        return [];
      }
    }
  };

  const makedone = ()=>{
    
  }
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
            onClick={complete}
            color="favorite"
            className="completebutton"
          >
            complete
          </IonButton>

          <IonButton
            onClick={not_complete}
            color="favorite"
            className="notcomplete"
          >
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
