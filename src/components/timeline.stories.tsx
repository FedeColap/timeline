import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Timeline from "./Timeline";
storiesOf("Timeline", module)
  .add("default", () => (
    <Timeline text={"Orders"} status={...statuses} currentStatus={currentStatus} barLenght={barLenght}></Timeline>
  ))

  export enum OrderStatus {
    Open ="Open", 
    Accepted ="Accepted by Vendor",
    Progress ="Order in Progress",
    Completed ="Completed"
  }
  console.log(OrderStatus)
  const statuses = Object.values(OrderStatus)
  console.log(statuses)


  let currentStatus = statuses[0];
  let barLenght= statuses.indexOf(currentStatus)
  console.log(barLenght)

  //check this condition to see the "updates of states"
  if(3 > 2){
    barLenght +=1;
    console.log(barLenght)
    currentStatus= statuses[barLenght]
  }

