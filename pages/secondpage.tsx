import { NextPage } from "next";
import Head from "next/head";
import image from "next/image";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import AnimatedTitle from "../components/animated_title/animated_title";
import FooterSection from "../components/FooterSection/FooterSection";
import SlideInImage from "../components/slide_in_image/slide_in_image";
import styles from '../styles/secondpage/SecondPage.module.scss';

const SecondPage: NextPage = () => {  
  return (
    <>      
      {buildHead()}          

      {buildNavbar()}

      {buildShowcaseSection()}

      {buildSubscribeToNewsletterSection()}

      {/* {buildFeaturesSection()} */}

      {/* {buildLearnSections()} */}

      {/* {buildQuestionsSection()} */}

      {/* {buildInstructorsSection()} */}

      {buildAdvertiseSection()}

      {buildParagraphSection()}

      <FooterSection />

      {/* {buildContactDetailsSection()} */}
    </>
  );
};

function buildAdvertiseSection(): React.ReactNode {
  function buildItem(iconName: string, heading: string): React.ReactNode {
    return(
      <div className="mt-3 d-inline-flex justify-content-start align-items-center">
        <div className= {`${styles.icon_container} rounded-circle d-flex justify-content-center align-items-center`}>
          <i className={`${styles.icon} bi bi-${iconName}`} />                
        </div>

        <span className="ms-3 fs-4">
          {heading}
        </span>
      </div>
    );
  }

  return(
    <section className={``}>
      <div className={`mx-5 ${styles.advertisement}`}>
        <div className={`d-flex`}>          
          <Image src="/homepage/satisfied-customer.png" layout="fixed" width="800" height="600"/>
          
          <div
            className={`${styles.panel} d-flex flex-column flex-grow-1 justify-content-center text-light px-5`} 
            style={{backgroundColor: "#22577A"}}
          >
            {buildItem("person-check", "Customer-Centric Sales Approach")}
            
            {buildItem("award", "Trusted Professionals")}
            
            {buildItem("hourglass-split", "Significant Time Savings")}
            
            {buildItem("watch", "Always Available")}
          </div>
        </div>
      </div>      
    </section>
  );

}

function buildParagraphSection(): React.ReactNode {
  return (
    <div className={`${styles.section} mx-5 d-flex flex-column align-items-center`}>
      <h1 className="h1 text-primary fw-bold">Stuck somewhere?<br/></h1> 
      <h2 className="fw-bold">Your VA can help you from anywhere.</h2>
      
      <p className="mt-4 w-50 text-center">
        Whether your a doctor, a engineer, or even a CEO, spend your time effectively on the things that actually matter.
        We help you focus on the smart work, while we take care of the hard work.        
      </p>
    </div>
  );
}

function buildHead() {
  return (
    <Head>      
      <title>FrontEnd Bootcamp</title>
    </Head>
  );
}

function buildNavbar(): React.ReactNode {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light fixed-top bg-light`}>
      <div className={`container`}>
        <a href="#" className="navbar-brand link-light">Cool Virtual Assistant</a>

        <button className="navbar-toggler" type="button" data-bs-target="#navmenu" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse fw-bold" id="navmenu">
          <ul className="navbar-nav mx-auto" style={{fontSize: "0.9em"}}>
            <li className={`${styles.nav_item} px-3`}>
              <a href="#learn" className="nav-link">SERVICES</a>
            </li>
            
            <li className={`${styles.nav_item} px-3`}>
              <a href="#instructors" className="nav-link">PRICING</a>
            </li>

            <li className={`${styles.nav_item} px-3`}>
              <a href="#questions" className="nav-link">ABOUT US</a>
            </li>
          </ul>
          
          <a href="#questions" className="btn btn-primary ms-auto fw-bold">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

function buildShowcaseSection(): React.ReactNode {
  return (
    <section id="showcase" className={`position-relative d-flex flex-column vw-100 justify-content-center text-light ${styles.showcase_section}`}>      
      <div className={`${styles.background} bg-dark h-100 w-100`}>
        <Image src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f" layout="fill" />
      </div>

      <div className={`container position-relative text-center details`}>
        <p><span className="">Get yourself a</span>
        <b className="fw-bold" style={{fontSize: "1.4em"}}> Professional</b></p>
        
        <AnimatedTitle />

        <p className="my-3" style={{fontSize: "0.7em"}}>
          Focus on the work that matters        
        </p>

        <span style={{fontSize: "0.5em"}}>Apply for </span>
        <button id="start_enrollment" className="btn btn-primary btn-lg" >
          Free Trial
        </button>
      </div>
    </section>
  );
}

function buildSubscribeToNewsletterSection(): React.ReactNode {
  return (
    <section className="text-light p-5" style={{backgroundColor: "#4CA1A3", margin: "5rem 0 5rem 0"}}>
      <div className="container">
        <div className="d-md-flex justify-content-center align-items-center">
          <h1 id="newsletter_label" className="text-dark mb-3 mb-md-0">&ldquo;You don&quot;t have to do it <b>all by yourself</b>&rdquo;</h1>
        </div>
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

            <Link href="/"><a className="btn btn-primary">Read More</a></Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-5">
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
    var textColor: "light" | "dark" = (backgroundColor == "dark") ? "light" : "dark";
    var transform: string = (imagePosition == "left" ? "-100" : "100");
    
    return (
      <section className={`bg-${backgroundColor} py-5`}>
        <div className="container">
          <div className={`row flex-row${imagePosition == "right" ? "-reverse" : null} align-items-center`}>
            <div className="col-md">
              {/* <img src={imageURL} alt="" className="img-fluid" /> */}
              {/* <Image src={imageURL} width={0} height={0} layout="responsive" alt="" /> */}
              <SlideInImage transform={`translateX(${transform}%)`}>
                <Image width={0} height={0} layout="responsive" src={imageURL} />
              </SlideInImage>
            </div>

            <div className={`col-md mt-5 mt-md-0 col-md text-${textColor}`}>
              <h2>Learn the Fundamentals</h2>

              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ut consequatur! Earum aperiam distinctio tenetur?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed provident molestias aliquam expedita quis sequi sit 
                dolor et temporibus voluptatum deleniti facere debitis, voluptatibus rem atque unde nihil est mollitia.
              </p>

              <a href="#" className={`btn btn-${textColor} text-${backgroundColor} mt-3`}>
                <i className="bi bi-chevron-right" /> Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="learn">
      {buildItem("light", "/fundamentals.svg", "left")}
      
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
    <section id="questions" className="py-5">
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
            {/* <img src={imageURL} className="rounded-circle img-fluid" /> */}
            <Image src={imageURL} width={100} height={100} className="rounded-circle" />

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
        <h2 className="text-center text-white">Reviews From Our Customers</h2>
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

export default SecondPage;