import React, {useState} from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import logo from './honeywell-aerospace.jpg'
import axios from 'axios';

function LoginForm() {
  
  const[Email,setEmail] = useState("");
  const[Password, setPassword] = useState("");

  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      email: Email,
      password: Password
    };

    axios.post('server/loginauth/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  console.log("Hello World!")
  
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={logo} class="img-fluid" alt="" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          {/* <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div> */}

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Platform SW Export Control Database</p>
          </div>

          <form onSubmit={handleLogin}>

            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{setEmail(e.target.value)}}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{setPassword(e.target.value)}}/>

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="rstPass">Forgot password?</a>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
               <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="register" className="link-danger">Register</a></p>
            </div>

          </form>
        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        {/* <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div> */}

      </div>

    </MDBContainer>
  );
};


export default LoginForm;