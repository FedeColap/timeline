import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Timeline from "./Timeline";
storiesOf("Timeline", module)
  .add("default", () => (
    <Timeline>Hello Timeline</Timeline>
  ))