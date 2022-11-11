import React, {useState} from "react"
export const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [password, SetPass] = useState(''); 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log (email);

    }   
    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email"value={email} name="email"  placeholder="youremail@gmail.com" />
            <label htmlFor="email">Password</label>
            <input type="Password" value={password} name="password"  placeholder="*********" />
            <button className="link-btn" type="submit">Log. In</button>
            

        </form>
        <button onClick={() =>props.onFormSwitch('Register')}>Don't have an account Register</button>
       </div>
    )
}