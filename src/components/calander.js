import React, { Component } from "react";
import Week from "./section/calander/Week";
import HeaderCalander from "./section/calander/Header";
import DaysTable from "./section/calander/DaysTable";
export default class Calander extends Component{
  render() {
    return (
        <div className="calander sm-responsive2">
          <HeaderCalander />
          <Week />
          <DaysTable />
        </div>
    );
  }
}

