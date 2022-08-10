const Footer = () => {
    return (
        <footer>
            <div className="followUs evenFlex">
                <p>Follow Us</p>

                <p>Copyright &copy; 2022 ServicesToYou.</p>
            </div>

            <ul className="footerLinks evenFlex">
                <li><a href="signUpPro.html">AboutUs</a></li>
                <li><a href="signUpPro.html">Contact</a></li>
                <li><a href="signUpPro.html">Privacy Policy</a></li>
                <li><a href="signUpPro.html">Help Center</a></li>
            </ul>


            <div className="otherLinksContainer evenFlex">
                <ul className="quickLinks">
                    <li>Quick Links</li>
                    <li><a href="signUpPro.html" className="byTheWayLinks">Home</a></li>
                    <li><a href="signUpPro.html" className="byTheWayLinks">Log in</a></li>
                    <li><a href="signUpPro.html" className="byTheWayLinks">Register</a></li>
                    <li><a href="signUpPro.html" className="byTheWayLinks">Login</a></li>
                </ul>
            </div>


        </footer>
    )
}

export default Footer