import * as React from 'react';
export interface ITimelineProps {
  children?: React.ReactNode
}

const tlStyle = {
    margin: '50px 60px',
    height: '4px',
    backgroundColor: 'grey'
};
const tlProgressStyle = {
    width: '33%',
	height: '100%',
	backgroundColor: 'orange',
}

const Timeline: React.SFC<ITimelineProps> = (props) => (
    <div className="timeline"  style={tlStyle} >
      {/* {props.children} */}
      <div className="timeline-progress" style={tlProgressStyle} ></div> 
    </div>
);

Timeline.defaultProps = {
//   children: null
};
export default Timeline;