import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { currentUser } from '../Api/customerApi';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoutes({children}) {

    const [status, setStatus] = useState()
    const [loding, setLoding] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function getCurrentUserDetails() {
            try {
                const response = await currentUser("http://localhost:8888/api/YourDoorFood/customers/view_profile");
                setStatus(response.status); 
                setLoding(true)
            } catch (error) {
                console.error("Error fetching user details:", error); // Log any errors that occur
            }
        }
        getCurrentUserDetails();
    }, [])

    if(loding){
        
        if (location.pathname.startsWith("/order") && status !== 202) {
            return <Navigate to="/loginSignUp" replace />;
        }else if(location.pathname.startsWith("/loginSignUp") && status == 202){
            return <Navigate to="/" replace/>
        }else{
            return children;
        }
    }
}
