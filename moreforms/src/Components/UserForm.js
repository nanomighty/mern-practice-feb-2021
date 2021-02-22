import React, {useState} from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const inputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }


const checkFirstName = () =>{
    if (inputs.firstName.length > 0 && inputs.firstName.length < 2){
        return(
            "First Name must be at least 2 characters"
        )
    }
};

const checkLastName = () => {
    if (inputs.lastName.length > 0 && inputs.lastName.length < 2){
        return (
            "Last Name must be at least 2 characters"
        )
    }
}

const checkEmail = () =>{
    if (inputs.email.length > 0 && inputs.email.length < 2) {
        return (
            "Email must be at least 2 characters"
        )
    }
} 

const checkPassword = () => {
    if (inputs.password.length > 0 && inputs.password.length < 8) {
        return (
            "Password must be at least 8 characters"
        )
    }
}

const matchPassword = () => {
    if (inputs.password !== inputs.confirmPassword){
        return (
            "Passwords must match"
        )
    }
}


    return(
        <form onsubmit={(e) => e.preventDefault()}>
            <div class="inputBox">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder="Search..." onChange = {inputChange}/>
            </div>
            <h6>{checkFirstName()}</h6>
            <div class="inputBox">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" placeholder="Search..." onChange={inputChange}/>
            </div>
            <h6>{checkLastName()}</h6>
            <div class="inputBox">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Search..." onChange={inputChange}/>
            </div>
            <h6>{checkEmail()}</h6>
            <div class="inputBox">
                <label htmlFor = "password">Password</label>
                <input type="password" name="password" id="password" placeholder="Search..." onChange={inputChange}/>
            </div>
            <h6>{checkPassword()}</h6>
            <div class="inputBox">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Search..." onChange={inputChange} />
            </div>
            <h6>{matchPassword()}</h6>
        </form>

    )
}
export default UserForm;