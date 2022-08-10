import { useNavigate } from 'react-router-dom';
import Footer from "./Footer"
import Header from "./Header"

const BookingPage = () => {

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/bookConfirmedPage");
    }

    return (
        <>
            < Header />

            <section className="heading-container">
                <div className="h1 bookingPageH4">
                    <h4>When would you like them to come?</h4>
                </div>
            </section>

            <section className="center-container blurWrapper">
                <div className="bookingContainer blurWrapper">

                    <form onSubmit={handleClick} method="GET" className="bookingFormArea">
                        <div className="dateTimeContainer">
                            <div className="rowFlex2">
                                <label htmlfor="selectDateTime"><strong>Select date and time</strong></label>
                                <input type="datetime-local" max="10:00" step="3600" name="selectDateTime" required />
                            </div>

                            <div className="rowFlex2">
                                <label htmlfor="NumOfHours"><strong>How many hours?</strong></label>
                                <input type="number" className="NumOfHours" name="NumOfHours" required />
                            </div>
                        </div>

                        <div class="textAreaContainer">
                            <p>Please describe the job in detail. (optional)</p>
                            <textarea className="dateTimeContainer" name="" id="" cols="30" rows="10"></textarea>
                        </div>


                        <p>Provide your contact details</p>
                        <div className="bookContactContainer">
                            <input type="email" id="customerEmail" name="customerEmail" class="userFormInput" placeholder="Email address" required />
                            <input type="text" id="customerPhoneNo" name="customerPhoneNo" class="userFormInput" placeholder="Phone Number" required />
                        </div>

                        <input className="userSearchBtn" type="submit" name="submitBookingInfo" id="submitBookingInfo" value="Book now" />
                    </form>

                </div>
            </section>

            < Footer />
        </>
    )
}

export default BookingPage