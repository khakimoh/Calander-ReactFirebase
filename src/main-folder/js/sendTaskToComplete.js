import firebase from "./connectFirebase";
const sendTaskToComplete=(i)=>{
    var rootRef = firebase.firestore().collection(`date${i.date}`);
    rootRef.doc(i.id).update({status: "complete"})
  }
export default sendTaskToComplete;
