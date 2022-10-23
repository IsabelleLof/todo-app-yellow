import React from 'react';
import './Login.css';

export default function Login () {

    const [loginInfo, setLoginInfo] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        console.log('element witch been used', event.target);
        console.log('input name', event.target.name);
        console.log('input value', event.target.value);

        const inputName = event.target.name;
        const inputValue = event.target.value;

        setLoginInfo({
            [inputName]: inputValue
        })
    }

    return (
        <div className='container'>
            <p>Create an account to save your Todos!</p>
            <form>
            <input 
               name='email' 
               placeholder='email' 
               value={loginInfo.email}
               onChange={handleChange}
               />
            <input 
               name='password' 
               placeholder='password' 
               value={loginInfo.password}
               onChange={handleChange}
               />
               <button>Submit</button>
            </form>
        </div>
    )
}