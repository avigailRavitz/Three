
import{ observable, makeObservable,action} from 'mobx';
const meeting = {
    serviceName: "",
    serviceDescribtion: '',
    servicePrice: 0,
    dateTime: '',
    clientName: "",
    clientPhone: 1223456789,
    clientEmail: ""
}
class Appointment {
    
    meetingsList = [{
        serviceName: "לללללללללללל",
        serviceDescribtion: 'מיוחד',
        servicePrice: 250,
        dateTime: '30',
        clientName: "שרה",
        clientPhone: 1223456789,
        clientEmail: "@gmail"
    }];
    constructor(){
        makeObservable(this,{              
         meetingsList:observable,
         getMeeting:action,
         addMeeting:action
         
    })
}
    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.status)
    if (response.status === 200) {
        this.meetingsList=([...this.meetingsList, meeting] )
        console.log(this.meetingsList.length)
    }
}

getMeeting = async () => {
    const response = await fetch("http://localhost:8787/appointments");
    const data = await response.json();
    console.log(data);
    this.meetingsList=([...data]);
}
}


export default new Appointment();