// import "./~node_modules/css-loader/dist/cjs" 
import React, { Component} from "react";
import logo from "./logo.svg";
import "./main-folder/css/bootstrapCustom.css";
// import "./main-folder/css/calander_style.scss";
import "./main-folder/css/calander_style.css";
import Calander from "./components/Calander";
import TaskBar from "./components/TaskBar";

class App extends Component {
  render() {
    return (
      <div className="grid grid_3_9">
        <TaskBar />
        <Calander />
      </div>
    );
  }
}
export default App;