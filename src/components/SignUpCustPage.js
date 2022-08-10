import React, { useState, useEffect } from 'react';
import Footer from "./Footer"
import Header from "./Header"

const SignUpCustPage = () => {

  // Note that this page will send object/function containing user details as prop to the home page, which will
  // send to header and to nav etc.
  // this object would contain details about the user,
  // e.g, is the user a cust or prov ? their name, email etc
  // this object will also be similar or the same as that from the 'loginpage'

  let userDetails = {
    'typeOfUser': '',
    'userId': '',
    'email': '',
    'firstName': '',
  };



  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [passwd, setPasswd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  let pwd;

  // let custId;
  const [custId, setCustId] = useState()

  const onSubmit = (e) => {
    e.preventDefault();

    (passwd === confirmPwd) ? pwd = confirmPwd : alert('The two passwords must match');

    if (firstName.length < 2) alert('Enter a valid first name');

    if (surname.length < 2) alert('Enter a valid surname');

    if (!checkBox) alert('Accept the terms and conditions to continue');

    // console.log(JSON.stringify({
    //   "email": email,
    //   "firstName": firstName,
    //   "surname": surname,
    //   "pwd": pwd
    // }));


    fetch('https://raptor.kent.ac.uk/~moo40/sservice-to-you/api/apiInsertCus.php', {
      method: 'POST',
      mode: 'cors',
      headers: {
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        // 'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "firstName": firstName,
        "surname": surname,
        "pwd": pwd
      }),
      origin: 'https://raptor.kent.ac.uk/~moo40/sservice-to-you/src/components/SignUpCustPage.js'
    }).then(res => res.json())
      .then(data => {
        if (data) {

          let dataId = JSON.stringify(data.id);
          setCustId(JSON.stringify(dataId));
          userDetails.userId = JSON.stringify(dataId);
          console.log(dataId);

          return custId;
          // return (<Redirect to='/' />);
          // return <Homepage {props=custDataObject} />;
        } else {
          console.log(data);
          console.log('empty data sent');
          return;
        }
      })




  }

  return (
    <>
      {/* < Header { { custId ? show: hide } } /> */}
      < Header />

      <section className="heading-container registerHeadingContainer">
        <div className="center-container userFormContainer">

          <div>
            <h1>Good to see you.</h1>
            <div className="registerHeadingComments">
              <p>Want to become a Service Provider? <a className="byTheWayLinks" href="signUpPro.html">sign up</a></p>
              <p>Already a customer? <a href="login.html" className="byTheWayLinks">Login</a></p>
            </div>
          </div>

          <div className="heading-btn">
            <div>
              <form className="userForm signUpCustForm" onSubmit={onSubmit}>
                {/* <form action='https://raptor.kent.ac.uk/~moo40/sservice-to-you/api/apiInsertCus.php' method='POST' className="userForm"> */}
                <input type="button" id="createWithGoogle" name="createWithGoogle" className="userFormInput userSearchBtn" value="Sign Up with Google" />
                <p>OR</p>
                <input type="email" id="email" name="email" className="userFormInput email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" id="firstName" name="firstName" className="userFormInput firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" id="surname" name="surname" className="userFormInput surname" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                <input type="password" id="passwd" name="passwd" className="userFormInput passwd" placeholder="Password" value={passwd} onChange={(e) => setPasswd(e.target.value)} required />
                <input type="password" id="confirmPwd" name="confirmPwd" className="userFormInput confirmPwd" placeholder="Confirm Password" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} required />
                <div className="rowFlex termsCheck">
                  <input type="checkbox" id="tAndC" name="tAndC" className="userFormInput" value={checkBox} onChange={(e) => setCheckBox(e.currentTarget.checked)} required />
                  <p>I agree to the <a className="byTheWayLinks">Policy</a> and the <a className="byTheWayLinks">Terms and Conditions</a> of ServicesToYou.</p>
                </div>
                <input type="submit" id="createAccount" name="createAccount" className="userFormInput userSearchBtn" value="Create Account" />

              </form>
            </div>
          </div>
        </div>
      </section>

      < Footer />
    </>
  )
}

export default SignUpCustPage;