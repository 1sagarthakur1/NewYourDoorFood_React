import Login from "../../Components/Login";
import {Routes, Route, Navigate} from 'react-router-dom'
import SignUp from "../../Components/SignUp";

export default function LoginSignUp() {
    return (

        <div className="LoginSignUp">
            <div className="bg_image"></div>
            <Routes>
                <Route path="" element={<Navigate to="login" />} />
                <Route path="login" element={<Login />} />
                <Route path="signUp" element={<SignUp/>} />
            </Routes>
        </div>
    )
}
