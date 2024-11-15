import React, { useState,useEffect } from "react";
import house1 from '../images/car1.png'; 
import house2 from '../images/car2.png';
import house3 from '../images/car3.png';
import house4 from '../images/car4.png';
import house5 from '../images/car5.png';
import './House.css';
import { faCheckCircle,faArrowLeft, faArrowRight, faMapMarkerAlt, faTachometerAlt, faGasPump, faCogs, faUserAlt, faUsers, faCreditCard, faPalette, faShieldAlt, faRuler, faSquare, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Col, Container, Row, Card } from "react-bootstrap";
import {
  faBed, faBuilding, faBath, faCar, faElevator, faHome, faCompass,
  faCalendarAlt, faTag, faStore, faUser, faCalendar, faEye
} from "@fortawesome/free-solid-svg-icons";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";



// Define PropertyCard to display all property details
const PropertyCard = ({PPC_Id, price, model, description, images, features, details }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isGroundFloorVisible, setIsGroundFloorVisible] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  // Scroll Functions
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);


  const handleImageClick = (image) => setCurrentImage(image);

  const toggleGroundFloorVisibility = () => setIsGroundFloorVisible(!isGroundFloorVisible);

 


const vehicleDetails = [
    { label: 'Kilometers Driven', value: details.Kilometers_Driven, icon: faTachometerAlt },
    { label: 'Fuel Type', value: details.Fuel_Type, icon: faGasPump },
    { label: 'Transmission', value: details.Transmission, icon: faCogs },
    { label: 'Year of Manufacture', value: details.Year_of_Manufacture, icon: faCalendarAlt },
    { label: 'No. of Owners', value: details.No_Of_Owners, icon: faUserAlt },
    { label: 'Ownership', value: details.ownership, icon: faUsers },
    { label: 'Property Approved', value: details.propertyApproved ? "Yes" : "No", icon: faCheckCircle },
    { label: 'Bank Loan Available', value: details.bankLoan ? "Yes" : "No", icon: faCreditCard },
    { label: 'Posted By', value: details.Posted_By, icon: faUser },
    { label: 'Posted Date', value: details.postedDate, icon: faCalendar },
    { label: 'Registration State', value: details.Registration_State, icon: faMapMarkerAlt },
    { label: 'Views', value: details.noOfViews, icon: faEye },
    { label: 'Car Color', value: details.Car_Color || 'N/A', icon: faPalette },  
    { label: 'Insurance Type', value: details.Insurance_Type || 'N/A', icon: faShieldAlt },  
    
  ];


  return (
    <>

   {/* Dark Mode / Light Mode Toggle Button */}
   <button 
        className={`btn btn-${isDarkMode ? 'light' : 'dark'}`} 
        onClick={toggleDarkMode}
        style={{
          position: "fixed",
           top: "10%",
           right: "0%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          borderRadius: "50%",
          padding: "10px 20px",
          
        }}
      >
        {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
      </button>

      {/* Scroll Arrows (Fixed Position) */}
      <FontAwesomeIcon
        icon={faArrowUp}
        className="scroll-arrow-up text-warning"
        onClick={scrollToTop}
      />
      <FontAwesomeIcon
        icon={faArrowDown}
        className="scroll-arrow-down text-warning"
        onClick={scrollToBottom}
      />


      <h1 className="text-danger text-center mb-5">Maruti Suzuki Fronx</h1>
      
      <div className="card">
        <div className="row">
          {/* First Column: Main Image and Thumbnails */}
          <div className="col-md-6">
            <div className="position-relative">
              <img src={currentImage} className="card-img-top main-image" alt="property" />
            </div>
            {/* Thumbnail images */}
            <div className="d-flex justify-content-between mt-3">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`thumbnail-${index}`}
                  className="thumbnail-img"
                  onClick={() => handleImageClick(image)} 
                  style={{width:"75px",height:"75px"}}
                  />
              ))}
            </div>
          </div>

          {/* Second Column: Price, Address, Description */}
          <div className="col-md-6 p-5">
            <div className="card-body">
              <h3 className="pb-4"> PROPERTY INFO </h3>
              <h6 className="mb-3 text-info"> PPC_ID : {PPC_Id} </h6>
              <h5 className="card-title">PRICE :<span><button className="btn btn-warning text-white ms-2 p-2"> ${price} </button></span>  </h5>
              <p className="card-text mt-2"><span className="fw-bold">MODEL : </span>  {model}</p>
              
              {/* Property Info */}
              <div className="property-info">
                <h2 className="mt-3">Vehicle Detail</h2>
                <div><i className="fas fa-tachometer-alt me-2 "></i> Kilometers Driven:<strong>{details.Kilometers_Driven}</strong> </div>
                <div><i className="fas fa-gas-pump me-2 mt-2"></i> Fuel Type: <strong>{details.Fuel_Type}</strong></div>
                <div><i className="fas fa-cogs mt-2 "></i> Transmission:<strong>{details.Transmission}</strong> </div>
                <div><i className="fas fa-calendar-alt me-3 mt-2"></i> Year of Manufacture: <strong>{details.Year_of_Manufacture}</strong> </div>
                <div><i className="fas fa-paint-brush me-2 mt-2"></i> Color:<strong>{details.Car_Color === "N/A" ? "Not Available" : details.Car_Color} </strong>  </div>
              </div>

              {/* Property Description */}
              <div className="property-description">
                <p>{description}</p>
              </div>

              <a href="#" className="btn btn-primary">I'm Interested</a>
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>
      </div>



      {/* Property Details */}
      <div className="property-details mt-5">
        <h2>Property Features</h2>
        <Row>
          {vehicleDetails.map((detail, index) => (
            <Col md={4} sm={6} key={index} className="mb-3">
              <Card>
                <Card.Body>
                  <FontAwesomeIcon
                    icon={detail.icon}
                    style={{ color: 'green', marginRight: '10px' }}
                  />
                  <strong>{detail.label}:</strong> {detail.value}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Ground Floor 3D Design Section */}
      <h3 className="mt-3 p-3 bg-light">
      Interior 3D View
        <button onClick={toggleGroundFloorVisibility} className="btn btn-link" style={{ textDecoration: "none" }}>
          {isGroundFloorVisible ? '-' : '+'}
        </button>
      </h3>
      {isGroundFloorVisible && (
        <div className="ground-floor-3d">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRo56zFcREWhwNERhcFghLKzAzgZh7i6ZLw&s" alt="Ground Floor 3D Design" className="img-fluid w-75" />
        </div>
      )}

      {/* Google Map Section */}
      <div className="mt-5">
        <h2>Location: Pondicherry</h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps?q=Pondicherry&hl=en&z=14&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>

      {/* House Tour Video Section */}
      <div className="mt-5">
        <h2>Take a View Of Maruti Suzuki Fronx </h2>
        <div className="video-container">
          <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/4fULdQ_C9MM"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

  {/* Location Info and Action Cards */}
  <div className="mt-5">
  <h2>Location Info</h2>
  <h5 className="mt-3">
    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'blue', marginRight: '8px' }} />
    Pondicherry , TamilNadu  </h5>
  <div className="card mt-2 pb-4">
  <Row className="g-4 mt-2">
  <Col md={1} sm={4} xs={6}></Col>
  {/* Send Interest Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/interest.png" alt="Send Interest" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Send Interest</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Contact Owner Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3"  src="https://www.ppcpondy.com/img/img/3/contact.png" alt="Contact Owner" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Contact Owner</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Shortlist Ad Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/shortlist.png" alt="Shortlist Ad" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Shortlist Ad</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Report Ad Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/report.png" alt="Report Ad" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">Report Ad</Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Need Help Card */}
    <Col md={2} sm={4} xs={6}>
      <Card className="p-3">
        <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/help1.png" alt="Need Help" 
        style={{width:"50px",height:"50px",marginLeft:"35%"}} />
        <Card.Body>
          <Card.Text className="text-center">NEED HELP?</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>

  <div className="d-flex justify-content-center mt-4 gap-3">
  {/* Previous Ad Button */}
  <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
    <FontAwesomeIcon icon={faArrowLeft} /> <span className="ms-2">Previous Ad</span>
  </button>

  {/* Next Ad Button */}
  <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
    <span className="me-2">Next Ad</span> <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>

<Row className="align-items-center ">
  {/* First Column: Question */}
  <Col md={8} sm={12} className="text-center mt-4">
    <h4>Do you have a used property to sell?</h4>
  </Col>

  {/* Second Column: Button */}
  <Col md={4} sm={12} className="d-flex justify-content-center mt-4 justify-content-sm-start">
    <Button variant="success" className="px-4">Post Your Ad Now!</Button>
  </Col>
</Row>

  </div>
</div>


    </>
  );
};

// Main House Component
export default function Car() {
  const property = {
    images: [house1, house2, house3, house4, house5],
    PPC_Id: 1,
    price: "8,00,000",
    model: "Maruti Suzuki Fronx",
    description: "Cars are not just a passion, they are an expression of freedom.",
     details : {
        length: 55,
        breadth: 20,
        totalArea: 1100,
        ownership: "Single Owner",
        propertyApproved: true,
        bankLoan: true,
        Kilometers_Driven: "24,000 km",
        Fuel_Type: "Petrol",
        Posted_By: "Dealer",
        Year_of_Manufacture: 2018,
        Transmission: "Automatic",
        Insurance_Type: "N/A",
        No_Of_Owners: "First Owner",
        Car_Color: "N/A",
        Registration_State: "PY",
        postedDate: "28-02-2022",
        noOfViews: 1745
    },
   
  };

  return (
    <>
 <div className="container-fluid card">
  <Carousel className="slider" controls={false} indicators={false} interval={3000} pause={true}>
    <Carousel.Item>
      <Row className="align-items-center bg-dark">
        {/* Left Column: Image */}
        <Col xs={12} md={6}>
          <img src="https://imgd.aeplcdn.com/642x361/n/cw/ec/124093/urban-cruiser-hyryder-right-front-three-quarter.jpeg?isig=0" alt="Slide 1" height={500} className="d-block w-100 carousel-image" />
        </Col>

        {/* Right Column: Content */}
        <Col xs={12} md={6} className="text-centertext-md-start">
          <div style={{ padding: '20px' }}>
            <h1 className="p-2 fw-bold text-info mb-1" >HAPPY JOURNEY</h1>
            <h3 style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>
              The journey is just as important as the destination, especially when you're behind the wheel of your dream car.
            </h3>
          </div>
        </Col>
      </Row>
    </Carousel.Item>

    <Carousel.Item>
      <Row className="align-items-center  bg-dark ">
        {/* Left Column: Image */}
        <Col xs={12} md={6}>
          <img src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-2.png?isig=0&q=80" alt="Slide 2" height={500} className="d-block w-100 carousel-image" />
        </Col>

        {/* Right Column: Content */}
        <Col xs={12} md={6} className="text-center  text-md-start">
          <div style={{ padding: '20px' }}>
            <h1 className="p-2 fw-bold text-info  mb-1" >HAPPY JOURNEY</h1>
            <h3 style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>
              The journey is just as important as the destination, especially when you're behind the wheel of your dream car.
            </h3>
          </div>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
  <hr></hr>
</div>



      <div className="container mt-5">
        <PropertyCard {...property} />
      </div>
    </>
  );
}




