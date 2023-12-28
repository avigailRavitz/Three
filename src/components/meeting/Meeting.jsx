import { observer } from 'mobx-react';
import './Meeting.css'
const Meeting=(observer(({ meeting })=>{
    return (<>
  <div className="meet">

      <p>Service Name: {meeting.serviceName}</p>
      <p>Service Description: {meeting.serviceDescribtion}</p>
      <p>Service Price: {meeting.servicePrice}</p>
      <p>Date and Time: {meeting.dateTime}</p>
      <p>Client Name: {meeting.clientName}</p>
      <p>Client Phone: {meeting.clientPhone}</p>
      <p>Client Email: {meeting.clientEmail}</p>
      {/* כאן תוכל להוסיף את התצוגה של שאר פרטי הפגישה */}
    </div>


    </>
    )
}))
export default Meeting