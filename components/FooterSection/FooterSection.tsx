const FooterSection = () => {
  return (
    <section className="footer_section bg-dark py-5 text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div className="d-inline-flex flex-column">
                <h3>MENU</h3>

                <ul style={{listStyle: "none", padding: 0}}>
                  <li><a href="#">About Us</a></li>
                  
                  <li><a href="#">My Account</a></li>
                  
                  <li><a href="#">Orders History</a></li>
                  
                  <li><a href="#">Advanced Search</a></li>
                </ul>
              </div> 
            </div>
          </div>

          <div className="col-md-4">
            <div className="container">
              <h3>FEATURES</h3>

              <ul style={{listStyle: "none", padding: 0}}>
                <li><a href="#">Virtual</a></li>
                
                <li><a href="#">Hybrid</a></li>
                
                <li><a href="#">In person</a></li>                
                </ul>
            </div>            
          </div>

          <div className="col-md-4">
            <div className="container">
              <h3>CONTACT US</h3>

              <ul style={{listStyle: "none", padding: 0}}>
                <li>
                  <a href="#">
                    Address: 123 Old Hospital Street
                    <br/>Uthamapalayam,
                    <br/>Theni-625533.
                  </a>
                </li>
                
                <li><a href="#">Phone:<br/>+91 9820184887</a></li>
                
                <li><a href="#">Email:<br/>mail@example.com</a></li>
                
                <li><a href="#">Working Days/Hours:<br/>Mon-Sun/9.00AM - 8.00PM</a></li>
              </ul>
            </div>            
          </div>

          {/* <div className="col-md-3">
            <div className="container">
              <h3>Follow Us</h3>

              <ul style={{listStyle: "none", padding: 0}}>
                <li>
                  <a href="#">
                    <div style={{display: "inline-flex", alignItems: "center", justifyContent: "flex-end"}}>
                      <i className="bi bi-facebook" />FACEBOOK
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="#">
                    <div style={{display: "inline-flex", alignItems: "center", justifyContent: "flex-end"}}>
                      <i className="bi bi-twitter" />TWITTER
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="#">
                    <div style={{display: "inline-flex", alignItems: "center", justifyContent: "flex-end"}}>
                      <i className="bi bi-instagram" />INSTAGRAM
                    </div>
                  </a>
                </li>
              </ul>
            </div>            
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;