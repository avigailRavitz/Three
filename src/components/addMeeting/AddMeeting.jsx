import React, { useState } from 'react';
import Modal from 'react-modal';
import { observer } from 'mobx-react';
import Appointment from '../../store/Appointment';
import Swal from 'sweetalert2';
const AddMeeting=observer(() =>  {
      const [isModalOpen, setModalOpen] = useState(false);
    //   const [meetings, setMeetings] = useState([]);
      const [meetings, setMeetings] = useState({
        id:   String(Appointment.meetingsList.length),
        meetingType:'',
        name: '',
        date: '',
        email: ''
    });
    //   const [meetingType, setMeetingType] = useState('');
    //   const [name, setName] = useState('');
    //   const [date, setDate] = useState('');
    //   const [email, setEmail] = useState('');
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMeetings({ ...meetings, [name]: value });
    };
      const handleOpenModal = () => {
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };
      const handleAddMeeting = (meetings) => {
        if (meetings.meetingType !== '' &&meetings.name !== '' && meetings.date !== '' && meetings.email !== '') {
            Appointment.addMeeting(meetings);
        }
        else {
            Swal.fire({
                title: "Error!",
                text: "required filds",
                // imageUrl: X,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "image"
            });
 };
    
        // כאן תוכל לבצע פעולה להוספת הפגישה לרשימת הפגישות
        // setMeetings([...meetings, newMeeting]);
        setMeetings({
            id:  String(Appointment.meetingsList.length),
            meetingType: '',
            name: '',
            date: '',
            email: ''
        });
        // איפוס השדות בטופס
        // setMeetingType('');
        // setName('');
        // setDate('');
        // setEmail('');
    
        handleCloseModal();
      };
    
      const customModalStyles = {
        content: {
          width: '30%', // או גודל שתבחר
          height: '30%', // או גודל שתבחר
          top: '30%', // אם תבחר 50% ב-width ו-50% ב-height
          left: '30%', // אם תבחר 50% ב-width ו-50% ב-height
        },
      };
    
      return (
        <div>
          <Button variant="contained" onClick={handleOpenModal}>Add Meeting</Button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Add Meeting Modal"
            style={customModalStyles}
          >
            <h2>Add New Meeting</h2>
            <label>
              Meeting Type:
              <input
                type="text"
                name="meetingType"
                value={meetings.meetingType}
                onChange={handleInputChange}
              />
            </label>
            <br/>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={meetings.name}
                onChange={handleInputChange}
              />
            </label>
            <br/>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={meetings.date}
                onChange={handleInputChange}
              />
            </label>
            <br/>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={meetings.email}
                onChange={handleInputChange}
              />
            </label>
            <br/>
            <button onClick={handleAddMeeting}>Add Meeting</button>
          </Modal>
    
          {/* כאן תציג את רשימת הפגישות */}
          {/* <ul>
            {meetings.map((meeting, index) => (
              <li key={index}>{meeting.name} - {meeting.date}</li>
            ))}
          </ul> */}
        </div>
      );
    

}) 
export default AddMeeting;