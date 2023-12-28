import AdminDetails from "../adminDetails/AdminDetails"
import Services from '../services/Services'
import EditAdminDetails from "../editAdminDetails/EditAdminDetails"
import Meetings from "../meetings/Meetings"
import AddMeeting from "../addMeeting/AddMeeting"
function User() {
    //const [count, setCount] = useState(0)
  console.log("user")
    return (
      <>
        <h1>user</h1>
        <AdminDetails/>
        <Services/>
        <AddMeeting/>
      </>
    )
  }
  
  export default User
  