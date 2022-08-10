import Footer from "./Footer"
import Header from "./Header"

const LoginPage = () => {
    return (

        <>
            < Header />

            <section className="heading-container registerHeadingContainer">
                <div className="center-container userFormContainer loginForm">
                    <div>
                        <h1>Good to see you again!</h1>
                    </div>
                    <div className="heading-btn">
                        <div>
                            <form className="userForm">

                                <input type="button" id="loginWithGoogle" name="loginWithGoogle" className="userFormInput userSearchBtn" value="Log in with Google" />
                                <p>OR</p>
                                <input type="email" id="userEmail" name="userEmail" className="userFormInput" placeholder="Email address" required />
                                <input type="password" id="pwd" name="pwd" className="userFormInput" placeholder="Password" required />
                                <a href="signUpPro.html" className="forgetPwd"><small>forget Password?</small></a>
                                <input type="submit" id="login" name="login" className="userFormInput userSearchBtn" value="Log in" />

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            < Footer />
        </>
    )
}

export default LoginPage