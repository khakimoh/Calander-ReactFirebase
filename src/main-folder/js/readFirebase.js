import React, { Component, useEffect, useState } from "react";
import firebase from "./connectFirebase";
function useTask(i) {
  const [task, setTask] = useState([]);
  const rootRef = firebase.firestore().collection(`date${i}`);
  useEffect(() => {
    rootRef.onSnapshot((snap) => {
      const newTask = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTask(newTask);
    });
  }, []);
  return task;
}
export default useTask;
