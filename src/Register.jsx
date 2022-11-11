import React, { useState} from 'react';
export const Register = (props) => {
    const [email, setEmail] = useState ('');
    const [password, SetPass] = useState(''); 
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log (email);

    }   
    return (
        
        < div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full name</label>
            <input type="name" value={name} name="name" id="name" placeholder='Enter fullnme'  enabled/>
            <label htmlFor="email">Email</label>
            <input type="email"value={email} name="email"  placeholder="youremail@gmail.com" />
            <label htmlFor="email">Password</label>
            <input type="Password" value={password} name="password"  placeholder="*********" />
            <button className="link-btn" type="submit">Log In</button>
            

        </form>
        <button onClick={() =>props.onFormSwitch('Login')}>Alredy i have an account Login</button>
        </div>
    )
}