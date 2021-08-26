import React, { Component, useEffect, useState } from "react";
import firebase from "./connectFirebase";
function GetTask(i) {
  const [task, setTask] = useState([]);
    var k=0;
    var rootRef = firebase.firestore().collection(`date${i}`);
    useEffect(() => {
      rootRef.onSnapshot((snap) => {
        const newTask = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        var j = newTask.length;
        var verifyTask = [];
        for (k = 0; k < j; k++) {
          if (newTask[k].status == "task") {
            verifyTask.push(newTask[k]);
          }
        }
        setTask(verifyTask);
      });
    }, []);
  return task;
}
function GetComplete(i) {
  const [task, setTask] = useState([]);
    var k=0;
    var rootRef = firebase.firestore().collection(`date${i}`);
    useEffect(() => {
      rootRef.onSnapshot((snap) => {
        const newTask = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        var j = newTask.length;
        var verifyTask = [];
        for (k = 0; k < j; k++) {
          if (newTask[k].status == "complete") {
            verifyTask.push(newTask[k]);
          }
        }
        setTask(verifyTask);
      });
    }, []);
  return task;
}
export default {GetTask,GetComplete};
