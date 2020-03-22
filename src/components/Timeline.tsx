import * as React from 'react';
import './timeline.css';
// export interface ITimelineProps {
//   children?: React.ReactNode;
//   // status: OrderStatus
// }

// const Timeline: React.SFC<ITimelineProps> = (props) => (

//     <div className="timeline">
//         <div className="timeline-progress"></div>
//         <div className="timeline-items">
//               <div className="timeline-item active">
//                   <div className="timeline-content">
//                     Step 1
//                   </div>
//               </div>
//               <div className="timeline-item active">
//                   <div className="timeline-content">
//                     Step 2
//                   </div>
//               </div>
//               <div className="timeline-item">
//                   <div className="timeline-content">
//                     Step 3
//                   </div>
//               </div>
//               <div className="timeline-item">
//                   <div className="timeline-content">
//                     Step 4
//                   </div>
//               </div>
//         </div>
//     </div>
// );

// export enum OrderStatus {
//   Open ="Open", 
//   Accepted ="Accepted by Vendor",
//   Progress ="Order in Progress",
//   Completed ="Completed"
// }
// Timeline.defaultProps = {
//   children: null
// };

// export default Timeline;

export interface TimelineProps {
  text: string, 
  active?: boolean,
  status: Array<any>
}

 
const Timeline: React.SFC<TimelineProps> = (props) => {

  const totalItems = props.status.length;
	const numberOfActiveItems = props.status.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;

  return (
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
              <div className="timeline-item active">
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
  );
}
 
export default Timeline;