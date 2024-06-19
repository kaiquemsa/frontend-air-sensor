import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import authUser from '../../services/authUser';
import setUser from '../../services/setUser';

const Login: React.FC = () => {
    const [showRegister, setShowRegister] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleLogin = async (event:any) => {
      event.preventDefault();
      const user = await authUser.authUser({ username, password }).then((response) => {
        console.log(response);
        if (response) {
          localStorage.setItem('authToken', 'Autenticado');
          navigate('/');
        } else {
          // setError('Erro ao autenticar. Por favor, verifique suas credenciais.');
        }
      });
    };

    const handleRegister = async (event:any) => {
      event.preventDefault();
      const user = await setUser.setUser({ newUsername, newPassword }).then((response) => {
        console.log(response);
        if (response) {
          localStorage.setItem('authToken', 'Autenticado');
          navigate('/');
        } else {
          // setError('Erro ao autenticar. Por favor, verifique suas credenciais.');
        }
      });
    }



    const navigate = useNavigate(); 

    const handleGoBack = () => {
      navigate('/'); 
    };
  
    const toggleForm = () => {
      setShowRegister(!showRegister);
    };
  
    return (
      <MDBContainer className="my-5" style={{ width: '70%' }}>
        <MDBCard>
          <MDBRow className='g-0'>
            <MDBCol md='6'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
            </MDBCol>
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                  <span className="h1 fw-bold mb-0">Logo</span>
                </div>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                  {showRegister ? 'Sign up for your account' : 'Sign into your account'}
                </h5>
                {showRegister ? (
                  <>
                    <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"                       
                      value={newUsername} 
                      onChange={(e) => setNewUsername(e.target.value)}  
                    />
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
                      value={newPassword} 
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleRegister}>Register</MDBBtn>
                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                      Already have an account? <a href="#!" onClick={toggleForm} style={{ color: '#393f81' }}>Sign in here</a>
                    </p>
                  </>
                ) : (
                  <>
                    <MDBInput 
                      wrapperClass='mb-4' 
                      label='Username' 
                      id='formControlLg' 
                      type='email' 
                      size="lg" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <MDBInput 
                      wrapperClass='mb-4' 
                      label='Password' 
                      id='formControlLg' 
                      type='password' 
                      size="lg"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>Login</MDBBtn>
                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                      Don't have an account? <a href="#!" onClick={toggleForm} style={{ color: '#393f81' }}>Register here</a>
                    </p>
                  </>
                )}
                <MDBBtn onClick={handleGoBack} color='primary'>Back to Home</MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    );
  }
  
  export { Login };