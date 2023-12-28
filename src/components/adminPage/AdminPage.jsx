import { Link, Outlet } from "react-router-dom";
import AdminDetails from "../adminDetails/AdminDetails";
import {Button} from '@mui/material'

function AdminPage() {

    return(
        <>
        <AdminDetails/> 
        <br/>
        <Button>   <Link to="./meeting">Meeting</Link> </Button>
        <br/>
        <Button> <Link to="./services" > services</Link> </Button>
     <br/>
         <Outlet/>
   </>
    )

}
console.log("adminpage")
export default AdminPage
