import * as React from 'react';
export interface ITimelineProps {
  children?: React.ReactNode
}
const styles = {
  color: "orange"
};

const Timeline: React.SFC<ITimelineProps> = (props) => (
    <div  style={styles} >
      {props.children}
     
    </div>
);

Timeline.defaultProps = {
  children: null
};
export default Timeline;