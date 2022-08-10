import { useNavigate } from 'react-router-dom';
import Footer from "./Footer"
import Header from "./Header"

const ProDetailsPage = () => {

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/bookingPage");
  }

  return (
    <>
      < Header />

      <section className="center-container largeblurWrapper blurWrapper">
        <h4>Details Page.</h4>
        <div className="proInfoContainer blurWrapper">
          <div className="proInfo">

            <div className="proPhoto proPhotoFirst">
              {/* <!-- <img src="images/beautyTechnician.jpg" alt="A Photo of a woman" width="150" height="100" > --> */}
            </div>

            <div className="proPhotoInfo">
              <p><strong>Hi, my name is Olivia Mark and I'm a professional Beauty Technician with over 20 years of experience.</strong></p><br />
              <p><strong><i>Services I provide: </i></strong></p>
              <ul>
                <li>Full Facial Make-over</li>
                <li>Body Steaming</li>
                <li>Full Set Manicure</li>
                <li>Full Set Pedicure</li>
                <li>Hair Trimming</li>
              </ul>


              <p><strong><i>My working hours: </i></strong></p>
              <ul>
                <li>Mondays: 10am - 12noon</li>
                <li>Tuesdays: 10am - 12noon</li>
                <li>Wednesdays: 10am - 12noon</li>
                <li>Thursdays: 10am - 12noon</li>
                <li>Fridays: 10am - 12noon</li>
                <li>Saturdays: 10am - 12noon</li>
                <li>Sundays: Closed</li>
              </ul>
              <div className="proStarsContainer">
                <p className="proName">Olivia Mark</p>
                <img src="images/twoHalfStars.png" alt="Two and half stars" width="50px" height="30px" />
                <input type="submit" className="viewDetailsBtn userSearchBtn" value="Continue to Book" onClick={handleClick} />
              </div>

              <p>Min. Hours: 1 hour</p>
              <p><strong>Rate: £15/hour</strong></p>
              <p className="proDescription"></p>
              {/* <!-- <input type="submit" className="viewDetailsBtn userSearchBtn" value="View Details"> --> */}
            </div>
          </div>
        </div>
      </section>

      < Footer />
    </>
  )
}

export default ProDetailsPage