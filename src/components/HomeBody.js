const HomeBody = () => {
    return (
        <>
            <section className="heading-container">
                <div className="center-container">

                    <div className="h1">
                        <h1>We Bring On-demand Home Services right to you.</h1>
                    </div>

                    <div className="heading-btn">
                        <form action="findAPro.html" method="GET" className="rowFlex">

                            <select id="selectService" className="userFormInput flexRowMargin" name="selectservice" placeholder="Select Service" required>
                                <option value="select Service">Select Service</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="electrician">Electrician</option>
                                <option value="cleaners">Cleaners</option>
                                <option value="carpenters">Carpenters</option>
                                <option value="handyman">Handymen</option>
                                <option value="Painters">Painters</option>
                            </select><br />

                            <input type="text" className="userFormInput flexRowMargin" placeholder="Enter City/Postcode" required />
                            <input type="submit" className="userFormInput userSearchBtn" value="Search" />
                        </form>

                    </div>
                </div>
            </section>

            <section className="popServicesSection">

                <div className="center-container">
                    <h4>POPULAR SERVICES.</h4>
                    <div className="popServicesContainer">
                        <div className="popServCont1">
                            <a href="signUpPro.html">
                                <img src="images/plumbers.png" alt="client logo" />
                                <p>Plumbers</p>
                            </a>

                            <a href="signUpPro.html" className="plumbersBackground">
                                <img src="images/electricians.png" alt="client logo" />
                                <p>Electricians</p>
                            </a>
                            <a href="signUpPro.html" className="plumbersBackground">
                                <img src="images/painters.png" alt="client logo" />
                                <p>Painters</p>
                            </a>
                            <a href="signUpPro.html" className="plumbersBackground">
                                <img src="../images/handymen.png" alt="client logo" />
                                <p>Handymen</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="images/cleaners.png" alt="client logo" />
                                <p>Cleaners</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="images/carpenters.png" alt="client logo" />
                                <p>Carpenters</p>
                            </a>
                        </div>

                        <div className="popServCont2">
                            <a href="signUpPro.html">
                                <img src="images/plumbers.png" alt="client logo" />
                                <p>Plumbers</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="images/electricians.png" alt="client logo" />
                                <p>Electricians</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="images/painters.png" alt="client logo" />
                                <p>Painters</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="images/handymen.png" alt="client logo" />
                                <p>Handymen</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="../images/cleaners.png" alt="client logo" />
                                <p>Cleaners</p>
                            </a>
                            <a href="signUpPro.html">
                                <img src="images/carpenters.png" alt="client logo" />
                                <p>Carpenters</p>
                            </a>
                        </div>
                    </div>

                    <input type="button" className="seeAll" value="See All"></input>
                </div>
            </section>
        </>
    )
}

export default HomeBody