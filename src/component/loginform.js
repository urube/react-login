import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent page from getting reloaded and loose data
        console.log(email);
    }
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button className="submit" type="submit"> Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Need an Account? Sign-Up Here.</button>
        </div>
    )
}