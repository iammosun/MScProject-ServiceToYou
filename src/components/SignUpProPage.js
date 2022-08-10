import Footer from "./Footer"
import Header from "./Header"

const SignUpProPage = () => {
  return (
    <>
      < Header />

      <section className="heading-container registerHeadingContainer">
        <div className="center-container userFormContainer">

          <div>
            <h1>Glad you want to join the community!</h1>
            <div className="registerHeadingComments">
              <p>Register as a customer instead? <a className="byTheWayLinks" href="signUpCust.html">sign up</a></p>
              <p>Already a Provider? <a href="login.html" className="byTheWayLinks">Login</a></p>
            </div>
          </div>

          <div className="heading-btn">
            <form className="userForm proSignupForm">
              <input type="text" id="firstName" name="firstName" className="userFormInput proFormInput" placeholder="First Name" required />
              <input type="text" id="lastName" name="lastName" className="userFormInput proFormInput" placeholder="Last Name" required />
              <input type="email" id="userEmail" name="userEmail" className="userFormInput proFormInput" placeholder="Email address" required />
              <input type="email" id="confirmEmail" name="confirmEmail" className="userFormInput proFormInput" placeholder="Confirm Email" required />
              <input type="password" id="password" name="password" className="userFormInput proFormInput" placeholder="Password" required />
              <input type="password" id="confirmPwd" name="confirmPwd" className="userFormInput proFormInput" placeholder="Confirm Password" required />

              <select id="selectService" className="userFormInput flexRowMargin proFormInput" name="selectservice" required>
                <option value="Select your Service category" > Select your Service category</option >
                <option value="plumbing">Plumbing</option>
                <option value="electrician">Electrician</option>
                <option value="cleaners">Cleaners</option>
                <option value="carpenters">Carpenters</option>
                <option value="handyman">Handymen</option>
                <option value="Painters">Painters</option>
              </select>

              <input type="text" id="companyName" name="companyName" className="userFormInput proFormInput" placeholder="Company Name" required />
              <input type="text" id="companyPostcode" name="companyPostcode" className="userFormInput proFormInput" placeholder="Company Postcode" required />
              <select id="selectCountry" className="userFormInput flexRowMargin" name="selectCountry" required>
                <option value="Select Country">Select Country</option>
                <option value="UK">UK</option>
              </select>

              <input type="text" id="companyPhoneNo" name="companyPhoneNo" className="userFormInput proFormInput" placeholder="Company Phone Number" required />
              <div className="rowFlex termsCheck proFormInput">
                <input type="checkbox" id="tAndC" name="tAndC" required />
                <p>I agree to the <a className="byTheWayLinks">Policy</a> and the <a className="byTheWayLinks">Terms and Conditions</a> of ServicesToYou.</p>
              </div>
              <input type="submit" id="createAccount" name="createAccount" className="userSearchBtn" value="Create Account" />


            </form>
          </div>
        </div>
      </section >

      < Footer />
    </>
  )
}

export default SignUpProPage







