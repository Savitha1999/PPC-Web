// import React, { useState,useEffect } from "react";
// import house1 from '../images/house1.png'; 
// import house2 from '../images/house2.png';
// import house3 from '../images/house3.png';
// import house4 from '../images/house4.png';
// import house5 from '../images/house5.png';
// import house6 from '../images/house6.png';
// import groundFloor3D from '../images/groundFloor3D.png'; 
// import c1 from '../images/c1.png';
// import c2 from '../images/c2.png';
// import c3 from '../images/c3.png';
// import './House.css';
// import { faCheckCircle,faArrowLeft, faArrowRight, faMapMarkerAlt, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Button, Carousel, Col, Container, Row, Card } from "react-bootstrap";
// import {
//   faBed, faBuilding, faBath, faCar, faElevator, faHome, faCompass,
//   faCalendarAlt, faTag, faStore, faUser, faCalendar, faEye
// } from "@fortawesome/free-solid-svg-icons";
// import { FaMoon } from "react-icons/fa6";
// import { IoSunnyOutline } from "react-icons/io5";


// // Define PropertyCard to display all property details
// const PropertyCard = ({PPC_Id, price, address, description, images, features, details }) => {
//   const [currentImage, setCurrentImage] = useState(images[0]);
//   const [isGroundFloorVisible, setIsGroundFloorVisible] = useState(false); 
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };


//   // Scroll Functions
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//   const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   const handleImageClick = (image) => setCurrentImage(image);

//   const toggleGroundFloorVisibility = () => setIsGroundFloorVisible(!isGroundFloorVisible);

 

//   // Map property details
//   const propertyDetails = [
//     { label: 'Bedrooms', value: details.bedroom, icon: faBed },
//     { label: 'Floors', value: details.noOfFloors, icon: faBuilding },
//     { label: 'Attached Bathroom', value: details.attached ? "Yes" : "No", icon: faBath },
//     { label: 'Car Park', value: details.carPark ? "Yes" : "No", icon: faCar },
//     { label: 'Lift', value: details.lift ? "Yes" : "No", icon: faElevator },
//     { label: 'Furnishing', value: details.furnished, icon: faHome },
//     { label: 'Facing', value: details.facing, icon: faCompass },
//     { label: 'Property Age', value: `${details.propertyAge} years`, icon: faCalendarAlt },
//     { label: 'Sale Type', value: details.saleType, icon: faTag },
//     { label: 'Sale Mode', value: details.saleMode, icon: faStore },
//     { label: 'Posted By', value: details.postedBy, icon: faUser },
//     { label: 'Posted Date', value: details.postedDate, icon: faCalendar },
//     { label: 'Views', value: details.noOfViews, icon: faEye }
//   ];

//   return (
//     <>
//       {/* Dark Mode / Light Mode Toggle Button */}
//    <button 
//         className={`bt btn-${isDarkMode ? 'light' : 'dark'}`} 
//         onClick={toggleDarkMode}
//         style={{
//           position: "fixed",
//            top: "10%",
//            right: "0%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 1000,
//           borderRadius: "50%",
//           padding: "10px 20px",
          
//         }}
//       >
//         {isDarkMode ? <IoSunnyOutline /> : <FaMoon className="dl" />}
//       </button>

//       {/* Scroll Arrows (Fixed Position) */}
//       <FontAwesomeIcon
//         icon={faArrowUp}
//         className="scroll-arrow-up text-warning"
//         onClick={scrollToTop}
//       />
//       <FontAwesomeIcon
//         icon={faArrowDown}
//         className="scroll-arrow-down text-warning"
//         onClick={scrollToBottom}
//       />
//       <h1 className="text-danger text-center mb-5"> Independent House </h1>
      
//       <div className="card">
//         <div className="row">
//           {/* First Column: Main Image and Thumbnails */}
//           <div className="col-md-6">
//             <div className="position-relative">
//               <img src={currentImage} className="card-img-top main-image mt-3 ps-2" alt="property" />
//             </div>
//             {/* Thumbnail images */}
//             <div className="d-flex justify-content-between mt-3">
//               {images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`thumbnail-${index}`}
//                   className="thumbnail-img "
//                   onClick={() => handleImageClick(image)}
//                   style={{width:"75px",height:"75px"}}
                
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Second Column: Price, Address, Description */}
//           <div className="col-md-6 p-5">
//             <div className="card-body">
//               <h3 className="pb-4"> PROPERTY INFO </h3>
//               <h6 className="mb-3 text-info"> PPC_ID : {PPC_Id} </h6>
//               <h5 className="card-title">PRICE :<span><button className="btn btn-warning text-white ms-2 p-2"> ${price} </button></span>  </h5>
//               <p className="card-text mt-2"><span className="fw-bold">ADDRESS : </span>  {address}</p>
              
//               {/* Property Info */}
//               <div className="property-info">
//                 <h2 className="mt-3">Property Detail</h2>
//                 <div><i className="fas fa-ruler-horizontal "></i> Length: {details.length} ft</div>
//                 <div><i className="fas fa-ruler-vertical me-3 mt2"></i> Breadth: {details.breadth} ft</div>
//                 <div><i className="fas fa-ruler-combined mt2"></i> Total Area: {details.totalArea} Sq.ft</div>
//                 <div><i className="fas fa-user-circle mt2"></i> Ownership: {details.ownership}</div>
//                 <div><i className="fas fa-check-circle mt2"></i> Property Approved: {details.propertyApproved ? "Yes" : "No"}</div>
//                 <div><i className="fas fa-university mt2"></i> Bank Loan: {details.bankLoan ? "Yes" : "No"}</div>
//               </div>

//               {/* Property Description */}
//               <div className="property-description">
//                 <p>{description}</p>
//               </div>

//               <a href="#" className="btn btn-primary">I'm Interested</a>
//               <a href="#" className="btn btn-success">Contact</a>
//             </div>
//           </div>
//         </div>
//       </div>



//       {/* Property Details */}
//       <div className="property-details mt-5">
//         <h2>Property Features</h2>
//         <Row>
//           {propertyDetails.map((detail, index) => (
//             <Col md={4} sm={6} key={index} className="mb-3">
//               <Card>
//                 <Card.Body>
//                   <FontAwesomeIcon
//                     icon={detail.icon}
//                     style={{ color: 'green', marginRight: '10px' }}
//                   />
//                   <strong>{detail.label}:</strong> {detail.value}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>

//       {/* Ground Floor 3D Design Section */}
//       <h3 className="mt-3 p-3 bg-light">
//         Ground Floor 3D Design
//         <button onClick={toggleGroundFloorVisibility} className="btn btn-link" style={{ textDecoration: "none" }}>
//           {isGroundFloorVisible ? '-' : '+'}
//         </button>
//       </h3>
//       {isGroundFloorVisible && (
//         <div className="ground-floor-3d">
//           <img src={groundFloor3D} alt="Ground Floor 3D Design" className="img-fluid w-75" />
//         </div>
//       )}

//       {/* Google Map Section */}
//       <div className="mt-5">
//         <h2>Location: Pondicherry</h2>
//         <div className="map-container">
//           <iframe 
//             src="https://www.google.com/maps?q=Pondicherry&hl=en&z=14&output=embed" 
//             width="100%" 
//             height="450" 
//             style={{ border: 0 }} 
//             allowFullScreen=""
//             loading="lazy">
//           </iframe>
//         </div>
//       </div>

//       {/* House Tour Video Section */}
//       <div className="mt-5">
//         <h2>Take a Tour of the House</h2>
//         <div className="video-container">
//           <iframe 
//             width="100%" 
//             height="500" 
//             src="https://www.youtube.com/embed/zumJJUL_ruM" 
//             frameBorder="0" 
//             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//             allowFullScreen>
//           </iframe>
//         </div>
//       </div>

//   {/* Location Info and Action Cards */}
//   <div className="mt-5">
//   <h2>Location Info</h2>
//   <h5 className="mt-3">
//     <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'blue', marginRight: '8px' }} />
//     Lawspet, Pondicherry City, Puducherry
//   </h5>
//   <div className="card mt-2 pb-4">
//   <Row className="g-4 mt-2">
//   <Col md={1} sm={4} xs={6}></Col>
//   {/* Send Interest Card */}
//     <Col md={2} sm={4} xs={6}>
//       <Card className="p-3">
//         <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/interest.png" alt="Send Interest" 
//         style={{width:"50px",height:"50px",marginLeft:"35%"}} />
//         <Card.Body>
//           <Card.Text className="text-center">Send Interest</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>

//     {/* Contact Owner Card */}
//     <Col md={2} sm={4} xs={6}>
//       <Card className="p-3">
//         <Card.Img variant="top" className="mt-3"  src="https://www.ppcpondy.com/img/img/3/contact.png" alt="Contact Owner" 
//         style={{width:"50px",height:"50px",marginLeft:"35%"}} />
//         <Card.Body>
//           <Card.Text className="text-center">Contact Owner</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>

//     {/* Shortlist Ad Card */}
//     <Col md={2} sm={4} xs={6}>
//       <Card className="p-3">
//         <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/shortlist.png" alt="Shortlist Ad" 
//         style={{width:"50px",height:"50px",marginLeft:"35%"}} />
//         <Card.Body>
//           <Card.Text className="text-center">Shortlist Ad</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>

//     {/* Report Ad Card */}
//     <Col md={2} sm={4} xs={6}>
//       <Card className="p-3">
//         <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/report.png" alt="Report Ad" 
//         style={{width:"50px",height:"50px",marginLeft:"35%"}} />
//         <Card.Body>
//           <Card.Text className="text-center">Report Ad</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>

//     {/* Need Help Card */}
//     <Col md={2} sm={4} xs={6}>
//       <Card className="p-3">
//         <Card.Img variant="top" className="mt-3" src="https://www.ppcpondy.com/img/img/3/help1.png" alt="Need Help" 
//         style={{width:"50px",height:"50px",marginLeft:"35%"}} />
//         <Card.Body>
//           <Card.Text className="text-center">NEED HELP?</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   </Row>

//   <div className="d-flex justify-content-center mt-4 gap-3">
//   {/* Previous Ad Button */}
//   <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
//     <FontAwesomeIcon icon={faArrowLeft} /> <span className="ms-2">Previous Ad</span>
//   </button>

//   {/* Next Ad Button */}
//   <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
//     <span className="me-2">Next Ad</span> <FontAwesomeIcon icon={faArrowRight} />
//   </button>
// </div>

// <Row className="align-items-center ">
//   {/* First Column: Question */}
//   <Col md={8} sm={12} className="text-center mt-4">
//     <h4>Do you have a used property to sell?</h4>
//   </Col>

//   {/* Second Column: Button */}
//   <Col md={4} sm={12} className="d-flex justify-content-center mt-4 justify-content-sm-start">
//     <Button variant="success" className="px-4">Post Your Ad Now!</Button>
//   </Col>
// </Row>

//   </div>
// </div>


//     </>
//   );
// };

// // Main House Component
// export default function House() {
//   const property = {
//     images: [house1, house2, house3, house4, house5, house6],
//     PPC_Id: 1,
//     price: "2,50,00,000",
//     address: "123 Main St, Springfield, IL",
//     description: "Beautiful 3 bed, 2 bath house with a garden and garage.",
//     details: {
//       length: 55,
//       breadth: 20,
//       totalArea: 1100,
//       ownership: "Single Owner",
//       propertyApproved: true,
//       bankLoan: true,
//       bedroom: 1,
//       noOfFloors: 2,
//       attached: false,
//       western: false,
//       carPark: false,
//       lift: false,
//       furnished: "Un Furnished",
//       facing: "South",
//       propertyAge: 15,
//       saleType: "Normal",
//       saleMode: "N/A",
//       postedBy: "Developer",
//       postedDate: "28-02-2022",
//       noOfViews: 1745
//     },
   
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <Carousel className="slider" controls={false} indicators={false} interval={3000} pause={true}>
//           <Carousel.Item>
//             <img src={c3} alt="Slide 1" height={500} className="d-block w-100 carousel-image" />
//             <Carousel.Caption className="text-center" style={{ marginBottom: "20px" }}>
//               <Row>
//                 <Col xs={12} style={{ fontStyle: "italic" }}>
//                   <h1 className="p-2 fw-bold mb-1" style={{ color: "black" }}>YOUR DREAM HOUSE</h1>
//                   <h3 style={{ color: "white", fontSize: "40px", marginBottom: "100px", fontWeight: "bold" }}>Home is not a place… it's a feeling</h3>
//                 </Col>
//               </Row>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img src={c2} alt="Slide 2" height={500} className="d-block w-100 carousel-image" />
//             <Carousel.Caption className="text-center" style={{ marginBottom: "20px" }}>
//               <Row>
//                 <Col xs={12} style={{ fontStyle: "italic" }}>
//                   <h1 className="p-2 fw-bold mb-1" style={{ color: "black" }}>YOUR DREAM HOUSE</h1>
//                   <h3 style={{ color: "white", fontSize: "40px", marginBottom: "100px", fontWeight: "bold" }}>Home is not a place… it's a feeling</h3>
//                 </Col>
//               </Row>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       <div className="container mt-5">
//         <PropertyCard {...property} />
//       </div>
//     </>
//   );
// }









































// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios

// // Define PropertyCard to display all property details
// const PropertyCard = ({ property }) => {
//   const [currentImage, setCurrentImage] = useState(property.car_image || "default_image_url_here");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Handle dark mode toggle
//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   return (
//     <>
//       {/* Dark Mode Toggle */}
//       <button 
//         className={`btn btn-${isDarkMode ? 'light' : 'dark'}`} 
//         onClick={toggleDarkMode}
//         style={{ position: "fixed", top: "10%", right: "10%", zIndex: 1000 }}
//       >
//         {isDarkMode ? "🌞" : "🌙"}
//       </button>

//       {/* Property Info */}
//       <div className="card">
//         <div className="row">
//           <div className="col-md-6">
//             <img src={currentImage} alt="property" className="img-fluid" />
//             {/* Thumbnail images */}
//             <div className="d-flex justify-content-between mt-3">
//               {property.car_photo && (
//                 <img
//                   src={property.car_photo}
//                   alt="thumbnail"
//                   className="thumbnail-img"
//                   style={{ width: "75px", height: "75px" }}
//                 />
//               )}
//             </div>
//           </div>
//           <div className="col-md-6 p-5">
//             <h5>Price: {property.price}</h5>
//             <p>{property.state}, {property.city}</p>
//             <p>{property.prop_type} ({property.tot_area} {property.area_unit})</p>
//             <p>{property.car_title1}</p>
//             <p>{property.activation_date}</p>
//             <p>Contact: {property.homecall}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default function House() {
//   const [propertyData, setPropertyData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     id: "",
//     phone: "",
//     car_title1: "",
//     price: "",
//     prop_type: "",
//     tot_area: "",
//     area_unit: "",
//     state: "",
//     city: "",
//     nego: "",
//     bed: "",
//     car_photo: "",
//     postedby: "",
//     homecall: "",
//     activation_date: "",
//     car_image: "",
//     featured: "",
//   });

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state
  
//     try {
//       console.log('Form data being sent:', formData); // Log form data before sending
//       const response = await axios.post("https://ppcpondy.com/application/detail.php", formData);
//       console.log('Response data:', response.data); // Log response data
  
//       const mergedData = {
//         ...formData,
//         ...response.data[0], // Assuming the response is an array and we merge the first item
//       };
//       setPropertyData(mergedData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };
  

//   return (
//     <div className="container mt-5">
//       {/* Form to submit data */}
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-3">
//           <label htmlFor="id" className="form-label">Property ID</label>
//           <input
//             type="text"
//             id="id"
//             name="id"
//             value={formData.id}
//             onChange={handleInputChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phone" className="form-label">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="form-control"
//             required
//           />
//         </div>

//         {/* Additional fields (can add more if needed) */}
//         <div className="mb-3">
//           <label htmlFor="car_title1" className="form-label">Car Title</label>
//           <input
//             type="text"
//             id="car_title1"
//             name="car_title1"
//             value={formData.car_title1}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>

//         {/* Submit button */}
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>

//       {/* Display Property Cards if merged data is available */}
//       {propertyData ? (
//         <div>
//           <PropertyCard property={propertyData} />
//         </div>
//       ) : (
//         <div>No property data available</div>
//       )}
//     </div>
//   );
// }




























































// import React, { useState, useEffect } from "react";
// import axios from "axios"; 

// const PropertyCard = ({ property }) => {
//   const [currentImage, setCurrentImage] = useState(property.property_image || "default_image_url_here");

//   return (
//     <div className="card mb-4">
//       <div className="row">
//         <div className="col-md-6">
//           {/* Display Property Image */}
//           <img src={currentImage} alt="property" className="img-fluid" />
//         </div>
//         <div className="col-md-6 p-5">
//           <h5>Price: ₹{property.price}</h5>
//           <p><strong>Location:</strong> {property.state}, {property.city}</p>
//           <p><strong>Property Type:</strong> {property.property_type} ({property.total_area} {property.area_unit})</p>
//           <p><strong>Facing:</strong> {property.facing}</p>
//           <p><strong>Posted by:</strong> {property.posted_by}</p>
//           <p><strong>Activation Date:</strong> {property.activation_date}</p>
//           <p><strong>Contact:</strong> {property.owner_phone}</p>
//           <p><strong>Description:</strong> {property.description || "No description available"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function House() {
//   const [propertyData, setPropertyData] = useState([]);

//   useEffect(() => {
//     const fetchPropertyData = async () => {
//       try {
//         const response = await axios.post("https://ppcpondy.com/application/detail.php", {
//           ppc_id: "10450", // Use the property ID or any identifier
//         });
//         console.log('Response data:', response.data); // Log response data

//         // Assuming the API returns an array, set it directly to the state
//         setPropertyData(response.data); // Set the fetched data into state
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false); // Stop loading after fetching data
//       }
//     };

//     fetchPropertyData();
//   }, []); // Empty dependency array means this runs once when the component mounts

//   return (
//     <div className="container mt-5">
//       {/* Loading state */}
//       {loading && <div>Loading property data...</div>}

//       {/* Display Property Cards if data is available */}
//       {propertyData.length > 0 ? (
//         propertyData.map((property, index) => (
//           <PropertyCard key={index} property={property} />
//         ))
//       ) : (
//         !loading && <div>No property data available</div>
//       )}
//     </div>
//   );
// }



















// import React, { useState, useEffect } from "react";
// import axios from "axios"; 

// const HouseCard = ({ house }) => {
//   return (
//     <div className="card mb-4">
//       <div className="row">
//         <div className="col-md-6">
//           <img src={house.property_image || "default_image_url_here"} alt="house" className="img-fluid" />
//         </div>
//         <div className="col-md-6 p-5">
//           <h5>Price: ₹{house.price}</h5>
//           <p><strong>Location:</strong> {house.state}, {house.city}</p>
//           <p><strong>Type:</strong> {house.property_type} ({house.total_area} {house.area_unit})</p>
//           <p><strong>Facing:</strong> {house.facing}</p>
//           <p><strong>Posted by:</strong> {house.posted_by}</p>
//           <p><strong>Activation Date:</strong> {house.activation_date}</p>
//           <p><strong>Contact:</strong> {house.owner_phone}</p>
//           <p><strong>Description:</strong> {house.description || "No description available"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function House() {
//   const [houseData, setHouseData] = useState([]); 
//   const [loading, setLoading] = useState(true);  

//   useEffect(() => {
//     const fetchHouseData = async () => {
//       setLoading(true); 
//       try {
//         const response = await axios.post("https://ppcpondy.com/application/detail.php", {
//           ppc_id: "10450", 
//         });
//         console.log('Response data:', response.data);

//         setHouseData(response.data); 
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchHouseData();
//   }, []); 

//   return (
//     <div className="container mt-5">
//       {loading && <div>Loading house data...</div>}

//       {houseData.length > 0 ? (
//         houseData.map((house, index) => (
//           <HouseCard key={index} house={house} />
//         ))
//       ) : (
//         !loading && <div>No house data available</div>
//       )}
//     </div>
//   );
// }




















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function House() {
//   const [houseData, setHouseData] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     const fetchHouseData = async () => {
//       setLoading(true); 
//       setError(null); 

//       try {
//         const response = await axios.post("https://ppcpondy.com/application/detail.php", {
//           ppc_id: "10450",
//           status: "1",
//           country_code: "0",
//           owner_phone: "9600902096",
//           property_mode: "Residential",
//           property_type: "Plot",
//           price: "10656000",
//           negotiation: "YES",
//           length: "30",
//           breadth: "60",
//           total_area: "1800",
//           area_unit: "Sq.ft",
//           ownership: "Single Owner",
//           property_approved: "Yes",
//           bank_loan: "Yes",
//           property_age: "",
//           bedroom: "0",
//           no_of_floors: "",
//           attached: "",
//           western: "",
//           car_park: "",
//           lift: "",
//           furnished: "",
//           facing: "South",
//           sale_type: "Normal",
//           sale_mode: "Full payment",
//           posted_by: "Owner",
//           description: "",
//           state: "Pondicherry",
//           district: "Puducherry",
//           city: "Pondicherry City",
//           area: "Pondicherry Town",
//           nagar: "pondicherry",
//           street: "pondy road",
//           door_no: "",
//           name: "OWNER",
//           email: "",
//           alt_country_code: "91",
//           alt_mobile_number: "0",
//           best_time_to_call: "Any Time",
//           property_image: "PPC_ID_10450-1.png",
//           video: "",
//           property_title: "Residential Plot",
//           property_featured: "1",
//           total_views: "9",
//           delete_date: "",
//           submit_date: "2024-11-14 12:12:50",
//           submitted_by: "MARLINEPPC",
//           pre_approved_by: "MARLINEPPC",
//           pre_approved_date: "2024-11-14 12:14:03",
//           approved_by: "MARLINEPPC",
//           approved_date: "2024-11-14 12:14:20",
//           activation_date: "2024-11-14 12:14:20",
//           expire_date: "2025-02-12 12:14:20",
//           failed_date: "",
//           ads_type: "FREE",
//           bill_no: "PPC - 157",
//           payment_type: "Free",
//           bill_created: "MARLINEPPC",
//           billed_office: "AUROBINDO",
//           subscribe_id: "",
//           subscribe_ppc_id: "",
//           pay_later: "",
//           pay_later_date: "",
//           pay_later_resolve_by: "",
//           pay_later_resolve_cmt: "",
//           lead: "0",
//           lead_comment: "",
//           lead_gen_by: "",
//           lead_date: "",
//           ppc_car: "",
//           ppc_owner_phone: "",

//         });

//         console.log('Fetched Data:', response.data); 

//         if (Array.isArray(response.data)) {
//           setHouseData(response.data); 
//         } else {
//           setError("Data format is invalid.");
//         }
//       } catch (error) {
//         setError("Failed to fetch data. Please try again later.");
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchHouseData();
//   }, []); 

//   return (
//     <div className="container mt-5">
//       {loading && <div>Loading house data...</div>} 

//       {error && <div className="alert alert-danger">{error}</div>} 
//       {houseData.length > 0 ? (
//         houseData.map((house) => (
//           <div className="card mb-4" key={house.ppc_id}>
//             <div className="row">
//               <div className="col-md-6">

//                 <img
//                   src={house.property_image || "https://via.placeholder.com/500x300?text=No+Image+Available"}
//                   alt="house"
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="col-md-6 p-5">
//                 <h5>Price: ₹{house.price}</h5>
//                 <p><strong>Location:</strong> {house.state}, {house.city}</p>
//                 <p><strong>Type:</strong> {house.property_type} ({house.total_area} {house.area_unit})</p>
//                 <p><strong>Facing:</strong> {house.facing}</p>
//                 <p><strong>Posted by:</strong> {house.posted_by}</p>
//                 <p><strong>Activation Date:</strong> {new Date(house.activation_date).toLocaleDateString()}</p>
//                 <p><strong>Contact:</strong> {house.owner_phone}</p>
//                 <p><strong>Description:</strong> {house.description || "No description available"}</p>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         !loading && <div>No house data available</div> 
//       )}
//     </div>
//   );
// }



















import React, { useState, useEffect } from "react";
import axios from "axios";

export default function House() {
  const [houseData, setHouseData] = useState([]);  // Store fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    const fetchHouseData = async () => {
      setLoading(true);  // Start loading
      setError(null);  // Reset any previous error

      try {
        // Make the API call
        const response = await axios.post("https://ppcpondy.com/application/detail.php", {
          ppc_id: "10450",  // Example request parameter
        });

        console.log('Fetched Data:', response.data); // Check the response structure

        // Check if the response is an array
        if (Array.isArray(response.data)) {
          setHouseData(response.data);  // Set the fetched data
        } else {
          setError("Data format is invalid.");  // If it's not an array
        }
      } catch (error) {
        setError("Failed to fetch data. Please try again later.");  // Error handling
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);  // End loading state
      }
    };

    fetchHouseData();  // Call the function to fetch data when component mounts
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container mt-5">
      {loading && <div>Loading house data...</div>}  {/* Loading message */}

      {error && <div className="alert alert-danger">{error}</div>}  {/* Error message */}

      {/* Check if houseData exists and render data directly */}
      {houseData.length > 0 ? (
        houseData.map((house) => (
          <div className="card mb-4" key={house.ppc_id}>
            <div className="row">
              <div className="col-md-6">
                {/* Property image, fallback if not available */}
                <img
                  src={house.property_image || "https://via.placeholder.com/500x300?text=No+Image+Available"}
                  alt="house"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 p-5">
                <h5>Price: ₹{house.price}</h5>
                <p><strong>Location:</strong> {house.state}, {house.city}</p>
                <p><strong>Type:</strong> {house.property_type} ({house.total_area} {house.area_unit})</p>
                <p><strong>Facing:</strong> {house.facing}</p>
                <p><strong>Posted by:</strong> {house.posted_by}</p>
                <p><strong>Activation Date:</strong> {new Date(house.activation_date).toLocaleDateString()}</p>
                <p><strong>Contact:</strong> {house.owner_phone}</p>
                <p><strong>Description:</strong> {house.description || "No description available"}</p>

                {/* Optionally display more fields if required */}
                <p><strong>Bank Loan Available:</strong> {house.bank_loan === "Yes" ? "Yes" : "No"}</p>
                <p><strong>Ownership:</strong> {house.ownership}</p>
                <p><strong>Sale Type:</strong> {house.sale_type}</p>
                <p><strong>Sale Mode:</strong> {house.sale_mode}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        !loading && <div>No house data available</div> 
      )}
    </div>
  );
}
