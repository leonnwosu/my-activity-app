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
import "./to_do.css";
import React, { useEffect, useState } from "react";
import { add } from "ionicons/icons";
interface ToDoItem {
  text: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [newToDo, setNewToDo] = useState<string>("");
  const [toDoItems, setToDoItems] = useState<{ [key: string]: ToDoItem[] }>({});
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<"all" | "complete" | "not_complete">(
    "all"
  );

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
    setShowModal((prevState) => !prevState);
  };
  const complete = () => {
    if (toDoItems[selectedDate]) {
      return toDoItems[selectedDate].filter((item) => item.completed);
    }
    return [];
  };

  const not_complete = () => {
    if (toDoItems[selectedDate]) {
      return toDoItems[selectedDate].filter((item) => !item.completed);
    }
    return [];
  };

  const addToListModal = () => {
    setShowModal((prevstate) => !prevstate);
  };

  const makedone = (date: string, id: number) => {
    setToDoItems((prevItems) => {
      // Create a new array to store updated items
      const itemsForDate = [...prevItems[date]]; // Make a copy of the items array

      for (let i = 0; i < itemsForDate.length; i++) {
        if (i === id) {
          // Update the item if the index matches
          itemsForDate[i] = {
            ...itemsForDate[i],
            completed: !itemsForDate[i].completed,
          };
        }
      }

      // Return the updated state
      return { ...prevItems, [date]: itemsForDate };
    });
  };

  const getFilteredItems = () => {
    if (filter === "complete") {
      return complete();
    } else if (filter === "not_complete") {
      return not_complete();
    } else {
      return toDoItems[selectedDate] || [];
    }
  };

  const showComplete = () => setFilter("complete");
  const showNotComplete = () => setFilter("not_complete");
  const showAll = () => setFilter("all");

  const filteredItems = getFilteredItems();

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
            onClick={showComplete}
            color="favorite"
            className="completebutton"
          >
            complete
          </IonButton>

          <IonButton
            onClick={showNotComplete}
            color="favorite"
            className="notcomplete"
          >
            not complete
          </IonButton>

          <IonButton
            onClick={showAll}
            color="favorite"
            className="notcomplete"
          >
            Show All
          </IonButton>
        </div>
        <IonList>
          {filteredItems.map((item, index) => (
            <IonItem key={index} color="primary">
              <IonCheckbox
                checked={item.completed}
                onIonChange={() => makedone(selectedDate, index)}
              />
              <IonLabel
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonButton onClick={addToListModal} expand="block" color="dark">
          ADD TO-DO
        </IonButton>
        {showModal && (
          <div className="modal" color="primary">
            <IonItem>
              <IonInput
                value={newToDo}
                placeholder="Enter new to-do"
                onIonChange={(e) => setNewToDo(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonButton onClick={Addtolist} color="dark">
              Add
            </IonButton>{" "}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ToDo;
