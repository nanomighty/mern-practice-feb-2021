import React, {useState} from 'react';

const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmedPwd, setConfirmedPwd] = useState("");


    return(
        <div>
            <form>
                <div class="inputDesign">
                    <label>First Name:  </label>
                    <input type="text" onChange = {(e) => setFirstName(e.target.value)} value = {firstName}/>
                </div>
                <div class="inputDesign">
                    <label>Last Name:  </label>
                    <input type="text" onChange = { (e) => setLastName(e.target.value)} value = {lastName}/>
                </div>
                <div class="inputDesign">
                    <label>Email:  </label>
                    <input type="text" onChange = { (e) => setEmail(e.target.value)} value = {email}/>
                </div>
                <div class="inputDesign">
                    <label>Password:  </label>
                    <input type="password" onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                </div>
                <div class="inputDesign">
                    <label>Confirm Password:  </label>
                    <input type="password" onChange = {(e) => setConfirmedPwd(e.target.value)} value = {confirmedPwd}/>
                </div>
            </form>
            <br />
            <h4>Your Form Data</h4>
            <br />
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirmed Password: {confirmedPwd}</p>
        </div>
    );
}
export default UserForm;
