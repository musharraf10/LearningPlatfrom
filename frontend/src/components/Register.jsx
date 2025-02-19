// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
// import { TextField, Checkbox, FormControlLabel } from '@mui/material';
// import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

// function AuthForm() {
//   const [isRegister, setIsRegister] = useState(true);

//   const toggleForm = () => {
//     setIsRegister(!isRegister);
//   };

//   return (
//     <Container fluid>
//       <Card className='text-black m-5' style={{ borderRadius: '25px' }}>
//         <Card.Body>
//           <Row>
//             <Col md={10} lg={6} className='order-2 order-lg-1 d-flex flex-column align-items-center'>
//               <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ width: '100%' }}>
//                 {isRegister ? 'Sign up' : 'Login'}
//               </p>

//               {isRegister ? (
//                 <>
//                   {/* Registration Form */}
//                   <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
//                     <i className="bi bi-person-fill me-3" style={{ fontSize: '1.5rem' }}></i>
//                     <TextField label="Your Name" variant="outlined" fullWidth />
//                   </div>
//                 </>
//               ) : null}

//               <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
//                 <i className="bi bi-envelope-fill me-3" style={{ fontSize: '1.5rem' }}></i>
//                 <TextField label="Your Email" type="email" variant="outlined" fullWidth />
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
//                 <i className="bi bi-lock-fill me-3" style={{ fontSize: '1.5rem' }}></i>
//                 <TextField
//                   label="Password"
//                   type="password"
//                   variant="outlined"
//                   fullWidth
//                 />
//               </div>

//               {isRegister ? (
//                 <>
//                   <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
//                     <i className="bi bi-key-fill me-3" style={{ fontSize: '1.5rem' }}></i>
//                     <TextField
//                       label="Repeat your password"
//                       type="password"
//                       variant="outlined"
//                       fullWidth
//                     />
//                   </div>

//                   <FormControlLabel
//                     control={<Checkbox name="newsletter" />}
//                     label="Subscribe to our newsletter"
//                     className="mb-4"
//                   />
//                 </>
//               ) : null}

//               <Button variant="primary" className="mb-4" size="lg" style={{ width: '100%' }}>
//                 {isRegister ? 'Register' : 'Login'}
//               </Button>

//               {/* Toggle between login and register */}
//               <p>
//                 {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
//                 <Button variant="link" onClick={toggleForm}>
//                   {isRegister ? 'Login' : 'Sign up'}
//                 </Button>
//               </p>

//               {/* Social Media Sign-In */}
//               <div className="d-flex justify-content-center" style={{ width: '100%' }}>
//                 <Button variant="outline-danger" className="me-2">
//                   <GoogleIcon /> {isRegister ? 'Sign up' : 'Sign in'}
//                 </Button>
//                 <Button variant="outline-primary">
//                   <FacebookIcon /> {isRegister ? 'Sign up' : 'Sign in'}
//                 </Button>
//               </div>
//             </Col>

//             <Col md={10} lg={6} className='order-1 order-lg-2 d-flex align-items-center'>
//               <img
//                 src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
//                 alt="auth illustration"
//                 className="img-fluid"
//               />
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default AuthForm;

















import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

function AuthForm() {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Container fluid className='d-flex align-items-center justify-content-center'>
      <Card className='text-black m-5' style={{ borderRadius: '25px', maxWidth: '900px', width: '100%' }}>
        <Card.Body>
          <Row>
            <Col md={10} lg={6} className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                {isRegister ? 'Sign up' : 'Login'}
              </p>

              {isRegister && (
                <>
                  <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
                    <i className="bi bi-person-fill me-3" style={{ fontSize: '1.5rem' }}></i>
                    <TextField label="Your Name" variant="outlined" fullWidth />
                  </div>
                </>
              )}

              <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
                <i className="bi bi-envelope-fill me-3" style={{ fontSize: '1.5rem' }}></i>
                <TextField label="Your Email" type="email" variant="outlined" fullWidth />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
                <i className="bi bi-lock-fill me-3" style={{ fontSize: '1.5rem' }}></i>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                />
              </div>

              {isRegister && (
                <>
                  <div className="d-flex flex-row align-items-center mb-4" style={{ width: '100%' }}>
                    <i className="bi bi-key-fill me-3" style={{ fontSize: '1.5rem' }}></i>
                    <TextField
                      label="Repeat your password"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  </div>

                  <FormControlLabel
                    control={<Checkbox name="newsletter" />}
                    label="Subscribe to our newsletter"
                    className="mb-4"
                    style={{ width: '100%' }}
                  />
                </>
              )}

              <Button variant="primary" className="mb-4" size="lg" style={{ width: '100%' }}>
                {isRegister ? 'Register' : 'Login'}
              </Button>

              {/* Toggle between login and register */}
              <p className="text-center">
                {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
                <Button variant="link" onClick={toggleForm}>
                  {isRegister ? 'Login' : 'Sign up'}
                </Button>
              </p>

              {/* Social Media Sign-In */}
              <div className="d-flex justify-content-between" style={{ width: '100%' }}>
                <Button variant="outline-danger" className="me-2" style={{ flex: 1 }}>
                  <GoogleIcon /> {isRegister ? 'Sign up' : 'Sign in'}
                </Button>
                <Button variant="outline-primary" style={{ flex: 1 }}>
                  <FacebookIcon /> {isRegister ? 'Sign up' : 'Sign in'}
                </Button>
              </div>
            </Col>

            <Col md={10} lg={6} className='order-1 order-lg-2 d-flex align-items-center'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                alt="auth illustration"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AuthForm;
