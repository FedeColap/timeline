import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Timeline from "./Timeline";
storiesOf("Timeline", module)
  .add("default", () => (
    <Timeline text={"Orders"} status={...statuses}></Timeline>
    // <Timeline 
    // />
  ))

  export enum OrderStatus {
    Open ="Open", 
    Accepted ="Accepted by Vendor",
    Progress ="Order in Progress",
    Completed ="Completed"
  }
  const statuses = Object.values(OrderStatus)
  console.log(statuses)
