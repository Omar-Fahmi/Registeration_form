import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './style.css';
import bgImg from "../Component/assets/fahmy.jpg";
import logo from "../Component/assets/logo.png";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
// import { database } from '../firebase';
// import {firebaseConfig} from '../firebase'
// import {ref,push,child,update} from "firebase/database";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "email") {
            setEmail(value);
        }

        if (id === "password") {
            setPassword(value);
        }


    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            updateProfile(auth.currentUser, {
                displayName: email,
            });
            Navigate('/');
        } catch (error) {
            
        }
        


        // console.log(firstName, lastName, email, password, confirmPassword);
    }
    return (
        <div className="register-screen">

            <form className="register-screen__form" style={{height: '563px'}}>

                <div className="logo">
                    <img src={logo} alt="" style={{paddingTop: '30px'}}/>
                    <h6 style={{marginBottom: '30px'}}>sign up and start learning!</h6>
                </div>

                {/* <h3 className="register-screen__title">Login</h3> */}
                
                <div className="form-group">
                    
                    <input type="text" required className="form_input" id="email" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>

                <div className="form-group">
                    
                    <input type="password" required className="form_input" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>


                <div className="form-group">
                    <button onClick={() => handleSubmit()} type="submit" class="btn btn-primary">
                        Login
                    </button>
                </div>

                <div className="check">
                    <input type="checkbox" name="checkbox" className="check-box" />
                    <label for="Remember-me"> Remember me</label>

                    <a href="#">Froget Password?</a>
                </div>

                <div className="footer">
                    <h5> Dont have an Account?<Link to='/register'>Register</Link> </h5>
                </div>
                
                <div className="txt">
					<h6 style={{paddingBottom: '30px'}}><span>Or Sign In Using</span></h6>
				</div>
                
                <div className="social-group" style={{margin: '9px'}}>
                    <button className="social-media">
                        <FaFacebookF />
                    </button>

                    <button className="social-media">
                        <FaGooglePlusG />
                    </button>
                    
                    <button className="social-media">
                        <FaLinkedinIn />
                    </button>
                </div>
            </form>
            
            
            <div className="col-2">
                <img src={bgImg} alt="" style={{height: '564px'}} />
                <p>Welcome Back!</p>
            </div>

        </div>
    )


}








export default Login