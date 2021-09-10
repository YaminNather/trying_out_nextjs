const FooterSection = () => {
  return (
    <section className="footer_section bg-dark py-5 text-light">
      <div className="container">
        <LinksArea />

        {/* <hr className="my-5" /> */}

        <SocialMediaIconsArea />
      </div>
    </section>
  );
};

const LinksArea: React.FC = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-inline-flex flex-column text-start w-25">
        <h6 className="m-0">MENU</h6>

        <hr className="mt-2 mb-3" />
        
        <ul className="text-white-50" style={{listStyle: "none", padding: 0}}>
          <li><a href="#">About Us</a></li>
          
          <li><a href="#">My Account</a></li>
          
          <li><a href="#">Orders History</a></li>
          
          <li><a href="#">Advanced Search</a></li>
        </ul>
      </div>

      <div className="d-inline-flex flex-column text-start w-25">
        <h6 className="m-0">FEATURES</h6>

        <hr className="mt-2 mb-3" />

        <ul className="text-white-50" style={{listStyle: "none", padding: 0}}>
          <li><a href="#">Virtual</a></li>
          
          <li><a href="#">Hybrid</a></li>
          
          <li><a href="#">In person</a></li>                
        </ul>
      </div>

      <div  className="d-inline-flex flex-column text-start w-25">
        <h6 className="m-0">CONTACT US</h6>

        <hr className="mt-2 mb-3" />

        <ul className="text-white-50" style={{listStyle: "none", padding: 0}}>
          <li>            
            Address: 123 Old Hospital Street
            <br/>Uthamapalayam,
            <br/>Theni-625533.            
          </li>
          
          <li>Phone:<br/>+91 9820184887</li>
          
          <li>Email:<br/>mail@example.com</li>
          
          <li>Working Days/Hours:<br/>Mon-Sun/9.00AM - 8.00PM</li>
        </ul>
      </div>          
    </div>
  );
}

const SocialMediaIconsArea: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h3 className="mb-4 text-secondary">Follow us on <b className="text-white">Social Media</b></h3>
      <div className={`d-flex justify-content-center footer_icons`}>
        <a href="#"><i className="bi bi-facebook h1" /></a>
        
        <a href="#"><i className="bi bi-twitter h1" /></a>

        <a href="#"><i className="bi bi-instagram h1" /></a>
        
        <a href="#"><i className="bi bi-github h1" /></a>
      </div>
    </div>
  );
}

export default FooterSection;