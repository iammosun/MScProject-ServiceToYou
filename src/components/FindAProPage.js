import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

const FindAProPage = () => {

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/ProDetailsPage");
    }

    return (
        <>
            < Header />

            <section className="heading-container findAProContainer">
                <div className="center-container">
                    <div className="h1">
                        <h1>We Bring On-demand Home Services right to you.</h1>
                    </div>
                    <div className="heading-btn">
                        <form method="GET" className="rowFlex findProForm">

                            <select id="selectService" className="userFormInput flexRowMargin" name="selectservice" placeholder="Select Service" required>
                                <option value="select Service">Select Service</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="electrician">Electrician</option>
                                <option value="cleaners">Cleaners</option>
                                <option value="carpenters">Carpenters</option>
                                <option value="handyman">Handymen</option>
                                <option value="Painters">Painters</option>
                            </select><br />

                            <input type="date" className="userFormInput flexRowMargin" name="date" placeholder="Choose date" required />
                            {/* <input type="time" class="userFormInput flexRowMargin" name="time" placeholder="Choose time" required /> */}
                            <input type="text" className="userFormInput flexRowMargin" name="cityPostcode" placeholder="Enter City/Postcode" required />
                            <input type="submit" className="userFormInput userSearchBtn" value="Find Providers" />
                        </form>

                        <form method="GET" className="sortBy">
                            <label htmlFor="sortBy">Sort by</label>
                            <select id="selectService" className="" name="sortBy">
                                <option value="recommended">recommended</option>
                                <option value="nearest">nearest</option>
                                <option value="ratings">ratings</option>
                            </select><br />
                        </form>
                    </div>
                </div>
            </section>

            <section className="center-container blurWrapper">
                <div className="proInfoContainer blurWrapper">
                    <div className="proInfo">
                        <div className="proPhoto proPhotoFirst">
                            {/* <img src="images/beautyTechnician.jpg" alt="A Photo of a woman" width="150" height="100" > */}
                        </div>
                        <div className="proPhotoInfo">
                            <h4><strong>Beauty Technician</strong></h4>
                            <div className="proStarsContainer">
                                <p className="proName"><strong>Olivia Mark</strong></p>
                                <img src="../../images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                                <input type="button" className="viewDetailsBtn userSearchBtn" value="View Details" onClick={handleClick} />
                            </div>

                            <p>Min. Hours: 1 hour</p>
                            <p>Rate: £15/hour</p>
                            <p className="proDescription">I am a professional carpenter with 20 years of experience in my field.</p>
                            {/* <input type="submit" class="viewDetailsBtn userSearchBtn" value="View Details"> */}

                        </div>

                    </div>

                    <div className="proDescription">

                    </div>

                    <div className="viewDetails">

                    </div>
                </div>

                <div className=" proInfoContainer blurWrapper">
                    <div className="proInfo">
                        <div className="proPhoto proPhotoSecond">
                            {/* <img src="images/carpenter.jpg" alt="A Photo of a woman" width="150" height="100" /> */}
                        </div>
                        <div className="proPhotoInfo">
                            <h4><strong>Carpenter</strong></h4>
                            <div className="proStarsContainer">
                                <p className="proName"><strong>Steven Kane</strong></p>
                                <img src="images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                                <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details" />
                            </div>
                            <p>Min. Hours: 1 hour</p>
                            <p>Rate: £20/hour</p>
                            <p className="proDescription">I am a professional carpenter with 20 years of experience in my field.</p>
                            {/* <input type="submit" class="viewDetailsBtn userSearchBtn" value="View Details" /> */}
                        </div>

                    </div>

                    <div className="proDescription">

                    </div>

                    <div className="viewDetails">

                    </div>
                </div>

                <div className="proInfoContainer blurWrapper">
                    <div className="proInfo">
                        <div className="proPhotoThird proPhoto">
                            {/* <p>hey</p> */}
                            {/* <img src="images/handyMan.jpg" alt="A Photo of a woman" width="150" height="100" > --> */}
                        </div>
                        <div className="proPhotoInfo">
                            <h4><strong>Handy Man</strong></h4>
                            <div className="proStarsContainer">
                                <p className="proName"><strong>Leo James</strong></p>
                                <img src="images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                                <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details" />
                            </div>
                            <p>Min. Hours: 2 hours</p>
                            <p>Rate: 18/hour</p>
                            <p className="proDescription">I am a professional carpenter with 20 years of experience in my field.</p>
                            {/* <!-- <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details"> */}
                        </div>

                    </div>

                    <div className="proDescription">

                    </div>

                    <div className="viewDetails">

                    </div>
                </div>

                <div className=" proInfoContainer blurWrapper">
                    <div className="proInfo">
                        <div className="proPhoto proPhotoSecond">
                            {/* <!-- <img src="images/carpenter.jpg" alt="A Photo of a woman" width="150" height="100" > */}
                        </div>
                        <div className="proPhotoInfo">
                            <h4><strong>Carpenter</strong></h4>
                            <div className="proStarsContainer">
                                <p className="proName"><strong>Steven Kane</strong></p>
                                <img src="images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                                <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details" />
                            </div>
                            <p>Min. Hours: 1 hour</p>
                            <p>Rate: £20/hour</p>
                            <p className="proDescription">I am a professional carpenter with 20 years of experience in my field.</p>
                            {/* <input type="submit" class="viewDetailsBtn userSearchBtn" value="View Details"> --> */}
                        </div>

                    </div>

                    <div className="proDescription">

                    </div>

                    <div className="viewDetails">

                    </div>
                </div>

                <div className="proInfoContainer blurWrapper">
                    <div className="proInfo">
                        <div className="proPhoto proPhotoFirst">
                            {/* <img src="images/beautyTechnician.jpg" alt="A Photo of a woman" width="150" height="100" > --> */}
                        </div>
                        <div className="proPhotoInfo">
                            <h4><strong>Beauty Technician</strong></h4>
                            <div className="proStarsContainer">
                                <p className="proName"><strong>Olivia Mark</strong></p>
                                <img src="images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                                <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details" />
                            </div>

                            <p>Min. Hours: 1 hour</p>
                            <p>Rate: £15/hour</p>
                            <p className="proDescription">I am a professional carpenter with 20 years of experience in my field.</p>
                            {/* <input type="submit" class="viewDetailsBtn userSearchBtn" value="View Details"> --> */}

                        </div>

                    </div>

                    <div className="proDescription">

                    </div>

                    <div className="viewDetails">

                    </div>
                </div>

                <div className="proInfoContainer blurWrapper">
                    <div className="proInfo">
                        <div className="proPhotoThird proPhoto">
                            <p>hey</p>
                            {/* <!<img src="images/handyMan.jpg" alt="A Photo of a woman" width="150" height="100" > --> */}
                        </div>
                        <div className="proPhotoInfo">
                            <h4><strong>Handy Man</strong></h4>
                            <div className="proStarsContainer">
                                <p className="proName"><strong>Leo James</strong></p>
                                <img src="images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                                <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details" />
                            </div>
                            <p>Min. Hours: 2 hours</p>
                            <p>Rate: 18/hour</p>
                            <p className="proDescription">I am a professional carpenter with 20 years of experience in my field.</p>
                            {/* <input type="submit" class="viewDetailsBtn userSearchBtn" value="View Details"> --> */}
                        </div>

                    </div>

                    <div className="proDescription">

                    </div>

                    <div className="viewDetails">

                    </div>
                </div>
            </section>

            < Footer />
        </>
    )
}

export default FindAProPage