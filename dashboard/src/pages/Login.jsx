import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    return (
        <>
            <div>Login</div>
            <button onClick={() => navigate("/")}>Ir para a Home</button>
        </>
    )
}

export default Login;