import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import FooterSection from "../components/FooterSection/FooterSection";
import styles from '../styles/SecondPage.module.css';


const SecondPage: NextPage = () => {
  return (
    <div>
      {buildHead()}
      
      {buildNavbar()}

      {buildShowcaseSection()}

      {buildSubscribeToNewsletterSection()}

      {buildFeaturesSection()}

      {buildLearnSections()}

      {buildQuestionsSection()}

      {buildInstructorsSection()}

      <FooterSection />

      {/* {buildContactDetailsSection()} */}
    </div>
  );
};


function buildHead() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="with=device-width, initial-scale=1.0" />
      <title>FrontEnd Bootcamp</title>
    </Head>
  );
}

function buildNavbar(): React.ReactNode {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">Frontend Bootcamp</a>

        <button className="navbar-toggler" type="button" data-bs-target="#navmenu" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">What you'll Learn</a>
            </li>

            <li className="nav-item">
              <a href="#questions" className="nav-link">Questions</a>
            </li>

            <li className="nav-item">
              <a href="#instructors" className="nav-link">Instructors</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function buildShowcaseSection(): React.ReactNode {
  return (
    <section className={`bg-dark text-light py-5 py-md-0 text-center text-sm-start`}>
      <div className={`container`}>
        <div className={`${styles.showcase_section} d-sm-flex align-items-center justify-content-between`}>
          <div>
            <h2>Get yourself a professional</h2>
            <h1 className="text-warning">Virtual Assistant</h1>

            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest and greatest technologies
              to prepare them for their first dev role
            </p>

            <button className="btn btn-primary btn-lg">Start Enrollment </button>
          </div>        
          
            <img className="w-50 d-none d-sm-block" src="/showcase.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

function buildSubscribeToNewsletterSection(): React.ReactNode {
  return (
    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center"></div>
        <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>
      </div>
    </section>
  );
}

function buildFeaturesSection(): React.ReactNode {
  function buildFeatureItem(title: string, icon: string, cardColor: string): React.ReactNode {
    return (
      <div className="col-md">
        <div className={`card bg-${cardColor} text-light ${styles.features_card}`}>
          <div className="card-body text-center">
            <div className="h1 mb-3">
              <i className={`bi bi-${icon}`}></i>
            </div>

            <h3 className="card-title mb-3">{title}</h3>

            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium maxime blanditiis id nisi porro.
            </p>

            <a href="/" className="btn btn-primary">Read More</a>            
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">        
          {buildFeatureItem("Virtual", "laptop", "dark")}        
          
          {buildFeatureItem("Hybrid", "person-square", "secondary")}
          
          {buildFeatureItem("In Person", "people", "dark")}          
        </div>       
      </div>
    </section>
  );
}

function buildLearnSections():React.ReactNode {
  function buildItem(backgroundColor: string, imageURL: string, imagePosition: "left" | "right"): React.ReactNode {
    const image: React.ReactNode = (
      <div className="col-md">
        <img src={imageURL} className="img-fluid" alt="" />
      </div>
    );

    var textColor: string = (backgroundColor == "dark") ? "light" : "dark";

    const details: React.ReactNode = (
      <div className={`col-md p-5 text-${textColor}`}>
        <h2>Learn the Fundamentals</h2>

        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ut consequatur! Earum aperiam distinctio tenetur?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed provident molestias aliquam expedita quis sequi sit 
          dolor et temporibus voluptatum deleniti facere debitis, voluptatibus rem atque unde nihil est mollitia.
        </p>

        <a href="#" className="btn btn-light mt-3">
          <i className="bi bi-chevron-right" /> Read More
        </a>
      </div>
    );

    var rowChildren: React.ReactNode = null;
    if(imagePosition == "left") {
      rowChildren = (
        <>
          {image}
          
          {details}
        </>
      );
    }
    else {
      rowChildren = (
        <>
          {details}

          {image}
        </>
      );
    }

    return (
      <section className={`bg-${backgroundColor}`}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {rowChildren}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="learn">
      {buildItem("", "/fundamentals.svg", "left")}
      
      {buildItem("dark", "/react.svg", "right")}
    </section>
  );
}

function buildQuestionsSection(): React.ReactNode {
  function buildQuestion(id: string, question: string): React.ReactNode {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" data-bs-target={`#${id}`}
          >
            {question}
          </button>
        </h2>
        
        <div id={id} className="accordion-collapse collapse" data-bs-parent="#questions">
          <div className="accordion-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, neque.
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="questions" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        
        <div className="accordion accordion-flush" id="questions">
          {buildQuestion("question-0", "Where exactly are you located?")}

          {buildQuestion("question-1", "How much does it cost to attend?")}
          
          {buildQuestion("question-2", "What do I need to know?")}
        </div>
      </div>
    </section>
  );
}

function buildInstructorsSection(): React.ReactNode {
  function buildItem(name: string, imageURL: string): React.ReactNode {
    return (
      <div className="col-md-6 col-lg-3">
        <div className={`card bg-light ${styles.instructor_card}`}>
          <div className="card-body text-center">
            <img src={imageURL} alt="" className="rounded-circle mb-3" />

            <h3 className="card-title mb-3">{name}</h3>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, temporibus corporis odio aperiam veniam officiis?
            </p>
            <a href="#"><i className="bi bi-twitter text-dark mx-1"/></a>
            
            <a href="#"><i className="bi bi-facebook text-dark mx-1"/></a>
            
            <a href="#"><i className="bi bi-linkedin text-dark mx-1"/></a>
            
            <a href="#"><i className="bi bi-instagram text-dark mx-1"/></a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the industry
        </p>

        <div className="row g-4">
          {buildItem("John Doe", "https://randomuser.me/api/portraits/men/2.jpg")}
          
          {buildItem("Maria Hill", "https://randomuser.me/api/portraits/women/2.jpg")}
          
          {buildItem("Alice Wonderland", "https://randomuser.me/api/portraits/women/10.jpg")}
          
          {buildItem("Kutina", "https://randomuser.me/api/portraits/women/15.jpg")}
        </div>
      </div>      
    </section>
  );
}

function buildContactDetailsSection(): React.ReactNode {
  function buildItem(children: React.ReactNode): React.ReactNode {
    return (
      <div className="col-md-3">
        <div className="container">
          {children}
        </div>            
      </div>
    );
  }
  
  return (
    <section className="bg-dark py-5 text-light">
      <div className="container">
        <h1 className="text-center">Contact Info</h1>             
        <div className="row">          
          {buildItem(
            <div>
              <h3>Menu</h3>

              <ul style={{listStyle: "none", padding: 0}}>
                <li>About Us</li>
                
                <li>My Account</li>
                
                <li>Orders History</li>
                
                <li>Advanced Search</li>
              </ul>
            </div>
          )}

          {buildItem(
            <div>
              <h3>Features</h3>

              <ul style={{listStyle: "none", padding: 0}}>
                <li>About Us</li>
                
                <li>My Account</li>
                
                <li>Orders History</li>
                
                <li>Advanced Search</li>
              </ul>
            </div>
          )}

          {buildItem(
            <div>
              <h3>Contact Us</h3>

              <ul style={{listStyle: "none", padding: 0}}>
                <li>About Us</li>
                
                <li>My Account</li>
                
                <li>Orders History</li>
                
                <li>Advanced Search</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


export default SecondPage;