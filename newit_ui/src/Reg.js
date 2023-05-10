import React, { useState } from 'react';
import logo from './honeywell-aerospace.jpg'
import axios from 'axios';

function RegisterPage()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (event) =>{

        event.preventDefault();
        
        // Data to be transmitted
        const data = {
            email: email,
            password: password
        }
        console.log("Hello World!")

        // Send request to the auth microservice
        axios.post('/auth/registerUser/', data)
            .then( (response) => {
                console.log(response.data);
            })
            .catch( (error) => {
                console.log(error);
            });

    };
    
    return(
        <section class="vh-100" style={{backgroundColor: '#eee'}}>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{borderRadius: '25px'}}>
                <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form class="mx-1 mx-md-4" onSubmit={handleRegister}>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control" onChange={(e) => {setEmail(e.target.value)}} />
                            <label class="form-label" for="form3Example3c">Your Email</label>
                            </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" onChange={(e)=>{setPassword(e.target.value)}}/>
                            <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" class="btn btn-primary btn-lg">Register</button>
                        </div>

                        </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src={logo} class="img-fluid" alt="" />

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section> 
    );
}

export default RegisterPage;