import React from "react";
import "./style.css";
import RenderComp from './RenderComp.js'
export const QUEUE={
  'APPOINTMENTS' : 1,
  'SERVICE_LANE' : 2,
}

export const SUBQUEUE = {
  "APPOINTMENTS.CONFIRMED" : 1,
  "APPOINTMENTS.NOSHOW" : 2,
  "SERVICE_LANE.CHECK_IN" : 3,
  "SERVICE_LANE.UNASSIGNED" : 4,
  "SERVICE_LANE.ASSIGNED" : 5,
  "SERVICE_LANE.FOR_REVIEW" : 6,
  "SERVICE_LANE.CUSTOMER_APPROVAL" : 30,
}

const queue_counts = {
  "servicelane": [
    {
      count: 0,
      subQueueId: SUBQUEUE['SERVICE_LANE.CHECK_IN'],//3,
      // image_url: require('../../../assets/images/Check-In.png'),
      name: 'Check-In',
      bgcolor: '#8fcdf6',
      queueId: QUEUE['SERVICE_LANE'],
      navigateTo: "serviceLane"
    },
    {
      count: 0,
      subQueueId: SUBQUEUE['SERVICE_LANE.ASSIGNED'],//5,
      // image_url: require('../../../assets/images/assigned.png'),
      name: 'Assigned',
      bgcolor: '#8fcdf6',
      queueId: QUEUE['SERVICE_LANE'],
      navigateTo: "serviceLane"
    },
  ],
  "appointment": [
    {
      count: 0,
      subQueueId: SUBQUEUE['APPOINTMENTS.CONFIRMED'],//1,
      // image_url: require('../../../assets/images/Confirmed.png'),
      name: 'Confirmed',
      bgcolor: '#8fcdf6',
      queueId: QUEUE['APPOINTMENTS'],
      navigateTo: "appointment"
    }
  ],

}

const customerData = [
  {
    count:1,
    subQueueId:3
  },
  {
    count:3,
    subQueueId:5
  },
  {
    count:5,
    subQueueId:1
  }
]


export default function App() {
      { customerData && Object.keys(queue_counts).forEach((keyValue1,index)=>{
       queue_counts[keyValue1].forEach((keyValue2,index1)=>{
         customerData.forEach((customer,i)=>{
           if(customer.subQueueId===keyValue2.subQueueId)
           {
             keyValue2.count=customer.count;
             console.log(keyValue2.count)
           }
         })
     
       })
     })}
  return (

      <div className="queueDiv">
          {Object.keys(queue_counts).forEach((keyValue1,index)=>{ 
            return(queue_counts[keyValue1].forEach((keyValue2,index1)=> {
            return(<p>{keyValue2.name}</p>)
          }))})}
     </div>
   
  )


}
