import * as React from 'react';
import './timeline.css';

export interface TimelineProps {
  text: string, 
  active?: boolean,
  status: Array<any>, 
  currentStatus: string,
  barLenght: number
}

 
const Timeline: React.SFC<TimelineProps> = (props) => {

  const totalItems = props.status.length;
  const numberOfActiveItems = props.barLenght + 1;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;

  return (
    <div className="wrapper">
      <div className="timeline">
          <div className="timeline-progress" style={{ width: `${progressBarWidth}%`}}></div>
          <div className="timeline-items">
                <div className="timeline-item active">
                    <div className="timeline-content">
                      {props.status[0]}
                    </div>
                </div>
                <div className="timeline-item active">
                    <div className="timeline-content">
                      {props.status[1]}
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                      {props.status[2]}
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                      {props.status[3]} 
                    </div>
                </div>
          </div>
      </div>
      <div className="status-report">
        <p className="status-report-content">Your closing is currently in:</p> <h2 className="status-report-current">{props.currentStatus}</h2>
      </div>
    </div>

    //I have not used the .map() because at the moment I don't know how to indicate the "active" status
    //without turning the enum in a more complex object
    
    // <div className="timeline">
		// 	<div className="timeline-progress"></div>
		// 	<div className="timeline-items">
    //     {props.status.map((item, i) => (
		// 		 	<div key={i} className={"timeline-item" + (props.currentstatus ? ' active' : '')}>
		// 		 		<div className="timeline-content">
		// 		 			{item}
		// 		 		</div>
		// 		 	</div>
		// 		))}
		// 	</div>
    // </div>
  );
}
 
export default Timeline;