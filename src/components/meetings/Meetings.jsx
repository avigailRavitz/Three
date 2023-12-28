import { useState } from "react";
import { observer } from 'mobx-react';
import Appointment from "../../store/Appointment";
import Meeting from "../meeting/Meeting";
import './meetings.css'
const Meetings=(observer(()=>{
    return (<>

<div>
<h1>meetingsList</h1>
</div>
<div className="meetings-list">
      {Appointment.meetingsList.map((meeting, index) => (
        <Meeting key={index} meeting={meeting} />
      ))}
    </div>
    </>
    )
}))

export default Meetings